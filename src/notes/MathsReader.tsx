import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  Check,
  ChevronDown,
  Moon,
  Sun,
  BookOpen,
} from "lucide-react";
import notebook from "./maths-module-1.md?raw";
import "katex/dist/katex.min.css";
import "./reader.css";

const chapters = [
  { page: 2, title: "Limits of function values" },
  { page: 3, title: "Limit laws" },
  { page: 5, title: "Sandwich theorem" },
  { page: 12, title: "Continuity" },
  { page: 13, title: "One-sided limits" },
  { page: 16, title: "Derivatives" },
  { page: 18, title: "Rules of differentiation" },
  { page: 20, title: "Higher order derivatives" },
  { page: 22, title: "Instantaneous rate of change" },
  { page: 23, title: "Chain rule" },
  { page: 25, title: "Implicit differentiation" },
  { page: 29, title: "Tangents & normals" },
  { page: 31, title: "Linearization" },
  { page: 33, title: "Concavity" },
];
const pages = [
  ...notebook.matchAll(
    /<!-- Source:.*?; page (\d+) -->([\s\S]*?)(?=<!-- Source:|$)/g,
  ),
]
  .filter((match) => Number(match[1]) > 1)
  .map((match) => ({
    number: Number(match[1]),
    content: match[2].trim().replace(/\n---\s*$/, ""),
  }));
const KEY = "udsf:notes:cse:s1:maths:v1";
type Saved = {
  page: number;
  offset: number;
  bookmarks: number[];
  size: number;
  dark: boolean;
};
const defaults: Saved = {
  page: 2,
  offset: 0,
  bookmarks: [],
  size: 18,
  dark: false,
};
function readSaved(): Saved {
  try {
    const value = JSON.parse(localStorage.getItem(KEY) || "null");
    if (!value || typeof value !== "object") return defaults;
    return {
      page:
        Number.isInteger(value.page) && value.page >= 2 && value.page <= 35
          ? value.page
          : 2,
      offset: Number.isFinite(value.offset)
        ? Math.max(0, Math.min(1, value.offset))
        : 0,
      bookmarks: Array.isArray(value.bookmarks)
        ? value.bookmarks.filter(
            (n: number) => Number.isInteger(n) && n >= 2 && n <= 35,
          )
        : [],
      size: [16, 18, 20, 22].includes(value.size) ? value.size : 18,
      dark: value.dark === true,
    };
  } catch {
    return defaults;
  }
}
function IdentityGraph() {
  return (
    <figure className="identity-graph">
      <svg viewBox="0 0 440 260" role="img" aria-labelledby="identity-title">
        <title id="identity-title">
          Graph of the identity function f(x) = x
        </title>
        <defs>
          <marker
            id="arrow"
            markerWidth="8"
            markerHeight="8"
            refX="4"
            refY="4"
            orient="auto"
          >
            <path d="M0,0 L8,4 L0,8" fill="none" stroke="currentColor" />
          </marker>
        </defs>
        <path
          d="M50 218H410 M65 235V25"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          markerEnd="url(#arrow)"
        />
        <path d="M65 218L325 38" fill="none" stroke="#25846c" strokeWidth="3" />
        <g fill="currentColor" fontSize="17">
          <text x="45" y="240">
            0
          </text>
          <text x="409" y="242">
            x
          </text>
          <text x="43" y="27">
            y
          </text>
          <text x="255" y="105">
            f(x) = x
          </text>
        </g>
      </svg>
      <figcaption>The identity function · f(x) = x</figcaption>
    </figure>
  );
}

export default function MathsReader() {
  const [initial] = useState(readSaved);
  const [page, setPage] = useState(2);
  const [size, setSize] = useState(initial.size);
  const [dark, setDark] = useState(initial.dark);
  const [bookmarks, setBookmarks] = useState(initial.bookmarks);
  const [resume, setResume] = useState(
    initial.page > 2 || initial.offset > 0.02,
  );
  const [storageAvailable, setStorageAvailable] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const article = useRef<HTMLElement>(null);
  const pendingOffset = useRef(0);
  const navigationRequested = useRef(false);
  const position = useRef({ page: initial.page, offset: initial.offset });
  const saveRef = useRef(() => {});
  const current = pages.find((p) => p.number === page)!;
  const chapter = [...chapters].reverse().find((c) => c.page <= page)!;
  const progress = Math.round(((page - 2) / pages.length) * 100);

  saveRef.current = () => {
    try {
      localStorage.setItem(
        KEY,
        JSON.stringify({ ...position.current, size, dark, bookmarks }),
      );
      setStorageAvailable(true);
    } catch {
      setStorageAvailable(false);
    }
  };
  useEffect(() => {
    saveRef.current();
  }, [size, dark, bookmarks]);
  useEffect(() => {
    const oldTitle = document.title;
    document.title = "S1 CSE Maths · Module 1 | UDSF GECW";
    return () => {
      document.title = oldTitle;
    };
  }, []);
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const update = () => {
      // Preserve an existing saved place until the reader explicitly resumes or starts.
      if (resume) return;
      const top = article.current
        ? article.current.getBoundingClientRect().top + window.scrollY
        : 0;
      const range = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight - top,
      );
      position.current = {
        page,
        offset: Math.max(0, Math.min(1, (window.scrollY - top) / range)),
      };
    };
    const flush = () => {
      update();
      saveRef.current();
    };
    const scroll = () => {
      update();
      clearTimeout(timer);
      timer = setTimeout(() => saveRef.current(), 350);
    };
    const visibility = () => {
      if (document.visibilityState === "hidden") flush();
    };
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("pagehide", flush);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("pagehide", flush);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, [page, resume]);
  useEffect(() => {
    if (resume || !article.current || !navigationRequested.current) return;
    const frame = requestAnimationFrame(() => {
      const top = article.current!.getBoundingClientRect().top + window.scrollY;
      const range = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight - top,
      );
      window.scrollTo({
        top:
          top +
          pendingOffset.current * range -
          (pendingOffset.current ? 0 : 90),
        behavior: "instant",
      });
      article.current?.focus({ preventScroll: true });
    });
    return () => cancelAnimationFrame(frame);
  }, [page, resume]);
  function go(next: number, offset = 0) {
    navigationRequested.current = true;
    pendingOffset.current = offset;
    position.current = { page: next, offset };
    setResume(false);
    setPage(next);
    setMenuOpen(false);
    saveRef.current();
    if (next === page && offset === 0)
      article.current?.scrollIntoView({ behavior: "instant", block: "start" });
  }
  const contents = (
    <>
      <p className="reader-eyebrow">In this module</p>
      <nav aria-label="Module contents">
        {chapters.map((c, i) => (
          <button
            key={c.page}
            onClick={() => go(c.page)}
            aria-current={chapter.page === c.page ? "location" : undefined}
          >
            <span>{String(i + 1).padStart(2, "0")}</span>
            {c.title}
          </button>
        ))}
      </nav>
      {bookmarks.length > 0 && (
        <div className="reader-bookmarks">
          <p className="reader-eyebrow">Your bookmarks</p>
          {[...bookmarks]
            .sort((a, b) => a - b)
            .map((n) => (
              <button key={n} onClick={() => go(n)}>
                <Bookmark size={14} /> Page {n - 1}
                <span>
                  {[...chapters].reverse().find((c) => c.page <= n)?.title}
                </span>
              </button>
            ))}
        </div>
      )}
      <p className="reader-local-note">
        Your place and preferences are saved in this browser.
      </p>
    </>
  );

  return (
    <div className={`maths-reader${dark ? " reader-dark" : ""}`}>
      <a className="reader-skip" href="#notebook-page">
        Skip to notes
      </a>
      <header className="reader-header">
        <a href="/" className="reader-brand">
          <img src="/assets/logo.webp" alt="" />
          <span>
            UDSF <small>GEC WAYANAD</small>
          </span>
        </a>
        <span className="reader-header-label">THE NOTES SHELF</span>
        <a href="/" className="reader-back">
          <ArrowLeft size={15} /> Back to UDSF
        </a>
      </header>
      <div className="reader-layout">
        <aside className="reader-sidebar">{contents}</aside>
        <main className="reader-main">
          <div className="reader-breadcrumb">
            NOTES <span>/</span> CSE <span>/</span> S1 <span>/</span> MATHS
          </div>
          <section className="reader-intro">
            <div className="reader-tag">
              <span /> SEMESTER 01 · MODULE 01
            </div>
            <h1>
              A little clarity.
              <br />
              <em>A lot of maths.</em>
            </h1>
            <p>Mathematics for Information Science 1</p>
            <div className="reader-meta">
              <span>
                <BookOpen size={15} /> GAMAT101
              </span>
              <span>34 pages of notes</span>
              <span>Limits to concavity</span>
            </div>
          </section>
          {resume && (
            <div className="reader-resume">
              <div>
                <span className="reader-eyebrow">RIGHT WHERE YOU LEFT OFF</span>
                <p>
                  Continue from page {initial.page - 1}
                  <span> of 34</span>
                </p>
              </div>
              <button onClick={() => go(initial.page, initial.offset)}>
                Continue reading <ArrowRight size={16} />
              </button>
              <button className="reader-start" onClick={() => go(2)}>
                Start over
              </button>
            </div>
          )}
          <div className="reader-mobile-contents">
            <button
              aria-expanded={menuOpen}
              aria-controls="mobile-contents"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Contents · {chapter.title}
              <ChevronDown size={16} />
            </button>
            {menuOpen && <div id="mobile-contents">{contents}</div>}
          </div>
          <div className="reader-toolbar">
            <div className="reader-tools">
              <span className="reader-eyebrow">READING VIEW</span>
              <button
                aria-label="Decrease text size"
                disabled={size <= 16}
                onClick={() => setSize(size - 2)}
              >
                A−
              </button>
              <span className="reader-size">{size}</span>
              <button
                aria-label="Increase text size"
                disabled={size >= 22}
                onClick={() => setSize(size + 2)}
              >
                A+
              </button>
              <span className="reader-tool-divider" />
              <button
                aria-label={dark ? "Use light theme" : "Use dark theme"}
                onClick={() => setDark(!dark)}
              >
                {dark ? <Sun size={17} /> : <Moon size={17} />}
              </button>
            </div>
            <button
              className={`reader-bookmark${bookmarks.includes(page) ? " is-saved" : ""}`}
              aria-pressed={bookmarks.includes(page)}
              onClick={() =>
                setBookmarks(
                  bookmarks.includes(page)
                    ? bookmarks.filter((p) => p !== page)
                    : [...bookmarks, page],
                )
              }
            >
              <Bookmark
                size={16}
                fill={bookmarks.includes(page) ? "currentColor" : "none"}
              />
              <span>
                {bookmarks.includes(page) ? "Bookmarked" : "Bookmark"}
              </span>
            </button>
          </div>
          <div className="reader-page-status">
            <span>
              PAGE {page - 1} <span>/ 34</span>
            </span>
            <span>{chapter.title}</span>
          </div>
          <article
            id="notebook-page"
            ref={article}
            tabIndex={-1}
            className="reader-article"
            style={{ fontSize: size }}
            aria-label={`Notebook page ${page - 1}`}
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm, remarkMath]}
              rehypePlugins={[[rehypeKatex, { strict: false }]]}
              components={{
                code({ className, children, ...props }) {
                  return className === "language-jsxgraph" ? (
                    <IdentityGraph />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
                pre({ children }) {
                  return <div className="reader-code-block">{children}</div>;
                },
                img({ src, alt }) {
                  return (
                    <img
                      src={src}
                      alt={alt || "Mathematics diagram"}
                      loading="eager"
                      decoding="async"
                    />
                  );
                },
                h1({ children }) {
                  return <h2>{children}</h2>;
                },
              }}
            >
              {current.content}
            </ReactMarkdown>
          </article>
          <div className="reader-pagination">
            <button disabled={page === 2} onClick={() => go(page - 1)}>
              <ArrowLeft size={17} /> Previous page
            </button>
            <label>
              <span className="reader-sr-only">Go to page</span>
              <select value={page} onChange={(e) => go(Number(e.target.value))}>
                {pages.map((p) => (
                  <option key={p.number} value={p.number}>
                    Page {p.number - 1} of 34
                  </option>
                ))}
              </select>
            </label>
            <button disabled={page === 35} onClick={() => go(page + 1)}>
              Next page <ArrowRight size={17} />
            </button>
          </div>
          {page === 35 && (
            <p className="reader-complete">
              <Check size={18} /> You’ve reached the end of Module 1.
            </p>
          )}
          <footer className="reader-footer">
            <p>Shared for a better study session.</p>
            <p>
              Source: ktunotes.in · GAMAT101, Module 1 · Original source pages
              2–35.
              <br />
              Transcribed notes; check the original material if a step looks
              unclear.
            </p>
            <span role="status">
              {storageAvailable
                ? "Progress saved on this device"
                : "Browser storage is unavailable; progress cannot be saved."}
            </span>
          </footer>
        </main>
      </div>
      <div
        className="reader-progress"
        role="progressbar"
        aria-label="Notebook progress"
        aria-valuenow={page === 35 ? 100 : progress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <span style={{ width: `${page === 35 ? 100 : progress}%` }} />
      </div>
    </div>
  );
}
