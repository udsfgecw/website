import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation, useNavigationType } from "react-router-dom";
import { MATHS_MODULE_1_PATH } from "@/features/notes/maths-module-1/path";
import { MATHS_MODULE_2_PATH } from "@/features/notes/maths-module-2/path";
import { MATHS_MODULE_3_PATH } from "@/features/notes/maths-module-3/path";
import { MATHS_MODULE_4_PATH } from "@/features/notes/maths-module-4/path";
import { PHYSICS_MODULE_1_PATH } from "@/features/notes/physics-module-1/path";
import { PHYSICS_MODULE_2_PATH } from "@/features/notes/physics-module-2/path";
import { PHYSICS_MODULE_3_PATH } from "@/features/notes/physics-module-3/path";
import { PHYSICS_MODULE_4_PATH } from "@/features/notes/physics-module-4/path";
import HomePage from "@/pages/HomePage";
import GateExamPage from "@/pages/GateExamPage";
import NotFoundPage from "@/pages/NotFoundPage";
import NotesPage from "@/pages/NotesPage";
import BranchPage from "@/pages/notes/BranchPage";
import SemesterPage from "@/pages/notes/SemesterPage";
import SubjectPage from "@/pages/notes/SubjectPage";
const ImportedModulePage = lazy(() => import("@/pages/notes/ImportedModulePage"));
const SyllabusPage = lazy(() => import("@/pages/notes/SyllabusPage"));
const EventsPage = lazy(() => import("@/pages/EventsPage"));
const ActivitiesPage = lazy(() => import("@/pages/ActivitiesPage"));

// The notes reader brings markdown and maths rendering, so it loads only on notes pages.
const MathsNotesPage = lazy(() => import("@/pages/notes/MathsNotesPage"));
const MathsModule2Page = lazy(() => import("@/pages/notes/MathsModule2Page"));
const MathsModule3Page = lazy(() => import("@/pages/notes/MathsModule3Page"));
const MathsModule4Page = lazy(() => import("@/pages/notes/MathsModule4Page"));
const PhysicsModule1Page = lazy(() => import("@/pages/notes/PhysicsModule1Page"));
const PhysicsModule2Page = lazy(() => import("@/pages/notes/PhysicsModule2Page"));
const PhysicsModule3Page = lazy(() => import("@/pages/notes/PhysicsModule3Page"));
const PhysicsModule4Page = lazy(() => import("@/pages/notes/PhysicsModule4Page"));

/* After each navigation: links with a section (/#work) scroll to it, other new
   pages start at the top, and back and forward keep the browser's own scroll position. */
function ScrollOnNavigate() {
  const { key, hash } = useLocation();
  const navigationType = useNavigationType();
  useEffect(() => {
    if (!hash) {
      if (navigationType !== "POP") window.scrollTo(0, 0);
      return;
    }
    // A lazily loaded page renders its sections a moment later, so look again for a short while.
    const id = decodeURIComponent(hash.slice(1));
    let tries = 0;
    let timer = 0;
    const find = () => {
      const target = document.getElementById(id);
      if (target) target.scrollIntoView();
      else if (tries++ < 60) timer = window.setTimeout(find, 50);
    };
    find();
    return () => clearTimeout(timer);
  }, [key, hash, navigationType]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollOnNavigate />
      {/* One boundary for every route, so pre-rendered pages hydrate with the same structure. */}
      <Suspense fallback={<p role="status" className="wrap py-24 text-ink-2">Loading…</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/notes/:branch" element={<BranchPage />} />
          <Route path="/notes/:branch/:semester" element={<SemesterPage />} />
          <Route path="/notes/:branch/:semester/:subject" element={<SubjectPage />} />
          <Route path="/notes/:branch/:semester/:subject/syllabus" element={<SyllabusPage />} />
          <Route path={`${MATHS_MODULE_1_PATH}/:page?`} element={<MathsNotesPage />} />
          <Route path={`${MATHS_MODULE_2_PATH}/:page?`} element={<MathsModule2Page />} />
          <Route path={`${MATHS_MODULE_3_PATH}/:page?`} element={<MathsModule3Page />} />
          <Route path={`${MATHS_MODULE_4_PATH}/:page?`} element={<MathsModule4Page />} />
          <Route path={`${PHYSICS_MODULE_1_PATH}/:page?`} element={<PhysicsModule1Page />} />
          <Route path={`${PHYSICS_MODULE_2_PATH}/:page?`} element={<PhysicsModule2Page />} />
          <Route path={`${PHYSICS_MODULE_3_PATH}/:page?`} element={<PhysicsModule3Page />} />
          <Route path={`${PHYSICS_MODULE_4_PATH}/:page?`} element={<PhysicsModule4Page />} />
          <Route path="/notes/:branch/s1/chemistry/module-1/:page?" element={<ImportedModulePage />} />
          <Route path="/notes/:branch/s1/chemistry/module-2/:page?" element={<ImportedModulePage />} />
          <Route path="/notes/:branch/s1/chemistry/module-3/:page?" element={<ImportedModulePage />} />
          <Route path="/notes/:branch/s1/chemistry/module-4/:page?" element={<ImportedModulePage />} />
          <Route path="/notes/cse/s1/electrical/module-1/:page?" element={<ImportedModulePage />} />
          <Route path="/notes/cse/s1/electrical/module-2/:page?" element={<ImportedModulePage />} />
          <Route path="/notes/cse/s1/electrical/module-3/:page?" element={<ImportedModulePage />} />
          <Route path="/notes/cse/s1/python/module-1/:page?" element={<ImportedModulePage />} />
          <Route path="/notes/cse/s1/python/module-2/:page?" element={<ImportedModulePage />} />
          <Route path="/notes/cse/s1/python/module-3/:page?" element={<ImportedModulePage />} />
          <Route path="/notes/cse/s1/python/module-4/:page?" element={<ImportedModulePage />} />
          <Route path="/notes/cse/s1/maths/question-papers/:page?" element={<ImportedModulePage />} />
          <Route path="/notes/cse/s1/physics/question-papers/:page?" element={<ImportedModulePage />} />
          <Route path="/notes/cse/s1/graphics/m1/:page?" element={<ImportedModulePage />} />
          <Route path="/notes/cse/s1/graphics/m2/:page?" element={<ImportedModulePage />} />
          <Route path="/notes/cse/s1/graphics/m3/:page?" element={<ImportedModulePage />} />
          <Route path="/notes/cse/s1/graphics/m4/:page?" element={<ImportedModulePage />} />
          <Route path="/notes/cse/s1/graphics/question-papers/:page?" element={<ImportedModulePage />} />
          <Route path="/notes/cse/s1/electrical/question-papers/:page?" element={<ImportedModulePage />} />
          <Route path="/notes/cse/s1/python/question-papers/:page?" element={<ImportedModulePage />} />
          <Route path="/notes/:branch/s1/maths/module-1/:page?" element={<ImportedModulePage />} />
          <Route path="/gate" element={<GateExamPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
