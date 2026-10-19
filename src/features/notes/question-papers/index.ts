import type { NotesModule } from "../types";
import { titledPages } from "../titledPages";
import gamat101 from "./gamat101.md?raw";
import gapht121 from "./gapht121.md?raw";
import gmest103 from "./gmest103.md?raw";
import gxest104 from "./gxest104.md?raw";
import ucest105 from "./ucest105.md?raw";
import { GAMAT101_QP_PATH, GAPHT121_QP_PATH, GMEST103_QP_PATH, GXEST104_QP_PATH, UCEST105_QP_PATH } from "./path";

function paperNotes(basePath: string, course: string, code: string, content: string): NotesModule {
  const { pages, chapters } = titledPages(content);
  const subjectPath = basePath.slice(0, basePath.lastIndexOf("/"));
  const subjectLabel = code === "GAMAT101" ? "MATHEMATICS" : code === "GAPHT121" ? "PHYSICS" : code === "GMEST103" ? "ENGINEERING GRAPHICS" : code === "GXEST104" ? "ELECTRICAL AND ELECTRONICS ENGINEERING" : "ALGORITHMIC THINKING WITH PYTHON";
  return {
    basePath, storageKey: `udsf:notes:cse:s1:${code.toLowerCase()}:question-papers:v1`,
    title: `S1 CSE ${course} · Question Papers`,
    trail: [{ label: "NOTES", href: "/notes" }, { label: "CSE", href: "/notes/cse" }, { label: "S1", href: "/notes/cse/s1" }, { label: subjectLabel, href: subjectPath }, { label: "QUESTION PAPERS" }],
    module: "Question Papers", course, code, summary: "KTU 2024 Scheme questions grouped by module and year, with worked solutions and links to the original papers.",
    source: `KTU Notes question-paper archive · ${code} · KTU 2024 Scheme. Transcribed and refined from the linked original PDFs using Notebook Agent.`, pages, chapters,
  };
}

export const gamat101QuestionPapers = paperNotes(GAMAT101_QP_PATH, "Mathematics for Information Science 1", "GAMAT101", gamat101);
export const gapht121QuestionPapers = paperNotes(GAPHT121_QP_PATH, "Physics for Information Science", "GAPHT121", gapht121);
export const gmest103QuestionPapers = paperNotes(GMEST103_QP_PATH, "Engineering Graphics and Computer Aided Drawing", "GMEST103", gmest103);
export const gxest104QuestionPapers = paperNotes(GXEST104_QP_PATH, "Introduction to Electrical and Electronics Engineering", "GXEST104", gxest104);
export const ucest105QuestionPapers = paperNotes(UCEST105_QP_PATH, "Algorithmic Thinking with Python", "UCEST105", ucest105);
