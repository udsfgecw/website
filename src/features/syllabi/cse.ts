import source from "./CSE_S1_refined.md?raw";
import type { Branch, Semester, SubjectNotes } from "@/data/notes";
import type { NotesModule } from "@/features/notes/types";
import { titledPages } from "@/features/notes/titledPages";

function syllabusPages(code: string) {
  const markers = [...source.matchAll(/<!-- Source: (.+?); page (\d+) -->/g)];
  const contents = markers.flatMap((marker, index) => {
    const name = marker[1];
    if (!name.includes(code)) return [];
    const start = marker.index! + marker[0].length;
    const end = markers[index + 1]?.index ?? source.length;
    let content = source.slice(start, end).trim();
    content = content
      .replace(/^\[Non-content page\]$/gm, "")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/?div(?:\s+[^>]*)?>/gi, "")
      .replace(/^\s*---\s*$/gm, "")
      .trim();
    return content ? [content] : [];
  });
  const blocks = contents.map((content, index) => `<!-- page ${index + 1} | ${code} -->\n\n${content}`);
  return titledPages(blocks.join("\n\n"));
}

export function cseSyllabusModule(subject: SubjectNotes, branch: Branch, semester: Semester): NotesModule {
  const { pages, chapters } = syllabusPages(subject.code);
  return {
    basePath: subject.syllabusHref!,
    storageKey: `udsf:syllabus:${branch.id}:${semester.id}:${subject.code}:v1`,
    title: `${branch.short} ${semester.id.toUpperCase()} · ${subject.code} syllabus`,
    trail: [
      { label: "NOTES", href: "/notes" },
      { label: branch.short, href: `/notes/${branch.id}` },
      { label: semester.id.toUpperCase(), href: `/notes/${branch.id}/${semester.id}` },
      { label: subject.name.toUpperCase(), href: subject.href },
      { label: "SYLLABUS" },
    ],
    module: "Syllabus",
    course: subject.course,
    code: subject.code,
    summary: "course topics, outcomes and assessment",
    source: "KTU 2024 Scheme syllabus, transcribed and refined for readability from the KTU Notes source PDF.",
    pages,
    chapters,
  };
}
