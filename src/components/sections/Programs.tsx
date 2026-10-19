import { Label } from "@/components/ui/section";
import { PROGRAMS } from "@/data/progress";
import { cn } from "@/lib/utils";

function ProgramCard({ p, featured }: { p: (typeof PROGRAMS)[number]; featured?: boolean }) {
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-paper transition-shadow hover:shadow-md",
        featured && "sm:col-span-2 sm:row-span-2",
      )}
    >
      <div
        className={cn(
          "relative w-full overflow-hidden bg-[#f0f1f3]",
          featured ? "aspect-[16/9] sm:aspect-auto sm:flex-1" : "aspect-[4/3]",
        )}
      >
        <div className="flex h-full w-full items-center justify-center">
          <span
            className={cn(
              "font-extrabold tracking-[-0.07em] text-line select-none leading-none",
              featured ? "text-[5rem] sm:text-[8rem]" : "text-[3.5rem]",
            )}
          >
            {String(p.number).padStart(2, "0")}
          </span>
        </div>
        <span className="absolute bottom-3 right-3 label text-ink/25">Photo coming</span>
      </div>

      <div className="flex items-start justify-between gap-2 p-4">
        <div className="flex items-start gap-2.5">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-tint text-[0.6rem] font-semibold text-green-ink">
            {p.number}
          </span>
          <h3
            className={cn(
              "font-semibold leading-[1.25] tracking-[-0.02em] text-ink",
              featured ? "text-[1.1rem]" : "text-[0.95rem]",
            )}
          >
            {p.title}
          </h3>
        </div>
        <span className="label shrink-0 text-ink/30 mt-0.5">{p.year}</span>
      </div>
    </article>
  );
}

export default function Programs() {
  const [featured, ...rest] = PROGRAMS;
  const cols = rest;

  return (
    <section id="programs" aria-labelledby="programs-title" className="border-b border-line">
      <div className="wrap py-[clamp(5rem,11vw,9rem)]">
        <Label>Programs · 2025–26</Label>
        <h2
          id="programs-title"
          className="mt-6 max-w-[24ch] text-[length:clamp(2rem,4.6vw,3.9rem)] leading-[1.08] font-semibold tracking-[-0.045em] text-balance text-ink"
        >
          Events & programs.{" "}
          <span className="text-ink/30">Bringing the campus to life, one moment at a time.</span>
        </h2>

        <div className="mt-[clamp(3.5rem,7vw,6rem)]">
          <div className="grid auto-rows-[minmax(0,1fr)] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            <div className="col-span-2 row-span-2 sm:col-span-2 sm:row-span-2">
              <ProgramCard p={featured} featured />
            </div>
            {cols.map((p) => (
              <ProgramCard key={p.number} p={p} />
            ))}
          </div>
        </div>

        <p className="mt-12 text-[0.75rem] text-ink-2">
          Photos will be added shortly. Placeholder tiles show item numbers for reference.
        </p>
      </div>
    </section>
  );
}
