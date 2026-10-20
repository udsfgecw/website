// Writes every page listed in src/entry-server.tsx as static HTML after the client and SSR builds,
// so crawlers and link previews get each page's full content, title, description and structured data.
// It also writes sitemap.xml, robots.txt, llms.txt and llms-full.txt.
import { mkdir, readFile, writeFile } from "node:fs/promises";

const dist = new URL("../dist/", import.meta.url);
const { pages, render, applyHead, siteFiles } = await import("../dist-ssr/entry-server.js");
const template = await readFile(new URL("index.html", dist), "utf8");
const manifest = JSON.parse(await readFile(new URL(".vite/manifest.json", dist), "utf8"));

const marker = '<div id="root"></div>';
if (!template.includes(marker)) throw new Error(`prerender: ${marker} not found in dist/index.html`);

// Stylesheets and JS chunks a lazily loaded page needs, following its imports. The entry itself
// is already in the template.
function assetTags(sources) {
  const css = new Set();
  const js = new Set();
  const visit = (key) => {
    const chunk = manifest[key];
    if (!chunk || chunk.isEntry || js.has(chunk.file)) return;
    js.add(chunk.file);
    chunk.css?.forEach((file) => css.add(file));
    chunk.imports?.forEach(visit);
  };
  for (const source of sources) {
    if (!manifest[source]) throw new Error(`prerender: ${source} not found in the build manifest`);
    visit(source);
  }
  return [
    ...[...css].map((file) => `<link rel="stylesheet" crossorigin href="/${file}">`),
    ...[...js].map((file) => `<link rel="modulepreload" crossorigin href="/${file}">`),
  ].join("\n    ");
}

// The landing page is rendered per request; keep its compiled template in the server bundle.
await writeFile(new URL("../dist-ssr/template.html", import.meta.url), template);
for (const page of pages.filter((page) => page.url !== "/")) {
  const { html: app, meta } = await render(page.url);
  // Notes contain literal "$" sequences (maths and code). A replacement string
  // interprets $$, $&, $` and $' and silently changes that content, making React
  // discard the pre-rendered page and render the whole module again on opening.
  let html = template.replace(marker, () => `<div id="root">${app}</div>`);
  if (meta) html = applyHead(html, meta);
  if (page.chunk) {
    const sources = [page.chunk];
    // ImportedModulePage loads notes dynamically. Preload just this route's
    // module as well, avoiding an extra request round trip on a direct visit.
    const module = /^\/notes\/(?:cse|ece|eee)\/s1\/(chemistry|electrical|python)\/module-(\d+)$/.exec(page.url);
    if (module) sources.push(`src/features/notes/${module[1]}-module-${module[2]}/index.ts`);
    html = html.replace("</head>", `  ${assetTags(sources)}\n  </head>`);
  }
  const file = new URL(page.file, dist);
  await mkdir(new URL(".", file), { recursive: true });
  await writeFile(file, html);
}

for (const [name, content] of Object.entries(siteFiles())) await writeFile(new URL(name, dist), content);

// Avoid a static index taking precedence over the landing-page function.
await import("node:fs/promises").then(({ rm }) => rm(new URL("index.html", dist)));
console.log(`prerender: wrote ${pages.length - 1} static pages; landing page uses request-time SSR`);
