import type { NotesModule } from "../types";
import source from "./notes.md?raw";
import { titledPages } from "../titledPages";

const { pages, chapters } = titledPages(source);

export function chemistrycivilmechModule3(branch: "civil" | "me"): NotesModule {
  const branchUpper = branch.toUpperCase();
  const subject = "chemistry";
  const basePath = `/notes/${branch}/s1/${subject}/module-3`;
  return {
    basePath,
    storageKey: `udsf:notes:${branch}:s1:${subject}-3:v1`,
    title: `S1 ${branchUpper} Chemistry · Module 3`,
    trail: [
      { label: "NOTES", href: "/notes" },
      { label: branchUpper, href: `/notes/${branch}` },
      { label: "S1", href: `/notes/${branch}/s1` },
      { label: subject.toUpperCase(), href: `/notes/${branch}/s1/${subject}` },
      { label: "MODULE 3" },
    ],
    module: "Module 3",
    course: "Engineering Chemistry",
    code: "GCCYT122",
    summary: "Engineering Chemistry · Module 3",
    source: "Processed from the supplied KTU GCCYT122 Module 3 study notes.",
    pages,
    chapters,
  };
}
