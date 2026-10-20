import type { NotesModule } from "../types";
import source from "./notes.md?raw";
import { titledPages } from "../titledPages";
import { GRAPHICS_PROJECTION_OF_LINES_PATH } from "./path";
const { pages, chapters } = titledPages(source);
export const graphicsprojectionoflines: NotesModule = {
  basePath: GRAPHICS_PROJECTION_OF_LINES_PATH,
  storageKey: "udsf:notes:cse:s1:graphics-projection-of-lines:v1",
  title: "S1 CSE Engineering Graphics · Projection of Lines",
  unitLabel: "section",
  trail: [
    { label: "NOTES", href: "/notes" },
    { label: "CSE", href: "/notes/cse" },
    { label: "S1", href: "/notes/cse/s1" },
    { label: "ENGINEERING GRAPHICS", href: "/notes/cse/s1/graphics" },
    { label: "PROJECTION OF LINES" },
  ],
  module: "Projection of Lines", course: "Engineering Graphics and Computer Aided Drawing", code: "GMEST103", summary: "Solved problems with 2D drawings and 3D views",
  source: "Prototype: problems 1 to 3 of the KTUNOTES.LIVE '1 line questions with answers' set. Every drawing is computed from the problem's numbers; answers are checked against the printed ones.", pages, chapters,
};
