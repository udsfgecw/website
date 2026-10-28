import type { NotesModule } from "../types";
import source from "./notes.md?raw";
import { titledPages } from "../titledPages";
import { IME_ICE_MODULE_4_PATH, IME_ICE_PATH } from "./path";

const { pages, chapters } = titledPages(source);

export function imeicemodule4(branch: "me" | "civil"): NotesModule {
  const branchName = branch.toUpperCase();
  return {
    basePath: IME_ICE_MODULE_4_PATH(branch),
    storageKey: `udsf:notes:${branch}:s1:GCEST104:module-4:v1`,
    title: `S1 ${branchName} IME & ICE · Module 4`,
    trail: [
      { label: "NOTES", href: "/notes" },
      { label: branchName, href: `/notes/${branch}` },
      { label: "S1", href: `/notes/${branch}/s1` },
      { label: "IME & ICE", href: IME_ICE_PATH(branch) },
      { label: "MODULE 4" },
    ],
    module: "Module 4",
    course: "Introduction to Mechanical and Civil Engineering",
    code: "GCEST104",
    summary: "Bricks and building materials",
    source: "Transcribed from the supplied KTU GCEST104 Introduction to Mechanical and Civil Engineering module PDFs.",
    pages,
    chapters,
  };
}
