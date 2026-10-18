import type { NotesModule } from "../types";
import source from "./notes.md?raw";
import { titledPages } from "../titledPages";
import { PHYSICS_PATH } from "../physics-module-1/path";
import { PHYSICS_MODULE_3_PATH } from "./path";

const { pages, chapters } = titledPages(source);

export const physicsModule3: NotesModule = {
  basePath: PHYSICS_MODULE_3_PATH,
  storageKey: "udsf:notes:cse:s1:physics-3:v1",
  title: "S1 CSE Physics · Module 3",
  trail: [
    { label: "NOTES", href: "/notes" },
    { label: "CSE", href: "/notes/cse" },
    { label: "S1", href: "/notes/cse/s1" },
    { label: "PHYSICS", href: PHYSICS_PATH },
    { label: "MODULE 3" },
  ],
  module: "Module 3",
  course: "Physics for Information Science",
  code: "GAPHT121",
  summary: "Intrinsic semiconductors to the p-n junction",
  source: "KTU GAPHT121 study pack, Module 3: Semiconductor physics. Reorganised and rewritten from the lecture notes, with every worked example re-checked.",
  pages,
  chapters,
};
