# Formatting Physics Modules 1–4

The Node.js runner formats the physics notes page by page using the existing Vertex AI connection in `notebook-agent`. It processes Modules 1–4 sequentially and defaults to four requests per minute.

## Run

From the repository root, with Node.js 22.18 or newer:

```bash
node scripts/format-physics-notes.mjs --apply --build
```

Each module is installed only after every page passes validation. The production build runs after all four modules finish. The runner does not commit, push or deploy. Omit `--apply --build` to generate review files without changing notes; select modules with `--modules 1,2` or an individual number.

## Progress and recovery

Progress and structured events are written to:

```text
/home/adhil/projects/notebook-agent/work/physics-modules-1-4-formatting/run.log
```

The state directory stores immutable source snapshots, request inputs, raw responses, validated page checkpoints, completed module output, summaries and `build.log`. Rerun the same command to resume from valid checkpoints. Use a new `--state-dir /absolute/path` to begin from a fresh source snapshot. A lock prevents simultaneous runs.

Requests are paced sequentially. Transient quota and server failures use exponential backoff with jitter and honor server retry delays; invalid output gets bounded corrective retries. The selected model is fixed to `gemini-3.8-flash`, with no fallback. Persistent quota, billing or access errors stop the run; rerunning after access or quota is restored resumes completed pages.

## Preservation checks

The runner protects equations, images, links, code, HTML, worked examples, numerical problems and question sections. It requires the original headings to remain unchanged and in order, renders every equation with KaTeX, compares the page content inventories, and checks that prose was not substantially removed or added. Each page is checkpointed only after it passes these checks. Human review of the final educational prose is still needed.
