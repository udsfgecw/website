import type { NotesModule } from "../types";
import source from "./notes.md?raw";
import { titledPages } from "../titledPages";
import { ELECTRICAL_MATHS_MODULE_3_PATH, ELECTRICAL_MATHS_PATH } from "./path";

const { pages, chapters } = titledPages(source);

export function electricalMathsModule3(branch: "ece" | "eee"): NotesModule {
  const branchName = branch.toUpperCase();
  const basePath = ELECTRICAL_MATHS_MODULE_3_PATH(branch);
  const subjectPath = ELECTRICAL_MATHS_PATH(branch);
  return {
    basePath,
    storageKey: `udsf:notes:${branch}:s1:GYMAT101:module-3:v1`,
    title: `S1 ${branchName} Mathematics for Electrical Science · Module 3`,
    trail: [
      { label: "NOTES", href: "/notes" },
      { label: branchName, href: `/notes/${branch}` },
      { label: "S1", href: `/notes/${branch}/s1` },
      { label: "MATHEMATICS", href: subjectPath },
      { label: "MODULE 3" },
    ],
    module: "Module 3",
    course: "Mathematics for Electrical Science and Physical Science 1",
    code: "GYMAT101",
    outlinedProblems: "numbered",
    summary: "Laplace transforms, inverse transforms and solving initial value problems",
    source: "KTU GYMAT101 Module 3 study notes, refined and reorganized for readability.",
    pages,
    chapters,
  };
}
