import { INSTAGRAM, SITE_DESCRIPTION, SITE_NAME, SITE_URL, absoluteUrl } from "@/config";
import { ORGANISATIONS } from "@/data/alliance";
import { NOTES_CATALOGUE, branchPath, semesterPath, type Branch } from "@/data/notes";
import { PILLARS } from "@/data/pillars";
import { ACHIEVEMENTS, PROGRAMS } from "@/data/progress";
import type { NotesModule } from "@/features/notes/types";

/* Files for crawlers and language models, written next to the pages by scripts/prerender.mjs. */

const xml = (value: string) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function buildSitemap(paths: readonly string[]) {
  const urls = paths.map((path) => `  <url>\n    <loc>${xml(absoluteUrl(path))}</loc>\n  </url>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

/** Crawlers that fetch pages to answer people's questions or to train models. All are welcome. */
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Amazonbot",
  "DuckAssistBot",
  "Meta-ExternalAgent",
  "MistralAI-User",
  "CCBot",
  "cohere-ai",
];

export function buildRobots() {
  const rules = "Allow: /\nDisallow: /api/";
  return [
    `# ${SITE_NAME}: every page is public. The JSON feed under /api/ only serves the home page.`,
    `User-agent: *\n${rules}`,
    `# Search assistants and AI crawlers may read and cite the site. A crawler with its own group ignores the group above, so the rules repeat.`,
    `${AI_CRAWLERS.map((agent) => `User-agent: ${agent}`).join("\n")}\n${rules}`,
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    "",
  ].join("\n\n");
}

const subjectsOf = (branch: Branch) =>
  branch.semesters.filter((semester) => semester.subjects.length > 0).flatMap((semester) => semester.subjects.map((subject) => ({ branch, semester, subject })));

const SUMMARY =
  "UDSF GECW is the student alliance of the Kerala Students Union (KSU) and the Muslim Students Federation (MSF) at Government Engineering College Wayanad (GEC Wayanad), Mananthavady, Kerala, India. It works on student welfare, college development, campus peace, campus democracy, social justice and academic rights, and shares free study notes for students at the college.";

/** The short guide to the site that language models read first (https://llmstxt.org). */
export function buildLlmsTxt() {
  const lines: string[] = [
    `# ${SITE_NAME}`,
    "",
    `> ${SUMMARY}`,
    "",
    "Everything here is public and free to read. Study notes are written for the KTU (APJ Abdul Kalam Technological University) 2024 scheme at GEC Wayanad. A longer version of this file, with every notes topic, is at " + `${SITE_URL}/llms-full.txt.`,
    "",
    "## Site",
    "",
    `- [Home](${absoluteUrl("/")}): who UDSF GECW is, what it stands for and how to join`,
    `- [Our progress](${absoluteUrl("/activities")}): what the union has raised, won and delivered on campus`,
    `- [Pro shows](${absoluteUrl("/events")}): live artist, DJ and band performances at college events`,
    `- [Notes](${absoluteUrl("/notes")}): free study notes by department and semester`,
    "",
    "## Study notes",
    "",
  ];
  for (const branch of NOTES_CATALOGUE) {
    const subjects = subjectsOf(branch);
    if (subjects.length === 0) continue;
    lines.push(`- [${branch.name} (${branch.short})](${absoluteUrl(branchPath(branch))}): ${branch.semesters.filter((s) => s.subjects.length > 0).map((s) => s.name).join(", ")}`);
    for (const { semester, subject } of subjects) {
      lines.push(`  - [${semester.name}: ${subject.course} (${subject.code})](${absoluteUrl(subject.href)}): ${subject.modules.length > 0 ? `notes in ${subject.modules.length} ${subject.modules.length === 1 ? "part" : "parts"}, plus syllabus` : "syllabus"}`);
    }
  }
  lines.push(
    "",
    "## Optional",
    "",
    `- [UDSF GECW on Instagram](${INSTAGRAM}): announcements, posters and contact`,
    `- [Sitemap](${SITE_URL}/sitemap.xml): every page on the site`,
    "",
  );
  return lines.join("\n");
}

/** Everything in llms.txt plus what the union stands for, what it has done, and the topics inside each notes module. */
export function buildLlmsFullTxt(modules: readonly NotesModule[]) {
  const byPath = new Map(modules.map((module) => [module.basePath, module]));
  const lines: string[] = [
    `# ${SITE_NAME}`,
    "",
    `> ${SUMMARY}`,
    "",
    SITE_DESCRIPTION,
    "",
    "## About",
    "",
    "UDSF GECW stands for the unity of two student organisations on one campus:",
    "",
    ...ORGANISATIONS.map((organisation) => `- ${organisation.name} (${organisation.short}): ${organisation.text}`),
    "",
    "### What UDSF stands for",
    "",
    ...PILLARS.map((pillar) => `- ${pillar.title}: ${pillar.text}`),
    "",
    `To join or get in touch, find the union at college or message it on Instagram: ${INSTAGRAM}`,
    "",
    "## Achievements",
    "",
    `Firsts and changes the union has delivered (full list with posters: ${absoluteUrl("/activities")}).`,
    "",
    ...ACHIEVEMENTS.map((achievement) => `- ${achievement.title} (${achievement.year})`),
    "",
    "## Programs and events",
    "",
    `Programs the union has organised (photos, reels and pro shows: ${absoluteUrl("/events")}).`,
    "",
    ...PROGRAMS.map((program) => `- ${program.title} (${program.year}, ${program.category})`),
    "",
    "## Study notes",
    "",
    `Free notes for students at GEC Wayanad, shared by UDSF. Each module is one long page; the topics below are its table of contents. Start at ${absoluteUrl("/notes")}.`,
    "",
  ];
  for (const branch of NOTES_CATALOGUE) {
    const withNotes = branch.semesters.filter((semester) => semester.subjects.length > 0);
    if (withNotes.length === 0) continue;
    lines.push(`### ${branch.name} (${branch.short})`, "", `Department page: ${absoluteUrl(branchPath(branch))}`, "");
    for (const semester of withNotes) {
      lines.push(`#### ${semester.name}`, "", `Semester page: ${absoluteUrl(semesterPath(branch, semester))}`, "");
      for (const subject of semester.subjects) {
        lines.push(`##### ${subject.course} (${subject.code})`, "", `- Subject page: ${absoluteUrl(subject.href)}`);
        if (subject.syllabusHref) lines.push(`- Syllabus: ${absoluteUrl(subject.syllabusHref)}`);
        for (const module of subject.modules) {
          // the moduleless "· Module N" detail repeats the name; ECE and EEE reuse CSE's module notes
          const detail = /· Module \d+$/.test(module.detail) ? "" : `. ${module.detail}`;
          lines.push(`- ${module.name}: ${absoluteUrl(module.href)}${detail}`);
          const shared = byPath.get(module.href) ?? byPath.get(module.href.replace(/^\/notes\/[a-z]+\//, "/notes/cse/"));
          const topics = shared?.chapters.map((chapter) => chapter.title);
          if (topics?.length) lines.push(`  - Topics: ${[...new Set(topics)].join("; ")}`);
        }
        lines.push("");
      }
    }
  }
  return lines.join("\n");
}
