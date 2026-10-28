import type { NotesModule } from "../types";
import source from "./notes.md?raw";
import { titledPages } from "../titledPages";
import { ENGINEERING_MECHANICS_MODULE_3_PATH, ENGINEERING_MECHANICS_PATH } from "./path";

const { pages, chapters } = titledPages(source);

export function engineeringmechanicsmodule3(branch: "me" | "civil"): NotesModule {
  const branchName = branch.toUpperCase();
  return {
    basePath: ENGINEERING_MECHANICS_MODULE_3_PATH(branch),
    storageKey: `udsf:notes:${branch}:s1:GCEST103:module-3:v1`,
    title: `S1 ${branchName} Engineering Mechanics · Module 3`,
    trail: [
      { label: "NOTES", href: "/notes" },
      { label: branchName, href: `/notes/${branch}` },
      { label: "S1", href: `/notes/${branch}/s1` },
      { label: "ENGINEERING MECHANICS", href: ENGINEERING_MECHANICS_PATH(branch) },
      { label: "MODULE 3" },
    ],
    module: "Module 3",
    course: "Engineering Mechanics",
    code: "GCEST103",
    summary: "Kinematics and kinetics of particles and bodies",
    source: "Transcribed from the supplied KTU GCEST103 Engineering Mechanics module PDFs.",
    pages,
    chapters,
  };
}
