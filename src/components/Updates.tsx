import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { H2, Kicker } from "@/components/Section";
import { FEED, UPDATES, type Update } from "@/config";

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
    <a className="group block" href={safeUrl(u.link)} {...(u.external ? { target: "_blank", rel: "noopener" } : {})}>
      <div className="aspect-square overflow-hidden rounded-2xl bg-soft">
        <img
          className="size-full object-cover transition-transform duration-1000 ease-out-expo group-hover:scale-[1.04]"
          src={safeUrl(u.image)}
          alt=""
          loading="lazy"
          width={640}
          height={640}
        />
      </div>
      <div className="mt-[0.9rem] flex items-center gap-[0.6rem] text-[0.8rem] text-ink-2">
        {u.tag && (
          <Badge variant="secondary" className="px-[0.55rem] py-[0.2rem] font-mono text-[0.7rem] leading-[1.4] tracking-[0.06em] uppercase">
            {u.tag}
          </Badge>
        )}
        {u.date && <time dateTime={u.date}>{fmt.format(new Date(u.date))}</time>}
        {u.external && <i className="ph-bold ph-instagram-logo ml-auto text-base" aria-label="Instagram"></i>}
      </div>
      <h3 className="mt-2 line-clamp-2 text-base leading-[1.4] font-semibold tracking-[-0.01em] group-hover:text-green-ink">{u.title}</h3>
    </a>
  );
}

function CardSkeleton() {
  return (
    <div aria-hidden="true">
      <Skeleton className="aspect-square rounded-2xl bg-[#eef2f0]" />
      <Skeleton className="mt-[0.9rem] h-[18px] w-16 rounded-full bg-[#eef2f0]" />
      <Skeleton className="mt-[0.7rem] h-3 w-[92%] rounded-full bg-[#eef2f0]" />
      <Skeleton className="mt-[0.7rem] h-3 w-[58%] rounded-full bg-[#eef2f0]" />
    </div>
  );
}

function Empty({ failed }: { failed: boolean }) {
  return (
    <div className="col-span-full flex flex-col items-center gap-[0.4rem] rounded-3xl border-[1.5px] border-dashed border-[#cfd9d5] bg-soft px-6 py-[clamp(2.5rem,6vw,4rem)] text-center">
      <img className="mb-3 size-14 rounded-[14px]" src="/assets/logo-512.png" alt="" width={56} height={56} />
      <strong className="text-[1.05rem] font-semibold">{failed ? "Couldn't load posts right now" : "Nothing posted yet"}</strong>
      <p className="max-w-[40ch] text-ink-2">
        {failed ? "Our latest posts are always on Instagram." : "Event photos and news from GEC Wayanad will show up here."}
      </p>
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
    <section className="wrap py-[clamp(5rem,10vw,7.5rem)]" id="updates" aria-labelledby="updates-title">
      <header className="mb-9 text-center">
        <Kicker>Updates</Kicker>
        <H2 id="updates-title">From campus</H2>
      </header>
      <div
        className="grid grid-cols-3 gap-x-5 gap-y-6 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1"
        id="updatesGrid"
        aria-live="polite"
        aria-busy={loading || undefined}
      >
        {loading
          ? Array.from({ length: FEED.limit }, (_, i) => <CardSkeleton key={i} />)
          : items.length
            ? items.slice(0, FEED.limit).map((u, i) => <Card key={u.link + i} u={u} />)
            : <Empty failed={failed} />}
      </div>
      <div className="mt-9 flex justify-center">
        <Button asChild variant="outline">
          <a href={FEED.profile} target="_blank" rel="noopener">
            <i className="ph-bold ph-instagram-logo"></i> Follow on Instagram
          </a>
        </Button>
      </div>
    </section>
  );
}
