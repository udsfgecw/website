import type { NotesModule } from "../types";
import source from "./notes.md?raw";
import { titledPages } from "../titledPages";
import { PYTHON_MODULE_2_PATH } from "./path";
const { pages, chapters } = titledPages(source);
export const pythonmodule2: NotesModule = {
  basePath: PYTHON_MODULE_2_PATH,
  storageKey: "udsf:notes:cse:s1:python-2:v2",
  title: "S1 CSE Algorithmic Thinking with Python · Module 2",
  trail: [
    { label: "NOTES", href: "/notes" },
    { label: "CSE", href: "/notes/cse" },
    { label: "S1", href: "/notes/cse/s1" },
    { label: "ALGORITHMIC THINKING WITH PYTHON", href: "/notes/cse/s1/python" },
    { label: "MODULE 2" },
  ],
  module: "Module 2", course: "Algorithmic Thinking with Python", code: "UCEST105", summary: "Algorithms, pseudocode, and flowcharts",
  source: "KTU UCEST105 study notes; explanations and worked examples edited for clarity.", pages, chapters,
};
