import type { NotesModule } from "../types";
import source from "./notes.md?raw";
import { titledPages } from "../titledPages";

const { pages, chapters } = titledPages(source);

export function physicseceModule4(branch: "ece" | "eee"): NotesModule {
  const branchUpper = branch.toUpperCase();
  const subject = "physics";
  const basePath = `/notes/${branch}/s1/${subject}/module-4`;
  return {
    basePath,
    storageKey: `udsf:notes:${branch}:s1:${subject}-4:v1`,
    title: `S1 ${branchUpper} Physics · Module 4`,
    trail: [
      { label: "NOTES", href: "/notes" },
      { label: branchUpper, href: `/notes/${branch}` },
      { label: "S1", href: `/notes/${branch}/s1` },
      { label: subject.toUpperCase(), href: `/notes/${branch}/s1/${subject}` },
      { label: "MODULE 4" },
    ],
    module: "Module 4",
    course: "Engineering Physics",
    code: "GBPHT121",
    summary: "Engineering Physics · Module 4",
    source: "Processed from the supplied KTU GBPHT121 Module 4 study notes.",
    pages,
    chapters,
  };
}
