"""Extract the performance section of the approved union-inauguration reel for the homepage."""
import os
from pathlib import Path
import subprocess

root = Path(__file__).resolve().parent.parent
ffmpeg = os.environ.get('UDSF_FFMPEG', 'ffmpeg')
source = root / 'public/event-reels/reel-38608865affb.mp4'
video = root / 'public/event-stories/show-union-inauguration-2026.mp4'
poster = root / 'public/event-stories/show-union-inauguration-2026.webp'
# The final part of the original reel shows the night-time stage performance.
subprocess.run([ffmpeg, '-v', 'error', '-y', '-ss', '26', '-i', str(source), '-t', '18.37', '-map', '0:v:0', '-map', '0:a:0?', '-c:v', 'libx264', '-preset', 'fast', '-crf', '25', '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '80k', '-movflags', '+faststart', str(video)], check=True)
subprocess.run([ffmpeg, '-v', 'error', '-y', '-ss', '42', '-i', str(source), '-frames:v', '1', '-c:v', 'libwebp', '-quality', '82', str(poster)], check=True)
