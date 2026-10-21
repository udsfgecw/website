import type { NotesModule } from "../types";
import source from "./notes.md?raw";
import { titledPages } from "../titledPages";
import { GRAPHICS_M2_PATH } from "./path";
const { pages, chapters } = titledPages(source);
export const graphicsm2: NotesModule = {
  basePath: GRAPHICS_M2_PATH,
  storageKey: "udsf:notes:cse:s1:graphics-m2:v1",
  title: "S1 CSE Engineering Graphics · Projection of Solids",
  unitLabel: "section",
  trail: [
    { label: "NOTES", href: "/notes" },
    { label: "CSE", href: "/notes/cse" },
    { label: "S1", href: "/notes/cse/s1" },
    { label: "ENGINEERING GRAPHICS", href: "/notes/cse/s1/graphics" },
    { label: "PROJECTION OF SOLIDS" },
  ],
  module: "Projection of Solids", course: "Engineering Graphics and Computer Aided Drawing", code: "GMEST103", summary: "Projection of solids in simple and inclined positions",
  source: "KTU 2024 scheme, GMEST103 Engineering Graphics and Computer Aided Drawing, from the KTUNOTES.LIVE problem sets. Drawings by Sumesh (Graphicszone2021).", pages, chapters,
};
