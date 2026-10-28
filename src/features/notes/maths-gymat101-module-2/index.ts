import type { NotesModule } from "../types";
import source from "./notes.md?raw";
import { titledPages } from "../titledPages";
import { MATHS_GYMAT101_MODULE_2_PATH, MATHS_GYMAT101_PATH } from "./path";

const { pages, chapters } = titledPages(source);

export function mathsgymat101module2(branch: "me" | "civil"): NotesModule {
  const branchName = branch.toUpperCase();
  return {
    basePath: MATHS_GYMAT101_MODULE_2_PATH(branch),
    storageKey: `udsf:notes:${branch}:s1:GYMAT101:module-2:v1`,
    title: `S1 ${branchName} Mathematics · Module 2`,
    trail: [
      { label: "NOTES", href: "/notes" },
      { label: branchName, href: `/notes/${branch}` },
      { label: "S1", href: `/notes/${branch}/s1` },
      { label: "MATHEMATICS", href: MATHS_GYMAT101_PATH(branch) },
      { label: "MODULE 2" },
    ],
    module: "Module 2",
    course: "Mathematics for Electrical Science and Physical Science 1",
    code: "GYMAT101",
    summary: "Second-order linear ODEs",
    source: "Transcribed from the supplied KTU GYMAT101 Mathematics module PDFs.",
    pages,
    chapters,
  };
}
