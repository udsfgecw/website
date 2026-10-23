import type { NotesModule } from "../types";
import source from "./notes.md?raw";
import { titledPages } from "../titledPages";
import { ELECTRICAL_MODULE_1_PATH } from "./path";
const { pages, chapters } = titledPages(source);
export const electricalmodule1: NotesModule = {
  basePath: ELECTRICAL_MODULE_1_PATH,
  storageKey: "udsf:notes:cse:s1:electrical-1:v1",
  title: "S1 CSE Electrical and Electronics Engineering · Module 1",
  trail: [
    { label: "NOTES", href: "/notes" },
    { label: "CSE", href: "/notes/cse" },
    { label: "S1", href: "/notes/cse/s1" },
    { label: "ELECTRICAL AND ELECTRONICS ENGINEERING", href: "/notes/cse/s1/electrical" },
    { label: "MODULE 1" },
  ],
  module: "Module 1", course: "Introduction to Electrical and Electronics Engineering", code: "GXEST104", summary: "Basic circuit elements, DC network analysis and Kirchhoff's laws",
  source: "KTU GXEST104 study notes, imported from the provided complete study pack.", pages, chapters,
};
