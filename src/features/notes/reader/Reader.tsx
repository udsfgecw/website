import { useEffect, useRef, useState } from "react";
import { BookOpen, Check, ChevronDown } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import "katex/dist/katex.min.css";
import "./reader.css";
import { pageTitle } from "@/config";
import { usePageMeta } from "@/lib/meta";
import { chapterFor, pageHref, type NotesModule } from "../types";
import NotebookPage from "./NotebookPage";
import ReaderContents from "./ReaderContents";
import ReaderHeader from "./ReaderHeader";
import ReaderPagination from "./ReaderPagination";
import ReaderToolbar from "./ReaderToolbar";
import ResumeBanner from "./ResumeBanner";
import { useReaderStorage, type ReaderPrefs } from "./useReaderStorage";

/** set on in-reader navigations that should land part-way down the page */
type NavState = { offset?: number } | null;

export default function Reader({ notes, page }: { notes: NotesModule; page: number }) {
  const total = notes.pages.length;
  const chapter = chapterFor(notes, page);
  const { prefs, setPrefs, savedPlace, place, save, available } = useReaderStorage(notes, page);
  const [resumeDismissed, setResumeDismissed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const article = useRef<HTMLElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  usePageMeta({
    title: pageTitle(page === 1 ? notes.title : `${notes.title} · Page ${page}`),
    description: `${notes.course} (${notes.code}) notes, page ${page} of ${total}: ${chapter.title}.`,
  });

  // Offer the stored place while it is somewhere other than here; until the reader answers, keep it.
  const offerResume = !resumeDismissed && savedPlace !== null && (savedPlace.page !== page || savedPlace.offset > 0.02);

  function scrollToPlace(offset: number) {
    const el = article.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const range = Math.max(1, document.documentElement.scrollHeight - window.innerHeight - top);
    window.scrollTo({ top: top + offset * range - (offset ? 0 : 90), behavior: "instant" });
    el.focus({ preventScroll: true });
  }

  function goTo(target: number, offset = 0) {
    setResumeDismissed(true);
    if (target !== page) return navigate(pageHref(notes, target), { state: { offset } });
    place.current = { page, offset };
    save();
    scrollToPlace(offset);
  }

  // Track how far down the page the reader is and save it shortly after scrolling stops.
  useEffect(() => {
    if (offerResume) return;
    let timer: ReturnType<typeof setTimeout>;
    const update = () => {
      const el = article.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY;
      const range = Math.max(1, document.documentElement.scrollHeight - window.innerHeight - top);
      place.current = { page, offset: Math.max(0, Math.min(1, (window.scrollY - top) / range)) };
    };
    const flush = () => {
      update();
      save();
    };
    const onScroll = () => {
      update();
      clearTimeout(timer);
      timer = setTimeout(save, 350);
    };
    const onVisibility = () => {
      if (document.visibilityState === "hidden") flush();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pagehide", flush);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pagehide", flush);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [page, offerResume, place, save]);

  // After moving to another page inside the reader, bring the new page into view.
  const lastKey = useRef(location.key);
  useEffect(() => {
    if (lastKey.current === location.key) return; // first render, or React re-running the effect
    lastKey.current = location.key;
    const offset = (location.state as NavState)?.offset ?? 0;
    setResumeDismissed(true);
    setMenuOpen(false);
    place.current = { page, offset };
    save();
    scrollToPlace(offset);
  }, [location.key, location.state, page, place, save]);

  const changePrefs = (next: Partial<ReaderPrefs>) => setPrefs((p) => ({ ...p, ...next }));
  const progress = page === total ? 100 : Math.round(((page - 1) / total) * 100);

  return (
    <div className={`maths-reader${prefs.dark ? " reader-dark" : ""}`}>
      <a className="reader-skip" href="#notebook-page">
        Skip to notes
      </a>
      <ReaderHeader />
      <div className="reader-layout">
        <aside className="reader-sidebar">
          <ReaderContents notes={notes} page={page} bookmarks={prefs.bookmarks} />
        </aside>
        <main className="reader-main">
          <div className="reader-breadcrumb">
            NOTES <span>/</span> CSE <span>/</span> S1 <span>/</span> MATHS
          </div>
          <section className="reader-intro">
            <div className="reader-tag">
              <span /> {notes.eyebrow}
            </div>
            <h1>
              {notes.heading[0]}
              <br />
              <em>{notes.heading[1]}</em>
            </h1>
            <p>{notes.course}</p>
            <div className="reader-meta">
              <span>
                <BookOpen size={15} /> {notes.code}
              </span>
              <span>{total} pages of notes</span>
              <span>{notes.summary}</span>
            </div>
          </section>
          {offerResume && (
            <ResumeBanner place={savedPlace} total={total} onContinue={() => goTo(savedPlace.page, savedPlace.offset)} onStartOver={() => goTo(1)} />
          )}
          <div className="reader-mobile-contents">
            <button aria-expanded={menuOpen} aria-controls="mobile-contents" onClick={() => setMenuOpen(!menuOpen)}>
              Contents · {chapter.title}
              <ChevronDown size={16} />
            </button>
            {menuOpen && (
              <div id="mobile-contents">
                <ReaderContents notes={notes} page={page} bookmarks={prefs.bookmarks} />
              </div>
            )}
          </div>
          <ReaderToolbar prefs={prefs} page={page} onChange={changePrefs} />
          <div className="reader-page-status">
            <span>
              PAGE {page} <span>/ {total}</span>
            </span>
            <span>{chapter.title}</span>
          </div>
          <NotebookPage ref={article} page={page} content={notes.pages[page - 1].content} size={prefs.size} />
          <ReaderPagination notes={notes} page={page} />
          {page === total && (
            <p className="reader-complete">
              <Check size={18} /> You’ve reached the end of {notes.title}.
            </p>
          )}
          <footer className="reader-footer">
            <p>Shared for a better study session.</p>
            <p>
              Source: {notes.source}
              <br />
              Transcribed notes; check the original material if a step looks unclear.
            </p>
            <span role="status">{available ? "Progress saved on this device" : "Browser storage is unavailable; progress cannot be saved."}</span>
          </footer>
        </main>
      </div>
      <div className="reader-progress" role="progressbar" aria-label="Notebook progress" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
        <span style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
