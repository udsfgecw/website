import type { NotesModule } from "../types";
import source from "./notes.md?raw";
import { titledPages } from "../titledPages";

const { pages, chapters } = titledPages(source);

export function physicseceModule3(branch: "ece" | "eee"): NotesModule {
  const branchUpper = branch.toUpperCase();
  const subject = "physics";
  const basePath = `/notes/${branch}/s1/${subject}/module-3`;
  return {
    basePath,
    storageKey: `udsf:notes:${branch}:s1:${subject}-3:v1`,
    title: `S1 ${branchUpper} Physics · Module 3`,
    trail: [
      { label: "NOTES", href: "/notes" },
      { label: branchUpper, href: `/notes/${branch}` },
      { label: "S1", href: `/notes/${branch}/s1` },
      { label: subject.toUpperCase(), href: `/notes/${branch}/s1/${subject}` },
      { label: "MODULE 3" },
    ],
    module: "Module 3",
    course: "Engineering Physics",
    code: "GBPHT121",
    summary: "Engineering Physics · Module 3",
    source: "Processed from the supplied KTU GBPHT121 Module 3 study notes.",
    pages,
    chapters,
  };
}
