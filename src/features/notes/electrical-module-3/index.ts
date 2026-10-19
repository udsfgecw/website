import type { NotesModule } from "../types";
import source from "./notes.md?raw";
import { titledPages } from "../titledPages";
import { ELECTRICAL_MODULE_3_PATH } from "./path";
const { pages, chapters } = titledPages(source);
export const electricalmodule3: NotesModule = {
  basePath: ELECTRICAL_MODULE_3_PATH,
  storageKey: "udsf:notes:cse:s1:electrical-3:v1",
  title: "S1 CSE Electrical and Electronics Engineering · Module 3",
  trail: [
    { label: "NOTES", href: "/notes" },
    { label: "CSE", href: "/notes/cse" },
    { label: "S1", href: "/notes/cse/s1" },
    { label: "ELECTRICAL AND ELECTRONICS ENGINEERING", href: "/notes/cse/s1/electrical" },
    { label: "MODULE 3" },
  ],
  module: "Module 3", course: "Introduction to Electrical and Electronics Engineering", code: "GXEST104", summary: "Module 3",
  source: "Drafted with notebook-agent (ADK, gemini-4-argon) from the KTU GXEST104 syllabus and its listed reference textbooks. Not yet checked against the books.", pages, chapters,
};
