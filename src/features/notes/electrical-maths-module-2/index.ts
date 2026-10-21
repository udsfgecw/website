import type { NotesModule } from "../types";
import source from "./notes.md?raw";
import { titledPages } from "../titledPages";
import { ELECTRICAL_MATHS_MODULE_2_PATH, ELECTRICAL_MATHS_PATH } from "./path";

const { pages, chapters } = titledPages(source);

export function electricalMathsModule2(branch: "ece" | "eee"): NotesModule {
  const branchName = branch.toUpperCase();
  const basePath = ELECTRICAL_MATHS_MODULE_2_PATH(branch);
  const subjectPath = ELECTRICAL_MATHS_PATH(branch);
  return {
    basePath,
    storageKey: `udsf:notes:${branch}:s1:GYMAT101:module-2:v1`,
    title: `S1 ${branchName} Mathematics for Electrical Science · Module 2`,
    trail: [
      { label: "NOTES", href: "/notes" },
      { label: branchName, href: `/notes/${branch}` },
      { label: "S1", href: `/notes/${branch}/s1` },
      { label: "MATHEMATICS", href: subjectPath },
      { label: "MODULE 2" },
    ],
    module: "Module 2",
    course: "Mathematics for Electrical Science and Physical Science 1",
    code: "GYMAT101",
    summary: "Second-order linear ODEs: homogeneous, undetermined coefficients, variation of parameters",
    source: "KTU GYMAT101 Module 2 study notes, refined and reorganized for readability.",
    pages,
    chapters,
  };
}
