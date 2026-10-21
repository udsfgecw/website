#!/usr/bin/env python3
"""Turn module PDFs into site notes with notebook-agent (Gemini on Vertex AI), resumably.

For every module, in parallel:
  1. create a notebook in ../notebook-agent and run its phases: transcribe -> refine -> images
     (billable Vertex calls; the models below are the ones earlier GXEST104 runs used),
  2. import the finished notebook: images become WebP under public/notes/cse/s1/<subject>/module-N/
     (served from R2, listed in the media manifest and src/data/imported-figure-dimensions.ts),
     links point at R2, and each source page becomes a "<!-- page N | Title -->" site page in
     src/features/notes/<subject>-module-N/notes.md (index.ts and path.ts are created if missing).

Notebook IDs are kept in data/curation/notes-import-<subject>.json, so rerunning the same command
resumes: finished phases are skipped and failed or interrupted ones are retried. The agent server
is started for the run if it is not already up.

    python3 scripts/notes-from-pdf.py --subject electrical \\
        --source "Transcribed with notebook-agent from T.G. Sanish Kumar's GXEST104 lecture notes (GEC Thrissur), via KTUNOTES.LIVE." \\
        --module 1="$HOME/Downloads/electrical/GXEST104 M1 - BASICS OF ELECTRONICS-KTUNOTES.LIVE_144dpi_75%.pdf" \\
        --module 2="$HOME/Downloads/electrical/GXEST104 M2 - BASICS OF ELECTRONICS-KTUNOTES.LIVE_144dpi_75%.pdf" \\
        --module 3="$HOME/Downloads/electrical/GXEST104 M3 - BASICS OF ELECTRONICS-KTUNOTES.LIVE_144dpi_75%.pdf" \\
        --module 4="$HOME/Downloads/electrical/GXEST104 M4 - BASICS OF ELECTRONICS-KTUNOTES.LIVE_144dpi_75%.pdf"

Add --import-only to skip the agent phases, --no-images to import after refinement (figures stay
as text descriptions), and --upload to push the new images to R2 afterwards (needs `npx wrangler login`).
New modules still have to be listed in src/data/notes.ts; the script prints what to add.
"""
import argparse, hashlib, io, json, mimetypes, os, re, subprocess, sys, threading, time, urllib.error, urllib.request, uuid
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
AGENT_DIR = ROOT.parent / "notebook-agent"
AGENT = "http://127.0.0.1:4010"
MEDIA_BASE = "https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev"
MODELS = {"textModel": "gemini-3.5-flash-lite", "refineModel": "gemini-3.8-flash", "imageModel": "gemini-3.1-flash-image", "concurrency": "3"}
# status -> phase to start next; in-progress statuses are waited on
NEXT = {"uploaded": "extract", "extraction_failed": "extract", "extracted": "refine", "refine_failed": "refine",
        "refined": "images", "image_failed": "images", "verification_failed": None, "completed": None}
WORKING = {"extracting", "refining", "generating", "verifying"}
POLL, ATTEMPTS, QUOTA_ATTEMPTS = 20, 4, 40
# Transcription runs for every notebook at once. Refinement and image generation share a tight Vertex
# quota and one 429 fails the whole phase (finished pages are kept), so they run one notebook at a
# time, two pages at a time, and quota failures back off without counting as real failures.
SLOW_PHASES, SLOW_CONCURRENCY, BACKOFF, BACKOFF_MAX = {"refine", "images"}, 2, 60, 600
slow_gate = threading.Semaphore(1)
lock = threading.Lock()


def log(module, message):
    with lock:
        print(f"[module {module}] {message}", flush=True)


def api(method, path, body=None, headers=None, raw=False):
    request = urllib.request.Request(AGENT + path, data=body, method=method, headers=headers or {})
    with urllib.request.urlopen(request, timeout=120) as response:
        data = response.read()
    return data if raw else json.loads(data or b"null")


def agent_up():
    try:
        api("GET", "/api/models")
        return True
    except (urllib.error.URLError, ConnectionError):
        return False


def start_agent(jobs):
    """Start notebook-agent for this run if it is not running; returns the process or None."""
    if agent_up():
        return None
    log_file = open(ROOT / "data" / "curation" / "notebook-agent.log", "a")
    process = subprocess.Popen(["npx", "tsx", "src/index.ts"], cwd=AGENT_DIR, stdout=log_file, stderr=subprocess.STDOUT,
                               env={**os.environ, "MAX_ACTIVE_JOBS": str(max(2, jobs))}, start_new_session=True)
    for _ in range(60):
        if agent_up():
            return process
        time.sleep(2)
    process.terminate()
    sys.exit("notebook-agent did not start; see data/curation/notebook-agent.log")


def create_notebook(pdf, title):
    boundary = uuid.uuid4().hex
    parts = [(name, None, value.encode()) for name, value in {**MODELS, "title": title}.items()]
    parts.append(("files", pdf.name, pdf.read_bytes()))
    body = b""
    for name, filename, value in parts:
        disposition = f'form-data; name="{name}"' + (f'; filename="{filename}"' if filename else "")
        kind = "Content-Type: application/pdf\r\n" if filename else ""
        body += f"--{boundary}\r\nContent-Disposition: {disposition}\r\n{kind}\r\n".encode() + value + b"\r\n"
    body += f"--{boundary}--\r\n".encode()
    return api("POST", "/api/notebooks", body, {"Content-Type": f"multipart/form-data; boundary={boundary}"})["id"]


def post(notebook, action, body=None):
    """POST an action; False when the agent is busy (409: capacity reached, already processing)."""
    try:
        data = json.dumps(body).encode() if body is not None else None
        api("PATCH" if action == "models" else "POST", f"/api/notebooks/{notebook}/{action}", data,
            {"Content-Type": "application/json"} if data else None)
        return True
    except urllib.error.HTTPError as error:
        if error.code == 409:
            return False
        raise


def quota_failure(notebook):
    entries = api("GET", f"/api/notebooks/{notebook}/activity")  # newest first
    latest = entries[0] if isinstance(entries, list) and entries else {}
    return "Resource exhausted" in str(latest.get("message", "")) or "429" in str(latest.get("message", ""))


def run_phases(module, notebook, images):
    """Drive one notebook through its phases until it is done (or refined, without images)."""
    state = {"holding": False}
    try:
        return drive(module, notebook, images, state)
    finally:
        if state["holding"]:
            slow_gate.release()


def drive(module, notebook, images, state):
    attempts = {}
    while True:
        job = api("GET", f"/api/notebooks/{notebook}")
        status, running = job["status"], job.get("running")
        done = sum(1 for page in job.get("pages", []) if page.get("markdown") is not None)
        if state["holding"] and status not in WORKING:
            slow_gate.release()  # the slow phase ended (finished or failed): let another notebook in
            state["holding"] = False
        if status == "completed" or (status == "refined" and not images):
            log(module, f"{status}: {done} pages")
            return True
        if status in WORKING or (status == "paused" and running):
            if not running:  # interrupted, e.g. by a server restart
                post(notebook, "resume")
            time.sleep(POLL)
            continue
        if status == "paused":
            if not post(notebook, "resume"):
                time.sleep(POLL)
            continue
        phase = NEXT.get(status)
        if phase is None:
            log(module, f"stopped at {status}; open {AGENT}/notebook/{notebook} to check it")
            return False
        quota = status.endswith("_failed") and quota_failure(notebook)
        key = f"{phase}-quota" if quota else phase
        attempts[key] = attempts.get(key, 0) + 1
        limit = QUOTA_ATTEMPTS if quota else ATTEMPTS
        if attempts[key] > limit:
            log(module, f"{phase} failed {limit} times; open {AGENT}/notebook/{notebook} to check it")
            return False
        if status.endswith("_failed"):
            wait = min(BACKOFF * 2 ** min(attempts[key] - 1, 4), BACKOFF_MAX)
            log(module, f"{status}{' (quota)' if quota else ''}; retrying {phase} in {wait}s")
            time.sleep(wait)
        if phase in SLOW_PHASES:
            slow_gate.acquire()
            state["holding"] = True
            for _ in range(10):  # the agent refuses model changes for a moment after a phase ends
                if post(notebook, "models", {"concurrency": SLOW_CONCURRENCY}):
                    break
                time.sleep(3)
        log(module, f"{status} -> {phase} (attempt {attempts[key]}, {done}/{len(job.get('pages', []))} pages)")
        if not post(notebook, phase):  # capacity reached or still finishing: not a failure, look again
            attempts[key] -= 1
            if state["holding"]:
                slow_gate.release()
                state["holding"] = False
        time.sleep(POLL)


def page_title(body, number):
    heading = re.search(r"^#{1,4}\s+(.+)$", body, re.M)
    title = re.sub(r"[*_`$\\]|<!--|-->|\|", "", heading.group(1)).strip() if heading else ""
    return title or f"Page {number}"


def import_module(subject, module, notebook, source_note):
    """Write the notebook into the site as <subject>-module-N, with its images as WebP."""
    markdown = api("GET", f"/api/notebooks/{notebook}/download/notebook.md", raw=True).decode()
    folder = f"notes/cse/s1/{subject}/module-{module}/assets"
    out_dir = ROOT / "public" / folder
    out_dir.mkdir(parents=True, exist_ok=True)
    dimensions, manifest = {}, []

    def image(match):
        alt, asset = match.group(1), match.group(2)
        name = Path(asset).stem + ".webp"
        picture = Image.open(io.BytesIO(api("GET", f"/api/notebooks/{notebook}/{asset}", raw=True)))
        picture = picture.convert("RGBA" if picture.mode in ("RGBA", "LA", "P") else "RGB")
        if max(picture.size) > 1600:
            picture.thumbnail((1600, 1600))
        path = out_dir / name
        picture.save(path, "WEBP", quality=85, method=6)
        data = path.read_bytes()
        key = f"{folder}/{name}"
        dimensions[f"/{key}"] = {"width": picture.width, "height": picture.height}
        manifest.append({"key": key, "localPath": str(path.relative_to(ROOT)), "contentType": "image/webp",
                         "bytes": len(data), "sha256": hashlib.sha256(data).hexdigest()})
        return f"![{alt}]({MEDIA_BASE}/{key})"

    markdown = re.sub(r"!\[([^\]]*)\]\((assets/[^)\s]+)\)", image, markdown)
    pages = re.split(r"<!-- Source: [^>]*?; page \d+ -->", markdown)[1:]
    site = "\n\n".join(f"<!-- page {i} | {page_title(body, i)} -->\n\n{body.strip().removesuffix('---').strip()}"
                       for i, body in enumerate(pages, 1)) + "\n"

    slug = f"{subject}-module-{module}"
    module_dir = ROOT / "src" / "features" / "notes" / slug
    module_dir.mkdir(parents=True, exist_ok=True)
    (module_dir / "notes.md").write_text(site)
    constant = f"{subject.upper().replace('-', '_')}_MODULE_{module}_PATH"
    if not (module_dir / "path.ts").exists():
        (module_dir / "path.ts").write_text(f'export const {constant} = "/notes/cse/s1/{subject}/module-{module}";\n')
    index = module_dir / "index.ts"
    if index.exists():
        text = index.read_text()
        index.write_text(re.sub(r'source: "[^"]*"', 'source: ' + json.dumps(source_note), text))
    else:
        name = re.sub(r"[^a-z0-9]", "", slug)
        index.write_text(f'''import type {{ NotesModule }} from "../types";
import source from "./notes.md?raw";
import {{ titledPages }} from "../titledPages";
import {{ {constant} }} from "./path";
const {{ pages, chapters }} = titledPages(source);
export const {name}: NotesModule = {{
  basePath: {constant},
  storageKey: "udsf:notes:cse:s1:{subject}-{module}:v1",
  title: "S1 CSE {subject.title()} · Module {module}",
  trail: [
    {{ label: "NOTES", href: "/notes" }},
    {{ label: "CSE", href: "/notes/cse" }},
    {{ label: "S1", href: "/notes/cse/s1" }},
    {{ label: "{subject.upper()}", href: "/notes/cse/s1/{subject}" }},
    {{ label: "MODULE {module}" }},
  ],
  module: "Module {module}", course: "", code: "", summary: "Module {module}",
  source: {json.dumps(source_note)}, pages, chapters,
}};
''')
        log(module, f"new module: register {name} ({constant}) in src/data/notes.ts and fill course/code in {index.relative_to(ROOT)}")
    log(module, f"imported {len(pages)} pages and {len(manifest)} images into {module_dir.relative_to(ROOT)}")
    return dimensions, manifest


def save_media(dimensions, files):
    dims_path = ROOT / "src" / "data" / "imported-figure-dimensions.ts"
    current = {}
    if dims_path.exists():
        current = json.loads(re.search(r"= (\{.*\});", dims_path.read_text(), re.S).group(1))
    current.update(dimensions)
    dims_path.write_text("// Generated by scripts/notes-from-pdf.py.\n"
                         "export const IMPORTED_FIGURE_DIMENSIONS: Record<string, { width: number; height: number }> = "
                         + json.dumps(current, indent=2) + ";\n")
    manifest_path = ROOT / "data" / "cloudflare-media-manifest.json"
    manifest = json.loads(manifest_path.read_text())
    keys = {f["key"] for f in files}
    manifest["files"] = [f for f in manifest["files"] if f["key"] not in keys] + files
    manifest_path.write_text(json.dumps(manifest, indent=2) + "\n")


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--subject", required=True, help="site subject folder, e.g. electrical")
    parser.add_argument("--module", action="append", required=True, metavar="N=PDF")
    parser.add_argument("--source", required=True, help="provenance line shown with the notes")
    parser.add_argument("--import-only", action="store_true")
    parser.add_argument("--no-images", action="store_true")
    parser.add_argument("--upload", action="store_true")
    args = parser.parse_args()

    modules = {}
    for item in args.module:
        number, _, pdf = item.partition("=")
        modules[int(number)] = Path(pdf).expanduser()
        if not modules[int(number)].is_file():
            sys.exit(f"missing PDF: {pdf}")
    state_path = ROOT / "data" / "curation" / f"notes-import-{args.subject}.json"
    state = json.loads(state_path.read_text()) if state_path.exists() else {}

    server = start_agent(len(modules))
    try:
        def work(number):
            key = str(number)
            if key not in state:
                if args.import_only:
                    raise SystemExit(f"module {number} has no notebook yet; run without --import-only")
                title = f"S1 CSE {args.subject.title()} — Module {number} ({modules[number].stem})"[:200]
                with lock:
                    state[key] = create_notebook(modules[number], title)
                    state_path.write_text(json.dumps(state, indent=2) + "\n")
                log(number, f"notebook {state[key]}")
            if not args.import_only and not run_phases(number, state[key], not args.no_images):
                return None
            return import_module(args.subject, number, state[key], args.source)

        with ThreadPoolExecutor(len(modules)) as pool:
            results = list(pool.map(work, sorted(modules)))
    finally:
        if server:
            os.killpg(server.pid, 15)  # npx and the node server it started

    dimensions, files = {}, []
    for result in results:
        if result:
            dimensions.update(result[0])
            files += result[1]
    save_media(dimensions, files)
    failed = [n for n, r in zip(sorted(modules), results) if not r]
    if failed:
        sys.exit(f"modules {failed} are not finished; rerun the same command to resume")
    if args.upload:
        subprocess.run([sys.executable, str(ROOT / "scripts" / "upload-media.py"), "--prefix", f"notes/cse/s1/{args.subject}/"], check=True)


if __name__ == "__main__":
    main()
