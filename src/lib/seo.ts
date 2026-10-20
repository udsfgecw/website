import { INSTAGRAM, SITE_DESCRIPTION, SITE_LOGO, SITE_NAME, SITE_URL, absoluteUrl } from "@/config";

export type JsonLd = Record<string, unknown>;

export interface PageMeta {
  title: string;
  description: string;
  /** Canonical path. usePageMeta fills in the current route when a page leaves it out. */
  path?: string;
  /** Keep the page out of search results (pages that are not real content). */
  noindex?: boolean;
  /** Open Graph type; "article" for study notes. */
  type?: "website" | "article";
  /** Structured data for the page, in addition to the site-wide WebSite and Organization on the home page. */
  jsonLd?: JsonLd[];
}

export interface HeadTag {
  tag: "meta" | "link" | "script";
  attrs: Record<string, string>;
  text?: string;
}

export type Crumb = { name: string; path: string };

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const LOGO_ALT = "UDSF GECW logo";

const ldRef = (id: string) => ({ "@id": id });

/** Who the site belongs to. Appears on the home page so every other page can point at it. */
export const organizationLd = (): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: absoluteUrl("/"),
  logo: { "@type": "ImageObject", url: SITE_LOGO, caption: LOGO_ALT },
  image: SITE_LOGO,
  sameAs: [INSTAGRAM],
  location: {
    "@type": "Place",
    name: "Government Engineering College Wayanad",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mananthavady",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
  },
  member: [
    { "@type": "Organization", name: "Kerala Students Union", alternateName: "KSU" },
    { "@type": "Organization", name: "Muslim Students Federation", alternateName: "MSF" },
  ],
});

export const websiteLd = (): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: SITE_NAME,
  url: absoluteUrl("/"),
  description: SITE_DESCRIPTION,
  inLanguage: "en",
  publisher: ldRef(ORGANIZATION_ID),
});

/** Home > ... > current page; the last crumb is the page itself. */
export const breadcrumbLd = (crumbs: Crumb[]): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((crumb, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: crumb.name,
    item: absoluteUrl(crumb.path),
  })),
});

/** A page that lists other things (events, progress, notes). */
export const collectionPageLd = (name: string, description: string, path: string): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name,
  description,
  url: absoluteUrl(path),
  inLanguage: "en",
  isPartOf: ldRef(WEBSITE_ID),
  publisher: ldRef(ORGANIZATION_ID),
});

/** One module of study notes. */
export const studyNotesLd = (opts: { name: string; description: string; path: string; course: string; code: string }): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "LearningResource",
  name: opts.name,
  description: opts.description,
  url: absoluteUrl(opts.path),
  inLanguage: "en",
  learningResourceType: "Study notes",
  educationalLevel: "Undergraduate",
  isAccessibleForFree: true,
  about: { "@type": "Course", name: opts.course, courseCode: opts.code },
  isPartOf: ldRef(WEBSITE_ID),
  publisher: ldRef(ORGANIZATION_ID),
});

/** Breadcrumbs for a page under /notes, from the labels the page shows in its own breadcrumb. */
export const notesCrumbs = (trail: { label: string; href?: string }[], currentPath: string): Crumb[] => {
  const title = (label: string) => (label === label.toUpperCase() ? label.charAt(0) + label.slice(1).toLowerCase() : label);
  // "CSE" and "S1" read better in capitals; everything else in the trail is a word or phrase.
  const name = (label: string) => (/^(?:[A-Z]{2,4}|S\d)$/.test(label) ? label : title(label));
  return [
    { name: "Home", path: "/" },
    ...trail.map((step) => ({ name: name(step.label), path: step.href ?? currentPath })),
  ];
};

/** Path without query, hash or trailing slash, as used in canonical links and the sitemap. */
export const normalizePath = (path: string) => {
  const clean = path.split(/[?#]/)[0].replace(/\/+$/, "");
  return clean === "" ? "/" : clean;
};

const jsonLdText = (data: JsonLd) => JSON.stringify(data).replace(/</g, "\\u003c");

/** Every tag a page adds to <head> besides <title>, in the order they are written. */
export function headTags(meta: PageMeta): HeadTag[] {
  const path = meta.path ? normalizePath(meta.path) : undefined;
  const url = path && !meta.noindex ? absoluteUrl(path) : undefined;
  const tags: HeadTag[] = [
    { tag: "meta", attrs: { name: "description", content: meta.description } },
    {
      tag: "meta",
      attrs: {
        name: "robots",
        content: meta.noindex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
    },
  ];
  if (url) tags.push({ tag: "link", attrs: { rel: "canonical", href: url } });
  tags.push(
    { tag: "meta", attrs: { property: "og:site_name", content: SITE_NAME } },
    { tag: "meta", attrs: { property: "og:locale", content: "en_IN" } },
    { tag: "meta", attrs: { property: "og:type", content: meta.type ?? "website" } },
    { tag: "meta", attrs: { property: "og:title", content: meta.title } },
    { tag: "meta", attrs: { property: "og:description", content: meta.description } },
  );
  if (url) tags.push({ tag: "meta", attrs: { property: "og:url", content: url } });
  tags.push(
    { tag: "meta", attrs: { property: "og:image", content: SITE_LOGO } },
    { tag: "meta", attrs: { property: "og:image:alt", content: LOGO_ALT } },
    { tag: "meta", attrs: { name: "twitter:card", content: "summary" } },
    { tag: "meta", attrs: { name: "twitter:title", content: meta.title } },
    { tag: "meta", attrs: { name: "twitter:description", content: meta.description } },
    { tag: "meta", attrs: { name: "twitter:image", content: SITE_LOGO } },
  );
  if (!meta.noindex) {
    for (const data of meta.jsonLd ?? []) {
      tags.push({ tag: "script", attrs: { type: "application/ld+json" }, text: jsonLdText(data) });
    }
  }
  return tags;
}

const escapeAttr = (value: string) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const escapeText = (value: string) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;");

/** Marks the tags that belong to the page, so navigation in the browser can swap them. */
export const SEO_ATTRIBUTE = "data-seo";

function renderTag({ tag, attrs, text }: HeadTag) {
  const list = Object.entries({ ...attrs, [SEO_ATTRIBUTE]: "" })
    .map(([key, value]) => (value === "" ? key : `${key}="${escapeAttr(value)}"`))
    .join(" ");
  return tag === "script" ? `<script ${list}>${text ?? ""}</script>` : `<${tag} ${list}>`;
}

const HEAD_BLOCK = /<!--seo:start-->[\s\S]*?<!--seo:end-->/;

/** Replaces the placeholder block in index.html with this page's title, description and social tags. */
export function applyHead(html: string, meta: PageMeta) {
  const block = [`<title>${escapeText(meta.title)}</title>`, ...headTags(meta).map(renderTag)].join("\n  ");
  if (!HEAD_BLOCK.test(html)) throw new Error("applyHead: <!--seo:start--> block not found in the HTML template");
  return html.replace(HEAD_BLOCK, () => `<!--seo:start-->\n  ${block}\n  <!--seo:end-->`);
}

/** Browser side: swaps the page's head tags after the visitor navigates. */
export function syncHead(meta: PageMeta) {
  document.title = meta.title;
  document.head.querySelectorAll(`[${SEO_ATTRIBUTE}]:not(title)`).forEach((node) => node.remove());
  for (const { tag, attrs, text } of headTags(meta)) {
    const node = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs)) node.setAttribute(key, value);
    node.setAttribute(SEO_ATTRIBUTE, "");
    if (text) node.textContent = text;
    document.head.appendChild(node);
  }
}
