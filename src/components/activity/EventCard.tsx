import { Expand, Play } from "lucide-react";
import type { EventEntry } from "@/data/event-catalogue";
import { dayLabel, mediaUrl } from "@/lib/activity";
import { cn } from "@/lib/utils";
import { WhatsAppInline } from "./WhatsAppText";

export default function EventCard({ event, index, dark = false, onOpen }: { event: EventEntry; index: number; dark?: boolean; onOpen: () => void }) {
  const picture = (
    <div className={cn("relative overflow-hidden rounded-xl", ["aspect-[4/5]", "aspect-square", "aspect-[3/4]", "aspect-[5/4]"][index % 4], dark ? "bg-white/5" : "bg-paper")}>
      {event.image ? (
        <img src={mediaUrl(event.image)} alt="" loading="lazy" decoding="async" className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
      ) : (
        <p className={cn("absolute inset-x-0 bottom-0 p-5 text-[clamp(1.15rem,2.5vw,1.8rem)] font-semibold leading-tight tracking-[-0.04em]", dark ? "text-white/80" : "text-ink/75")}>
          {event.title}
        </p>
      )}
      {event.post?.video && <span aria-hidden className="label absolute left-3 top-3 rounded-full bg-black/70 px-2.5 py-1.5 text-white">Reel</span>}
      {event.post && <span className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-white/90 text-ink">{event.post.video ? <Play aria-hidden className="size-3.5" /> : <Expand aria-hidden className="size-3.5" />}</span>}
    </div>
  );
  return (
    <article>
      {event.post ? <button type="button" onClick={onOpen} className="group block w-full text-left">{picture}<span className="sr-only">{event.post.video ? "Play" : "View"} {event.title}{event.post.video ? " reel" : " full screen"}</span></button> : picture}
      <p className={cn("label mt-3", dark ? "text-white/45" : "text-ink/45")}>
        {event.yearLabel.length === 10 ? dayLabel(event.yearLabel) : event.yearLabel}
      </p>
      <h3 className={cn("mt-1.5 text-[0.95rem] font-semibold leading-snug tracking-[-0.025em]", dark ? "text-white" : "text-ink")}><WhatsAppInline text={event.title} /></h3>
      <p className={cn("mt-1.5 text-sm leading-relaxed", dark ? "text-white/60" : "text-ink-2")}>{event.description}</p>
    </article>
  );
}
