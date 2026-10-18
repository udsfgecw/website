import type { NotesModule } from "../types";
import source from "./notes.md?raw";
import { MATHS_MODULE_1_PATH } from "./path";
import { sourcePages } from "../sourcePages";

export const mathsModule1: NotesModule = {
  basePath: MATHS_MODULE_1_PATH,
  storageKey: "udsf:notes:cse:s1:maths:v2",
  legacyStorageKey: "udsf:notes:cse:s1:maths:v1",
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
  source: "ktunotes.in · GAMAT101, Module 1 · Original source pages 2–35.",
  pages: sourcePages(source),
  chapters: [
    { page: 1, title: "Limits of function values" },
    { page: 2, title: "Limit laws" },
    { page: 4, title: "Sandwich theorem" },
    { page: 11, title: "Continuity" },
    { page: 12, title: "One-sided limits" },
    { page: 15, title: "Derivatives" },
    { page: 17, title: "Rules of differentiation" },
    { page: 19, title: "Higher order derivatives" },
    { page: 21, title: "Instantaneous rate of change" },
    { page: 22, title: "Chain rule" },
    { page: 24, title: "Implicit differentiation" },
    { page: 28, title: "Tangents & normals" },
    { page: 30, title: "Linearization" },
    { page: 32, title: "Concavity" },
  ],
};
