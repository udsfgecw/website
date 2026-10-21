#!/usr/bin/env python3
"""Review embedded note images against their alt text and nearby module context.

Usage:
  GEMINI_API_KEY=... python scripts/review-module-images.py
  python scripts/review-module-images.py --dry-run

Results are checkpointed to data/image-agent/module-image-review.json after
each image, so interrupted reviews can resume without reprocessing completed
images. This script reports suspected mismatches; it never edits note content.
"""

from __future__ import annotations

import argparse
import json
import mimetypes
import os
import re
import sys
import urllib.error
import urllib.parse
import urllib.request
import time
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
NOTES_ROOT = ROOT / "src" / "features" / "notes"
DEFAULT_REPORT = ROOT / "data" / "image-agent" / "module-image-review.json"
DEFAULT_ENV_FILE = Path("/home/adhil/projects/notebook-agent/.env")
IMAGE_RE = re.compile(r"!\[([^\]]*)\]\((<[^>]+>|[^\s)]+)(?:\s+[^)]*)?\)")
MAX_IMAGE_BYTES = 20 * 1024 * 1024

SYSTEM_PROMPT = """You are a careful educational-image correctness reviewer. Compare the provided image with the supplied alt text and nearby note context. Determine whether the image visibly depicts what the text claims, including important labels, orientation, and steps when applicable. Do not assume correctness from the filename. If the image is too small, ambiguous, or inaccessible in content, say so and lower confidence. Return only JSON with these fields: {\"status\":\"correct|suspect|unclear\",\"confidence\":0-1,\"observed\":\"concise description of what is visible\",\"issues\":[\"specific issue, if any\"]}. Mark suspect only for a concrete mismatch or a materially misleading/missing key element; stylistic differences alone are not errors."""


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--notes-dir", type=Path, default=NOTES_ROOT)
    parser.add_argument("--module-prefix", help="only scan module directories with this prefix, e.g. python-module-")
    parser.add_argument("--report", type=Path, default=DEFAULT_REPORT)
    parser.add_argument("--model", default="gemini-3.5-flash-lite")
    parser.add_argument("--env-file", type=Path, default=DEFAULT_ENV_FILE, help="existing Vertex/Gemini environment file")
    parser.add_argument("--dry-run", action="store_true", help="list image references without calling Gemini")
    parser.add_argument("--limit", type=int, help="maximum number of new images to review")
    parser.add_argument("--retry-errors", action="store_true", help="retry entries that previously errored")
    parser.add_argument("--batch-size", type=int, default=3, help="images per Gemini request (default: 3; use 1 for individual calls)")
    parser.add_argument("--delay", type=float, default=0.5, help="seconds between Gemini requests (default: 0.5)")
    return parser.parse_args()


def image_references(notes_dir: Path, module_prefix: str | None = None) -> list[dict[str, Any]]:
    refs: list[dict[str, Any]] = []
    for note_path in sorted(notes_dir.rglob("notes.md")):
        if module_prefix and not note_path.parent.name.startswith(module_prefix):
            continue
        text = note_path.read_text(encoding="utf-8")
        for match in IMAGE_RE.finditer(text):
            alt = match.group(1).strip()
            raw_url = match.group(2).strip().strip("<>")
            if raw_url.startswith(("data:", "javascript:")):
                continue
            line = text.count("\n", 0, match.start()) + 1
            nearby = re.sub(r"!\[[^\]]*\]\([^)]*\)", " ", text[max(0, match.start() - 500):match.end() + 500])
            nearby = re.sub(r"[`*_>#]", " ", nearby)
            nearby = " ".join(nearby.split())[:900]
            refs.append({
                "module": note_path.parent.name,
                "notes": note_path.relative_to(ROOT).as_posix() if note_path.is_relative_to(ROOT) else str(note_path),
                "line": line,
                "alt": alt,
                "url": urllib.parse.unquote(raw_url),
                "context": nearby,
            })
    return refs


def load_report(path: Path) -> dict[str, Any]:
    if not path.exists():
        return {"model": None, "results": []}
    try:
        payload = json.loads(path.read_text(encoding="utf-8"))
        if not isinstance(payload, dict) or not isinstance(payload.get("results"), list):
            raise ValueError("expected a JSON object with a results array")
        return payload
    except (OSError, json.JSONDecodeError, ValueError) as exc:
        raise RuntimeError(f"Cannot read report {path}: {exc}") from exc


def load_env_file(path: Path) -> None:
    if not path.is_file():
        return
    for raw_line in path.read_text(encoding="utf-8").splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        key = key.strip()
        value = value.strip().strip("\"'")
        if key and key not in os.environ:
            os.environ[key] = value


def result_key(ref: dict[str, Any]) -> tuple[str, int, str]:
    return (ref["notes"], ref["line"], ref["url"])


def fetch_image(url: str) -> tuple[bytes, str]:
    parsed = urllib.parse.urlparse(url)
    if parsed.scheme in ("http", "https"):
        request = urllib.request.Request(url, headers={"User-Agent": "udsfgecw-module-image-review/1.0"})
        with urllib.request.urlopen(request, timeout=40) as response:
            mime = response.headers.get_content_type()
            data = response.read(MAX_IMAGE_BYTES + 1)
    else:
        local_url = Path(urllib.parse.unquote(url))
        # Site-relative public assets such as /assets/notes/... live in public/.
        local = ROOT / "public" / str(local_url).lstrip("/") if local_url.is_absolute() else ROOT / local_url
        data = local.read_bytes()
        mime = mimetypes.guess_type(local.name)[0] or "application/octet-stream"
    if len(data) > MAX_IMAGE_BYTES:
        raise ValueError(f"image exceeds {MAX_IMAGE_BYTES // (1024 * 1024)} MiB limit")
    if not mime.startswith("image/"):
        raise ValueError(f"unsupported content type: {mime}")
    return data, mime


def gemini_client() -> Any:
    try:
        from google import genai
        from google.genai import types
    except ImportError as exc:
        raise RuntimeError("Install the Gemini SDK with: python3 -m pip install google-genai") from exc
    project = os.getenv("GOOGLE_CLOUD_PROJECT")
    if project and os.getenv("GOOGLE_GENAI_USE_VERTEXAI", "true").lower() != "false":
        client = genai.Client(
            vertexai=True,
            project=project,
            location=os.getenv("GOOGLE_CLOUD_LOCATION", "global"),
            http_options=types.HttpOptions(timeout=120000),
        )
    else:
        api_key = os.getenv("GEMINI_API_KEY")
        if not api_key:
            raise RuntimeError("Gemini credentials are missing. Set GEMINI_API_KEY or configure Vertex AI in --env-file.")
        client = genai.Client(api_key=api_key, http_options=types.HttpOptions(timeout=120000))
    return client, types


def gemini_review(client: Any, types: Any, model: str, ref: dict[str, Any], image: bytes, mime: str) -> dict[str, Any]:
    prompt = (
        f"Module: {ref['module']}\nAlt text: {ref['alt'] or '(empty)'}\n"
        f"Nearby note text: {ref['context'] or '(none)'}\n"
        "Review whether the image is a correct and useful representation of the stated content."
    )
    response = client.models.generate_content(
        model=model,
        contents=[prompt, types.Part.from_bytes(data=image, mime_type=mime)],
        config=types.GenerateContentConfig(
            system_instruction=SYSTEM_PROMPT,
            response_mime_type="application/json",
            temperature=0,
        ),
    )
    review = json.loads(response.text)
    if review.get("status") not in {"correct", "suspect", "unclear"}:
        raise ValueError(f"unexpected review status: {review.get('status')!r}")
    return review


def gemini_review_batch(client: Any, types: Any, model: str, entries: list[tuple[dict[str, Any], bytes, str]]) -> list[dict[str, Any]]:
    parts: list[Any] = []
    for index, (ref, image, mime) in enumerate(entries, 1):
        parts.append(f"Image {index} of {len(entries)}. Module: {ref['module']}. Alt text: {ref['alt'] or '(empty)'}. "
                     f"Nearby note text: {ref['context'] or '(none)'}. Review the image immediately after this text.")
        parts.append(types.Part.from_bytes(data=image, mime_type=mime))
    response = client.models.generate_content(
        model=model,
        contents=parts,
        config=types.GenerateContentConfig(
            system_instruction=(SYSTEM_PROMPT + " For multiple labeled images, return JSON as "
                "{\"reviews\":[{\"index\":1,\"status\":\"correct|suspect|unclear\",\"confidence\":0-1,"
                "\"observed\":\"...\",\"issues\":[\"...\"]}]}. Include one review per image, indexed in order."),
            response_mime_type="application/json",
            temperature=0,
        ),
    )
    payload = json.loads(response.text)
    reviews = payload.get("reviews")
    if not isinstance(reviews, list) or len(reviews) != len(entries):
        raise ValueError("Gemini returned an incomplete batch review")
    ordered = sorted(reviews, key=lambda review: review.get("index", 0))
    if [review.get("index") for review in ordered] != list(range(1, len(entries) + 1)):
        raise ValueError("Gemini returned invalid image indexes")
    for review in ordered:
        if review.get("status") not in {"correct", "suspect", "unclear"}:
            raise ValueError(f"unexpected review status: {review.get('status')!r}")
        review.pop("index", None)
    return ordered


def save_report(path: Path, report: dict[str, Any]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    temp = path.with_suffix(path.suffix + ".tmp")
    temp.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    temp.replace(path)


def main() -> int:
    args = parse_args()
    refs = image_references(args.notes_dir, args.module_prefix)
    if args.dry_run:
        print(f"Found {len(refs)} image references in {args.notes_dir}")
        for ref in refs:
            print(f"{ref['notes']}:{ref['line']} [{ref['module']}] {ref['alt'] or '(no alt text)'} -> {ref['url']}")
        return 0

    load_env_file(args.env_file)
    try:
        client, types = gemini_client()
    except RuntimeError as exc:
        print(str(exc), file=sys.stderr)
        return 2

    report = load_report(args.report)
    previous = {result_key(item): item for item in report["results"] if all(k in item for k in ("notes", "line", "url"))}
    todo = []
    for ref in refs:
        old = previous.get(result_key(ref))
        if old is None or (args.retry_errors and old.get("status") == "error"):
            todo.append(ref)
    if args.limit is not None:
        todo = todo[:max(0, args.limit)]

    report["model"] = args.model
    report["source"] = str(args.notes_dir.relative_to(ROOT)) if args.notes_dir.is_relative_to(ROOT) else str(args.notes_dir)
    if args.module_prefix:
        report["modulePrefix"] = args.module_prefix
    print(f"Found {len(refs)} images; reviewing {len(todo)} new images with {args.model}.")
    batch_size = max(1, min(args.batch_size, 5))
    for start in range(0, len(todo), batch_size):
        batch = todo[start:start + batch_size]
        ready: list[tuple[dict[str, Any], bytes, str]] = []
        batch_results: dict[tuple[str, int, str], dict[str, Any]] = {}
        for ref in batch:
            result = {**ref, "model": args.model}
            try:
                image, mime = fetch_image(ref["url"])
                ready.append((ref, image, mime))
            except Exception as exc:
                result.update(status="error", error=str(exc)[:1000])
                batch_results[result_key(ref)] = result
        if ready:
            try:
                reviews = gemini_review_batch(client, types, args.model, ready) if len(ready) > 1 else [
                    gemini_review(client, types, args.model, ready[0][0], ready[0][1], ready[0][2])
                ]
                for (ref, _image, _mime), review in zip(ready, reviews):
                    batch_results[result_key(ref)] = {**ref, "model": args.model, "status": review["status"], "review": review}
            except Exception as exc:
                # A malformed group response should not discard visual checks; retry individually.
                for ref, image, mime in ready:
                    result = {**ref, "model": args.model}
                    try:
                        result["review"] = gemini_review(client, types, args.model, ref, image, mime)
                        result["status"] = result["review"]["status"]
                    except Exception as single_exc:
                        result.update(status="error", error=str(single_exc)[:1000])
                    batch_results[result_key(ref)] = result
        for offset, ref in enumerate(batch):
            result = batch_results[result_key(ref)]
            previous[result_key(ref)] = result
            report["results"] = sorted(previous.values(), key=lambda item: (item.get("notes", ""), item.get("line", 0)))
            save_report(args.report, report)
            index = start + offset + 1
            print(f"[{index}/{len(todo)}] {result['status']}: {ref['notes']}:{ref['line']} — {ref['alt'][:100]}", flush=True)
        if start + len(batch) < len(todo) and args.delay > 0:
            time.sleep(args.delay)

    counts = {key: sum(1 for item in previous.values() if item.get("status") == key) for key in ("correct", "suspect", "unclear", "error")}
    print(f"Saved {len(previous)} results to {args.report}")
    print("Summary: " + ", ".join(f"{key}={value}" for key, value in counts.items()))
    return 1 if counts["error"] else 0


if __name__ == "__main__":
    raise SystemExit(main())
