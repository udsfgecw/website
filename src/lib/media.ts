/** Public URL of the Cloudflare R2 bucket ("media") that serves site media. */
export const MEDIA_BASE = "https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev";
const LEGACY_MEDIA_BASE = "https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev";

/** Repoint URLs embedded in existing notes without changing their source markdown. */
export const resolveMediaUrl = (src: string) =>
  src.startsWith(LEGACY_MEDIA_BASE) ? `${MEDIA_BASE}${src.slice(LEGACY_MEDIA_BASE.length)}` : src;

/** Site-relative path ("/notes/...") of a media URL, for lookups keyed by the original public/ path. */
export const mediaPath = (src: string) => {
  const resolved = resolveMediaUrl(src);
  return resolved.startsWith(MEDIA_BASE) ? resolved.slice(MEDIA_BASE.length) : src;
};
