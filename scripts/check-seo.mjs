// Checks the built site (dist/) for the SEO basics: every page has one title, description and
// canonical link that no other page shares, valid structured data and a single h1, and the
// sitemap lists exactly the pages that were written. Runs at the end of `npm run build`; pass
// --warnings to also list overlong titles and descriptions.
import { readFile, readdir, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const dist = fileURLToPath(new URL("../dist/", import.meta.url));
const { SITE_URL } = await import("../dist-ssr/entry-server.js");

const errors = [];
const warnings = [];
const fail = (page, message) => errors.push(`${page}: ${message}`);
const warn = (page, message) => warnings.push(`${page}: ${message}`);

async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(full);
    else if (entry.name.endsWith(".html")) yield full;
  }
}

const decode = (s) => s.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&amp;/g, "&");
const attr = (html, pattern) => {
  const match = html.match(pattern);
  return match ? decode(match[1]) : undefined;
};

const seen = { title: new Map(), description: new Map(), canonical: new Map() };
const indexed = new Set();
const unique = (kind, value, page) => {
  const other = seen[kind].get(value);
  if (other) fail(page, `${kind} duplicates ${other}`);
  else seen[kind].set(value, page);
};

for await (const file of htmlFiles(dist)) {
  const page = "/" + path.relative(dist, file).replace(/index\.html$/, "").replace(/\.html$/, "").replace(/\/$/, "");
  const document = await readFile(file, "utf8");
  // Only the head: a page's own SVG figures may carry <title> elements of their own.
  const head = document.slice(0, document.indexOf("</head>"));
  const html = document;
  const title = attr(html, /<title[^>]*>([^<]*)<\/title>/);
  const description = attr(html, /<meta name="description" content="([^"]*)"/);
  const robots = attr(html, /<meta name="robots" content="([^"]*)"/);
  const canonical = attr(html, /<link rel="canonical" href="([^"]*)"/);
  const noindex = robots?.includes("noindex");

  if (!title) fail(page, "missing <title>");
  if (!description) fail(page, "missing meta description");
  if (!robots) fail(page, "missing robots meta");
  for (const tag of ["title", "meta name=\"description\"", "link rel=\"canonical\""]) {
    const count = head.split(`<${tag}`).length - 1;
    if (count > 1) fail(page, `${count} copies of <${tag}`);
  }
  if (title && title.length > 70) warn(page, `title is ${title.length} characters`);
  if (description && (description.length < 50 || description.length > 180)) warn(page, `description is ${description.length} characters`);

  if (noindex) {
    if (canonical) fail(page, "noindex page has a canonical link");
  } else {
    if (!canonical) fail(page, "missing canonical link");
    else {
      if (!canonical.startsWith(`${SITE_URL}/`) && canonical !== SITE_URL) fail(page, `canonical ${canonical} is outside ${SITE_URL}`);
      unique("canonical", canonical, page);
      indexed.add(canonical);
    }
    if (title) unique("title", title, page);
    if (description) unique("description", description, page);
    if (!html.includes('property="og:url"')) fail(page, "missing og:url");
    const h1 = (html.match(/<h1[\s>]/g) ?? []).length;
    if (h1 !== 1) fail(page, `${h1} <h1> elements, expected 1`);
    const lang = html.includes('<html lang="en"');
    if (!lang) fail(page, "missing <html lang>");
  }
  for (const match of html.matchAll(/<img\b(?![^>]*\balt=)[^>]*>/g)) fail(page, `image without alt: ${match[0].slice(0, 80)}`);

  for (const match of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try {
      const data = JSON.parse(match[1]);
      if (data["@context"] !== "https://schema.org" || !data["@type"]) fail(page, "JSON-LD without @context or @type");
    } catch (error) {
      fail(page, `invalid JSON-LD: ${error.message}`);
    }
  }
}

// The landing page is rendered per request, so it has no file to check above.
indexed.add(`${SITE_URL}/`);

const sitemap = await readFile(path.join(dist, "sitemap.xml"), "utf8");
const listed = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => decode(match[1]));
if (new Set(listed).size !== listed.length) fail("sitemap.xml", "lists a URL twice");
for (const url of listed) if (!indexed.has(url)) fail("sitemap.xml", `${url} has no indexable page`);
for (const url of indexed) if (!listed.includes(url)) fail("sitemap.xml", `${url} is missing`);

const robotsTxt = await readFile(path.join(dist, "robots.txt"), "utf8");
if (!robotsTxt.includes(`Sitemap: ${SITE_URL}/sitemap.xml`)) fail("robots.txt", "does not point at the sitemap");
for (const name of ["llms.txt", "llms-full.txt"]) {
  const text = await readFile(path.join(dist, name), "utf8");
  if (!text.startsWith("# ")) fail(name, "must start with a # title");
  for (const link of text.matchAll(/\]\((https?:\/\/[^)]+)\)/g)) {
    if (!link[1].startsWith(SITE_URL)) continue;
    const url = new URL(link[1]);
    if (url.pathname.endsWith(".txt") || url.pathname.endsWith(".xml")) {
      await stat(path.join(dist, url.pathname)).catch(() => fail(name, `links to missing file ${url.pathname}`));
    } else if (!indexed.has(`${SITE_URL}${url.pathname === "/" ? "/" : url.pathname}`)) fail(name, `links to ${link[1]}, which is not a page`);
  }
}

if (process.argv.includes("--warnings")) for (const message of warnings) console.warn(`warning  ${message}`);
if (errors.length) {
  for (const message of errors) console.error(`error    ${message}`);
  console.error(`check-seo: ${errors.length} problem(s)`);
  process.exit(1);
}
console.log(`check-seo: ${indexed.size} pages, ${listed.length} sitemap URLs, ${warnings.length} length warning(s) (--warnings lists them), no errors`);
