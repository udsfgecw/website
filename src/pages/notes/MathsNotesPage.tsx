import { Navigate, useParams } from "react-router-dom";
import { mathsModule1 as notes } from "@/features/notes/maths-module-1";
import Reader from "@/features/notes/reader/Reader";
import { pageAnchor } from "@/features/notes/types";
import NotFoundPage from "@/pages/NotFoundPage";

/* All pages are on /notes/cse/s1/maths; the old per-page URLs (/notes/cse/s1/maths/12) jump to #page-12. */
export default function MathsNotesPage() {
  const { page } = useParams();
  if (page === undefined) return <Reader notes={notes} />;
  const n = Number(page);
  if (String(n) !== page || n < 1 || n > notes.pages.length) return <NotFoundPage />;
  return <Navigate to={`${notes.basePath}#${pageAnchor(n)}`} replace />;
}
