import type { NotesModule } from "../types";
import source from "./notes.md?raw";
import { MATHS_MODULE_1_PATH, MATHS_PATH } from "./path";

/* Each page of the notes starts with a marker "<!-- page N | Title -->". The titles make the contents list. */
const sections = [...source.matchAll(/<!-- page (\d+) \| (.+?) -->([\s\S]*?)(?=<!-- page \d+ \||$)/g)].map((match) => ({
  number: Number(match[1]),
  title: match[2],
  content: match[3].trim().replace(/\n---\s*$/, ""),
}));

const pages = sections.map(({ number, content }) => ({ number, content }));

export const mathsModule1: NotesModule = {
  basePath: MATHS_MODULE_1_PATH,
  storageKey: "udsf:notes:cse:s1:maths:v3",
  title: "S1 CSE Maths · Module 1",
  trail: [
    { label: "NOTES", href: "/notes" },
    { label: "CSE", href: "/notes/cse" },
    { label: "S1", href: "/notes/cse/s1" },
    { label: "MATHS", href: MATHS_PATH },
    { label: "MODULE 1" },
  ],
  module: "Module 1",
  course: "Mathematics for Information Science 1",
  code: "GAMAT101",
  summary: "Limits to concavity",
  source: "ktunotes.in · GAMAT101, Module 1. Reorganised and rewritten from the class notes, with every worked example re-checked.",
  pages,
  chapters: sections.map(({ number, title }) => ({ page: number, title })),
};
