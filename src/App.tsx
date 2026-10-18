import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation, useNavigationType } from "react-router-dom";
import { MATHS_MODULE_1_PATH } from "@/features/notes/maths-module-1/path";
import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";

// The notes reader brings markdown and maths rendering, so it loads only on notes pages.
const MathsNotesPage = lazy(() => import("@/pages/notes/MathsNotesPage"));

/* Start each newly opened page at the top. Back and forward keep the browser's own scroll
   position, and in-page links (#work) scroll to their section. */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();
  useEffect(() => {
    if (navigationType !== "POP" && !hash) window.scrollTo(0, 0);
  }, [pathname, hash, navigationType]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      {/* One boundary for every route, so pre-rendered pages hydrate with the same structure. */}
      <Suspense fallback={<p role="status" className="wrap py-24 text-ink-2">Loading…</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path={`${MATHS_MODULE_1_PATH}/:page?`} element={<MathsNotesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
