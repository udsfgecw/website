import type { NotesModule } from "../types";
import source from "./notes.md?raw";
import { titledPages } from "../titledPages";
import { ENGINEERING_MECHANICS_MODULE_1_PATH, ENGINEERING_MECHANICS_PATH } from "./path";

const { pages, chapters } = titledPages(source);

export function engineeringmechanicsmodule1(branch: "me" | "civil"): NotesModule {
  const branchName = branch.toUpperCase();
  return {
    basePath: ENGINEERING_MECHANICS_MODULE_1_PATH(branch),
    storageKey: `udsf:notes:${branch}:s1:GCEST103:module-1:v1`,
    title: `S1 ${branchName} Engineering Mechanics · Module 1`,
    trail: [
      { label: "NOTES", href: "/notes" },
      { label: branchName, href: `/notes/${branch}` },
      { label: "S1", href: `/notes/${branch}/s1` },
      { label: "ENGINEERING MECHANICS", href: ENGINEERING_MECHANICS_PATH(branch) },
      { label: "MODULE 1" },
    ],
    module: "Module 1",
    course: "Engineering Mechanics",
    code: "GCEST103",
    summary: "Rigid bodies, scalars and vectors, and force systems",
    source: "Transcribed from the supplied KTU GCEST103 Engineering Mechanics module PDFs.",
    pages,
    chapters,
  };
}
