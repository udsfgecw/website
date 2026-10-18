// Writes every page listed in src/entry-server.tsx as static HTML after the client and SSR builds,
// so crawlers and link previews get each page's full content, title and description.
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";

const dist = new URL("../dist/", import.meta.url);
const { pages, render } = await import("../dist-ssr/entry-server.js");
const template = await readFile(new URL("index.html", dist), "utf8");
const manifest = JSON.parse(await readFile(new URL(".vite/manifest.json", dist), "utf8"));

const marker = '<div id="root"></div>';
if (!template.includes(marker)) throw new Error(`prerender: ${marker} not found in dist/index.html`);

const escape = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function setMeta(html, { title, description }) {
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${escape(title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${escape(description)}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${escape(title)}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${escape(description)}`);
}

// Stylesheets and JS chunks a lazily loaded page needs, following its imports. The entry itself
// is already in the template.
function assetTags(source) {
  const css = new Set();
  const js = new Set();
  const visit = (key) => {
    const chunk = manifest[key];
    if (!chunk || chunk.isEntry || js.has(chunk.file)) return;
    js.add(chunk.file);
    chunk.css?.forEach((file) => css.add(file));
    chunk.imports?.forEach(visit);
  };
  visit(source);
  if (!js.size) throw new Error(`prerender: ${source} not found in the build manifest`);
  return [
    ...[...css].map((file) => `<link rel="stylesheet" crossorigin href="/${file}">`),
    ...[...js].map((file) => `<link rel="modulepreload" crossorigin href="/${file}">`),
  ].join("\n    ");
}

for (const page of pages) {
  const { html: app, meta } = await render(page.url);
  let html = template.replace(marker, `<div id="root">${app}</div>`);
  if (meta) html = setMeta(html, meta);
  if (page.chunk) html = html.replace("</head>", `  ${assetTags(page.chunk)}\n  </head>`);
  const file = new URL(page.file, dist);
  await mkdir(new URL(".", file), { recursive: true });
  await writeFile(file, html);
}

await rm(new URL("../dist-ssr", import.meta.url), { recursive: true, force: true });
console.log(`prerender: wrote ${pages.length} pages`);
