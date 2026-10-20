# Formatting Chemistry Modules 3 and 4

The standalone Node.js runner applies the same presentation used in Modules 1 and 2: standalone bold terms, definition paragraphs, concise topic headings, clear classifications and spacing. It uses exactly `gemini-3.8-flash` through the existing notebook-agent Vertex connection. It does not require an active Codex conversation once started.

## Run

From `/home/adhil/projects/udsfgecw`, using Node.js 22.18 or newer (the current environment has Node 24):

```bash
node scripts/format-chemistry-notes.mjs --apply --build
```

This processes Module 3, then Module 4. Each module is installed only after **all** its sections pass validation. The final production build runs after both modules finish. No commit, push or deployment is performed. The script only changes the selected modules' `notes.md` files; a build failure leaves validated notes available for review.

To generate reviewable output without installing it, omit `--apply --build`. To process one module, use `--modules 3` or `--modules 4`.

For an unattended run that survives the terminal closing:

```bash
nohup node scripts/format-chemistry-notes.mjs --apply --build > /tmp/chemistry-formatting-runner.log 2>&1 < /dev/null &
```

Watch progress:

```bash
tail -f /home/adhil/projects/notebook-agent/work/chemistry-modules-3-4-formatting/run.log
```

The final log event is `RUN_COMPLETE` or `RUN_FAILED`; the process exits nonzero on failure. `BUILD_PASSED` confirms the production build. Build output is in `build.log` beside `run.log`. The launcher log above also captures errors that occur before the main log initializes.

## Rate limits and recovery

- Sequential requests, spaced at **4 RPM** by default, including retries. Adjust with `--rpm 2` for a slower run. This is a local cap, not a claim about the account's quota; other clients share server capacity.
- HTTP 429, transient 5xx responses and network timeouts receive exponential backoff with jitter. `Retry-After` seconds/dates and Google `RetryInfo.retryDelay` are respected as minimum waits, even if longer than the usual three-minute backoff cap. This follows [Google's 429 retry guidance](https://cloud.google.com/vertex-ai/generative-ai/docs/error-code-429).
- Each section has 12 total attempts by default (`--attempts 12`). Invalid JSON or failed content checks get corrective feedback, with at most four content failures per run. Persistent daily quota exhaustion, billing problems and access failures cannot be fixed by waiting a few seconds; authorization/configuration errors stop immediately. No model fallback occurs.
- Each API call has a three-minute timeout. SDK retries are disabled so the script controls pacing and logs every attempt. Heartbeats appear during long requests/waits.
- Every validated section is checkpointed atomically. **Rerun the identical command to resume**, skipping valid cached sections. Interrupted Ctrl+C/SIGTERM runs preserve completed work. A run lock prevents overlapping invocations using the same state directory and recovers locks from dead processes on the same host. A rare interruption during lock cleanup can leave `lock-cleanup.guard`; inspect that file and confirm no runner is active before removing it.
- The default state folder contains immutable source snapshots, protected inputs, raw API attempts, validated responses, per-module summaries, formatted output, `failures.json`, human-readable `run.log` and structured `events.jsonl`. These stay outside the website repository.
- Cached output is revalidated against the source, model and formatter version before reuse. If source notes have changed, the runner refuses to overwrite them. Start with a new `--state-dir /absolute/new/path` to work from a fresh baseline. Keep the same state directory to resume an existing run.

The runner loads the installed SDK and `.env` from `/home/adhil/projects/notebook-agent` (override with `--agent-dir PATH`). It uses the existing Google application credentials. It does not print environment values, tokens or credentials. No additional packages or proxy service are needed here.

## Content checks

The script protects math, images, molecular-viewer code, links, warning blocks, whole worked examples, self-check questions and numerical practice sections before sending prose to the model. It checks exact placeholder sequence, original equation types/values/order, image references, code/HTML, navigation links, problem-card counts and practice-solution math. KaTeX must render every equation. Prose-length and word-retention checks reject extensive summarization or rewriting. These checks guard preservation; they do not replace human review of educational prose.

Source snapshots remain available for comparison. If another editor changes a module during API requests, generated output is saved but the current module is not overwritten. Run only one instance per checkout even if choosing different state directories.

## Offline verification

```bash
node --test scripts/format-chemistry-notes.test.mjs
node scripts/format-chemistry-notes.mjs --dry-run
```

The dry run checks all 28 current source sections without API calls or file writes. Automated tests cover protected-content round trips, damaged-token rejection, quota retry hints, retry budgets, invalid JSON recovery, permanent authorization errors, atomic checkpoints, live/stale locks and concurrent-edit refusal.
