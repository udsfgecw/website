import { useState } from "react";
import { Expand } from "lucide-react";
import Lightbox from "@/components/activity/Lightbox";
import { CtaLink } from "@/components/ui/cta-link";
import { Label } from "@/components/ui/section";
import type { Activity } from "@/data/activities";
import { dayLabel, mediaUrl } from "@/lib/activity";

import { PROGRESS_HIGHLIGHTS as HIGHLIGHTS } from "@/lib/ranked-activities";

const PHOTOS: readonly Activity[] = HIGHLIGHTS.map(({ post }) => post);

export default function Progress() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="progress" aria-labelledby="progress-title" className="border-y border-line bg-[#fafbf9]">
      <div className="wrap py-[clamp(3.5rem,7vw,6rem)]">
        <Label>Our progress · UDSF GECW</Label>
        <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 id="progress-title" className="max-w-[22ch] text-[length:clamp(2rem,4.6vw,3.9rem)] font-semibold leading-[1.08] tracking-[-0.045em] text-ink">
              What we’ve brought to campus.
            </h2>
            <p className="mt-4 max-w-[54ch] text-[1rem] leading-relaxed text-ink-2">
              A few highlights of UDSF GECW’s work for better facilities and student life.
            </p>
          </div>
          <CtaLink to="/activities">View all progress</CtaLink>
        </div>

        <ul className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map(({ post, title, summary }, index) => (
            <li key={post.id}>
              <button type="button" onClick={() => setOpen(index)} className="group block w-full text-left">
                <div className="relative overflow-hidden rounded-2xl bg-paper">
                  <img src={mediaUrl(post.image)} alt={title} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]" />
                  <span className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-white/90 text-ink">
                    <Expand aria-hidden className="size-3.5" />
                  </span>
                </div>
                <p className="label mt-4 text-ink/45">{dayLabel(post.date)}</p>
                <h3 className="mt-2 text-[1.05rem] font-semibold leading-snug tracking-[-0.025em] text-ink">{title}</h3>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-ink-2">{summary}</p>
                <span className="sr-only">View original post</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Lightbox items={PHOTOS} index={open} onIndex={setOpen} />
    </section>
  );
}
