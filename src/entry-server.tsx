import { StrictMode } from "react";
import { prerenderToNodeStream } from "react-dom/static";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import { NOTES_CATALOGUE, semesterPath } from "./data/notes";
import { mathsModule1 } from "./features/notes/maths-module-1";
import { MetaCollector, type PageMeta } from "./lib/meta";

/* Used at build time only (scripts/prerender.mjs). */

export interface StaticPage {
  url: string;
  /** output file, relative to dist/ */
  file: string;
  /** source path of the lazily loaded page, whose CSS and JS the HTML should reference up front */
  chunk?: string;
}

const fileFor = (url: string) => `${url.replace(/^\//, "")}/index.html`.replace(/^\//, "");

/* Every URL written out as its own static HTML file. */
export const pages: StaticPage[] = [
  { url: "/", file: "index.html" },
  { url: "/notes", file: "notes/index.html" },
  // a page for each semester that has notes, and one for each of its subjects
  ...NOTES_CATALOGUE.flatMap((branch) =>
    branch.semesters
      .filter((semester) => semester.subjects.length > 0)
      .flatMap((semester) =>
        [semesterPath(branch, semester), ...semester.subjects.map((subject) => subject.href)].map((url) => ({ url, file: fileFor(url) })),
      ),
  ),
  { url: mathsModule1.basePath, file: fileFor(mathsModule1.basePath), chunk: "src/pages/notes/MathsNotesPage.tsx" },
  // served by the host for any URL that has no file
  { url: "/404", file: "404.html" },
];

/* Renders one URL to HTML, waiting for lazily loaded pages, and returns the page's title and description. */
export async function render(url: string) {
  let meta: PageMeta | undefined;
  const { prelude } = await prerenderToNodeStream(
    <StrictMode>
      <MetaCollector value={(m) => (meta = m)}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </MetaCollector>
    </StrictMode>,
  );
  const chunks: Buffer[] = [];
  for await (const chunk of prelude) chunks.push(Buffer.from(chunk));
  return { html: Buffer.concat(chunks).toString("utf8"), meta };
}
