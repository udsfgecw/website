import type { NotesModule } from "../types";
import source from "./notes.md?raw";
import { titledPages } from "../titledPages";
import { CHEMISTRY_MODULE_3_PATH } from "./path";
const { pages, chapters } = titledPages(source);
export const chemistrymodule3: NotesModule = {
  basePath: CHEMISTRY_MODULE_3_PATH,
  storageKey: "udsf:notes:cse:s1:chemistry-3:v2",
  title: "S1 CSE Chemistry · Module 3",
  trail: [
    { label: "NOTES", href: "/notes" },
    { label: "CSE", href: "/notes/cse" },
    { label: "S1", href: "/notes/cse/s1" },
    { label: "CHEMISTRY", href: "/notes/cse/s1/chemistry" },
    { label: "MODULE 3" },
  ],
  module: "Module 3", course: "Engineering Chemistry", code: "GXCYT122", summary: "Molecular spectroscopy and analytical techniques",
  unitLabel: "section",
  outlinedProblems: true,
  displayDescription: "Structured GXCYT122 Module 3 study notes covering spectroscopy, the Beer–Lambert law, UV–visible and infrared analysis, dielectric thermal analysis and scanning electron microscopy, with worked examples and revision problems.",
  source: "Reorganized from the provided KTU GXCYT122 Module 3 study pack, with corrected concepts, units and worked calculations.", pages, chapters,
};

export function chemistryModule3(branch: string = "cse"): NotesModule {
  if (branch === "cse") return chemistrymodule3;
  const branchUpper = branch.toUpperCase();
  return {
    ...chemistrymodule3,
    basePath: `/notes/${branch}/s1/chemistry/module-3`,
    storageKey: `udsf:notes:${branch}:s1:chemistry-3:v2`,
    title: `S1 ${branchUpper} Chemistry · Module 3`,
    trail: [
      { label: "NOTES", href: "/notes" },
      { label: branchUpper, href: `/notes/${branch}` },
      { label: "S1", href: `/notes/${branch}/s1` },
      { label: "CHEMISTRY", href: `/notes/${branch}/s1/chemistry` },
      { label: "MODULE 3" },
    ],
  };
}
