import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
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
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(18);
  const [prefs, setPrefs] = useState<Prefs>(DEFAULT_PREFS);
  const [restored, setRestored] = useState<ReadingPlace | null>(null);
  const [saved, setSaved] = useState(true);
  const bar = useRef<HTMLDivElement>(null);
  const ready = useRef(false); // don't save until the stored place has been read
  const place = useRef<ReadingPlace>({ page: 1, offset: 0, size: 18 });
  const chapter = chapterFor(notes, page);
  const { hash } = useLocation();

  usePageMeta({
    title: pageTitle(notes.title),
    description: `${notes.course} (${notes.code}), ${notes.module}: ${notes.summary.toLowerCase()}. All ${total} pages of notes on one page.`,
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

  // Scroll back once the stored text size has been applied, so the position lands correctly.
  useEffect(() => {
    if (restored) scrollToPlace(restored);
  }, [restored]);

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
      for (let n = 1; n <= total; n++) {
        const el = document.getElementById(pageAnchor(n));
        if (el && el.getBoundingClientRect().top <= READ_LINE) {
          current = n;
          section = el;
        } else break;
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
        <li key={c.page}>
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
      <div className="fixed inset-x-0 top-0 z-[60] h-[3px]" aria-hidden="true">
        <div ref={bar} className="h-full origin-left scale-x-0 bg-[linear-gradient(90deg,var(--color-green),var(--color-blue))]" />
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
            {notes.course}.{" "}
            <span className="text-ink/30">
              {notes.module}, {notes.summary.toLowerCase()}.
            </span>
          </h1>
          <p className="mt-6 text-[0.95rem] text-ink-2">
            {notes.code} · {total} pages · {saved ? "Your place is saved in this browser" : "This browser can’t save your place"}
          </p>
        </header>

        <div className="wrap grid gap-8 border-t border-line pt-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16 lg:pt-12">
          {/* contents: a sticky column on wide screens, a collapsible list on phones */}
          <aside className="max-lg:hidden lg:sticky lg:top-[calc(var(--nav-h)+1.5rem)] lg:max-h-[calc(100svh-var(--nav-h)-3rem)] lg:self-start lg:overflow-y-auto">
            <p className="label mb-3 px-3 text-ink-2">Contents</p>
            {contents}
            <div className="mt-6 border-t border-line px-3 pt-5">{textSize}</div>
          </aside>
          <details className="group rounded-2xl border border-line lg:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[0.95rem] font-medium">
              <span className="min-w-0 truncate">Contents · {chapter.title}</span>
              <ChevronDown size={18} className="shrink-0 group-open:rotate-180" aria-hidden="true" />
            </summary>
            <div className="border-t border-line p-2">{contents}</div>
            <div className="border-t border-line px-5 py-3">{textSize}</div>
          </details>

          <article
            className="notes-prose min-w-0"
            style={{ fontSize: size, lineHeight: LEADING[prefs.leading], maxWidth: WIDTH[prefs.width], fontFamily: prefs.font === "serif" ? SERIF : undefined }}
          >
            {notes.pages.map((p) => (
              <section key={p.number} id={pageAnchor(p.number)} className="border-b border-line pb-12 not-first:pt-12 last:border-b-0">
                <p className="label mb-6 text-ink-2">
                  Page {p.number} of {total}
                </p>
                <PageMarkdown content={p.content} />
              </section>
            ))}
            <footer className="mt-4 border-t border-line pt-8 pb-4 text-[0.85rem] leading-[1.6] text-ink-2" style={{ fontSize: 14 }}>
              <p className="font-medium text-ink">You’ve reached the end of {notes.title}.</p>
              <p className="mt-2">
                Source: {notes.source} Check the original material if a step looks unclear.
              </p>
            </footer>
          </article>
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
