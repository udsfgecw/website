import type { NotesModule } from "../types";
import source from "./notes.md?raw";
import { titledPages } from "../titledPages";
import { ELECTRICAL_MATHS_MODULE_4_PATH, ELECTRICAL_MATHS_PATH } from "./path";

const { pages, chapters } = titledPages(source);

export function electricalMathsModule4(branch: "ece" | "eee"): NotesModule {
  const branchName = branch.toUpperCase();
  const basePath = ELECTRICAL_MATHS_MODULE_4_PATH(branch);
  const subjectPath = ELECTRICAL_MATHS_PATH(branch);
  return {
    basePath,
    storageKey: `udsf:notes:${branch}:s1:GYMAT101:module-4:v1`,
    title: `S1 ${branchName} Mathematics for Electrical Science · Module 4`,
    trail: [
      { label: "NOTES", href: "/notes" },
      { label: branchName, href: `/notes/${branch}` },
      { label: "S1", href: `/notes/${branch}/s1` },
      { label: "MATHEMATICS", href: subjectPath },
      { label: "MODULE 4" },
    ],
    module: "Module 4",
    course: "Mathematics for Electrical Science and Physical Science 1",
    code: "GYMAT101",
    summary: "Taylor and Maclaurin series, Fourier series and half-range expansions",
    source: "KTU GYMAT101 Module 4 study notes, refined and reorganized for readability.",
    pages,
    chapters,
  };
}
