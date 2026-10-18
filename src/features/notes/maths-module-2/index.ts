import type { NotesModule } from "../types";
import source from "./notes.md?raw";
import { MATHS_PATH } from "../maths-module-1/path";
import { MATHS_MODULE_2_PATH } from "./path";
import { sourcePages } from "../sourcePages";

export const mathsModule2: NotesModule = {
  basePath: MATHS_MODULE_2_PATH,
  storageKey: "udsf:notes:cse:s1:maths-2:v1",
  title: "S1 CSE Maths · Module 2",
  trail: [
    { label: "NOTES", href: "/notes" },
    { label: "CSE", href: "/notes/cse" },
    { label: "S1", href: "/notes/cse/s1" },
    { label: "MATHS", href: MATHS_PATH },
    { label: "MODULE 2" },
  ],
  module: "Module 2",
  course: "Mathematics for Information Science 1",
  code: "GAMAT101",
  summary: "Partial derivatives to level curves",
  source: "ktunotes.in · GAMAT101, Module 2 · Original source pages 2–24.",
  pages: sourcePages(source),
  chapters: [
    { page: 1, title: "Limits of two-variable functions" },
    { page: 3, title: "Continuity" },
    { page: 4, title: "Partial derivatives" },
    { page: 7, title: "Slope of the curve" },
    { page: 8, title: "Second order partial derivatives" },
    { page: 11, title: "Chain rule for two variables" },
    { page: 12, title: "Chain rule for partial derivatives" },
    { page: 15, title: "Implicit differentiation" },
    { page: 22, title: "Level curves" },
  ],
};
