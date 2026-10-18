import { Bird, Building2, GraduationCap, HeartHandshake, Scale, Vote } from "lucide-react";
import { Section } from "@/components/Section";

const FEATURES = [
  [HeartHandshake, "Student welfare", "Hostel, canteen, transport, fees and scholarships. We take everyday problems to the administration and stay on them until they are solved."],
  [Building2, "College development", "Better buildings, labs, roads and lighting for GEC Wayanad, pushed through the college, the MLA and the government."],
  [Bird, "Campus peace", "A campus without violence or intimidation, where every student can study, speak and take part without fear."],
  [Vote, "Campus democracy", "Free and fair union elections, and a real say for students in the decisions that shape their college."],
  [Scale, "Social justice", "Secular, inclusive politics that stands with every student, whatever their religion, caste, gender or background."],
  [GraduationCap, "Academic rights", "Exams, results, attendance and KTU issues, raised with the college and the university and followed until fixed."],
] as const;

export default function Work() {
  return (
    <Section
      id="work"
      label="What we do"
      title="Politics that puts students first."
      intro="UDSF stands for student welfare, a growing college and a peaceful campus, and takes every issue to the people who can fix it."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(([Icon, title, text], i) => (
          <li
            key={title}
            data-reveal
            style={{ "--i": i % 3 } as React.CSSProperties}
            className="group rounded-2xl border border-line p-6 transition-[border-color,box-shadow] duration-500 hover:border-[#d3d6db] hover:shadow-[0_24px_44px_-30px_rgba(20,22,26,0.35)]"
          >
            <span className="flex size-12 items-center justify-center rounded-[14px] bg-green-tint text-green-ink transition-[background-color,color,transform] duration-500 ease-out-expo group-hover:-translate-y-0.5 group-hover:bg-green group-hover:text-white">
              <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <h3 className="mt-10 text-[1.1rem] font-semibold tracking-[-0.02em]">{title}</h3>
            <p className="mt-2 max-w-[38ch] text-[0.9rem] leading-[1.6] text-ink-2">{text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
