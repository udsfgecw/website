export const SITE_NAME = "UDSF GECW";
export const SITE_DESCRIPTION =
  "UDSF GECW: the KSU and MSF student alliance at Government Engineering College Wayanad, Mananthavady.";
export const INSTAGRAM = "https://www.instagram.com/udsf_gecw/";

/** Web3Forms access key for the contact form. It is public by design: it only lets the form email the union inbox. */
export const WEB3FORMS_KEY = "8c5f8cda-265b-41cf-b819-70fe4ef2b186";

/** Production origin without a trailing slash; canonical links, the sitemap and llms.txt are built from it. */
export const SITE_URL = (import.meta.env.VITE_SITE_URL ?? "https://udsfgecw.in").replace(/\/+$/, "");

/** Logo used for link previews and structured data. */
export const SITE_LOGO = "https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/assets/logo-512.webp";

/** "Page | UDSF GECW" */
export const pageTitle = (page?: string) => (page ? `${page} | ${SITE_NAME}` : SITE_NAME);

/** Absolute URL of a site path. */
export const absoluteUrl = (path: string) => (path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`);
