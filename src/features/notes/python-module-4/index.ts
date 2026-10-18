import type { NotesModule } from "../types";
import source from "./notes.md?raw";
import { titledPages } from "../titledPages";
import { PYTHON_MODULE_4_PATH } from "./path";
const { pages, chapters } = titledPages(source);
export const pythonmodule4: NotesModule = {
  basePath: PYTHON_MODULE_4_PATH,
  storageKey: "udsf:notes:cse:s1:python-4:v1",
  title: "S1 CSE Algorithmic Thinking with Python · Module 4",
  trail: [
    { label: "NOTES", href: "/notes" },
    { label: "CSE", href: "/notes/cse" },
    { label: "S1", href: "/notes/cse/s1" },
    { label: "ALGORITHMIC THINKING WITH PYTHON", href: "/notes/cse/s1/python" },
    { label: "MODULE 4" },
  ],
  module: "Module 4", course: "Algorithmic Thinking with Python", code: "UCEST105", summary: "Module 4",
  source: "KTU UCEST105 study notes, imported from the provided complete study pack.", pages, chapters,
};
