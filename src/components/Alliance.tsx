import { Section } from "@/components/Section";

const ORGS = [
  ["KSU", "Kerala Students Union", "The student organisation of the Congress movement in Kerala, active on campuses across the state for generations.", "bg-blue"],
  ["MSF", "Muslim Students Federation", "The student wing of the Indian Union Muslim League, with a strong presence in colleges throughout Kerala.", "bg-green"],
] as const;

export default function Alliance() {
  return (
    <Section
      id="alliance"
      label="The alliance"
      title="Two organisations. One front."
      intro="UDSF brings KSU and MSF together at GEC Wayanad, so students get one team to turn to."
      className="pt-0"
    >
      <div className="grid border-y border-line sm:grid-cols-2">
        {ORGS.map(([short, name, text, dot]) => (
          <article
            key={short}
            className="flex flex-col py-10 max-sm:border-b max-sm:last:border-b-0 sm:px-[clamp(1.5rem,4vw,3.5rem)] sm:first:border-r sm:first:pl-0 sm:last:pr-0"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-[length:clamp(3rem,6vw,4.5rem)] leading-none font-extrabold tracking-[-0.06em]">{short}</h3>
              <span className={`size-2.5 rounded-full ${dot}`} aria-hidden="true" />
            </div>
            <p className="label mt-8 text-ink">{name}</p>
            <p className="mt-3 max-w-[42ch] text-[0.95rem] leading-[1.6] text-ink-2">{text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
