import type { NotesModule } from "../types";
import source from "./notes.md?raw";
import { titledPages } from "../titledPages";
import { PYTHON_MODULE_3_PATH } from "./path";
const { pages, chapters } = titledPages(source);
export const pythonmodule3: NotesModule = {
  basePath: PYTHON_MODULE_3_PATH,
  storageKey: "udsf:notes:cse:s1:python-3:v1",
  title: "S1 CSE Algorithmic Thinking with Python · Module 3",
  trail: [
    { label: "NOTES", href: "/notes" },
    { label: "CSE", href: "/notes/cse" },
    { label: "S1", href: "/notes/cse/s1" },
    { label: "ALGORITHMIC THINKING WITH PYTHON", href: "/notes/cse/s1/python" },
    { label: "MODULE 3" },
  ],
  module: "Module 3", course: "Algorithmic Thinking with Python", code: "UCEST105", summary: "Control flow, functions, and Python collections",
  source: "KTU UCEST105 study notes; explanations and worked examples edited for clarity.", pages, chapters,
};
