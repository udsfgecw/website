import { useMemo, useState } from "react";
import Lightbox from "@/components/activity/Lightbox";
import EventCard from "@/components/activity/EventCard";
import SiteLayout from "@/components/layout/SiteLayout";
import { Label } from "@/components/ui/section";
import { pageTitle } from "@/config";
import { EVENT_CATALOGUE, eventDay } from "@/data/event-catalogue";
import { usePageMeta } from "@/lib/meta";
import { breadcrumbLd, collectionPageLd } from "@/lib/seo";

const DESCRIPTION = "Live artist, DJ and band performances at UDSF GECW pro shows and college events at Government Engineering College Wayanad.";
const BATCH = 24;

export default function EventsPage() {
  usePageMeta({
    title: pageTitle("Pro shows"),
    description: DESCRIPTION,
    jsonLd: [
      collectionPageLd("Pro shows", DESCRIPTION, "/events"),
      breadcrumbLd([{ name: "Home", path: "/" }, { name: "Pro shows", path: "/events" }]),
    ],
  });
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [shown, setShown] = useState(BATCH);
  const [open, setOpen] = useState<number | null>(null);
  const events = useMemo(() => EVENT_CATALOGUE.filter((event) => {
    const day = eventDay(event);
    return (!from || day >= from) && (!to || day <= to);
  }), [from, to]);
  const media = useMemo(() => events.flatMap((event) => event.post ? [event.post] : []), [events]);

  return (
    <SiteLayout>
      <main id="top" className="min-h-screen bg-[#fafbf9]">
        <section className="wrap pb-10 pt-[clamp(3.5rem,8vw,6rem)]">
          <Label>UDSF GECW</Label>
          <h1 className="mt-5 text-[length:clamp(3rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-ink">Pro shows.</h1>
          <p className="mt-6 max-w-[58ch] text-[1rem] leading-relaxed text-ink-2">A curated collection of live artist, DJ and band performances. Each card includes an AI-written description of the show media.</p>
        </section>
        <section className="wrap pb-24" aria-label="Pro shows">
          <div className="flex flex-wrap items-center gap-2 border-y border-line py-4" role="group" aria-label="Filter by date">
            <div className="ml-auto flex flex-wrap items-center gap-2">
              <label className="label flex items-center gap-2 text-ink">From <input type="date" value={from} max={to || undefined} onChange={(e) => { setFrom(e.target.value); setShown(BATCH); setOpen(null); }} className="rounded-full border border-line bg-white px-3 py-2 text-ink" /></label>
              <label className="label flex items-center gap-2 text-ink">To <input type="date" value={to} min={from || undefined} onChange={(e) => { setTo(e.target.value); setShown(BATCH); setOpen(null); }} className="rounded-full border border-line bg-white px-3 py-2 text-ink" /></label>
              {(from || to) && <button type="button" onClick={() => { setFrom(""); setTo(""); setShown(BATCH); setOpen(null); }} className="label rounded-full px-4 py-2.5 text-ink underline-offset-4 hover:underline">Clear filters</button>}
            </div>
          </div>
          <p className="mt-4 text-sm text-ink-2" aria-live="polite">{events.length} {events.length === 1 ? "entry" : "entries"}, newest first</p>
          <ul className="mt-8 columns-2 gap-4 sm:columns-3 lg:columns-4">
            {events.slice(0, shown).map((event, index) => (
              <li key={event.id} className="mb-7 break-inside-avoid"><EventCard event={event} index={index} onOpen={() => setOpen(media.findIndex((post) => post.id === event.post?.id))} /></li>
            ))}
          </ul>
          {shown < events.length && <div className="mt-10 text-center"><button type="button" onClick={() => setShown((count) => count + BATCH)} className="label rounded-full bg-ink px-6 py-3.5 text-white hover:bg-green-deep">Show {Math.min(BATCH, events.length - shown)} more</button></div>}
        </section>
      </main>
      <Lightbox items={media} index={open} onIndex={setOpen} />
    </SiteLayout>
  );
}
