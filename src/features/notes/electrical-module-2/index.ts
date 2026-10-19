import type { NotesModule } from "../types";
import source from "./notes.md?raw";
import { titledPages } from "../titledPages";
import { ELECTRICAL_MODULE_2_PATH } from "./path";
const { pages, chapters } = titledPages(source);
export const electricalmodule2: NotesModule = {
  basePath: ELECTRICAL_MODULE_2_PATH,
  storageKey: "udsf:notes:cse:s1:electrical-2:v1",
  title: "S1 CSE Electrical and Electronics Engineering · Module 2",
  trail: [
    { label: "NOTES", href: "/notes" },
    { label: "CSE", href: "/notes/cse" },
    { label: "S1", href: "/notes/cse/s1" },
    { label: "ELECTRICAL AND ELECTRONICS ENGINEERING", href: "/notes/cse/s1/electrical" },
    { label: "MODULE 2" },
  ],
  module: "Module 2", course: "Introduction to Electrical and Electronics Engineering", code: "GXEST104", summary: "Module 2",
  source: "Drafted with notebook-agent (ADK, gemini-4-argon) from the KTU GXEST104 syllabus and its listed reference textbooks. Not yet checked against the books.", pages, chapters,
};
