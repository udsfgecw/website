import { PROGRAMS } from "@/data/progress";
import { cn } from "@/lib/utils";

const ASPECTS = [
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[3/4]",
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[3/4]",
];

type Program = (typeof PROGRAMS)[number];

function GalleryCard({ p, index }: { p: Program; index: number }) {
  const aspect = ASPECTS[index % ASPECTS.length];

  return (
    <article
      className={cn("group relative w-full overflow-hidden break-inside-avoid mb-2", aspect)}
    >
      <div className="absolute inset-0 bg-[#1c1c1c]" />

      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center select-none font-black leading-none tracking-[-0.08em] text-white/[0.04] text-[clamp(4rem,12vw,9rem)]"
      >
        {String(p.number).padStart(2, "0")}
      </span>

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-3.5">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border border-white/20 text-[0.55rem] font-bold text-white/60">
            {p.number}
          </span>
          <span className="text-[0.6rem] font-medium tracking-[0.06em] uppercase text-white/30">
            {p.year}
          </span>
        </div>
        <h3 className="text-white text-[0.88rem] font-semibold leading-[1.25] tracking-[-0.01em]">
          {p.title}
        </h3>
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/[0.04] ring-1 ring-inset ring-white/10" />
    </article>
  );
}

export default function Programs() {
  return (
    <section id="programs" aria-labelledby="programs-title" className="bg-[#0a0a0a]">
      <div className="wrap py-[clamp(5rem,11vw,9rem)]">

        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 id="programs-title" className="text-[length:clamp(3rem,8vw,7rem)] font-black leading-[0.92] tracking-[-0.04em] text-white uppercase">
              Events
              <br />
              <span className="text-[--color-green]">&amp; Programs</span>
            </h2>
          </div>
          <div className="text-right shrink-0 mt-1 hidden sm:block">
            <p className="text-[0.68rem] font-medium tracking-[0.1em] uppercase text-white/30">
              2025–26 Season
            </p>
            <p className="text-[0.68rem] tracking-[0.06em] uppercase text-white/20 mt-1">
              {PROGRAMS.length} programs
            </p>
          </div>
        </div>

        <div className="mt-10 columns-2 gap-2 sm:columns-3 lg:columns-4">
          {PROGRAMS.map((p, i) => (
            <GalleryCard key={p.number} p={p} index={i} />
          ))}
        </div>

        <p className="mt-8 text-[0.7rem] tracking-[0.04em] text-white/20 uppercase">
          Photos will be added shortly — placeholders show event numbers
        </p>
      </div>
    </section>
  );
}
