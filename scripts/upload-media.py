#!/usr/bin/env python3
"""Upload media from data/cloudflare-media-manifest.json to the R2 bucket "media" with wrangler.

Only keys under --prefix are uploaded, several at a time. Needs `npx wrangler login` first.

    python3 scripts/upload-media.py --prefix notes/cse/s1/graphics/
"""
import argparse, json, subprocess, sys
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
WRANGLER = ["npx", "--yes", "wrangler@4.151.3"]


def upload(entry):
    result = subprocess.run(
        WRANGLER + ["r2", "object", "put", f"media/{entry['key']}", "--file", str(ROOT / entry["localPath"]),
                    "--content-type", entry["contentType"], "--remote"],
        cwd=ROOT, capture_output=True, text=True)
    return entry["key"], result.returncode, (result.stderr or result.stdout).strip().splitlines()[-1:]


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--prefix", required=True)
    parser.add_argument("--jobs", type=int, default=6)
    args = parser.parse_args()
    manifest = json.loads((ROOT / "data" / "cloudflare-media-manifest.json").read_text())
    entries = [e for e in manifest["files"] if e["key"].startswith(args.prefix)]
    print(f"Uploading {len(entries)} files under {args.prefix}")
    failed = []
    with ThreadPoolExecutor(args.jobs) as pool:
        for done, (key, code, message) in enumerate(pool.map(upload, entries), 1):
            if code:
                failed.append(key)
                print(f"FAILED {key}: {' '.join(message)}", file=sys.stderr)
            if done % 25 == 0 or done == len(entries):
                print(f"{done}/{len(entries)}")
    if failed:
        sys.exit(f"{len(failed)} uploads failed; rerun to retry.")


if __name__ == "__main__":
    main()
