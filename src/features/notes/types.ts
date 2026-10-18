export interface NotesPage {
  /** reader page number, starting at 1 */
  number: number;
  /** markdown for this page */
  content: string;
}

export interface Chapter {
  /** reader page the chapter starts on */
  page: number;
  title: string;
}

/* Everything the reader needs to show one module of notes. */
export interface NotesModule {
  /** URL of page 1; page n lives at `${basePath}/${n}` */
  basePath: string;
  /** localStorage key for the reader's place and preferences */
  storageKey: string;
  /** an earlier key whose page numbers were one higher (they counted the cover page) */
  legacyStorageKey?: string;
  title: string;
  /** breadcrumb from the notes shelf down to this module; the last step has no link */
  trail: { label: string; href?: string }[];
  heading: [string, string];
  eyebrow: string;
  course: string;
  code: string;
  summary: string;
  source: string;
  pages: readonly NotesPage[];
  chapters: readonly Chapter[];
}

export const pageHref = (notes: NotesModule, page: number) => (page === 1 ? notes.basePath : `${notes.basePath}/${page}`);

export const chapterFor = (notes: NotesModule, page: number) =>
  [...notes.chapters].reverse().find((c) => c.page <= page) ?? notes.chapters[0];
