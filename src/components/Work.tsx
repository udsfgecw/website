import { GraduationCap, HeartHandshake, Megaphone, Vote } from "lucide-react";
import { Section } from "@/components/Section";

const FEATURES = [
  [HeartHandshake, "Student welfare", "Hostel, canteen, transport and fees, taken to the administration."],
  [GraduationCap, "Academic concerns", "Exams, results, labs and KTU issues, followed until fixed."],
  [Vote, "College union", "Putting students who listen into the seats that decide."],
  [Megaphone, "Campaigns", "Conventions and events that bring the campus together."],
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
        {FEATURES.map(([Icon, title, text], i) => (
          <li
            key={title}
            data-reveal
            style={{ "--i": i } as React.CSSProperties}
            className="group relative border-b border-line py-7 sm:px-6 sm:max-lg:odd:border-r sm:max-lg:odd:pl-0 lg:border-b-0 lg:border-l lg:first:border-l-0 lg:first:pl-0"
          >
            {/* accent line that draws across the top edge on hover */}
            <span
              className="absolute inset-x-0 -top-px h-0.5 origin-left scale-x-0 bg-[linear-gradient(90deg,var(--color-green),var(--color-blue))] transition-transform duration-700 ease-out-expo group-hover:scale-x-100 sm:inset-x-6 sm:max-lg:odd:left-0 lg:group-first:left-0"
              aria-hidden="true"
            />
            <div className="flex items-start justify-between">
              <span className="flex size-11 items-center justify-center rounded-xl bg-green-tint text-green-ink transition-[background-color,color,transform] duration-500 ease-out-expo group-hover:-translate-y-1 group-hover:bg-ink group-hover:text-white">
                <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span className="label text-ink-2">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="mt-8 text-[1.1rem] font-semibold tracking-[-0.02em]">{title}</h3>
            <p className="mt-2 max-w-[32ch] text-[0.9rem] leading-[1.55] text-ink-2">{text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
