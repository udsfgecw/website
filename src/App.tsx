import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation, useNavigationType } from "react-router-dom";
import { MATHS_MODULE_1_PATH } from "@/features/notes/maths-module-1/path";
import { MATHS_MODULE_2_PATH } from "@/features/notes/maths-module-2/path";
import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";
import NotesPage from "@/pages/NotesPage";

// The notes reader brings markdown and maths rendering, so it loads only on notes pages.
const MathsNotesPage = lazy(() => import("@/pages/notes/MathsNotesPage"));
const MathsModule2Page = lazy(() => import("@/pages/notes/MathsModule2Page"));

/* After each navigation: links with a section (/#work, /notes#cse-s1) scroll to it, other new
   pages start at the top, and back and forward keep the browser's own scroll position. */
function ScrollOnNavigate() {
  const { key, hash } = useLocation();
  const navigationType = useNavigationType();
  useEffect(() => {
    if (hash) document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
    else if (navigationType !== "POP") window.scrollTo(0, 0);
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
          <Route path={`${MATHS_MODULE_1_PATH}/:page?`} element={<MathsNotesPage />} />
          {/* a static path, so it wins over module 1's /:page */}
          <Route path={`${MATHS_MODULE_2_PATH}/:page?`} element={<MathsModule2Page />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
