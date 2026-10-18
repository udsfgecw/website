import { Section } from "@/components/ui/section";
import { ORGANISATIONS } from "@/data/alliance";
import { cn } from "@/lib/utils";

export default function Alliance() {
  return (
    <Section
      id="alliance"
      label="The alliance"
      title="Two organisations. One front."
      intro="UDSF brings KSU and MSF together at GEC Wayanad, so students get one team to turn to."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {ORGANISATIONS.map((o) => (
          <article key={o.short} className={cn("flex flex-col rounded-2xl p-[clamp(1.75rem,4vw,3rem)] text-white", o.background)}>
            <h3 className="text-[length:clamp(3rem,6vw,4.5rem)] leading-none font-extrabold tracking-[-0.06em]">{o.short}</h3>
            <p className="mt-10 text-[1rem] font-semibold tracking-[-0.01em]">{o.name}</p>
            <p className="mt-2 max-w-[40ch] text-[0.95rem] leading-[1.6]">{o.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
