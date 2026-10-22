#!/usr/bin/env python3
"""Builds one redrawn figure from its schemdraw code.

    build-schemdraw-figure.py WORKDIR NAME

Reads WORKDIR/out/NAME.py, runs it through scripts/run-schemdraw.py, and writes NAME.svg,
NAME.png (preview, 1000px wide) and NAME.webp (final, white background) beside it.
"""
import subprocess, sys
from pathlib import Path
import cairosvg
from PIL import Image

work, name = Path(sys.argv[1]), sys.argv[2]
code, svg = work / "out" / f"{name}.py", work / "out" / f"{name}.svg"
runner = Path(__file__).with_name("run-schemdraw.py")
result = subprocess.run([sys.executable, "-I", str(runner), str(code), str(svg)], capture_output=True, text=True, timeout=60)
if result.returncode:
    sys.exit("CODE ERROR: " + result.stderr.strip().splitlines()[-1])
png = work / "out" / f"{name}.png"
cairosvg.svg2png(url=str(svg), write_to=str(png), output_width=1000, background_color="white")
Image.open(png).convert("RGB").save(work / "out" / f"{name}.webp", quality=92)
print(f"OK {png}")
