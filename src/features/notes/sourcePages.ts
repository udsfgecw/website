import type { NotesPage } from "./types";

/* The transcriptions mark each source page with "<!-- Source: …; page N -->". Source page 1 is the
   cover, so reader page 1 is source page 2. */
export const sourcePages = (source: string): NotesPage[] =>
  [...source.matchAll(/<!-- Source:.*?; page (\d+) -->([\s\S]*?)(?=<!-- Source:|$)/g)]
    .map((match) => ({ number: Number(match[1]) - 1, content: match[2].trim().replace(/\n---\s*$/, "") }))
    .filter((page) => page.number >= 1);
