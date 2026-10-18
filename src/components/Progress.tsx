import { Check } from "lucide-react";
import { Section } from "@/components/Section";
import { ACHIEVEMENTS, FOLLOW_UPS, type Achievement } from "@/data/progress";
import { cn } from "@/lib/utils";

const src = (image: string) => `${import.meta.env.BASE_URL}assets/progress/${image}`;

function Img({ a, className }: { a: Achievement; className?: string }) {
  return (
    <img
      src={src(a.image!)}
      alt={`${a.location}, ${a.photo ? "original event photograph" : "adapted from the UDSF campaign poster"}`}
      width={1200}
      height={800}
      loading="lazy"
      decoding="async"
      className={cn("size-full object-cover transition-transform duration-[1400ms] ease-out-expo group-hover:scale-[1.05]", className)}
    />
  );
}

const card =
  "group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-[transform,box-shadow] duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-[0_28px_50px_-30px_rgba(20,22,26,0.35)]";

function Body({ a }: { a: Achievement }) {
  return (
    <div className="flex flex-1 flex-col p-6">
      <p className="label text-green-ink">{a.location}</p>
      <h4 className="mt-2.5 max-w-[22ch] text-[1.3rem] leading-[1.15] font-medium tracking-[-0.035em] text-balance">{a.title}</h4>
      <p className="mt-3 text-[0.85rem] leading-[1.65] text-ink-2">{a.description}</p>
    </div>
  );
}

/* Large photo card with the copy laid over a dark fade. */
function Featured({ a }: { a: Achievement }) {
  return (
    <article className="group relative isolate flex h-full min-h-[440px] flex-col justify-end overflow-hidden rounded-2xl bg-ink text-white">
      <div className="absolute inset-0 -z-10">
        <Img a={a} />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,transparent_35%,rgba(10,12,14,0.6)_60%,rgba(10,12,14,0.9)_100%)]" />
      <div className="p-[clamp(1.5rem,3vw,2.5rem)]">
        <p className="label text-white/70">{a.location}</p>
        <h4 className="mt-3 max-w-[14ch] text-[length:clamp(2rem,3.6vw,3rem)] leading-[1] font-semibold tracking-[-0.045em] text-balance">{a.title}</h4>
        <p className="mt-4 max-w-[46ch] text-[0.92rem] leading-[1.6] text-white/80">{a.description}</p>
      </div>
    </article>
  );
}

/* Wide card: photo on the left, copy on the right (stacks below lg). */
function Wide({ a }: { a: Achievement }) {
  return (
    <article className={cn(card, "lg:grid lg:grid-cols-[1.35fr_1fr]")}>
      <div className="aspect-[16/9] overflow-hidden lg:aspect-auto">
        <Img a={a} className="object-[50%_40%]" />
      </div>
      <div className="flex flex-col justify-center">
        <Body a={a} />
      </div>
    </article>
  );
}

function Standard({ a }: { a: Achievement }) {
  return (
    <article className={card}>
      <div className="aspect-[16/9] overflow-hidden">
        {a.image ? (
          <Img a={a} />
        ) : (
          // no photo yet: a typographic cover
          <div className="flex size-full items-end bg-green p-6 text-white transition-transform duration-[1400ms] ease-out-expo group-hover:scale-[1.05]" aria-hidden="true">
            <span className="text-[length:clamp(2.2rem,3.6vw,2.8rem)] leading-[0.92] font-extrabold tracking-[-0.055em]">
              Web
              <br />
              magazine
            </span>
          </div>
        )}
      </div>
      <Body a={a} />
    </article>
  );
}

/* Bento placement. lg (3 cols): the first card is 2×2 and the last spans 2, so 15 cells fill exactly.
   md (2 cols): the first card spans the row and the rest pair up. */
const placement = (i: number, last: boolean) => (i === 0 ? "md:col-span-2 lg:row-span-2" : last ? "lg:col-span-2" : "");

const STAGE = ["Done", "Now", "Next"];

export default function Progress() {
  return (
    <div className="border-y border-line bg-[#fafbf9]">
      <Section
        id="progress"
        label="In action"
        title="Our Progress"
        intro="What we’ve brought to campus. Better facilities, new opportunities and work that makes a difference to students."
      >
        <div className="mb-6 flex items-baseline justify-between gap-3">
          <h3 className="text-[length:clamp(1.4rem,2.4vw,1.75rem)] font-semibold tracking-[-0.035em]">Delivered</h3>
          <span className="text-[0.85rem] text-ink-2">{ACHIEVEMENTS.length} initiatives</span>
        </div>

        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((a, i) => {
            const last = i === ACHIEVEMENTS.length - 1;
            const Card = i === 0 ? Featured : last ? Wide : Standard;
            return (
              <li key={a.title} data-reveal style={{ "--i": i % 3 } as React.CSSProperties} className={placement(i, last)}>
                <Card a={a} />
              </li>
            );
          })}
        </ul>

        <div className="mt-20 mb-6 flex items-baseline justify-between gap-3">
          <h3 className="text-[length:clamp(1.4rem,2.4vw,1.75rem)] font-semibold tracking-[-0.035em]">Work in progress</h3>
          <span className="text-[0.85rem] text-ink-2">Following through to the finish</span>
        </div>
        <ul className="grid gap-4 lg:grid-cols-2">
          {FOLLOW_UPS.map((item, n) => (
            <li key={item.title} data-reveal style={{ "--i": n } as React.CSSProperties}>
              <article className="h-full rounded-2xl border border-line bg-white p-6 lg:p-8">
                <h4 className="text-[1.4rem] font-medium tracking-[-0.035em]">{item.title}</h4>
                <p className="mt-2 max-w-[55ch] text-[0.88rem] leading-[1.65] text-ink-2">{item.description}</p>

                {/* three-part bar: done, current, still to come */}
                <ol aria-label={`${item.title} progress`} className="mt-8 grid grid-cols-3 gap-2">
                  {item.steps.map((step, index) => (
                    <li key={step}>
                      <div className="h-1 overflow-hidden rounded-full bg-line">
                        {index < 2 && (
                          <div
                            className={cn("track-fill h-full rounded-full", index === 0 ? "bg-green" : "bg-blue")}
                            style={{ "--to": "100%", transitionDelay: `${0.35 + index * 0.5}s` } as React.CSSProperties}
                          />
                        )}
                      </div>
                      <p className={cn("label mt-3", index === 0 ? "text-green-ink" : index === 1 ? "text-blue-ink" : "text-ink-2/70")}>
                        {STAGE[index]}
                      </p>
                      <p className={cn("mt-1 flex items-center gap-1.5 text-[0.82rem] leading-snug", index === 2 ? "text-ink-2" : "font-medium text-ink")}>
                        <span className="sr-only">{index === 0 ? "Completed: " : index === 1 ? "Current stage: " : "Pending: "}</span>
                        {step}
                        {index === 0 && <Check size={14} strokeWidth={2.5} className="text-green" aria-hidden="true" />}
                      </p>
                    </li>
                  ))}
                </ol>
              </article>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-[0.75rem] text-ink-2">Event photographs use original source images. Other visuals are adapted from our campaign posters; some scenes are illustrative.</p>
      </Section>
    </div>
  );
}
