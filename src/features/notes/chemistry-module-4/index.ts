import type { NotesModule } from "../types";
import source from "./notes.md?raw";
import { titledPages } from "../titledPages";
import { CHEMISTRY_MODULE_4_PATH } from "./path";
const { pages, chapters } = titledPages(source);
export const chemistrymodule4: NotesModule = {
  basePath: CHEMISTRY_MODULE_4_PATH,
  storageKey: "udsf:notes:cse:s1:chemistry-4:v2",
  title: "S1 CSE Chemistry · Module 4",
  trail: [
    { label: "NOTES", href: "/notes" },
    { label: "CSE", href: "/notes/cse" },
    { label: "S1", href: "/notes/cse/s1" },
    { label: "CHEMISTRY", href: "/notes/cse/s1/chemistry" },
    { label: "MODULE 4" },
  ],
  module: "Module 4", course: "Engineering Chemistry", code: "GXCYT122", summary: "Water technology, pollution, and environmental chemistry",
  unitLabel: "section",
  outlinedProblems: true,
  displayDescription: "Structured GXCYT122 Module 4 notes covering water hardness, treatment, wastewater, e-waste, climate change, ozone and sustainable development, with worked examples and revision questions.",
  source: "Reorganized from the provided KTU GXCYT122 Module 4 study pack, with corrected equations and worked calculations.", pages, chapters,
};

export function chemistryModule4(branch: string = "cse"): NotesModule {
  if (branch === "cse") return chemistrymodule4;
  const branchUpper = branch.toUpperCase();
  return {
    ...chemistrymodule4,
    basePath: `/notes/${branch}/s1/chemistry/module-4`,
    storageKey: `udsf:notes:${branch}:s1:chemistry-4:v2`,
    title: `S1 ${branchUpper} Chemistry · Module 4`,
    trail: [
      { label: "NOTES", href: "/notes" },
      { label: branchUpper, href: `/notes/${branch}` },
      { label: "S1", href: `/notes/${branch}/s1` },
      { label: "CHEMISTRY", href: `/notes/${branch}/s1/chemistry` },
      { label: "MODULE 4" },
    ],
  };
}
