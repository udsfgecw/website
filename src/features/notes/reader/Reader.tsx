import { Fragment, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, BookOpen, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "katex/dist/katex.min.css";
import "./notes.css";
import SiteLayout from "@/components/layout/SiteLayout";
import { pageTitle } from "@/config";
import { usePageMeta } from "@/lib/meta";
import { cn } from "@/lib/utils";
import { chapterFor, pageAnchor, type NotesModule } from "../types";
import PageMarkdown from "./PageMarkdown";
import ReaderTools from "./ReaderTools";
import TopicCombobox from "./TopicCombobox";
import { findSubjectNav } from "./subjectNav";
import { DEFAULT_PREFS, TEXT_SIZES, readPlace, readPrefs, savePlace, savePrefs, type Prefs, type ReadingPlace } from "./readingPlace";

const LEADING = { tight: 1.55, normal: 1.75, loose: 2 };
const WIDTH = { narrow: "58ch", normal: "70ch", wide: "86ch" };
const SERIF = 'Georgia, "Times New Roman", serif';

// sections count as "current" once their top passes this far below the viewport top (below the nav)
const READ_LINE = 120;

function scrollToPlace({ page, offset }: Pick<ReadingPlace, "page" | "offset">) {
  const section = document.getElementById(pageAnchor(page));
  if (!section) return;
  const top = section.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top: top + offset * section.offsetHeight - (offset ? READ_LINE : READ_LINE - 40), behavior: "instant" });
}

/* All pages of a module on one scrolling page, with a contents list that follows along. The place
   (page and how far down it) and text size are kept in localStorage and restored on return. */
export default function Reader({ notes }: { notes: NotesModule }) {
  const total = notes.pages.length;
  const unit = notes.unitLabel ?? "page";
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(18);
  const [prefs, setPrefs] = useState<Prefs>(DEFAULT_PREFS);
  const [restored, setRestored] = useState<ReadingPlace | null>(null);
  const [saved, setSaved] = useState(true);
  const bar = useRef<HTMLDivElement>(null);
  const ready = useRef(false); // don't save until the stored place has been read
  const place = useRef<ReadingPlace>({ page: 1, offset: 0, size: 18 });
  const chapter = chapterFor(notes, page);
  const nav = findSubjectNav(notes);
  const { hash } = useLocation();

  usePageMeta({
    title: pageTitle(notes.title),
    description: notes.displayDescription ?? `${notes.course} (${notes.code}), ${notes.module}: ${notes.summary.toLowerCase()}. All ${total} ${unit}s of notes on one page.`,
  });

  // Read the stored place after the first render, so the pre-rendered HTML matches.
  useEffect(() => {
    setPrefs(readPrefs(notes));
    const stored = readPlace(notes);
    if (stored) {
      place.current = stored;
      setSize(stored.size);
      // a link to a particular page (#page-12) wins over the stored place
      if (!hash && (stored.page > 1 || stored.offset > 0)) setRestored(stored);
    }
    ready.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only the hash the page opened with matters
  }, [notes]);

  // The route is lazy: the router's scroll effect can run before its sections
  // exist. Restore after mounting and once fonts settle, since a small change
  // in line wrapping shifts deep links by many screens in a long module.
  useEffect(() => {
    const match = /^#page-(\d+)$/.exec(hash);
    const target = match && Number(match[1]) >= 1 && Number(match[1]) <= total
      ? { page: Number(match[1]), offset: 0 }
      : restored;
    if (!target) return;
    let cancelled = false;
    let frame = 0;
    scrollToPlace(target);
    void document.fonts.ready.then(() => {
      if (!cancelled) frame = requestAnimationFrame(() => scrollToPlace(target));
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, [hash, notes, total, restored]);

  // Follow the scroll: current page, progress bar, and the place saved shortly after scrolling stops.
  useEffect(() => {
    let frame = 0;
    let timer: ReturnType<typeof setTimeout>;
    const save = () => ready.current && setSaved(savePlace(notes, place.current));
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.current?.style.setProperty("transform", `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`);
      let current = 1;
      let section: HTMLElement | null = null;
      // Pages are ordered. Probe only log2(total) section boundaries instead of
      // forcing layout reads for every earlier page on each scroll frame.
      let low = 1;
      let high = total;
      while (low <= high) {
        const middle = Math.floor((low + high) / 2);
        const el = document.getElementById(pageAnchor(middle));
        if (el && el.getBoundingClientRect().top <= READ_LINE) {
          current = middle;
          section = el;
          low = middle + 1;
        } else high = middle - 1;
      }
      const offset = section ? Math.max(0, Math.min(1, (READ_LINE - section.getBoundingClientRect().top) / section.offsetHeight)) : 0;
      place.current = { ...place.current, page: current, offset };
      setPage(current);
    };
    const onScroll = () => {
      frame ||= requestAnimationFrame(update);
      clearTimeout(timer);
      timer = setTimeout(save, 300);
    };
    const flush = () => {
      update();
      save();
    };
    // pick up any scrolling that happened before the page finished loading
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pagehide", flush);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pagehide", flush);
    };
  }, [notes, total]);

  function changeSize(next: number) {
    setSize(next);
    place.current = { ...place.current, size: next };
    if (ready.current) setSaved(savePlace(notes, place.current));
  }

  function changePrefs(next: Prefs) {
    const anchor = { ...place.current };
    setPrefs(next);
    savePrefs(notes, next);
    // layout changes shift the text; hold the reader's spot once it has re-flowed
    requestAnimationFrame(() => scrollToPlace(anchor));
  }

  const contents = (
    <ol className="flex flex-col gap-0.5">
      {notes.chapters.map((c) => (
        <li key={`${c.page}-${c.title}`}>
          <a
            href={`#${pageAnchor(c.page)}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToPlace({ page: c.page, offset: 0 });
            }}
            aria-current={chapter.page === c.page ? "location" : undefined}
            className={cn(
              "block rounded-lg px-3 py-2 text-[0.88rem] leading-snug transition-colors",
              chapter.page === c.page ? "bg-green-tint font-semibold text-green-ink" : "text-ink-2 hover:text-ink",
            )}
          >
            {c.title}
          </a>
        </li>
      ))}
    </ol>
  );

  const textSize = (
    <div className="flex items-center gap-1 text-[0.85rem]">
      <span className="label mr-2 text-ink-2">Text size</span>
      <button className="rounded-md px-2 py-1 hover:bg-paper disabled:opacity-30" aria-label="Smaller text" disabled={size <= TEXT_SIZES[0]} onClick={() => changeSize(size - 2)}>
        A−
      </button>
      <span className="w-6 text-center tabular-nums">{size}</span>
      <button
        className="rounded-md px-2 py-1 hover:bg-paper disabled:opacity-30"
        aria-label="Larger text"
        disabled={size >= TEXT_SIZES[TEXT_SIZES.length - 1]}
        onClick={() => changeSize(size + 2)}
      >
        A+
      </button>
    </div>
  );

  return (
    <SiteLayout>
      {/* reading progress through the whole module */}
      <div className="fixed inset-x-0 top-0 z-[60] h-1" aria-hidden="true">
        <div ref={bar} style={{ transform: "scaleX(0)" }} className="h-full origin-left bg-[linear-gradient(90deg,var(--color-green),var(--color-blue))]" />
      </div>

      <main>
        <header className="wrap pt-[clamp(3rem,7vw,5rem)] pb-[clamp(2.5rem,5vw,4rem)]">
          <nav aria-label="Breadcrumb" className="label flex flex-wrap items-center gap-2 text-ink-2">
            {notes.trail.map((step, i) => (
              <Fragment key={step.label}>
                {i > 0 && <span aria-hidden="true">/</span>}
                {step.href ? (
                  <Link to={step.href} className="hover:text-ink">
                    {step.label}
                  </Link>
                ) : (
                  <span className="text-ink">{step.label}</span>
                )}
              </Fragment>
            ))}
          </nav>
          <h1 className="mt-6 max-w-[22ch] text-[length:clamp(2.2rem,5vw,4.2rem)] leading-[1.05] font-semibold tracking-[-0.045em] text-balance">
            {notes.displayHeading ?? <>{notes.course}.{" "}<span className="text-ink/30">{notes.module}, {notes.summary.toLowerCase()}.</span></>}
          </h1>
          <p className="mt-6 text-[0.95rem] text-ink-2">
            {notes.code} · {total} {unit}s · {saved ? "Your place is saved in this browser" : "This browser can’t save your place"}
          </p>
          {nav && (
            <nav aria-label="Course navigation" className="mt-7 flex flex-wrap items-center gap-2 pt-4 border-t border-line/60">
              {nav.subject.syllabusHref && (
                <Link
                  to={nav.subject.syllabusHref}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[0.82rem] font-medium transition-colors",
                    nav.isSyllabus
                      ? "border-green-ink/30 bg-green-tint font-semibold text-green-ink shadow-2xs"
                      : "border-line bg-white text-ink-2 hover:border-ink hover:text-ink"
                  )}
                >
                  <BookOpen size={14} aria-hidden="true" />
                  Syllabus
                </Link>
              )}
              {nav.subject.modules.map((m) => {
                const isCurrent = notes.basePath === m.href;
                return (
                  <Link
                    key={m.href}
                    to={m.href}
                    aria-current={isCurrent ? "page" : undefined}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[0.82rem] font-medium transition-colors",
                      isCurrent
                        ? "border-green-ink/30 bg-green-tint font-semibold text-green-ink shadow-2xs"
                        : "border-line bg-white text-ink-2 hover:border-ink hover:text-ink"
                    )}
                  >
                    {m.name}
                  </Link>
                );
              })}
              <Link
                to={nav.subject.href}
                className="inline-flex items-center gap-1 rounded-full border border-transparent px-3 py-1.5 text-[0.82rem] font-medium text-ink-2 hover:text-ink"
              >
                All {nav.subject.name} notes <ArrowRight size={13} aria-hidden="true" />
              </Link>
            </nav>
          )}
        </header>

        <div className="notes-watermark">
          <div className="wrap grid gap-8 border-t border-line pt-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16 lg:pt-12">
            {/* contents: a sticky column on wide screens, a collapsible list on phones */}
            <aside className="max-lg:hidden lg:sticky lg:top-[calc(var(--nav-h)+1.5rem)] lg:max-h-[calc(100svh-var(--nav-h)-3rem)] lg:self-start lg:overflow-y-auto">
              <p className="label mb-3 px-3 text-ink-2">Contents</p>
              <div className="mb-3 px-1">
                <TopicCombobox
                  chapters={notes.chapters}
                  currentChapter={chapter}
                  unitLabel={unit}
                  onSelect={(p) => scrollToPlace({ page: p, offset: 0 })}
                />
              </div>
              {contents}
              <div className="mt-6 border-t border-line px-3 pt-5">{textSize}</div>
            </aside>
            <div className="lg:hidden flex flex-col gap-3">
              <TopicCombobox
                chapters={notes.chapters}
                currentChapter={chapter}
                unitLabel={unit}
                onSelect={(p) => scrollToPlace({ page: p, offset: 0 })}
              />
              <details className="group rounded-2xl border border-line">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[0.95rem] font-medium">
                  <span className="min-w-0 truncate">All topics · {notes.chapters.length}</span>
                  <ChevronDown size={18} className="shrink-0 group-open:rotate-180" aria-hidden="true" />
                </summary>
                <div className="border-t border-line p-2">{contents}</div>
                <div className="border-t border-line px-5 py-3">{textSize}</div>
              </details>
            </div>

            <article
              className={cn("notes-prose min-w-0", notes.unitLabel === "section" && "notes-prose--sectioned")}
              style={{ fontSize: size, lineHeight: LEADING[prefs.leading], maxWidth: WIDTH[prefs.width], fontFamily: prefs.font === "serif" ? SERIF : undefined }}
            >
              {notes.pages.map((p) => (
                <section key={p.number} id={pageAnchor(p.number)}>
                  <PageMarkdown content={p.content} outlinedProblems={notes.outlinedProblems} />
                </section>
              ))}
              <footer className="mt-8 border-t border-line pt-8 pb-4 text-[0.85rem] leading-[1.6] text-ink-2" style={{ fontSize: 14 }}>
                <p className="font-medium text-ink">You’ve reached the end of {notes.title}.</p>
                <p className="mt-2">
                  Source: {notes.source} Check the original material if a step looks unclear.
                </p>

                {nav && (
                  <div className="mt-8 flex flex-col gap-6 border-t border-line pt-6">
                    {(nav.prevModule || nav.nextModule) && (
                      <div className="grid gap-3 sm:grid-cols-2">
                        {nav.prevModule ? (
                          <Link
                            to={nav.prevModule.href}
                            className="group flex flex-col rounded-2xl border border-line bg-white p-5 transition-colors hover:border-ink"
                          >
                            <span className="label flex items-center gap-1 text-ink-2 group-hover:text-ink">
                              <ArrowLeft size={13} aria-hidden="true" /> Previous module
                            </span>
                            <span className="mt-2 text-[1rem] font-semibold text-ink group-hover:text-green-ink transition-colors">
                              {nav.prevModule.name}
                            </span>
                            {nav.prevModule.detail && (
                              <span className="mt-1 text-[0.82rem] text-ink-2 line-clamp-1">
                                {nav.prevModule.detail}
                              </span>
                            )}
                          </Link>
                        ) : nav.subject.syllabusHref && !nav.isSyllabus ? (
                          <Link
                            to={nav.subject.syllabusHref}
                            className="group flex flex-col rounded-2xl border border-line bg-white p-5 transition-colors hover:border-ink"
                          >
                            <span className="label flex items-center gap-1 text-ink-2 group-hover:text-ink">
                              <BookOpen size={13} aria-hidden="true" /> Official syllabus
                            </span>
                            <span className="mt-2 text-[1rem] font-semibold text-ink group-hover:text-green-ink transition-colors">
                              Course syllabus
                            </span>
                            <span className="mt-1 text-[0.82rem] text-ink-2">
                              {nav.subject.code} topics and course outcomes
                            </span>
                          </Link>
                        ) : (
                          <div />
                        )}

                        {nav.nextModule ? (
                          <Link
                            to={nav.nextModule.href}
                            className="group flex flex-col items-end text-right rounded-2xl border border-line bg-white p-5 transition-colors hover:border-ink"
                          >
                            <span className="label flex items-center gap-1 text-ink-2 group-hover:text-ink">
                              Next module <ArrowRight size={13} aria-hidden="true" />
                            </span>
                            <span className="mt-2 text-[1rem] font-semibold text-ink group-hover:text-green-ink transition-colors">
                              {nav.nextModule.name}
                            </span>
                            {nav.nextModule.detail && (
                              <span className="mt-1 text-[0.82rem] text-ink-2 line-clamp-1">
                                {nav.nextModule.detail}
                              </span>
                            )}
                          </Link>
                        ) : nav.subject.syllabusHref && !nav.isSyllabus ? (
                          <Link
                            to={nav.subject.syllabusHref}
                            className="group flex flex-col items-end text-right rounded-2xl border border-line bg-white p-5 transition-colors hover:border-ink"
                          >
                            <span className="label flex items-center gap-1 text-ink-2 group-hover:text-ink">
                              Review <ArrowRight size={13} aria-hidden="true" />
                            </span>
                            <span className="mt-2 text-[1rem] font-semibold text-ink group-hover:text-green-ink transition-colors">
                              Course syllabus
                            </span>
                            <span className="mt-1 text-[0.82rem] text-ink-2">
                              Verify all module topics and outcomes
                            </span>
                          </Link>
                        ) : (
                          <Link
                            to={nav.subject.href}
                            className="group flex flex-col items-end text-right rounded-2xl border border-line bg-white p-5 transition-colors hover:border-ink"
                          >
                            <span className="label flex items-center gap-1 text-ink-2 group-hover:text-ink">
                              Course overview <ArrowRight size={13} aria-hidden="true" />
                            </span>
                            <span className="mt-2 text-[1rem] font-semibold text-ink group-hover:text-green-ink transition-colors">
                              All {nav.subject.name} modules
                            </span>
                            <span className="mt-1 text-[0.82rem] text-ink-2">
                              Return to {nav.subject.name} notes hub
                            </span>
                          </Link>
                        )}
                      </div>
                    )}

                    <div className="rounded-2xl border border-line bg-paper/60 p-5">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="label text-ink-2">{nav.subject.name} navigation</p>
                          <p className="text-[0.92rem] font-medium text-ink mt-1">
                            Explore all modules and official syllabus
                          </p>
                        </div>
                        <Link
                          to={nav.subject.href}
                          className="inline-flex items-center gap-1 text-[0.82rem] font-medium text-ink hover:text-green-ink transition-colors self-start sm:self-auto"
                        >
                          View {nav.subject.name} overview <ArrowRight size={13} aria-hidden="true" />
                        </Link>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2 pt-2 border-t border-line/60">
                        {nav.subject.syllabusHref && (
                          <Link
                            to={nav.subject.syllabusHref}
                            className={cn(
                              "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[0.82rem] font-medium transition-colors",
                              nav.isSyllabus
                                ? "border-green-ink/30 bg-green-tint font-semibold text-green-ink shadow-2xs"
                                : "border-line bg-white text-ink-2 hover:border-ink hover:text-ink"
                            )}
                          >
                            <BookOpen size={14} aria-hidden="true" />
                            Syllabus
                          </Link>
                        )}
                        {nav.subject.modules.map((m) => {
                          const isCurrent = notes.basePath === m.href;
                          return (
                            <Link
                              key={m.href}
                              to={m.href}
                              aria-current={isCurrent ? "page" : undefined}
                              className={cn(
                                "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[0.82rem] font-medium transition-colors",
                                isCurrent
                                  ? "border-green-ink/30 bg-green-tint font-semibold text-green-ink shadow-2xs"
                                  : "border-line bg-white text-ink-2 hover:border-ink hover:text-ink"
                              )}
                            >
                              {m.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </footer>
            </article>
          </div>
        </div>
      </main>
      <ReaderTools
        notes={notes}
        page={page}
        size={size}
        prefs={prefs}
        onSize={changeSize}
        onPrefs={changePrefs}
        onGoto={(n) => scrollToPlace({ page: n, offset: 0 })}
      />
    </SiteLayout>
  );
}
