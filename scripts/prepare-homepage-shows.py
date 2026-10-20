"""Extract the performance section of the approved union-inauguration reel for the homepage."""
import os
from pathlib import Path
import subprocess

root = Path(__file__).resolve().parent.parent
ffmpeg = os.environ.get('UDSF_FFMPEG', 'ffmpeg')
source = root / 'public/event-reels/reel-38608865affb.webm'
video = root / 'public/event-stories/show-union-inauguration-2026.webm'
poster = root / 'public/event-stories/show-union-inauguration-2026.webp'
# The final part of the original reel shows the night-time stage performance.
subprocess.run([ffmpeg, '-v', 'error', '-y', '-ss', '26', '-i', str(source), '-t', '18.37', '-map', '0:v:0', '-map', '0:a:0?', '-c:v', 'libvpx-vp9', '-crf', '38', '-b:v', '0', '-deadline', 'good', '-cpu-used', '6', '-row-mt', '1', '-pix_fmt', 'yuv420p', '-c:a', 'libopus', '-b:a', '64k', '-cues_to_front', '1', str(video)], check=True)
subprocess.run([ffmpeg, '-v', 'error', '-y', '-ss', '42', '-i', str(source), '-frames:v', '1', '-c:v', 'libwebp', '-quality', '82', str(poster)], check=True)
