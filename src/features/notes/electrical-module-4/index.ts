import type { NotesModule } from "../types";
import source from "./notes.md?raw";
import { titledPages } from "../titledPages";
import { ELECTRICAL_MODULE_4_PATH } from "./path";
const { pages, chapters } = titledPages(source);
export const electricalmodule4: NotesModule = {
  basePath: ELECTRICAL_MODULE_4_PATH,
  storageKey: "udsf:notes:cse:s1:electrical-4:v1",
  title: "S1 CSE Electrical and Electronics Engineering · Module 4",
  trail: [
    { label: "NOTES", href: "/notes" },
    { label: "CSE", href: "/notes/cse" },
    { label: "S1", href: "/notes/cse/s1" },
    { label: "ELECTRICAL AND ELECTRONICS ENGINEERING", href: "/notes/cse/s1/electrical" },
    { label: "MODULE 4" },
  ],
  module: "Module 4", course: "Introduction to Electrical and Electronics Engineering", code: "GXEST104", summary: "Communication, instrumentation and modern electronics",
  source: "KTU 2024 Scheme, GXEST104 official syllabus. Prepared to cover Module 4 topics and introductory case studies.", pages, chapters,
};
