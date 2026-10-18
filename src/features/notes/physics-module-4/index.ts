import type { NotesModule } from "../types";
import source from "./notes.md?raw";
import { titledPages } from "../titledPages";
import { PHYSICS_PATH } from "../physics-module-1/path";
import { PHYSICS_MODULE_4_PATH } from "./path";

const { pages, chapters } = titledPages(source);

export const physicsModule4: NotesModule = {
  basePath: PHYSICS_MODULE_4_PATH,
  storageKey: "udsf:notes:cse:s1:physics-4:v1",
  title: "S1 CSE Physics · Module 4",
  trail: [
    { label: "NOTES", href: "/notes" },
    { label: "CSE", href: "/notes/cse" },
    { label: "S1", href: "/notes/cse/s1" },
    { label: "PHYSICS", href: PHYSICS_PATH },
    { label: "MODULE 4" },
  ],
  module: "Module 4",
  course: "Physics for Information Science",
  code: "GAPHT121",
  summary: "Rectifiers to solar cells and lasers",
  source: "KTU GAPHT121 study pack, Module 4: Semiconductor devices. Reorganised and rewritten from the lecture notes, with every worked example re-checked.",
  pages,
  chapters,
};
