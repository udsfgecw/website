import { Section } from "@/components/Section";

const FEATURES = [
  ["Student welfare", "Hostel, canteen, transport and fees, taken to the administration."],
  ["Academic concerns", "Exams, results, labs and KTU issues, followed until fixed."],
  ["College union", "Putting students who listen into the seats that decide."],
  ["Campaigns", "Conventions and events that bring the campus together."],
] as const;

export default function Work() {
  return (
    <Section
      id="work"
      label="What we do"
      title="Students who listen, organise and follow through."
      intro="So every voice at GEC Wayanad is heard where it counts, from the hostel mess to the college council."
    >
      <ul className="grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map(([title, text], i) => (
          <li
            key={title}
            className="border-b border-line py-7 sm:px-6 sm:max-lg:odd:border-r sm:max-lg:odd:pl-0 lg:border-b-0 lg:border-l lg:first:border-l-0 lg:first:pl-0"
          >
            <span className="label text-ink-2">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-10 text-[1.1rem] font-semibold tracking-[-0.02em]">{title}</h3>
            <p className="mt-2 max-w-[32ch] text-[0.9rem] leading-[1.55] text-ink-2">{text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
