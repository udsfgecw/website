"""Extract captions and six evenly spaced preview frames for review, without changing exports."""
import concurrent.futures
import datetime
import hashlib
import json
import os
from pathlib import Path
import re
import subprocess

export_root = Path(os.environ.get('UDSF_EXPORT_ROOT', '/home/adhil/Downloads/udsf-insta'))
cache = Path(os.environ.get('UDSF_REEL_CACHE', '/tmp/udsf-reels'))
ffmpeg = os.environ.get('UDSF_FFMPEG', 'ffmpeg')
cache.mkdir(parents=True, exist_ok=True)
roots = sorted(export_root.iterdir())
records = {}

def repaired(value):
    try:
        return value.encode('latin1').decode('utf8')
    except (UnicodeEncodeError, UnicodeDecodeError):
        return value

for root in roots:
    metadata = root / 'your_instagram_activity/media/reels.json'
    if not metadata.exists():
        continue
    for entry in json.loads(metadata.read_text()).get('ig_reels_media', []):
        for media in entry.get('media', []):
            uri = media.get('uri', '')
            if not uri.lower().endswith('.mp4'):
                continue
            source = next((directory / uri for directory in [root, *roots] if (directory / uri).is_file()), None)
            ident = 'reel-' + hashlib.sha256(uri.encode()).hexdigest()[:12]
            subtitle_uri = media.get('media_metadata', {}).get('video_metadata', {}).get('subtitles', {}).get('uri')
            subtitle = next((directory / subtitle_uri for directory in [root, *roots] if subtitle_uri and (directory / subtitle_uri).is_file()), None)
            records[ident] = dict(id=ident, uri=uri, source=str(source) if source else None,
                caption=repaired(media.get('title', '')),
                date=datetime.datetime.fromtimestamp(media.get('creation_timestamp', 0), datetime.timezone.utc).date().isoformat(),
                subtitles=repaired(subtitle.read_text(errors='replace')) if subtitle else '')

def prepare(record):
    if not record['source']:
        return {**record, 'error': 'Missing export media'}
    folder = cache / record['id']
    folder.mkdir(exist_ok=True)
    saved = folder / 'metadata.json'
    if saved.exists():
        return json.loads(saved.read_text())
    probe = subprocess.run([ffmpeg, '-hide_banner', '-i', record['source']], capture_output=True, text=True)
    match = re.search(r'Duration: (\d+):(\d+):(\d+\.\d+)', probe.stderr)
    if not match:
        return {**record, 'error': 'Unable to read video duration'}
    h, m, s = map(float, match.groups())
    duration = h * 3600 + m * 60 + s
    frames = []
    for index, fraction in enumerate([0.05, 0.2, 0.4, 0.6, 0.8, 0.95]):
        frame = folder / f'frame-{index}.jpg'
        result = subprocess.run([ffmpeg, '-v', 'error', '-y', '-threads', '1', '-ss', str(duration * fraction), '-i', record['source'], '-frames:v', '1', '-vf', 'scale=512:512:force_original_aspect_ratio=decrease', '-q:v', '4', str(frame)], capture_output=True)
        if result.returncode == 0 and frame.exists():
            frames.append(str(frame))
    record = {**record, 'duration': duration, 'bytes': Path(record['source']).stat().st_size, 'frames': frames}
    if len(frames) < 4:
        record['error'] = 'Insufficient readable preview frames'
    saved.write_text(json.dumps(record, ensure_ascii=False, indent=2))
    return record

with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
    results = []
    for record in pool.map(prepare, records.values()):
        results.append(record)
        if len(results) % 20 == 0:
            print(f'Prepared {len(results)}/{len(records)} reels', flush=True)
(cache / 'inventory.json').write_text(json.dumps(results, ensure_ascii=False, indent=2))
print(f'Prepared {len(results)} unique reels; {sum(bool(r.get("error")) for r in results)} unreadable/missing; {sum(r.get("bytes",0) for r in results)/1024/1024:.1f} MB', flush=True)
