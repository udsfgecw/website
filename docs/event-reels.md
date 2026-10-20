# Event reels

Pro show and live performance reels lead the Events & Programs gallery, newest first within that selection. Their IDs are maintained in `src/data/event-priority.ts`.

Reels share the existing Events & Programs collection and randomized landing-page preview. Cards load WebP poster images only; selecting a reel opens the native video player with sound, seeking and available exported subtitle tracks. Videos unmount when the viewer closes or moves to another post.

The curation workflow is resumable:

1. `UDSF_FFMPEG=/path/to/ffmpeg python3 scripts/prepare-reels.py` reads and deduplicates both Meta exports, repairs caption encoding and extracts six preview frames per reel into `/tmp/udsf-reels`. Set `UDSF_EXPORT_ROOT` to change the source directory.
2. `node scripts/review-reels.mjs` reviews captions, available exported subtitles and frames using Gemini 3.5 Flash Lite through the existing notebook-agent Vertex AI configuration. Decisions and reasons are saved in `data/curation/reel-review.json`.
3. `UDSF_FFMPEG=/path/to/ffmpeg node scripts/verify-event-reels.mjs` checks shortlisted/uncertain videos over their full duration with original audio and video sampled at one frame per second. Results go to `data/curation/reel-verification.json`. Persistent source-review corrections are recorded in `data/curation/reel-verification-overrides.json`. Election retrospectives can reuse real event footage, so they must be rejected in this pass as well.
4. `UDSF_FFMPEG=/path/to/ffmpeg python3 scripts/publish-event-reels.py` publishes only high-confidence verified events. It creates VP9/Opus WebM videos with seek indexes, WebP posters and available WebVTT captions under `public/event-reels`, then generates `src/data/event-reels.ts`.
5. With the local server running, `node scripts/check-event-reels.mjs http://localhost:5174` checks publication eligibility, asset integrity, video seeking and subtitle format.

Election campaigns, candidate promotions, condolences and unrelated videos are excluded. Infrastructure/progress reels are not added to the events collection. The gallery uses the export's posting date; it does not infer an event date from it. Review decisions are based on the export and are not independent verification of its claims.

`UDSF_AI_RUNTIME` can point at another notebook-agent installation. No credentials or raw exported videos are copied into the curation reports.
