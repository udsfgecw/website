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
  source: "Generated from the KTUNOTES.LIVE problem set with pdf-to-notes (gemini-3.5-flash-lite reads the pages, gemini-3.8-flash writes the notes). Figures are written descriptions. Not yet checked against the textbooks.", pages, chapters,
};
