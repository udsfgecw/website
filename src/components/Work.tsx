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
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map(([Icon, title, text], i) => (
          <li
            key={title}
            data-reveal
            style={{ "--i": i } as React.CSSProperties}
            className="group rounded-2xl border border-line p-6 transition-[border-color,box-shadow] duration-500 hover:border-[#d3d6db] hover:shadow-[0_24px_44px_-30px_rgba(20,22,26,0.35)]"
          >
            <span className="flex size-12 items-center justify-center rounded-[14px] bg-green-tint text-green-ink transition-[background-color,color,transform] duration-500 ease-out-expo group-hover:-translate-y-0.5 group-hover:bg-green group-hover:text-white">
              <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <h3 className="mt-10 text-[1.1rem] font-semibold tracking-[-0.02em]">{title}</h3>
            <p className="mt-2 max-w-[32ch] text-[0.9rem] leading-[1.55] text-ink-2">{text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
