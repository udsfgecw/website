import { useEffect, useState } from "react";
import { FEED, UPDATES, type Update } from "../config";

const fmt = new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric" });
const safeUrl = (u?: string) => (/^(https?:|\/|assets\/|#)/.test(u || "") ? (u as string) : "#");

interface InstagramMedia {
  media_type?: string;
  media_url?: string;
  thumbnail_url?: string;
  caption?: string;
  timestamp?: string;
  permalink?: string;
}

// Instagram media object -> card
const fromInstagram = (m: InstagramMedia): Update => ({
  image: (m.media_type === "VIDEO" ? m.thumbnail_url : m.media_url) ?? "",
  title: (m.caption || "").split("\n")[0].trim() || "View on Instagram",
  tag: m.media_type === "VIDEO" ? "Reel" : "Post",
  date: m.timestamp,
  link: m.permalink ?? "#",
  external: true,
});

function Card({ u }: { u: Update }) {
  return (
    <a className="update" href={safeUrl(u.link)} {...(u.external ? { target: "_blank", rel: "noopener" } : {})}>
      <div className="update__img">
        <img src={safeUrl(u.image)} alt="" loading="lazy" width={640} height={640} />
      </div>
      <div className="update__meta">
        {u.tag && <span className="update__tag">{u.tag}</span>}
        {u.date && <time dateTime={u.date}>{fmt.format(new Date(u.date))}</time>}
        {u.external && <i className="ph-bold ph-instagram-logo" aria-label="Instagram"></i>}
      </div>
      <h3>{u.title}</h3>
    </a>
  );
}

function Skeleton() {
  return (
    <div className="update update--skeleton" aria-hidden="true">
      <div className="update__img"></div>
      <span className="sk sk--tag"></span>
      <span className="sk sk--line"></span>
      <span className="sk sk--line sk--short"></span>
    </div>
  );
}

function Empty({ failed }: { failed: boolean }) {
  return (
    <div className="updates__empty">
      <img src="/assets/logo-512.png" alt="" width={56} height={56} />
      <strong>{failed ? "Couldn't load posts right now" : "Nothing posted yet"}</strong>
      <p>{failed ? "Our latest posts are always on Instagram." : "Event photos and news from GEC Wayanad will show up here."}</p>
    </div>
  );
}

export default function Updates() {
  const [items, setItems] = useState<Update[]>(UPDATES);
  const [loading, setLoading] = useState(Boolean(FEED.url));
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!FEED.url) return;
    const ctrl = new AbortController();
    (async () => {
      try {
        const res = await fetch(FEED.url!, { headers: { Accept: "application/json" }, signal: ctrl.signal });
        if (!res.ok) throw new Error(String(res.status));
        const json = await res.json();
        const media: InstagramMedia[] = json.data || json;
        setItems(media.filter((m) => m.media_url || m.thumbnail_url).map(fromInstagram));
      } catch (err) {
        if (ctrl.signal.aborted) return;
        console.warn("Instagram feed failed, using manual updates", err);
        setFailed(!UPDATES.length);
      }
      setLoading(false);
    })();
    return () => ctrl.abort();
  }, []);

  return (
    <section className="updates wrap" id="updates" aria-labelledby="updates-title">
      <header className="section-head section-head--center">
        <p className="kicker">Updates</p>
        <h2 id="updates-title" className="h2">From campus</h2>
      </header>
      <div className="updates__grid" id="updatesGrid" aria-live="polite" aria-busy={loading || undefined}>
        {loading
          ? Array.from({ length: FEED.limit }, (_, i) => <Skeleton key={i} />)
          : items.length
            ? items.slice(0, FEED.limit).map((u, i) => <Card key={u.link + i} u={u} />)
            : <Empty failed={failed} />}
      </div>
      <div className="updates__more">
        <a className="btn btn--ghost" href={FEED.profile} target="_blank" rel="noopener">
          <i className="ph-bold ph-instagram-logo"></i> Follow on Instagram
        </a>
      </div>
    </section>
  );
}
