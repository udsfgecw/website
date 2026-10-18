import { Navigate, useParams } from "react-router-dom";
import { mathsModule1 as notes } from "@/features/notes/maths-module-1";
import Reader from "@/features/notes/reader/Reader";
import NotFoundPage from "@/pages/NotFoundPage";

/* /notes/cse/s1/maths is page 1; /notes/cse/s1/maths/2 to /34 are the rest. */
export default function MathsNotesPage() {
  const { page } = useParams();
  if (page === undefined) return <Reader notes={notes} page={1} />;
  if (page === "1") return <Navigate to={notes.basePath} replace />;

  const n = Number(page);
  const valid = String(n) === page && Number.isInteger(n) && n >= 2 && n <= notes.pages.length;
  return valid ? <Reader notes={notes} page={n} /> : <NotFoundPage />;
}
