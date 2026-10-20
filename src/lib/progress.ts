/* How the progress page sorts the union's work: by theme, and by how far each piece of work got.
   Both read the curated ranking (scripts/rank-activities.mjs), never the raw captions. */
import type { ActivityRanking } from "@/data/activity-ranking";

export type Theme = "campus" | "hostel" | "academics" | "health" | "admissions" | "community" | "achievements" | "voice";

/* First match wins, so the narrower themes come first. */
const THEME_RULES: [Theme, RegExp][] = [
  ["admissions", /keam|admission|lateral|\blet\b|let-|allotment|rank|answer key|aspirant/i],
  ["hostel", /hostel/i],
  ["health", /health|chickenpox|jaundice|covid|disease|shigella|safety|wildlife|stray|weather|narcotic|drug|snake|kiosk|outbreak|precaution|lockdown/i],
  ["academics", /exam|syllabus|class|semester|fee|topper|academic|project|study|question|timetable|schedule|internship|placement|techsta|result/i],
  ["campus", /atm|water|wifi|light|lift|board|bus|pathway|auditorium|fan|generator|napkin|gym|infrastructure|canteen|road|library|facilit|ground|toilet|parking|campus/i],
  ["community", /flood|karma|charity|kit|mizhi|relief|donat|blood|old-age|supplement|school/i],
  ["achievements", /sports|team|runner|win|champion|congrat|medal|award|kho|basketball|handball|tennis|football|cricket/i],
];

export const THEMES: Record<Theme, { name: string; blurb: string }> = {
  campus: { name: "Campus & facilities", blurb: "ATMs, water, lights, Wi-Fi and the buildings we use every day" },
  hostel: { name: "Hostels", blurb: "Timings, rooms, safety and the ladies' hostel" },
  academics: { name: "Academics & exams", blurb: "Schedules, fees, refunds and the people who topped them" },
  health: { name: "Health & safety", blurb: "Outbreaks, wildlife, weather and a drug-free campus" },
  admissions: { name: "Admissions help", blurb: "KEAM and lateral-entry help desks for every new batch" },
  community: { name: "Community & relief", blurb: "Flood kits, school kits and reaching beyond the gate" },
  achievements: { name: "Wins & honours", blurb: "Teams and students who made GECW proud" },
  voice: { name: "Student voice", blurb: "Protests, representations and standing up for students" },
};
export const THEME_KEYS = Object.keys(THEMES) as Theme[];

export const themeOf = (r: Pick<ActivityRanking, "initiative" | "title">): Theme =>
  THEME_RULES.find(([, rule]) => rule.test(`${r.initiative} ${r.title}`))?.[0] ?? "voice";

/* The ranking's outcome score: 0 notice, 1 request, 2 commitment, 3 service running, 4–5 completed. */
export type Stage = "raised" | "promised" | "running" | "delivered";

/** null for notices and greetings, which are not a step in any piece of work */
export const stageOf = ({ outcome }: Pick<ActivityRanking, "outcome">): Stage | null =>
  outcome >= 4 ? "delivered" : outcome === 3 ? "running" : outcome === 2 ? "promised" : outcome === 1 ? "raised" : null;
