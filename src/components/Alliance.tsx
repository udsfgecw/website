import { Plus } from "lucide-react";
import { Section } from "@/components/Section";
import { cn } from "@/lib/utils";

const ORGS = [
  {
    short: "KSU",
    name: "Kerala Students Union",
    text: "The student organisation of the Congress movement in Kerala, active on campuses across the state for generations.",
    tint: "bg-blue-tint",
    ink: "text-blue-ink",
    dot: "bg-blue",
  },
  {
    short: "MSF",
    name: "Muslim Students Federation",
    text: "The student wing of the Indian Union Muslim League, with a strong presence in colleges throughout Kerala.",
    tint: "bg-green-tint",
    ink: "text-green-ink",
    dot: "bg-green",
  },
] as const;

export default function Alliance() {
  return (
    <Section
      id="alliance"
      label="The alliance"
      title="Two organisations. One front."
      intro="UDSF brings KSU and MSF together at GEC Wayanad, so students get one team to turn to."
    >
      <div className="relative grid gap-4 sm:grid-cols-2">
        {ORGS.map((o, i) => (
          <article
            key={o.short}
            data-reveal
            style={{ "--i": i } as React.CSSProperties}
            className={cn("group relative flex flex-col overflow-hidden rounded-3xl p-[clamp(1.75rem,4vw,3rem)]", o.tint)}
          >
            {/* oversized initials bleeding off the corner */}
            <span
              className={cn(
                "pointer-events-none absolute -right-4 -bottom-10 text-[length:clamp(9rem,18vw,15rem)] leading-none font-extrabold tracking-[-0.07em] opacity-[0.07] transition-transform duration-[1200ms] ease-out-expo select-none group-hover:-translate-x-3 group-hover:-translate-y-2",
                o.ink,
              )}
              aria-hidden="true"
            >
              {o.short}
            </span>
            <div className="flex items-center justify-between">
              <h3 className={cn("text-[length:clamp(3rem,6vw,4.5rem)] leading-none font-extrabold tracking-[-0.06em]", o.ink)}>{o.short}</h3>
              <span className={cn("size-2.5 rounded-full", o.dot)} aria-hidden="true" />
            </div>
            <p className="label mt-10 text-ink">{o.name}</p>
            <p className="relative mt-3 max-w-[40ch] text-[0.95rem] leading-[1.6] text-ink-2">{o.text}</p>
          </article>
        ))}
        {/* the join between the two cards */}
        <span
          className="absolute top-1/2 left-1/2 hidden size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-ink text-white sm:flex"
          aria-hidden="true"
        >
          <Plus size={18} strokeWidth={2.5} />
        </span>
      </div>
    </Section>
  );
}
