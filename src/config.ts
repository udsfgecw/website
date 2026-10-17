/* ---------- Updates / Instagram feed config ----------

   The "From campus" section fills itself from one of two sources:

   1. Instagram (later). Set FEED.url to an endpoint on your own server that calls the
      Meta Instagram API and returns its response unchanged, for example the result of:
        GET https://graph.instagram.com/me/media
            ?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp
      i.e. { "data": [ { id, caption, media_type, media_url, thumbnail_url, permalink, timestamp }, ... ] }
      Keep the access token on that server. Never put it in this file.

   2. A manual list (now). Add entries to UPDATES, newest first. Images go in public/assets/updates/.
        { title: "Freshers welcome", tag: "Event", date: "2026-10-12", image: "/assets/updates/freshers.webp", link: "#" }

   If neither has anything, the section shows an empty state.
*/
export interface Update {
  title: string;
  tag?: string;
  date?: string;
  image: string;
  link: string;
  external?: boolean;
}

export const FEED: { url: string | null; limit: number; profile: string } = {
  url: null, // e.g. "/api/instagram"
  limit: 6,
  profile: "#", // TODO: https://www.instagram.com/<handle>/
};

export const UPDATES: Update[] = [];
