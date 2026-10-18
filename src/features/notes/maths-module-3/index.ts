import type { NotesModule } from "../types";
import source from "./notes.md?raw";
import { MATHS_PATH } from "../maths-module-1/path";
import { titledPages } from "../titledPages";
import { MATHS_MODULE_3_PATH } from "./path";

const { pages, chapters } = titledPages(source);

export const mathsModule3: NotesModule = {
  basePath: MATHS_MODULE_3_PATH,
  storageKey: "udsf:notes:cse:s1:maths-3:v1",
  title: "S1 CSE Maths · Module 3",
  trail: [
    { label: "NOTES", href: "/notes" },
    { label: "CSE", href: "/notes/cse" },
    { label: "S1", href: "/notes/cse/s1" },
    { label: "MATHS", href: MATHS_PATH },
    { label: "MODULE 3" },
  ],
  module: "Module 3",
  course: "Mathematics for Information Science 1",
  code: "GAMAT101",
  summary: "Three-variable chain rule to directional derivatives",
  source: "ktunotes.in · GAMAT101, Module 3. Reorganised and rewritten from the class notes, with every worked example re-checked.",
  pages,
  chapters,
};
