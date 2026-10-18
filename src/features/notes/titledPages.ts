import type { Chapter, NotesPage } from "./types";

/* Each page of the notes starts with a marker "<!-- page N | Title -->". The titles make the contents list. */
export function titledPages(source: string): { pages: NotesPage[]; chapters: Chapter[] } {
  const sections = [...source.matchAll(/<!-- page (\d+) \| (.+?) -->([\s\S]*?)(?=<!-- page \d+ \||$)/g)].map((match) => ({
    number: Number(match[1]),
    title: match[2],
    content: match[3].trim().replace(/\n---\s*$/, ""),
  }));
  return {
    pages: sections.map(({ number, content }) => ({ number, content })),
    chapters: sections.map(({ number, title }) => ({ page: number, title })),
  };
}
