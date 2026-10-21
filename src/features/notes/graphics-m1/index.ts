import type { NotesModule } from "../types";
import source from "./notes.md?raw";
import { titledPages } from "../titledPages";
import { GRAPHICS_M1_PATH } from "./path";
const { pages, chapters } = titledPages(source);
export const graphicsm1: NotesModule = {
  basePath: GRAPHICS_M1_PATH,
  storageKey: "udsf:notes:cse:s1:graphics-m1:v1",
  title: "S1 CSE Engineering Graphics · Module 1",
  unitLabel: "section",
  trail: [
    { label: "NOTES", href: "/notes" },
    { label: "CSE", href: "/notes/cse" },
    { label: "S1", href: "/notes/cse/s1" },
    { label: "ENGINEERING GRAPHICS", href: "/notes/cse/s1/graphics" },
    { label: "MODULE 1" },
  ],
  module: "Module 1", course: "Engineering Graphics and Computer Aided Drawing", code: "GMEST103", summary: "Introduction, projection of points and lines",
  source: "KTU 2024 scheme, GMEST103 Engineering Graphics and Computer Aided Drawing, from the KTUNOTES.LIVE problem sets. Drawings by Sumesh (Graphicszone2021).", pages, chapters,
};
