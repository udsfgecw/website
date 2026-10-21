# KTU 2024 syllabus processing

This workflow compares KTU 2024 first-year syllabus sources with the study notes in this repository. It covers the five current catalogue departments and retains the source syllabus's own `S1`, `S1/S2`, and `S1/S2` ambiguity instead of assigning a local semester without evidence.

## Stages

1. `prepare-corpus.mjs` copies the three group syllabi, curriculum, all 39 current note Markdown modules, and all image references into the ignored `data/syllabus/processing/input/` folder. It writes `s1-subject-verification.json` and `syllabus-corpus.json` for traceable review. Image links that no longer exist are recorded in `image-manifest.json`; they do not stop the course audit.
2. `gemini-topic-audit.mjs` uses a Google ADK `LlmAgent` with the configured Vertex AI Gemini model. It audits each distinct group/course code, preserves every official module boundary, and identifies missing, partial, misfiled, and uncertain topics. It saves progress after each course so the run can resume.
3. `render-report.py` combines the department subject verification, image-availability snapshot, and every per-module Gemini result into `docs/ktu-2024-syllabus-coverage-audit.md`. The JSON remains the complete machine-readable audit.
4. Apply syllabus-grounded changes as small, reviewable additions, moves, or reader corrections. The report distinguishes its pre-change Gemini baseline from post-audit refinements; rerun corpus preparation and the audit after changes when a fresh coverage snapshot is needed. Do not replace entire note modules from an unreviewed model response.

## Run

```sh
node scripts/syllabus-processing/prepare-corpus.mjs
node scripts/syllabus-processing/gemini-topic-audit.mjs
python3 scripts/syllabus-processing/render-report.py
```

The Gemini runner reads Vertex AI project/location/model settings from `/home/adhil/projects/notebook-agent/.env` when present, otherwise from the process environment. Credentials are never copied into this repository. Processing inputs and downloaded figure files are excluded from Git; the verification map and topic report are intended to be reviewable outputs.
