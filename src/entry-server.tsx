import { StrictMode } from "react";
import { prerenderToNodeStream } from "react-dom/static";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import { ProgramFeedProvider, createProgramFeed } from "./lib/program-feed";
import type { EventEntry } from "./data/event-catalogue";
export { createProgramFeed };
import { branchPath, NOTES_CATALOGUE, semesterPath } from "./data/notes";
import { mathsModule1 } from "./features/notes/maths-module-1";
import { mathsModule2 } from "./features/notes/maths-module-2";
import { mathsModule3 } from "./features/notes/maths-module-3";
import { mathsModule4 } from "./features/notes/maths-module-4";
import { physicsModule1 } from "./features/notes/physics-module-1";
import { physicsModule2 } from "./features/notes/physics-module-2";
import { physicsModule3 } from "./features/notes/physics-module-3";
import { physicsModule4 } from "./features/notes/physics-module-4";
import { chemistrymodule1 } from "./features/notes/chemistry-module-1";
import { chemistrymodule2 } from "./features/notes/chemistry-module-2";
import { chemistrymodule3 } from "./features/notes/chemistry-module-3";
import { chemistrymodule4 } from "./features/notes/chemistry-module-4";
import { chemistryEceModule1 } from "./features/notes/chemistry-ece-module-1";
import { chemistryEceModule2 } from "./features/notes/chemistry-ece-module-2";
import { chemistryEceModule3 } from "./features/notes/chemistry-ece-module-3";
import { chemistryEceModule4 } from "./features/notes/chemistry-ece-module-4";
import { graphicsm1 } from "./features/notes/graphics-m1";
import { graphicsm2 } from "./features/notes/graphics-m2";
import { graphicsm3 } from "./features/notes/graphics-m3";
import { graphicsm4 } from "./features/notes/graphics-m4";
import { electricalmodule1 } from "./features/notes/electrical-module-1";
import { electricalmodule2 } from "./features/notes/electrical-module-2";
import { electricalmodule3 } from "./features/notes/electrical-module-3";
import { pythonmodule1 } from "./features/notes/python-module-1";
import { pythonmodule2 } from "./features/notes/python-module-2";
import { pythonmodule3 } from "./features/notes/python-module-3";
import { pythonmodule4 } from "./features/notes/python-module-4";
import { physicseceModule1 } from "./features/notes/physics-ece-module-1";
import { chemistrycivilmechModule1 } from "./features/notes/chemistry-civil-mech-module-1";
import { physicseceModule2 } from "./features/notes/physics-ece-module-2";
import { chemistrycivilmechModule2 } from "./features/notes/chemistry-civil-mech-module-2";
import { physicseceModule3 } from "./features/notes/physics-ece-module-3";
import { chemistrycivilmechModule3 } from "./features/notes/chemistry-civil-mech-module-3";
import { physicseceModule4 } from "./features/notes/physics-ece-module-4";
import { chemistrycivilmechModule4 } from "./features/notes/chemistry-civil-mech-module-4";
import {
  gamat101QuestionPapers,
  gapht121QuestionPapers,
  gmest103QuestionPapers,
  gxest104QuestionPapers,
  ucest105QuestionPapers,
} from "./features/notes/question-papers";
import type { NotesModule } from "./features/notes/types";
import { MetaCollector } from "./lib/meta";
import { applyHead, type PageMeta } from "./lib/seo";
import { buildLlmsFullTxt, buildLlmsTxt, buildRobots, buildSitemap } from "./lib/site-files";

export { SITE_URL } from "./config";

/* Used at build time only (scripts/prerender.mjs). */

/* Notes modules whose topics are listed in llms-full.txt. */
const NOTES_MODULES: NotesModule[] = [
  mathsModule1, mathsModule2, mathsModule3, mathsModule4,
  physicsModule1, physicsModule2, physicsModule3, physicsModule4,
  chemistrymodule1, chemistrymodule2, chemistrymodule3, chemistrymodule4,
  graphicsm1, graphicsm2, graphicsm3, graphicsm4,
  electricalmodule1, electricalmodule2, electricalmodule3,
  pythonmodule1, pythonmodule2, pythonmodule3, pythonmodule4,
  ...(["ece", "eee"] as const).flatMap((branch) => [
    chemistryEceModule1(branch), chemistryEceModule2(branch), chemistryEceModule3(branch), chemistryEceModule4(branch),
  ]),
  ...(["ece", "eee"] as const).flatMap((branch) => [
    physicseceModule1(branch), physicseceModule2(branch), physicseceModule3(branch), physicseceModule4(branch),
  ]),
  ...(["civil", "me"] as const).flatMap((branch) => [
    chemistrycivilmechModule1(branch), chemistrycivilmechModule2(branch), chemistrycivilmechModule3(branch), chemistrycivilmechModule4(branch),
  ]),
  gamat101QuestionPapers, gapht121QuestionPapers, gmest103QuestionPapers, gxest104QuestionPapers, ucest105QuestionPapers,
];

const QUESTION_PAPERS = [gamat101QuestionPapers, gapht121QuestionPapers, gmest103QuestionPapers, gxest104QuestionPapers, ucest105QuestionPapers];

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
  { url: "/events", file: "events/index.html", chunk: "src/pages/EventsPage.tsx" },
  { url: "/contact", file: "contact/index.html", chunk: "src/pages/ContactPage.tsx" },
  { url: "/activities", file: "activities/index.html", chunk: "src/pages/ActivitiesPage.tsx" },
  { url: "/notes", file: "notes/index.html" },
  // a page for each department, each semester that has notes, and each of those subjects
  ...NOTES_CATALOGUE.flatMap((branch) => [
    branchPath(branch),
    ...branch.semesters
      .filter((semester) => semester.subjects.length > 0)
      .flatMap((semester) => [semesterPath(branch, semester), ...semester.subjects.map((subject) => subject.href)]),
  ]).map((url): StaticPage => ({ url, file: fileFor(url) })),
  ...NOTES_CATALOGUE.flatMap((branch) => branch.semesters.flatMap((semester) =>
    semester.subjects.flatMap((subject) => subject.syllabusHref ? [subject.syllabusHref] : []),
  )).map((url): StaticPage => ({ url, file: fileFor(url), chunk: "src/pages/notes/SyllabusPage.tsx" })),
  { url: mathsModule1.basePath, file: fileFor(mathsModule1.basePath), chunk: "src/pages/notes/MathsNotesPage.tsx" },
  { url: mathsModule2.basePath, file: fileFor(mathsModule2.basePath), chunk: "src/pages/notes/MathsModule2Page.tsx" },
  { url: mathsModule3.basePath, file: fileFor(mathsModule3.basePath), chunk: "src/pages/notes/MathsModule3Page.tsx" },
  { url: mathsModule4.basePath, file: fileFor(mathsModule4.basePath), chunk: "src/pages/notes/MathsModule4Page.tsx" },
  { url: physicsModule1.basePath, file: fileFor(physicsModule1.basePath), chunk: "src/pages/notes/PhysicsModule1Page.tsx" },
  { url: physicsModule2.basePath, file: fileFor(physicsModule2.basePath), chunk: "src/pages/notes/PhysicsModule2Page.tsx" },
  { url: physicsModule3.basePath, file: fileFor(physicsModule3.basePath), chunk: "src/pages/notes/PhysicsModule3Page.tsx" },
  { url: physicsModule4.basePath, file: fileFor(physicsModule4.basePath), chunk: "src/pages/notes/PhysicsModule4Page.tsx" },
  { url: chemistrymodule1.basePath, file: fileFor(chemistrymodule1.basePath), chunk: "src/pages/notes/ImportedModulePage.tsx" },
  { url: chemistrymodule2.basePath, file: fileFor(chemistrymodule2.basePath), chunk: "src/pages/notes/ImportedModulePage.tsx" },
  { url: chemistrymodule3.basePath, file: fileFor(chemistrymodule3.basePath), chunk: "src/pages/notes/ImportedModulePage.tsx" },
  { url: chemistrymodule4.basePath, file: fileFor(chemistrymodule4.basePath), chunk: "src/pages/notes/ImportedModulePage.tsx" },
  { url: graphicsm1.basePath, file: fileFor(graphicsm1.basePath), chunk: "src/pages/notes/ImportedModulePage.tsx" },
  { url: graphicsm2.basePath, file: fileFor(graphicsm2.basePath), chunk: "src/pages/notes/ImportedModulePage.tsx" },
  { url: graphicsm3.basePath, file: fileFor(graphicsm3.basePath), chunk: "src/pages/notes/ImportedModulePage.tsx" },
  { url: graphicsm4.basePath, file: fileFor(graphicsm4.basePath), chunk: "src/pages/notes/ImportedModulePage.tsx" },
  { url: electricalmodule1.basePath, file: fileFor(electricalmodule1.basePath), chunk: "src/pages/notes/ImportedModulePage.tsx" },
  { url: electricalmodule2.basePath, file: fileFor(electricalmodule2.basePath), chunk: "src/pages/notes/ImportedModulePage.tsx" },
  { url: electricalmodule3.basePath, file: fileFor(electricalmodule3.basePath), chunk: "src/pages/notes/ImportedModulePage.tsx" },
  { url: pythonmodule1.basePath, file: fileFor(pythonmodule1.basePath), chunk: "src/pages/notes/ImportedModulePage.tsx" },
  { url: pythonmodule2.basePath, file: fileFor(pythonmodule2.basePath), chunk: "src/pages/notes/ImportedModulePage.tsx" },
  { url: pythonmodule3.basePath, file: fileFor(pythonmodule3.basePath), chunk: "src/pages/notes/ImportedModulePage.tsx" },
  { url: pythonmodule4.basePath, file: fileFor(pythonmodule4.basePath), chunk: "src/pages/notes/ImportedModulePage.tsx" },
  ...(["ece", "eee"] as const).flatMap((branch) =>
    ([1, 2, 3, 4] as const).map((n): StaticPage => ({
      url: `/notes/${branch}/s1/maths/module-${n}`,
      file: fileFor(`/notes/${branch}/s1/maths/module-${n}`),
      chunk: "src/pages/notes/ImportedModulePage.tsx",
    })),
  ),
  ...(["ece", "eee"] as const).flatMap((branch) =>
    ([1, 2, 3, 4] as const).map((n): StaticPage => ({
      url: `/notes/${branch}/s1/chemistry/module-${n}`,
      file: fileFor(`/notes/${branch}/s1/chemistry/module-${n}`),
      chunk: "src/pages/notes/ImportedModulePage.tsx",
    })),
  ),
  ...(["ece", "eee"] as const).flatMap((branch) =>
    ([1, 2, 3, 4] as const).map((n): StaticPage => ({
      url: `/notes/${branch}/s1/physics/module-${n}`,
      file: fileFor(`/notes/${branch}/s1/physics/module-${n}`),
      chunk: "src/pages/notes/ImportedModulePage.tsx",
    })),
  ),
  ...(["ece", "eee"] as const).flatMap((branch) => [
    ...(["m1", "m2", "m3", "m4", "question-papers"] as const).map((module) => {
      const url = `/notes/${branch}/s1/graphics/${module}`;
      return { url, file: fileFor(url), chunk: "src/pages/notes/ImportedModulePage.tsx" } satisfies StaticPage;
    }),
    ...(["module-1", "module-2", "module-3", "question-papers"] as const).map((module) => {
      const url = `/notes/${branch}/s1/electrical/${module}`;
      return { url, file: fileFor(url), chunk: "src/pages/notes/ImportedModulePage.tsx" } satisfies StaticPage;
    }),
    ...(["module-1", "module-2", "module-3", "module-4", "question-papers"] as const).map((module) => {
      const url = `/notes/${branch}/s1/python/${module}`;
      return { url, file: fileFor(url), chunk: "src/pages/notes/ImportedModulePage.tsx" } satisfies StaticPage;
    }),
  ]),
  ...(["civil", "me"] as const).flatMap((branch) =>
    ([1, 2, 3, 4] as const).map((n): StaticPage => ({
      url: `/notes/${branch}/s1/chemistry/module-${n}`,
      file: fileFor(`/notes/${branch}/s1/chemistry/module-${n}`),
      chunk: "src/pages/notes/ImportedModulePage.tsx",
    })),
  ),
  ...QUESTION_PAPERS.map((notes): StaticPage => ({ url: notes.basePath, file: fileFor(notes.basePath), chunk: "src/pages/notes/ImportedModulePage.tsx" })),
  // served by the host for any URL that has no file
  { url: "/404", file: "404.html" },
];

/* Pages search engines should list: everything written out except the 404 page. */
export const indexablePages = () => pages.filter((page) => page.url !== "/404").map((page) => page.url);

/* sitemap.xml, robots.txt, llms.txt and llms-full.txt, keyed by output file name. */
export const siteFiles = () => ({
  "sitemap.xml": buildSitemap(indexablePages()),
  "robots.txt": buildRobots(),
  "llms.txt": buildLlmsTxt(),
  "llms-full.txt": buildLlmsFullTxt(NOTES_MODULES),
});

export { applyHead };

/* Renders one URL to HTML, waiting for lazily loaded pages, and returns the page's title and description. */
export async function render(url: string, programs?: readonly EventEntry[]) {
  let meta: PageMeta | undefined;
  const { prelude } = await prerenderToNodeStream(
    <StrictMode>
      <MetaCollector value={(m) => (meta = m)}>
        <ProgramFeedProvider programs={programs}>
          <StaticRouter location={url}>
            <App />
          </StaticRouter>
        </ProgramFeedProvider>
      </MetaCollector>
    </StrictMode>,
  );
  const chunks: Buffer[] = [];
  for await (const chunk of prelude) chunks.push(Buffer.from(chunk));
  return { html: Buffer.concat(chunks).toString("utf8"), meta };
}

/** Per-request landing page HTML with the exact program order used for hydration. */
export async function renderLandingDocument(template: string) {
  const feed = createProgramFeed();
  const { html, meta } = await render("/", feed.programs);
  const data = JSON.stringify(feed).replace(/</g, "\\u003c");
  let document = template.replace('<div id="root"></div>', () => `<div id="root">${html}</div><script id="program-feed" type="application/json">${data}</script>`);
  if (meta) document = applyHead(document, meta);
  return document;
}
