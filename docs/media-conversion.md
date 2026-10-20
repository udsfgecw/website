# WebP and WebM media

All published static images use WebP, including images in the study notes. Former SVG diagrams are rasterized at twice their original resolution; their original layout sizes are retained in `src/data/media-dimensions.ts`. PNG and SVG notes images use lossless encoding to keep labels and fine lines readable. JPEG photos use quality 85. Existing WebP files are retained as-is. Inline interactive SVG diagrams remain React-rendered UI rather than static media files.

Videos use VP9 (CRF 38) and Opus inside WebM, with the seek index moved before media clusters. Subtitle files remain WebVTT. Gallery and inline video players declare `video/webm`.

Original files are preserved outside the project at `~/Downloads/udsf-media-originals-2026-10-20`; conversion reports in `data/media-conversion-images.json` and `data/media-conversion-videos.json` record hashes, paths and sizes.

Conversion workflow:

1. Provide `sharp` via `UDSF_IMAGE_RUNTIME` (default `/tmp/udsf-media-converter`) and ffmpeg via `UDSF_FFMPEG`.
2. Run `node scripts/convert-media-images.mjs` and `python3 scripts/convert-media-videos.py`. Both resume completed conversions. Set `UDSF_MEDIA_BACKUP` to choose the original-file backup folder.
3. After both finish, run `node scripts/finalize-media-conversion.mjs`. It verifies every output and backup, updates source references, retires the old public copies, and writes `data/cloudflare-media-manifest.json`.
4. Run `node scripts/check-media-assets.mjs` and, with the dev server running, `node scripts/check-event-reels.mjs http://localhost:5174`.

The Cloudflare manifest contains each media file's object key, local path, content type, size and SHA-256 hash. No upload has been configured or performed. Cloudflare credentials, bucket choice, URLs and upload instructions will be supplied separately.

If a notes generator recreates an SVG or PNG, rerun the conversion workflow before using the regenerated media on the site.
