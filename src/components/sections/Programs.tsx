import { useState } from "react";
import { CtaLink } from "@/components/ui/cta-link";
import Lightbox from "@/components/activity/Lightbox";
import ReelCard from "@/components/activity/ReelCard";
import type { Activity } from "@/data/activities";
import { HOMEPAGE_SHOWS as ITEMS } from "@/data/homepage-shows";

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
              Pro shows &amp; live performances
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
