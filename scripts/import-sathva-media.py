"""Convert the Sathva College Union Meta export for the events archive.

Usage: python3 scripts/import-sathva-media.py /path/to/instagram-sathva_collegeunion-export
All referenced post, story and reel files are converted to WebP/WebM. The output stays
under public/sathva-media and Cloudflare upload details are written to the media manifest.
"""
import concurrent.futures
import datetime as dt
import hashlib
import json
import os
from pathlib import Path
import re
import subprocess
import sys
import tempfile
import threading
from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parent.parent
EXPORT = Path(sys.argv[1]).expanduser().resolve() if len(sys.argv) > 1 else Path.home() / 'Downloads/instagram-sathva_collegeunion-2026-10-20-uYMgpVtw'
HTML = EXPORT / 'your_instagram_activity/media'
MEDIA = EXPORT / 'media'
OUT = ROOT / 'public/sathva-media'
BASE = 'https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev'
FFMPEG = os.environ.get('UDSF_FFMPEG', '/tmp/udsf-media-tools/imageio_ffmpeg/binaries/ffmpeg-linux-x86_64-v7.0.2')
MANIFEST_PATH = ROOT / 'data/cloudflare-media-manifest.json'
MANIFEST = json.loads(MANIFEST_PATH.read_text())
manifest_by_key = {item['key']: item for item in MANIFEST['files']}
lock = threading.Lock()

if not HTML.is_dir() or not MEDIA.is_dir():
    raise SystemExit(f'Expected both {HTML} and {MEDIA}')

MONTHS = {name.lower(): i for i, name in enumerate(['January','February','March','April','May','June','July','August','September','October','November','December'], 1)}
DATE_RE = re.compile(r'\b(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s+(\d{1,2}),\s*(\d{4})\s+(\d{1,2}):(\d{2})\s*(am|pm)\b', re.I)

def card_date(box, file_ref):
    match = DATE_RE.search(box.get_text(' ', strip=True))
    if match:
        month = mon = next(i for name, i in MONTHS.items() if name.startswith(match.group(1).lower()[:3]))
        hour = int(match.group(4)) % 12 + (12 if match.group(6).lower() == 'pm' else 0)
        return f'{int(match.group(3)):04d}-{mon:02d}-{int(match.group(2)):02d}', (hour, int(match.group(5)))
    m = re.search(r'(20\d{2})(\d{2})', file_ref)
    return (f'{m.group(1)}-{m.group(2)}-01' if m else '2026-01-01'), (0, 0)

def media_refs(box):
    return [a['href'].replace('media/', '', 1) for a in box.select('a[href^="media/"]') if a['href'].lower().endswith(('.jpg','.jpeg','.webp','.heic','.mp4','.srt'))]

def content_text(box):
    h = box.select_one('h2')
    return h.get_text('\n', strip=True) if h else ''

def make_key(section, original, suffix):
    rel = Path(original)
    return f'sathva-media/{section}/{rel.parent.as_posix()}/{rel.stem}.{suffix}'

sources = {}
def add_source(section, original, suffix):
    key = make_key(section, original, suffix)
    sources[key] = (MEDIA / original, suffix)
    return f'{BASE}/{key}'

def convert_one(item):
    key, (source, suffix) = item
    target = ROOT / 'public' / key
    target.parent.mkdir(parents=True, exist_ok=True)
    if not source.is_file():
        raise FileNotFoundError(source)
    if target.exists() and target.stat().st_size:
        return key, target
    tmp = target.with_name(target.stem + '.tmp.' + ('webp' if suffix == 'poster' else suffix))
    if suffix == 'webp':
        args = [FFMPEG, '-v','error','-y','-threads','1','-i',str(source),'-frames:v','1','-vf','scale=1600:1600:force_original_aspect_ratio=decrease','-c:v','libwebp','-quality','85',str(tmp)]
    elif suffix == 'poster':
        args = [FFMPEG,'-v','error','-y','-ss','1','-i',str(source),'-frames:v','1','-vf','scale=900:900:force_original_aspect_ratio=decrease','-c:v','libwebp','-quality','82',str(tmp)]
    elif suffix == 'webm':
        args = [FFMPEG,'-v','error','-y','-threads','1','-i',str(source),'-map','0:v:0','-map','0:a:0?','-c:v','libvpx-vp9','-crf','38','-b:v','0','-deadline','realtime','-cpu-used','8','-row-mt','1','-threads','2','-pix_fmt','yuv420p','-c:a','libopus','-b:a','64k','-cues_to_front','1',str(tmp)]
    else:
        text = source.read_text(errors='replace').lstrip('\ufeff').replace('\r\n','\n')
        text = re.sub(r'(\d{2}:\d{2}:\d{2}),(\d{3})',r'\1.\2',text)
        tmp.write_text(text if text.startswith('WEBVTT') else 'WEBVTT\n\n'+text)
        tmp.replace(target)
        return key, target
    subprocess.run(args, check=True)
    tmp.replace(target)
    return key, target

records = []
# Posts: keep carousel images grouped under one card; preserve all of their image assets.
for box in BeautifulSoup((HTML/'posts_1.html').read_text(errors='replace'),'html.parser').select('div._a6-g'):
    refs = media_refs(box)
    if not refs: continue
    date, _ = card_date(box, refs[0])
    caption = content_text(box).strip()
    title = next((line.strip(' *_\t') for line in caption.splitlines() if line.strip()), '') or f'College union post · {date}'
    post_id = 'sathva-post-' + Path(refs[0]).stem
    post = {'id':post_id,'title':title[:180],'caption':caption,'date':date,'category':'events_programs'}
    images=[]; video=None
    for ref in refs:
        ext=Path(ref).suffix.lower()
        if ext in ('.jpg','.jpeg','.webp','.heic'):
            images.append(add_source('posts',ref,'webp'))
        elif ext=='.mp4':
            video=add_source('posts',ref,'webm')
            poster_key=make_key('posts',ref,'webp')
            sources[poster_key]=(MEDIA/ref,'poster')
            images.append(f'{BASE}/{poster_key}')
    if images: post['image']=images[0]
    if len(images)>1: post['images']=images
    if video: post['video']=video
    records.append(post)

# Stories: the archive has one record for each attached story photo or clip.
for box in BeautifulSoup((HTML/'stories.html').read_text(errors='replace'),'html.parser').select('div._a6-g'):
    refs=media_refs(box)
    if not refs: continue
    ref=refs[0]; date,_=card_date(box,ref)
    ext=Path(ref).suffix.lower(); ident='sathva-story-'+Path(ref).stem
    caption=content_text(box).strip()
    if caption.lower().startswith('click for video:'): caption=''
    post={'id':ident,'title':(caption.splitlines()[0].strip() if caption else f'Story · {date}')[:180],
          'caption':caption,'date':date,'category':'events_programs'}
    if ext in ('.jpg','.jpeg','.webp','.heic'):
        post['image']=add_source('stories',ref,'webp')
    elif ext=='.mp4':
        post['video']=add_source('stories',ref,'webm')
        poster_key=make_key('stories',ref,'webp');sources[poster_key]=(MEDIA/ref,'poster')
        post['image']=f'{BASE}/{poster_key}'
    else: continue
    records.append(post)

# Reels: captions, video, subtitle files and generated WebP covers stay together.
for box in BeautifulSoup((HTML/'reels.html').read_text(errors='replace'),'html.parser').select('div._a6-g'):
    refs=media_refs(box)
    videos=[ref for ref in refs if Path(ref).suffix.lower()=='.mp4']
    if not videos: continue
    ref=videos[0]; date,_=card_date(box,ref); caption=content_text(box).strip()
    title=next((line.strip(' *_\t') for line in caption.splitlines() if line.strip()),'College union reel')
    ident='sathva-reel-'+Path(ref).stem
    post={'id':ident,'title':title[:180],'caption':caption,'date':date,'category':'events_programs',
          'video':add_source('reels',ref,'webm')}
    poster_key=make_key('reels',ref,'webp');sources[poster_key]=(MEDIA/ref,'poster')
    post['image']=f'{BASE}/{poster_key}'
    subs=[x for x in refs if Path(x).suffix.lower()=='.srt']
    if subs: post['subtitles']=add_source('reels',subs[0],'vtt')
    records.append(post)

# Convert in small batches; the originals remain untouched in the downloaded export.
work=[(key,val) for key,val in sources.items() if val[1] != 'poster-done']
def run(item):
    key,(source,suffix)=item
    return convert_one(item)
with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:
    for done,(key,target) in enumerate(pool.map(run,work),1):
        if done%20==0 or done==len(work): print(f'Converted {done}/{len(work)} export assets',flush=True)

# Add the generated assets to the existing Cloudflare upload manifest.
for key in sources:
    target=ROOT/'public'/key
    data=target.read_bytes()
    content_type='image/webp' if key.endswith('.webp') else 'video/webm' if key.endswith('.webm') else 'text/vtt'
    manifest_by_key[key]={'key':key,'localPath':target.relative_to(ROOT).as_posix(),'contentType':content_type,
                          'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest()}
MANIFEST['files']=sorted(manifest_by_key.values(),key=lambda x:x['key'])
MANIFEST['summary']={'images':sum(x['contentType']=='image/webp' for x in MANIFEST['files']),
                     'videos':sum(x['contentType']=='video/webm' for x in MANIFEST['files']),
                     'subtitles':sum(x['contentType']=='text/vtt' for x in MANIFEST['files'])}
MANIFEST_PATH.write_text(json.dumps(MANIFEST,indent=2)+'\n')

out='import type { Activity } from "./activities";\n\n// Imported from the Sathva College Union Meta export. Media keys are listed in data/cloudflare-media-manifest.json.\nexport const SATHVA_MEDIA: readonly Activity[] = '+json.dumps(records,ensure_ascii=False,indent=2)+';\n'
(ROOT/'src/data/sathva-media.ts').write_text(out)
print(f'Generated {len(records)} media entries from {len(sources)} WebP/WebM/VTT files.',flush=True)
