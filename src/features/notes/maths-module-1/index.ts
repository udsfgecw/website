import type { NotesModule } from "../types";
import source from "./notes.md?raw";
import { MATHS_MODULE_1_PATH } from "./path";
import { titledPages } from "../titledPages";

const { pages, chapters } = titledPages(source);

export const mathsModule1: NotesModule = {
  basePath: MATHS_MODULE_1_PATH,
  storageKey: "udsf:notes:cse:s1:maths:v3",
  title: "S1 CSE Maths · Module 1",
  trail: [
    { label: "NOTES", href: "/notes" },
    { label: "CSE", href: "/notes#cse" },
    { label: "S1", href: "/notes#cse-s1" },
    { label: "MATHS" },
  ],
  module: "Module 1",
  course: "Mathematics for Information Science 1",
  code: "GAMAT101",
  summary: "Limits to concavity",
  source: "ktunotes.in · GAMAT101, Module 1. Reorganised and rewritten from the class notes, with every worked example re-checked.",
  pages,
  chapters,
};
