import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { pageHref, type NotesModule } from "../types";

/* Previous and next are real links, so every page can be reached (and crawled) without JavaScript. */
export default function ReaderPagination({ notes, page }: { notes: NotesModule; page: number }) {
  const navigate = useNavigate();
  const total = notes.pages.length;

  return (
    <nav className="reader-pagination" aria-label="Notebook pages">
      {page > 1 ? (
        <Link className="reader-link" to={pageHref(notes, page - 1)} rel="prev">
          <ArrowLeft size={17} /> Previous page
        </Link>
      ) : (
        <span className="reader-link" aria-disabled="true">
          <ArrowLeft size={17} /> Previous page
        </span>
      )}
      <label>
        <span className="reader-sr-only">Go to page</span>
        <select value={page} onChange={(e) => navigate(pageHref(notes, Number(e.target.value)))}>
          {notes.pages.map((p) => (
            <option key={p.number} value={p.number}>
              Page {p.number} of {total}
            </option>
          ))}
        </select>
      </label>
      {page < total ? (
        <Link className="reader-link" to={pageHref(notes, page + 1)} rel="next">
          Next page <ArrowRight size={17} />
        </Link>
      ) : (
        <span className="reader-link" aria-disabled="true">
          Next page <ArrowRight size={17} />
        </span>
      )}
    </nav>
  );
}
