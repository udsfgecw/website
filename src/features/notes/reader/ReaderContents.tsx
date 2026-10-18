import { Bookmark } from "lucide-react";
import { Link } from "react-router-dom";
import { chapterFor, pageHref, type NotesModule } from "../types";

/* Chapter list and bookmarks, shown in the sidebar and in the phone contents menu. */
export default function ReaderContents({ notes, page, bookmarks }: { notes: NotesModule; page: number; bookmarks: number[] }) {
  const current = chapterFor(notes, page);
  return (
    <>
      <p className="reader-eyebrow">In this module</p>
      <nav aria-label="Module contents">
        {notes.chapters.map((c, i) => (
          <Link key={c.page} to={pageHref(notes, c.page)} className="reader-link" aria-current={current.page === c.page ? "location" : undefined}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            {c.title}
          </Link>
        ))}
      </nav>
      {bookmarks.length > 0 && (
        <div className="reader-bookmarks">
          <p className="reader-eyebrow">Your bookmarks</p>
          {[...bookmarks]
            .sort((a, b) => a - b)
            .map((n) => (
              <Link key={n} to={pageHref(notes, n)} className="reader-link">
                <Bookmark size={14} /> Page {n}
                <span>{chapterFor(notes, n).title}</span>
              </Link>
            ))}
        </div>
      )}
      <p className="reader-local-note">Your place and preferences are saved in this browser.</p>
    </>
  );
}
