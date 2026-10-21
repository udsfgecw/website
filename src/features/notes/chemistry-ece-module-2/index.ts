import type { NotesModule } from "../types";
import source from "./notes.md?raw";
import { titledPages } from "../titledPages";

const { pages, chapters } = titledPages(source);

export function chemistryEceModule2(branch: "ece" | "eee"): NotesModule {
  const branchUpper = branch.toUpperCase();
  const subject = "chemistry";
  const basePath = `/notes/${branch}/s1/${subject}/module-2`;
  return {
    basePath,
    storageKey: `udsf:notes:${branch}:s1:${subject}-2:v1`,
    title: `S1 ${branchUpper} Chemistry · Module 2`,
    trail: [
      { label: "NOTES", href: "/notes" },
      { label: branchUpper, href: `/notes/${branch}` },
      { label: "S1", href: `/notes/${branch}/s1` },
      { label: "CHEMISTRY", href: `/notes/${branch}/s1/chemistry` },
      { label: "MODULE 2" },
    ],
    module: "Module 2",
    course: "Engineering Chemistry",
    code: "GXCYT122",
    summary: "Engineering Chemistry · Module 2",
    source: "Processed from the supplied KTU GXCYT122 Module 2 study notes for ECE/EEE.",
    pages,
    chapters,
    outlinedProblems: "numbered",
  };
}
