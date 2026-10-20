"""Convert all published videos to VP9/Opus WebM, preserving originals outside the project."""
import concurrent.futures
import hashlib
import json
import os
from pathlib import Path
import shutil
import subprocess
import threading

root = Path(__file__).resolve().parent.parent
backup = Path(os.environ.get('UDSF_MEDIA_BACKUP', Path.home() / 'Downloads/udsf-media-originals-2026-10-20'))
ffmpeg = os.environ.get('UDSF_FFMPEG', 'ffmpeg')
report_path = root / 'data/media-conversion-videos.json'
report = json.loads(report_path.read_text()) if report_path.exists() else dict(backup=str(backup), files={})
lock = threading.Lock()
profile = 'vp9-crf38-speed6-opus64'

def digest(p):
    with p.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()

def convert(source):
    original = source.relative_to(root / 'public').as_posix()
    key = str(Path(original).with_suffix('.webm'))
    target = root / 'public' / key
    sha256 = digest(source)
    if report['files'].get(original, {}).get('sourceSha256') == sha256 and report['files'][original].get('encodingProfile') == profile and target.exists():
        return
    if target.exists() and original not in report['files']:
        raise RuntimeError(f'Unexpected existing WebM: {key}')
    saved = backup / original
    saved.parent.mkdir(parents=True, exist_ok=True)
    if saved.exists() and digest(saved) != sha256:
        raise RuntimeError(f'Original backup differs: {original}')
    if not saved.exists():
        shutil.copy2(source, saved)
    temporary = target.with_suffix('.tmp.webm')
    subprocess.run([ffmpeg, '-v', 'error', '-y', '-threads', '1', '-i', str(source), '-map', '0:v:0', '-map', '0:a:0?', '-c:v', 'libvpx-vp9', '-crf', '38', '-b:v', '0', '-deadline', 'good', '-cpu-used', '6', '-row-mt', '1', '-threads', '2', '-pix_fmt', 'yuv420p', '-c:a', 'libopus', '-b:a', '64k', '-cues_to_front', '1', str(temporary)], check=True)
    probe = subprocess.run([ffmpeg, '-hide_banner', '-i', str(temporary)], capture_output=True, text=True)
    if 'Video: vp9' not in probe.stderr or ('Audio:' in probe.stderr and 'Audio: opus' not in probe.stderr) or temporary.stat().st_size == 0:
        raise RuntimeError(f'Invalid WebM: {key}')
    temporary.replace(target)
    with lock:
        report['files'][original] = dict(key=key, sourceSha256=sha256, sourceBytes=source.stat().st_size, bytes=target.stat().st_size, videoCodec='vp9', audioCodec='opus' if 'Audio:' in probe.stderr else None, encodingProfile=profile)
        report_path.write_text(json.dumps(report, indent=2) + '\n')
        print(f'WebM: {sum(x.get("encodingProfile") == profile for x in report["files"].values())}/58 {source.name}', flush=True)

sources = sorted(p for p in (root / 'public').rglob('*') if p.suffix.lower() in ['.mp4', '.mov', '.m4v'])
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
    list(pool.map(convert, sources))
print(f'Converted {len(report["files"])} videos; originals preserved at {backup}', flush=True)
