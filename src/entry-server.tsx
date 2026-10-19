import { StrictMode } from "react";
import { prerenderToNodeStream } from "react-dom/static";
import { StaticRouter } from "react-router-dom";
import App from "./App";
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
import { electricalmodule1 } from "./features/notes/electrical-module-1";
import { electricalmodule2 } from "./features/notes/electrical-module-2";
import { electricalmodule3 } from "./features/notes/electrical-module-3";
import { pythonmodule1 } from "./features/notes/python-module-1";
import { pythonmodule2 } from "./features/notes/python-module-2";
import { pythonmodule3 } from "./features/notes/python-module-3";
import { pythonmodule4 } from "./features/notes/python-module-4";
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
  { url: electricalmodule1.basePath, file: fileFor(electricalmodule1.basePath), chunk: "src/pages/notes/ImportedModulePage.tsx" },
  { url: electricalmodule2.basePath, file: fileFor(electricalmodule2.basePath), chunk: "src/pages/notes/ImportedModulePage.tsx" },
  { url: electricalmodule3.basePath, file: fileFor(electricalmodule3.basePath), chunk: "src/pages/notes/ImportedModulePage.tsx" },
  { url: pythonmodule1.basePath, file: fileFor(pythonmodule1.basePath), chunk: "src/pages/notes/ImportedModulePage.tsx" },
  { url: pythonmodule2.basePath, file: fileFor(pythonmodule2.basePath), chunk: "src/pages/notes/ImportedModulePage.tsx" },
  { url: pythonmodule3.basePath, file: fileFor(pythonmodule3.basePath), chunk: "src/pages/notes/ImportedModulePage.tsx" },
  { url: pythonmodule4.basePath, file: fileFor(pythonmodule4.basePath), chunk: "src/pages/notes/ImportedModulePage.tsx" },
  ...(["ece", "eee"] as const).map((branch): StaticPage => ({
    url: `/notes/${branch}/s1/maths/module-1`,
    file: fileFor(`/notes/${branch}/s1/maths/module-1`),
    chunk: "src/pages/notes/ImportedModulePage.tsx",
  })),
  ...(["ece", "eee"] as const).flatMap((branch) =>
    ([1, 2, 3, 4] as const).map((n): StaticPage => ({
      url: `/notes/${branch}/s1/chemistry/module-${n}`,
      file: fileFor(`/notes/${branch}/s1/chemistry/module-${n}`),
      chunk: "src/pages/notes/ImportedModulePage.tsx",
    })),
  ),
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
