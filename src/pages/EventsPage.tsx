import { useMemo, useState } from "react";
import Lightbox from "@/components/activity/Lightbox";
import EventCard from "@/components/activity/EventCard";
import SiteLayout from "@/components/layout/SiteLayout";
import { Label } from "@/components/ui/section";
import { pageTitle } from "@/config";
import { EVENT_CATALOGUE } from "@/data/event-catalogue";
import { usePageMeta } from "@/lib/meta";
import { cn } from "@/lib/utils";

const BATCH = 24;
const YEARS = [...new Set(EVENT_CATALOGUE.map((event) => event.year))].sort().reverse();

export default function EventsPage() {
  usePageMeta({ title: pageTitle("Events & programs"), description: "Explore UDSF GECW events and programs, from festivals and tournaments to talks and student gatherings, in one collection." });
  const [year, setYear] = useState<string | null>(null);
  const [shown, setShown] = useState(BATCH);
  const [open, setOpen] = useState<number | null>(null);
  const events = useMemo(() => EVENT_CATALOGUE.filter((event) => !year || event.year === year), [year]);
  const media = useMemo(() => events.flatMap((event) => event.post ? [event.post] : []), [events]);

  return (
    <SiteLayout>
      <main id="top" className="min-h-screen bg-[#fafbf9]">
        <section className="wrap pb-10 pt-[clamp(3.5rem,8vw,6rem)]">
          <Label>UDSF GECW</Label>
          <h1 className="mt-5 text-[length:clamp(3rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-ink">Events &amp; programs.</h1>
          <p className="mt-6 max-w-[58ch] text-[1rem] leading-relaxed text-ink-2">Fests, tournaments, talks and student gatherings. Browse every year in one collection and open a photo or play a reel to see the original post.</p>
        </section>
        <section className="wrap pb-24" aria-label="All events and programs">
          <div className="flex flex-wrap items-center gap-2 border-y border-line py-4" role="group" aria-label="Filter by year">
            {[null, ...YEARS].map((value) => (
              <button key={value ?? "all"} type="button" aria-pressed={year === value} onClick={() => { setYear(value); setShown(BATCH); setOpen(null); }} className={cn("label rounded-full border px-4 py-2.5 transition", year === value ? "border-ink bg-ink text-white" : "border-line bg-white text-ink hover:border-ink/40")}>
                {value ?? "All years"} <span className="ml-1.5 opacity-50">{value ? EVENT_CATALOGUE.filter((event) => event.year === value).length : EVENT_CATALOGUE.length}</span>
              </button>
            ))}
          </div>
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
