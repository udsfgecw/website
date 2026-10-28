import type { NotesModule } from "../types";
import source from "./notes.md?raw";
import { titledPages } from "../titledPages";
import { CHEMISTRY_GCCYT122_MODULE_1_PATH, CHEMISTRY_GCCYT122_PATH } from "./path";

const { pages, chapters } = titledPages(source);

export function chemistrygccyt122module1(branch: "me" | "civil"): NotesModule {
  const branchName = branch.toUpperCase();
  return {
    basePath: CHEMISTRY_GCCYT122_MODULE_1_PATH(branch),
    storageKey: `udsf:notes:${branch}:s1:GCCYT122:module-1:v1`,
    title: `S1 ${branchName} Engineering Chemistry · Module 1`,
    trail: [
      { label: "NOTES", href: "/notes" },
      { label: branchName, href: `/notes/${branch}` },
      { label: "S1", href: `/notes/${branch}/s1` },
      { label: "ENGINEERING CHEMISTRY", href: CHEMISTRY_GCCYT122_PATH(branch) },
      { label: "MODULE 1" },
    ],
    module: "Module 1",
    course: "Engineering Chemistry",
    code: "GCCYT122",
    summary: "Engineering materials and fuels",
    source: "Transcribed from the supplied KTU GCCYT122 Chemistry module PDFs.",
    pages,
    chapters,
  };
}
