import { Label } from "@/components/ui/section";
import { PROGRAMS } from "@/data/progress";
import { cn } from "@/lib/utils";

const GRADIENTS = [
  "from-[#05a26a]/20 via-[#1eacfe]/10 to-transparent",
  "from-[#1eacfe]/25 via-[#05a26a]/10 to-transparent",
  "from-[#05a26a]/30 to-[#05a26a]/5",
  "from-[#1eacfe]/30 to-[#1eacfe]/5",
  "from-[#037f52]/20 via-[#0677c4]/15 to-transparent",
  "from-[#0677c4]/20 via-[#05a26a]/15 to-transparent",
  "from-[#05a26a]/15 via-transparent to-[#1eacfe]/15",
  "from-[#1eacfe]/15 via-transparent to-[#05a26a]/15",
];

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
  const grad = GRADIENTS[index % GRADIENTS.length];
  const aspect = ASPECTS[index % ASPECTS.length];

  return (
    <article className="group relative overflow-hidden rounded-2xl break-inside-avoid mb-3 cursor-pointer">
      <div className={cn("relative w-full bg-paper", aspect)}>
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br",
            grad,
          )}
        />

        <span
          className="absolute inset-0 flex items-center justify-center text-[5rem] font-extrabold tracking-[-0.08em] leading-none select-none text-ink/[0.06] group-hover:text-ink/[0.04] transition-colors duration-300"
          aria-hidden="true"
        >
          {String(p.number).padStart(2, "0")}
        </span>

        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute inset-0 flex flex-col justify-end p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <p className="label text-white/70 mb-1">{p.year}</p>
          <h3 className="text-white font-semibold leading-[1.2] tracking-[-0.025em] text-[0.95rem]">
            {p.title}
          </h3>
        </div>

        <span className="absolute top-3 left-3 flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-[0.62rem] font-bold text-ink backdrop-blur-sm shadow-sm">
          {p.number}
        </span>
      </div>

      <div className="group-hover:hidden px-1 pt-2.5 pb-1">
        <h3 className="text-[0.9rem] font-semibold leading-[1.3] tracking-[-0.02em] text-ink line-clamp-1">
          {p.title}
        </h3>
        <p className="label text-ink/35 mt-0.5">{p.year}</p>
      </div>
    </article>
  );
}

export default function Programs() {
  return (
    <section id="programs" aria-labelledby="programs-title" className="border-b border-line">
      <div className="wrap py-[clamp(5rem,11vw,9rem)]">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <Label>Programs · 2025–26</Label>
            <h2
              id="programs-title"
              className="mt-6 max-w-[24ch] text-[length:clamp(2rem,4.6vw,3.9rem)] leading-[1.08] font-semibold tracking-[-0.045em] text-balance text-ink"
            >
              Events & programs.{" "}
              <span className="text-ink/30">Bringing the campus to life, one moment at a time.</span>
            </h2>
          </div>
          <p className="max-w-[38ch] text-[0.9rem] leading-[1.6] text-ink-2 md:text-right shrink-0">
            {PROGRAMS.length} events across cultural, academic, and sports — from intimate meets to full-campus celebrations.
          </p>
        </div>

        <div className="mt-[clamp(3.5rem,7vw,6rem)] columns-2 gap-3 sm:columns-3 lg:columns-4">
          {PROGRAMS.map((p, i) => (
            <GalleryCard key={p.number} p={p} index={i} />
          ))}
        </div>

        <p className="mt-8 text-[0.75rem] text-ink/30">
          Hover each card to see the event name. Photos will be added shortly.
        </p>
      </div>
    </section>
  );
}
