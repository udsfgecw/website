import type { NotesModule } from "../types";
import source from "./notes.md?raw";
import { titledPages } from "../titledPages";
import { CHEMISTRY_GCCYT122_MODULE_3_PATH, CHEMISTRY_GCCYT122_PATH } from "./path";

const { pages, chapters } = titledPages(source);

export function chemistrygccyt122module3(branch: "me" | "civil"): NotesModule {
  const branchName = branch.toUpperCase();
  return {
    basePath: CHEMISTRY_GCCYT122_MODULE_3_PATH(branch),
    storageKey: `udsf:notes:${branch}:s1:GCCYT122:module-3:v1`,
    title: `S1 ${branchName} Engineering Chemistry · Module 3`,
    trail: [
      { label: "NOTES", href: "/notes" },
      { label: branchName, href: `/notes/${branch}` },
      { label: "S1", href: `/notes/${branch}/s1` },
      { label: "ENGINEERING CHEMISTRY", href: CHEMISTRY_GCCYT122_PATH(branch) },
      { label: "MODULE 3" },
    ],
    module: "Module 3",
    course: "Engineering Chemistry",
    code: "GCCYT122",
    summary: "Molecular spectroscopy and thermal analysis",
    source: "Transcribed from the supplied KTU GCCYT122 Chemistry module PDFs.",
    pages,
    chapters,
  };
}
