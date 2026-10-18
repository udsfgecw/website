import { Check } from "lucide-react";
import { Label } from "@/components/Section";
import { ACHIEVEMENTS, FOLLOW_UPS, type Achievement } from "@/data/progress";
import { cn } from "@/lib/utils";

const src = (image: string) => `${import.meta.env.BASE_URL}assets/progress/${image}`;

/* Photo, or for the web magazine (no photo yet) a typographic cover in the alliance gradient. */
function Picture({ a, className }: { a: Achievement; className?: string }) {
  if (!a.image)
    return (
      <div
        className={cn("flex items-end rounded-2xl bg-[linear-gradient(135deg,var(--color-green),var(--color-blue))] p-6 text-white", className)}
        aria-hidden="true"
      >
        <span className="text-[length:clamp(2.2rem,3.6vw,2.8rem)] leading-[0.92] font-extrabold tracking-[-0.055em]">
          Web
          <br />
          magazine
        </span>
      </div>
    );
  return (
    <img
      src={src(a.image)}
      alt={`${a.location}, ${a.photo ? "original event photograph" : "adapted from the UDSF campaign poster"}`}
      width={1200}
      height={800}
      loading="lazy"
      decoding="async"
      className={cn("w-full rounded-2xl bg-paper object-cover", className)}
    />
  );
}

function Caption({ a, large }: { a: Achievement; large?: boolean }) {
  return (
    <>
      <p className="label text-green-ink">{a.location}</p>
      <h3
        className={cn(
          "mt-2.5 font-semibold text-balance",
          large ? "text-[length:clamp(1.8rem,3vw,2.6rem)] leading-[1.05] tracking-[-0.04em]" : "text-[1.2rem] leading-[1.2] tracking-[-0.025em]",
        )}
      >
        {a.title}
      </h3>
      <p className={cn("mt-3 text-ink-2", large ? "max-w-[40ch] text-[1rem] leading-[1.6]" : "text-[0.92rem] leading-[1.6]")}>{a.description}</p>
    </>
  );
}

/* Wide row: a large picture with the caption beside it; `flip` puts the caption on the left. */
function Feature({ a, flip }: { a: Achievement; flip?: boolean }) {
  return (
    <article className="grid items-end gap-x-12 gap-y-6 lg:grid-cols-12">
      <Picture a={a} className={cn("aspect-[16/10] lg:col-span-8", flip && "lg:order-2")} />
      <div className={cn("lg:col-span-4", flip && "lg:order-1")}>
        <Caption a={a} large />
      </div>
    </article>
  );
}

const STAGE = ["Done", "Now", "Next"];

export default function Progress() {
  const first = ACHIEVEMENTS[0];
  const last = ACHIEVEMENTS[ACHIEVEMENTS.length - 1];
  const middle = ACHIEVEMENTS.slice(1, -1);

  return (
    <section id="progress" aria-labelledby="progress-title" className="border-y border-line bg-[#fafbf9]">
      <div className="wrap py-[clamp(5rem,11vw,9rem)]">
        <Label>Our progress</Label>
        <h2
          id="progress-title"
          className="mt-6 max-w-[26ch] text-[length:clamp(2rem,4.6vw,3.9rem)] leading-[1.08] font-semibold tracking-[-0.045em] text-balance text-ink"
        >
          What we’ve brought to campus.{" "}
          <span className="text-ink/30">Better facilities, new opportunities and work that makes a difference to students.</span>
        </h2>

        <div className="mt-[clamp(3.5rem,7vw,6rem)] flex flex-col gap-[clamp(3.5rem,6vw,5.5rem)]">
          <Feature a={first} />

          {/* nine items, three to a row on wider screens */}
          <ul className="grid gap-x-8 gap-y-14 md:grid-cols-3">
            {middle.map((a) => (
              <li key={a.title}>
                <article>
                  <Picture a={a} className="aspect-[4/3]" />
                  <div className="mt-5">
                    <Caption a={a} />
                  </div>
                </article>
              </li>
            ))}
          </ul>

          <Feature a={last} flip />
        </div>

        <div className="mt-[clamp(5rem,9vw,8rem)]">
          <h2 className="max-w-[26ch] text-[length:clamp(1.6rem,3vw,2.5rem)] leading-[1.1] font-semibold tracking-[-0.04em] text-balance">
            Work in progress. <span className="text-ink/30">Following through to the finish.</span>
          </h2>
          <ul className="mt-10 grid gap-x-12 gap-y-12 lg:grid-cols-2">
            {FOLLOW_UPS.map((item) => (
              <li key={item.title}>
                <h3 className="text-[1.2rem] font-semibold tracking-[-0.025em]">{item.title}</h3>
                <p className="mt-2 max-w-[55ch] text-[0.92rem] leading-[1.6] text-ink-2">{item.description}</p>

                {/* three-part bar: done, current, still to come */}
                <ol aria-label={`${item.title} progress`} className="mt-7 grid grid-cols-3 gap-2">
                  {item.steps.map((step, index) => (
                    <li key={step}>
                      <div className="h-1 overflow-hidden rounded-full bg-line">
                        {index < 2 && <div className={cn("h-full rounded-full", index === 0 ? "bg-green" : "bg-blue")} />}
                      </div>
                      <p className={cn("label mt-3", index === 0 ? "text-green-ink" : index === 1 ? "text-blue-ink" : "text-ink-2/70")}>
                        {STAGE[index]}
                      </p>
                      <p className={cn("mt-1 flex items-center gap-1.5 text-[0.85rem] leading-snug", index === 2 ? "text-ink-2" : "font-medium text-ink")}>
                        <span className="sr-only">{index === 0 ? "Completed: " : index === 1 ? "Current stage: " : "Pending: "}</span>
                        {step}
                        {index === 0 && <Check size={14} strokeWidth={2.5} className="text-green" aria-hidden="true" />}
                      </p>
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-14 text-[0.75rem] text-ink-2">
          Event photographs use original source images. Other visuals are adapted from our campaign posters; some scenes are illustrative.
        </p>
      </div>
    </section>
  );
}
