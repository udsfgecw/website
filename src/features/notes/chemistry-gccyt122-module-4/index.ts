import type { NotesModule } from "../types";
import source from "./notes.md?raw";
import { titledPages } from "../titledPages";
import { CHEMISTRY_GCCYT122_MODULE_4_PATH, CHEMISTRY_GCCYT122_PATH } from "./path";

const { pages, chapters } = titledPages(source);

export function chemistrygccyt122module4(branch: "me" | "civil"): NotesModule {
  const branchName = branch.toUpperCase();
  return {
    basePath: CHEMISTRY_GCCYT122_MODULE_4_PATH(branch),
    storageKey: `udsf:notes:${branch}:s1:GCCYT122:module-4:v1`,
    title: `S1 ${branchName} Engineering Chemistry · Module 4`,
    trail: [
      { label: "NOTES", href: "/notes" },
      { label: branchName, href: `/notes/${branch}` },
      { label: "S1", href: `/notes/${branch}/s1` },
      { label: "ENGINEERING CHEMISTRY", href: CHEMISTRY_GCCYT122_PATH(branch) },
      { label: "MODULE 4" },
    ],
    module: "Module 4",
    course: "Engineering Chemistry",
    code: "GCCYT122",
    summary: "Environmental chemistry and waste management",
    source: "Transcribed from the supplied KTU GCCYT122 Chemistry module PDFs.",
    pages,
    chapters,
  };
}
