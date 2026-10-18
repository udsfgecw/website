import type { NotesModule } from "../types";
import source from "./notes.md?raw";
import { titledPages } from "../titledPages";
import { CHEMISTRY_MODULE_3_PATH } from "./path";
const { pages, chapters } = titledPages(source);
export const chemistrymodule3: NotesModule = {
  basePath: CHEMISTRY_MODULE_3_PATH,
  storageKey: "udsf:notes:cse:s1:chemistry-3:v1",
  title: "S1 CSE Chemistry · Module 3",
  trail: [
    { label: "NOTES", href: "/notes" },
    { label: "CSE", href: "/notes/cse" },
    { label: "S1", href: "/notes/cse/s1" },
    { label: "CHEMISTRY", href: "/notes/cse/s1/chemistry" },
    { label: "MODULE 3" },
  ],
  module: "Module 3", course: "Engineering Chemistry", code: "GXCYT122", summary: "Module 3",
  source: "KTU GXCYT122 study notes, imported from the provided complete study pack.", pages, chapters,
};
