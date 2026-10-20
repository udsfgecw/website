import { useState } from "react";
import { CtaLink } from "@/components/ui/cta-link";
import Lightbox from "@/components/activity/Lightbox";
import ReelCard from "@/components/activity/ReelCard";
import type { Activity } from "@/data/activities";
import { EVENT_CATALOGUE, type EventEntry } from "@/data/event-catalogue";
import { PRO_SHOW_REEL_IDS } from "@/data/event-priority";
import { EVENT_REELS } from "@/data/event-reels";
import { EVENT_STORIES } from "@/data/event-stories";
import { dayLabel } from "@/lib/activity";

const ROWS = 4;
const PER_ROW = 4;

/* The pro shows that open the grid, in the order they headline. */
const HEADLINERS = [
  { reel: "story-18134623687636539", act: "Nawaf NSR", show: "Thouryathrikam ’26 · Oct 2" },
  { reel: "story-17906639010564419", act: "DJ Jazeel", show: "Beatz on Music · Oct 1" },
  { reel: "reel-4f82204fdcee", act: "DJ Pranadev & Pranav Drummer", show: "ALOHA ’25 · Foam party" },
  { reel: "reel-1dd84c4f9c58", act: "Yasir GKZ", show: "Hypnomania · Freshers Week ’25" },
].flatMap(({ reel, act, show }) => {
  const post = [...EVENT_STORIES, ...EVENT_REELS].find((item) => item.id === reel);
  return post ? [{ post, title: act, detail: show }] : [];
});

/* Reels and the season's programs carry curated English names; plain posts carry raw caption lines. */
const named = (event: EventEntry) => (!event.post || !!event.post.video) && event.title.length <= 48;

/* Words that tell two event names apart, so "College Union Inauguration" and
   "Sathva College Union 2026 Inauguration" count as the same event. */
const COMMON = new Set(["udsf", "gecw", "college", "by", "the", "at", "of", "and", "a", "event", "celebration"]);
const keyWords = (title: string) => title.toLowerCase().match(/[a-z]+/g)?.filter((word) => !COMMON.has(word)) ?? [];
const sameEvent = (a: string, b: string) => {
  const [x, y] = [keyWords(a), keyWords(b)].sort((p, q) => p.length - q.length);
  return x.length > 0 && x.every((word) => y.includes(word));
};

/* The newest events after the headliners, one of each, filling the remaining rows. */
const RECENT = EVENT_CATALOGUE.filter((event) => event.post && named(event) && !PRO_SHOW_REEL_IDS.has(event.id))
  .sort((a, b) => b.post!.date.localeCompare(a.post!.date))
  .reduce<EventEntry[]>((kept, event) => (kept.some((other) => sameEvent(other.title, event.title)) ? kept : [...kept, event]), [])
  .slice(0, ROWS * PER_ROW - HEADLINERS.length)
  .map((event) => ({ post: event.post!, title: event.title, detail: dayLabel(event.post!.date) }));

const ITEMS = [...HEADLINERS, ...RECENT];
const MEDIA: readonly Activity[] = ITEMS.map(({ post }) => post);

export default function Programs() {
  const [open, setOpen] = useState<number | null>(null);
  const [sound, setSound] = useState<string | null>(null);

  return (
    <section id="programs" aria-labelledby="programs-title" className="bg-[#0a0a0a] text-white">
      <div className="wrap py-[clamp(3.5rem,7vw,6rem)]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label flex items-center gap-2 text-white/45">
              Pro shows &amp; recent events
            </p>
            <h2 id="programs-title" className="mt-3 text-[length:clamp(2rem,4vw,3rem)] font-semibold leading-[1] tracking-[-0.05em]">
              Live on campus<span className="text-green">.</span>
            </h2>
          </div>
          <CtaLink to="/events" variant="ghost">
            All events &amp; programs
          </CtaLink>
        </div>

        {/* every reel plays silently while it is on screen; tap one for sound and full screen */}
        <ol className="mt-10 grid grid-cols-2 gap-x-3 gap-y-9 lg:grid-cols-4 lg:gap-x-4">
          {ITEMS.map(({ post, title, detail }, index) => (
            <li key={post.id}>
              <ReelCard
                post={post}
                label={title}
                muted={sound !== post.id}
                onToggleSound={() => setSound((current) => (current === post.id ? null : post.id))}
                onOpen={() => {
                  setSound(null);
                  setOpen(index);
                }}
              />
              <div className="mt-4 flex gap-3">
                <span className="label pt-1 text-green tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                <div className="min-w-0">
                  <h3 className="line-clamp-2 text-[length:clamp(1rem,1.7vw,1.3rem)] font-black uppercase leading-[1] tracking-[-0.03em] text-balance">
                    {title}
                  </h3>
                  <p className="label mt-2 text-white/45">{detail}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <Lightbox items={MEDIA} index={open} onIndex={setOpen} />
    </section>
  );
}
