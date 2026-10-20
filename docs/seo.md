# SEO and language-model files

**Canonical origin:** `https://udsfgecw.in`, set in `src/config.ts` (`SITE_URL`). Override it for a build with the `VITE_SITE_URL` environment variable, for example when previewing on another domain.

## Per-page tags

Every page calls `usePageMeta` (`src/lib/meta.tsx`) with a title and description, and optionally structured data. `src/lib/seo.ts` turns that into the canonical link, robots meta, Open Graph and Twitter tags and JSON-LD.

- At build time `applyHead` writes them into each page's static HTML, replacing the `<!--seo:start-->` block in `index.html`. The landing page does the same per request.
- In the browser `syncHead` swaps the `[data-seo]` tags on every navigation.
- The canonical path defaults to the current route. Reader pages set it to the module's base path so `/module-1/12` and `#page-12` count as the module itself.
- `noindex: true` (404 and the GATE redirect) drops the canonical, `og:url` and structured data and sends `noindex, follow`.

JSON-LD builders: `organizationLd` and `websiteLd` (home page), `collectionPageLd`, `breadcrumbLd`, `studyNotesLd` (a `LearningResource` for each notes module).

## Generated files

`scripts/prerender.mjs` writes these into `dist/` from `src/lib/site-files.ts`:

| File | Source |
| --- | --- |
| `sitemap.xml` | every page in `pages` in `src/entry-server.tsx`, except `/404` |
| `robots.txt` | allows all crawlers, names the AI crawlers explicitly, blocks `/api/`, points at the sitemap |
| `llms.txt` | short guide to the site for language models ([llmstxt.org](https://llmstxt.org)) |
| `llms-full.txt` | the above plus what the union stands for, achievements, programs and every notes topic |

A new notes subject or module appears in all four once it is in `NOTES_CATALOGUE` (`src/data/notes.ts`) and in `pages` / `NOTES_MODULES` in `src/entry-server.tsx`.

## Checking

`npm run build` ends with `scripts/check-seo.mjs`, which fails the build if a page lacks a title, description, canonical link or single `<h1>`, if any of them are shared between pages, if JSON-LD does not parse, if an `<img>` has no `alt`, or if the sitemap and llms files disagree with the pages written. Run `npm run check:seo -- --warnings` to also list titles over 70 characters and descriptions outside 50-180.
