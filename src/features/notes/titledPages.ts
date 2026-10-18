import type { Chapter, NotesPage } from "./types";

/* Each page of a module's notes starts with a marker "<!-- page N | Title -->". The pages are the
   text up to the next marker, and the titles make the contents list. */
export function titledPages(source: string): { pages: NotesPage[]; chapters: Chapter[] } {
  const sections = [...source.matchAll(/<!-- page (\d+) \| (.+?) -->([\s\S]*?)(?=<!-- page \d+ \||$)/g)].map((match) => ({
    number: Number(match[1]),
    sourceTitle: match[2],
    content: match[3].trim().replace(/\n---\s*$/, ""),
  }));

  // The source page labels are useful for provenance, but make poor contents titles.
  // Use the first real heading on each page and leave continuation pages out of the TOC.
  const chapters = sections.flatMap(({ number, content }) => {
    const headings = [...content.matchAll(/^(#{1,4})\s+(.+)$/gm)].map((match) => {
      let title = match[2]
        .replace(/\*\*/g, "")
        .replace(/\*/g, "")
        .replace(/`/g, "")
        .trim();
      if (title === title.toUpperCase()) {
        title = title.toLowerCase().replace(/\b[a-z]/g, (letter) => letter.toUpperCase());
        title = title.replace(/\bI\/O\b/gi, "I/O").replace(/\bCpu\b/g, "CPU").replace(/\bPython\b/gi, "Python");
      }
      return { level: match[1].length, title };
    });
    const isUseful = ({ title }: { title: string }) => {
      const normalized = title.replace(/^\d+[.)]?\s*/, "").trim().toLowerCase();
      return !/^module\s+\d+$/i.test(normalized)
        && !/^uce(st)?\s*105\b/i.test(title)
        && !/^syllabus\b/i.test(title)
        && !/^(example|program|output|input|flow chart|pseudocode)$/i.test(normalized);
    };
    const mainHeadings = headings.filter((heading) => heading.level === 2 && isUseful(heading));
    const selected = mainHeadings.length ? mainHeadings : headings.filter(isUseful).slice(0, 1);
    return selected.map(({ title }) => ({ page: number, title }));
  });

  return {
    pages: sections.map(({ number, content }) => ({ number, content })),
    chapters: chapters.length
      ? chapters
      : sections.map(({ number, sourceTitle }) => ({ page: number, title: sourceTitle })),
  };
}
