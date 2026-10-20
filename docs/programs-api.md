# Events and programs API and landing-page SSR

- `GET /api/programs` returns `{ programs: [...] }`: 17 random entries from the combined event catalogue. Each entry occurs once. Responses use `Cache-Control: no-store`.
- The landing page renders on every request using the same feed generator. Its HTML includes the selected cards and an escaped JSON snapshot, so React hydrates the same order without reshuffling it.
- Navigating back to the landing page fetches a new selection. If the endpoint is unavailable, a local shuffle supplies the preview.
- `/events` uses one collection with a year filter. Known linked photo posts appear once rather than repeating as season and archive entries.

Development and production preview both provide the endpoint and landing-page SSR through the Vite middleware in `vite.config.ts`. Vercel uses `api/programs.mjs` and `api/landing.mjs`. The build retains `dist-ssr` and its compiled template for those functions, and removes the static root index so the root rewrite reaches the server function. Other pages keep their static HTML output.

Run `npm run build`, then `node scripts/check-program-ssr.mjs` to check the compiled endpoints, request-time HTML, hydration snapshot and merged events page. A static-only file host cannot serve the landing page; use the configured Vercel functions or `npm run preview`.
