import type { NotesModule } from "../types";
import source from "./notes.md?raw";
import { titledPages } from "../titledPages";
import { GRAPHICS_M4_PATH } from "./path";
const { pages, chapters } = titledPages(source);
export const graphicsm4: NotesModule = {
  basePath: GRAPHICS_M4_PATH,
  storageKey: "udsf:notes:cse:s1:graphics-m4:v1",
  title: "S1 CSE Engineering Graphics · Isometric Projection",
  unitLabel: "section",
  trail: [
    { label: "NOTES", href: "/notes" },
    { label: "CSE", href: "/notes/cse" },
    { label: "S1", href: "/notes/cse/s1" },
    { label: "ENGINEERING GRAPHICS", href: "/notes/cse/s1/graphics" },
    { label: "ISOMETRIC PROJECTION" },
  ],
  module: "Isometric Projection", course: "Engineering Graphics and Computer Aided Drawing", code: "GMEST103", summary: "Isometric views of solids and their combinations",
  source: "Generated from the KTUNOTES.LIVE problem set with pdf-to-notes (gemini-3.5-flash-lite reads the pages, gemini-3.8-flash writes the notes). Figures are written descriptions. Not yet checked against the textbooks.", pages, chapters,
};
