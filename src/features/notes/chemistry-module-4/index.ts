import type { NotesModule } from "../types";
import source from "./notes.md?raw";
import { titledPages } from "../titledPages";
import { CHEMISTRY_MODULE_4_PATH } from "./path";
const { pages, chapters } = titledPages(source);
export const chemistrymodule4: NotesModule = {
  basePath: CHEMISTRY_MODULE_4_PATH,
  storageKey: "udsf:notes:cse:s1:chemistry-4:v1",
  title: "S1 CSE Chemistry · Module 4",
  trail: [
    { label: "NOTES", href: "/notes" },
    { label: "CSE", href: "/notes/cse" },
    { label: "S1", href: "/notes/cse/s1" },
    { label: "CHEMISTRY", href: "/notes/cse/s1/chemistry" },
    { label: "MODULE 4" },
  ],
  module: "Module 4", course: "Engineering Chemistry", code: "GXCYT122", summary: "Water technology, pollution, and environmental chemistry",
  source: "KTU GXCYT122 study notes, imported from the provided complete study pack.", pages, chapters,
};
