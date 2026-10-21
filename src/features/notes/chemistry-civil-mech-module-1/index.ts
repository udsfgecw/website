import type { NotesModule } from "../types";
import source from "./notes.md?raw";
import { titledPages } from "../titledPages";

const { pages, chapters } = titledPages(source);

export function chemistrycivilmechModule1(branch: "civil" | "me"): NotesModule {
  const branchUpper = branch.toUpperCase();
  const subject = "chemistry";
  const basePath = `/notes/${branch}/s1/${subject}/module-1`;
  return {
    basePath,
    storageKey: `udsf:notes:${branch}:s1:${subject}-1:v1`,
    title: `S1 ${branchUpper} Chemistry · Module 1`,
    trail: [
      { label: "NOTES", href: "/notes" },
      { label: branchUpper, href: `/notes/${branch}` },
      { label: "S1", href: `/notes/${branch}/s1` },
      { label: subject.toUpperCase(), href: `/notes/${branch}/s1/${subject}` },
      { label: "MODULE 1" },
    ],
    module: "Module 1",
    course: "Engineering Chemistry",
    code: "GCCYT122",
    summary: "Engineering Chemistry · Module 1",
    source: "Processed from the supplied KTU GCCYT122 Module 1 study notes.",
    pages,
    chapters,
  };
}
