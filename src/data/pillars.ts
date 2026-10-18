import { Bird, Building2, GraduationCap, HeartHandshake, Scale, Vote, type LucideIcon } from "lucide-react";

export interface Pillar {
  icon: LucideIcon;
  title: string;
  text: string;
}

/* What UDSF stands for, in the order the manifesto line names them. */
export const PILLARS: readonly Pillar[] = [
  {
    icon: HeartHandshake,
    title: "Student welfare",
    text: "Hostel, canteen, transport, fees and scholarships. We take everyday problems to the administration and stay on them until they are solved.",
  },
  {
    icon: Building2,
    title: "College development",
    text: "Better buildings, labs, roads and lighting for GEC Wayanad, pushed through the college, the MLA and the government.",
  },
  {
    icon: Bird,
    title: "Campus peace",
    text: "A campus without violence or intimidation, where every student can study, speak and take part without fear.",
  },
  {
    icon: Vote,
    title: "Campus democracy",
    text: "Free and fair union elections, and a real say for students in the decisions that shape their college.",
  },
  {
    icon: Scale,
    title: "Social justice",
    text: "Secular, inclusive politics that stands with every student, whatever their religion, caste, gender or background.",
  },
  {
    icon: GraduationCap,
    title: "Academic rights",
    text: "Exams, results, attendance and KTU issues, raised with the college and the university and followed until fixed.",
  },
];
