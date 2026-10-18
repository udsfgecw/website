import { Check, Sparkles } from "lucide-react";
import { Section } from "@/components/Section";
import { ACHIEVEMENTS, FOLLOW_UPS, type Achievement } from "@/data/progress";
import { useCountUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

const src = (image: string) => `${import.meta.env.BASE_URL}assets/progress/${image}`;
const pad = (n: number) => String(n).padStart(2, "0");

const STATS = [
  { value: ACHIEVEMENTS.length, label: "Initiatives delivered", dot: "bg-green" },
  { value: ACHIEVEMENTS[0].tags?.length ?? 0, label: "New student clubs", dot: "bg-green" },
  { value: ACHIEVEMENTS.filter((a) => a.first).length, label: "Firsts at GEC Wayanad", dot: "bg-blue" },
  { value: FOLLOW_UPS.length, label: "Being followed up", dot: "bg-blue" },
];

function Stat({ value, label, dot }: (typeof STATS)[number]) {
  const [ref, shown] = useCountUp<HTMLParagraphElement>(value);
  return (
    <div className="bg-white px-5 py-6 sm:px-7 sm:py-8">
      <p ref={ref} className="text-[length:clamp(2.6rem,5vw,3.75rem)] leading-none font-semibold tracking-[-0.05em] tabular-nums">
        {pad(shown)}
      </p>
      <p className="label mt-3 flex items-center gap-2 text-ink-2">
        <span className={cn("size-1.5 rounded-full", dot)} aria-hidden="true" />
        {label}
      </p>
    </div>
  );
}

function Badges({ first, dark }: { first?: boolean; dark?: boolean }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      <span
        className={cn(
          "label flex items-center gap-1.5 rounded-full px-2.5 py-1.5 backdrop-blur-md",
          dark ? "bg-white/15 text-white" : "bg-white/90 text-green-ink",
        )}
      >
        <Check size={12} strokeWidth={2.5} aria-hidden="true" /> Delivered
      </span>
      {first && (
        <span className="label flex items-center gap-1.5 rounded-full bg-blue-ink/90 px-2.5 py-1.5 text-white backdrop-blur-md">
          <Sparkles size={12} aria-hidden="true" /> Campus first
        </span>
      )}
    </div>
  );
}

function Img({ a, className }: { a: Achievement; className?: string }) {
  return (
    <img
      src={src(a.image!)}
      alt={`${a.location}, ${a.photo ? "original event photograph" : "adapted from the UDSF campaign poster"}`}
      width={1200}
      height={800}
      loading="lazy"
      decoding="async"
      className={cn("size-full object-cover transition-transform duration-[1400ms] ease-out-expo group-hover:scale-[1.06]", className)}
    />
  );
}

const card =
  "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-[transform,box-shadow,border-color] duration-500 ease-out-expo hover:-translate-y-1 hover:border-[#d3d6db] hover:shadow-[0_28px_50px_-28px_rgba(20,22,26,0.35)]";

function Body({ a, n }: { a: Achievement; n: number }) {
  return (
    <div className="flex flex-1 flex-col p-6">
      <div className="flex items-center justify-between gap-3">
        <p className="label text-green-ink">{a.location}</p>
        <span className="label text-ink-2/70 tabular-nums">{pad(n)}</span>
      </div>
      <h4 className="mt-2.5 max-w-[22ch] text-[1.3rem] leading-[1.15] font-medium tracking-[-0.035em] text-balance">{a.title}</h4>
      <p className="mt-3 text-[0.85rem] leading-[1.65] text-ink-2">{a.description}</p>
    </div>
  );
}

/* Large photo card with the copy laid over a dark fade. */
function Featured({ a, n }: { a: Achievement; n: number }) {
  return (
    <article className="group relative isolate flex h-full min-h-[440px] flex-col justify-end overflow-hidden rounded-3xl bg-ink text-white">
      <div className="absolute inset-0 -z-10">
        <Img a={a} />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(10,12,14,0.35)_0%,transparent_30%,rgba(10,12,14,0.55)_55%,rgba(10,12,14,0.92)_100%)]" />
      <div className="absolute inset-x-6 top-6 flex items-start justify-between">
        <Badges first={a.first} dark />
        <span className="label text-white/70 tabular-nums">{pad(n)}</span>
      </div>
      <div className="p-[clamp(1.5rem,3vw,2.5rem)]">
        <p className="label text-white/70">{a.location}</p>
        <h4 className="mt-3 max-w-[14ch] text-[length:clamp(2rem,3.6vw,3rem)] leading-[1] font-semibold tracking-[-0.045em] text-balance">
          {a.title}
        </h4>
        <p className="mt-4 max-w-[46ch] text-[0.92rem] leading-[1.6] text-white/75">{a.description}</p>
        {a.tags && (
          <ul aria-label="Clubs" className="mt-6 flex flex-wrap gap-1.5">
            {a.tags.map((t) => (
              <li
                key={t}
                className="label rounded-full border border-white/25 bg-white/10 px-3 py-1.5 backdrop-blur-sm transition-colors duration-300 group-hover:border-white/40"
              >
                {t}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

/* Wide card: photo on the left, copy on the right (stacks below lg). */
function Wide({ a, n }: { a: Achievement; n: number }) {
  return (
    <article className={cn(card, "lg:grid lg:grid-cols-[1.35fr_1fr]")}>
      <div className="relative aspect-[16/9] overflow-hidden lg:aspect-auto">
        <Img a={a} className="object-[50%_40%]" />
        <div className="absolute top-4 left-4">
          <Badges first={a.first} />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <Body a={a} n={n} />
        <p className="label px-6 pb-6 text-ink-2/80">Original event photograph</p>
      </div>
    </article>
  );
}

function Standard({ a, n }: { a: Achievement; n: number }) {
  return (
    <article className={card}>
      <div className="relative aspect-[16/9] overflow-hidden">
        {a.image ? (
          <Img a={a} />
        ) : (
          // no photo yet: a typographic cover in the alliance colours
          <div
            className="flex size-full flex-col justify-between bg-[linear-gradient(135deg,var(--color-green)_0%,#0f8f8a_45%,var(--color-blue)_100%)] p-6 text-white transition-transform duration-[1400ms] ease-out-expo group-hover:scale-[1.04]"
            aria-hidden="true"
          >
            <span className="label self-end text-white/80">Vol. 01</span>
            <span className="text-[length:clamp(2.2rem,3.6vw,2.8rem)] leading-[0.92] font-extrabold tracking-[-0.055em]">
              Web
              <br />
              magazine
            </span>
          </div>
        )}
        <div className="absolute top-4 left-4">
          <Badges first={a.first} />
        </div>
      </div>
      <Body a={a} n={n} />
    </article>
  );
}

/* Bento placement. lg (3 cols): featured is 2×2, the event photo spans 2, so 15 cells fill exactly.
   md (2 cols): featured spans the full row and everything else pairs up. */
const placement = (i: number, last: boolean) =>
  i === 0 ? "md:col-span-2 lg:row-span-2" : last ? "lg:col-span-2" : "";

export default function Progress() {
  return (
    <div className="relative border-y border-line bg-[#fafbf9]">
      {/* faint grid paper behind the section */}
      <div
        className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(180deg,black,transparent_40%)] bg-[linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] bg-[size:48px_48px] opacity-60"
        aria-hidden="true"
      />
      <Section
        id="progress"
        label="UDSF GECW / In action"
        title="Our Progress"
        intro="What we’ve brought to campus. Better facilities, new opportunities and work that makes a difference to students."
        className="relative"
      >
        <div data-reveal className="mb-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
          {STATS.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>

        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h3 className="label flex items-center gap-2 text-ink">
            <span className="relative flex size-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-green/60" />
              <span className="size-1.5 rounded-full bg-green" />
            </span>
            On campus. In place.
          </h3>
          <span className="text-[0.75rem] text-ink-2">{pad(ACHIEVEMENTS.length)} initiatives delivered</span>
        </div>

        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((a, i) => {
            const last = i === ACHIEVEMENTS.length - 1;
            const Card = i === 0 ? Featured : last ? Wide : Standard;
            return (
              <li key={a.title} data-reveal style={{ "--i": i % 3 } as React.CSSProperties} className={placement(i, last)}>
                <Card a={a} n={i + 1} />
              </li>
            );
          })}
        </ul>

        <div className="mt-16 md:mt-20">
          <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="label flex items-center gap-2 text-blue-ink">
                <span className="relative flex size-1.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-blue/60" />
                  <span className="size-1.5 rounded-full bg-blue-ink" />
                </span>
                Still at it
              </p>
              <h3 className="mt-3 text-[length:clamp(1.6rem,2.6vw,2rem)] font-semibold tracking-[-0.04em]">Work in progress</h3>
            </div>
            <p className="text-[0.8rem] text-ink-2">Work underway. Following through to the finish.</p>
          </div>
          <ul className="grid gap-5 lg:grid-cols-2">
            {FOLLOW_UPS.map((item, n) => (
              <li key={item.title} data-reveal style={{ "--i": n } as React.CSSProperties}>
                <article className="h-full rounded-2xl border border-line bg-white p-6 transition-shadow duration-500 hover:shadow-[0_24px_48px_-30px_rgba(20,22,26,0.3)] lg:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <span className="label text-ink-2">Follow-up / {pad(n + 1)}</span>
                    <span className="label rounded-full bg-blue-tint px-2.5 py-1.5 text-blue-ink">In progress</span>
                  </div>
                  <h4 className="mt-6 text-[1.4rem] font-medium tracking-[-0.035em]">{item.title}</h4>
                  <p className="mt-2 max-w-[55ch] text-[0.85rem] leading-[1.65] text-ink-2">{item.description}</p>

                  <div className="relative mt-8">
                    {/* track behind the three markers, filled up to the current stage */}
                    <div className="absolute top-[11px] right-[calc(100%/6)] left-[calc(100%/6)] h-0.5 rounded-full bg-line" aria-hidden="true">
                      <div className="track-fill h-full rounded-full bg-[linear-gradient(90deg,var(--color-green),var(--color-blue))]" style={{ "--to": "50%" } as React.CSSProperties} />
                    </div>
                    <ol aria-label={`${item.title} progress`} className="relative grid grid-cols-3">
                      {item.steps.map((step, index) => (
                        <li key={step} className="relative flex flex-col items-center text-center text-[0.7rem] leading-snug sm:text-[0.78rem]">
                          <span
                            className={cn(
                              "relative flex size-6 items-center justify-center rounded-full border-2 bg-white",
                              index === 0 && "border-green bg-green text-white",
                              index === 1 && "border-blue",
                              index === 2 && "border-line",
                            )}
                            aria-hidden="true"
                          >
                            {index === 0 && <Check size={12} strokeWidth={3} />}
                            {index === 1 && (
                              <>
                                <span className="absolute inset-0 animate-ping rounded-full border-2 border-blue/50" />
                                <span className="size-2 rounded-full bg-blue" />
                              </>
                            )}
                          </span>
                          <span className={cn("mt-3", index === 1 ? "font-medium text-blue-ink" : "text-ink-2")}>
                            <span className="sr-only">{index === 0 ? "Completed: " : index === 1 ? "Current stage: " : "Pending: "}</span>
                            {step}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-8 text-[0.7rem] text-ink-2">Event photographs use original source images. Other visuals are adapted from our campaign posters; some scenes are illustrative.</p>
      </Section>
    </div>
  );
}
