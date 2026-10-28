import type { NotesModule } from "../types";
import source from "./notes.md?raw";
import { titledPages } from "../titledPages";
import { ENGINEERING_MECHANICS_MODULE_4_PATH, ENGINEERING_MECHANICS_PATH } from "./path";

const { pages, chapters } = titledPages(source);

export function engineeringmechanicsmodule4(branch: "me" | "civil"): NotesModule {
  const branchName = branch.toUpperCase();
  return {
    basePath: ENGINEERING_MECHANICS_MODULE_4_PATH(branch),
    storageKey: `udsf:notes:${branch}:s1:GCEST103:module-4:v1`,
    title: `S1 ${branchName} Engineering Mechanics · Module 4`,
    trail: [
      { label: "NOTES", href: "/notes" },
      { label: branchName, href: `/notes/${branch}` },
      { label: "S1", href: `/notes/${branch}/s1` },
      { label: "ENGINEERING MECHANICS", href: ENGINEERING_MECHANICS_PATH(branch) },
      { label: "MODULE 4" },
    ],
    module: "Module 4",
    course: "Engineering Mechanics",
    code: "GCEST103",
    summary: "Mechanical vibrations and oscillation",
    source: "Transcribed from the supplied KTU GCEST103 Engineering Mechanics module PDFs.",
    pages,
    chapters,
  };
}
