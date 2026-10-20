/** Public URL of the Cloudflare R2 bucket ("media") that serves every image, video, subtitle track and PDF. */
export const MEDIA_BASE = "https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev";

/** Site-relative path ("/notes/...") of a media URL, for lookups keyed by the original public/ path. */
export const mediaPath = (src: string) => (src.startsWith(MEDIA_BASE) ? src.slice(MEDIA_BASE.length) : src);
