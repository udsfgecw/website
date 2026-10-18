import { Navigate, useParams } from "react-router-dom";
import Reader from "@/features/notes/reader/Reader";
import { pageAnchor, type NotesModule } from "@/features/notes/types";
import NotFoundPage from "@/pages/NotFoundPage";

/* All of a module's pages are on its base path; per-page URLs (/notes/cse/s1/maths/12) jump to #page-12. */
export default function ModuleNotesPage({ notes }: { notes: NotesModule }) {
  const { page } = useParams();
  if (page === undefined) return <Reader notes={notes} />;
  const n = Number(page);
  if (String(n) !== page || n < 1 || n > notes.pages.length) return <NotFoundPage />;
  return <Navigate to={`${notes.basePath}#${pageAnchor(n)}`} replace />;
}
