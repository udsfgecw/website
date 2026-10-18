import type { NotesModule } from "../types";
import source from "./notes.md?raw";
import { titledPages } from "../titledPages";
import { PHYSICS_MODULE_1_PATH, PHYSICS_PATH } from "./path";

const { pages, chapters } = titledPages(source);

export const physicsModule1: NotesModule = {
  basePath: PHYSICS_MODULE_1_PATH,
  storageKey: "udsf:notes:cse:s1:physics-1:v1",
  title: "S1 CSE Physics · Module 1",
  trail: [
    { label: "NOTES", href: "/notes" },
    { label: "CSE", href: "/notes/cse" },
    { label: "S1", href: "/notes/cse/s1" },
    { label: "PHYSICS", href: PHYSICS_PATH },
    { label: "MODULE 1" },
  ],
  module: "Module 1",
  course: "Physics for Information Science",
  code: "GAPHT121",
  summary: "Electrical conductivity to superconductivity",
  source: "KTU GAPHT121 study pack, Module 1: Conductivity and superconductivity. Reorganised and rewritten from the lecture notes, with every worked example re-checked.",
  pages,
  chapters,
};
