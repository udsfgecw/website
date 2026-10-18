import { Section } from "@/components/Section";
import { cn } from "@/lib/utils";

const ORGS = [
  {
    short: "KSU",
    name: "Kerala Students Union",
    text: "The student organisation of the Congress movement in Kerala, active on campuses across the state for generations.",
    tint: "bg-blue-tint",
    ink: "text-blue-ink",
  },
  {
    short: "MSF",
    name: "Muslim Students Federation",
    text: "The student wing of the Indian Union Muslim League, with a strong presence in colleges throughout Kerala.",
    tint: "bg-green-tint",
    ink: "text-green-ink",
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
      <div className="grid gap-4 sm:grid-cols-2">
        {ORGS.map((o) => (
          <article
            key={o.short}
            className={cn("flex flex-col rounded-2xl p-[clamp(1.75rem,4vw,3rem)]", o.tint)}
          >
            <h3 className={cn("text-[length:clamp(3rem,6vw,4.5rem)] leading-none font-extrabold tracking-[-0.06em]", o.ink)}>{o.short}</h3>
            <p className="mt-10 text-[1rem] font-semibold tracking-[-0.01em] text-ink">{o.name}</p>
            <p className="mt-2 max-w-[40ch] text-[0.95rem] leading-[1.6] text-ink-2">{o.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
