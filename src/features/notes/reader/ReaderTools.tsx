import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowDownToLine, ArrowUpToLine, ChevronLeft, ChevronRight, Settings, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { chapterFor, type NotesModule } from "../types";
import { LEADINGS, TEXT_SIZES, WIDTHS, type Prefs } from "./readingPlace";

interface Props {
  notes: NotesModule;
  page: number;
  size: number;
  prefs: Prefs;
  onSize: (size: number) => void;
  onPrefs: (prefs: Prefs) => void;
  onGoto: (page: number) => void;
}

// scrolling up by this much reveals the button; the page must be at least this far down
const REVEAL_AFTER = 24;
const MIN_SCROLL = 240;

function Choice<T extends string | number>({ label, value, options, onChange }: { label: string; value: T; options: { value: T; label: ReactNode }[]; onChange: (v: T) => void }) {
  return (
    <div>
      <p className="label mb-2 text-ink-2">{label}</p>
      <div className="flex gap-1 rounded-xl bg-paper p-1" role="group" aria-label={label}>
        {options.map((o) => (
          <button
            key={String(o.value)}
            type="button"
            aria-pressed={o.value === value}
            onClick={() => onChange(o.value)}
            className={cn("flex-1 rounded-lg px-2 py-1.5 text-[0.85rem] transition-colors", o.value === value ? "bg-white font-semibold text-green-ink shadow-sm" : "text-ink-2 hover:text-ink")}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

/* A settings button that appears when the reader scrolls up (hidden while scrolling down), opening
   quick navigation (topic, page, top, bottom) and reading preferences. */
export default function ReaderTools({ notes, page, size, prefs, onSize, onPrefs, onGoto }: Props) {
  const [shown, setShown] = useState(false);
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const total = notes.pages.length;
  const unit = notes.unitLabel ?? "page";
  const chapter = chapterFor(notes, page);

  useEffect(() => {
    let last = window.scrollY;
    let anchor = last; // where the current direction began
    let up = false;
    const onScroll = () => {
      const y = window.scrollY;
      if (y === last) return;
      const goingUp = y < last;
      if (goingUp !== up) {
        up = goingUp;
        anchor = last;
      }
      last = y;
      if (!goingUp) setShown(false);
      else if (anchor - y > REVEAL_AFTER && y > MIN_SCROLL) setShown(true);
      else if (y <= MIN_SCROLL) setShown(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onDown = (e: PointerEvent) => root.current && !root.current.contains(e.target as Node) && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  const visible = shown || open;
  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const goBottom = () => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
  const go = (n: number) => onGoto(Math.min(total, Math.max(1, n)));
  const pill = "flex items-center justify-center gap-2 rounded-xl border border-line bg-white px-3 py-2 text-[0.85rem] hover:bg-paper disabled:opacity-30";

  return (
    <div ref={root} className="fixed right-4 bottom-4 z-[55] flex flex-col items-end gap-3 sm:right-6 sm:bottom-6" inert={!visible}>
      {open && (
        <div role="dialog" aria-label="Reading settings" className="flex max-h-[min(34rem,calc(100svh-6rem))] w-[min(20rem,calc(100vw-2rem))] flex-col gap-5 overflow-y-auto rounded-2xl border border-line bg-white p-5 shadow-xl">
          <div>
            <p className="label mb-2 text-ink-2">Go to</p>
            <div className="grid grid-cols-2 gap-2">
              <button type="button" className={pill} onClick={goTop}>
                <ArrowUpToLine size={16} aria-hidden="true" /> Top
              </button>
              <button type="button" className={pill} onClick={goBottom}>
                <ArrowDownToLine size={16} aria-hidden="true" /> Bottom
              </button>
              <button type="button" className={pill} disabled={page <= 1} onClick={() => go(page - 1)}>
                <ChevronLeft size={16} aria-hidden="true" /> Prev {unit}
              </button>
              <button type="button" className={pill} disabled={page >= total} onClick={() => go(page + 1)}>
                Next {unit} <ChevronRight size={16} aria-hidden="true" />
              </button>
            </div>
            <label className="mt-3 flex items-center justify-between gap-3 text-[0.85rem] text-ink-2">
              {unit === "section" ? "Section" : "Page"}
              <span className="flex items-center gap-2">
                <input
                  key={page}
                  type="number"
                  min={1}
                  max={total}
                  defaultValue={page}
                  aria-label={`Go to ${unit} number`}
                  className="w-16 rounded-lg border border-line px-2 py-1 text-center tabular-nums text-ink"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") go(Number(e.currentTarget.value) || page);
                  }}
                />
                of {total}
              </span>
            </label>
            <label className="mt-3 block text-[0.85rem] text-ink-2">
              <span className="label mb-2 block">Topic</span>
              <select
                value={chapter.page}
                onChange={(e) => go(Number(e.target.value))}
                className="w-full rounded-lg border border-line bg-white px-3 py-2 text-[0.88rem] text-ink"
              >
                {notes.chapters.map((c) => (
                  <option key={c.page} value={c.page}>
                    {c.title}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <Choice label="Text size" value={size} options={TEXT_SIZES.map((s, i) => ({ value: s, label: <span style={{ fontSize: 11 + i * 2 }}>A</span> }))} onChange={onSize} />
          <Choice label="Line spacing" value={prefs.leading} options={LEADINGS.map((l) => ({ value: l, label: l }))} onChange={(leading) => onPrefs({ ...prefs, leading })} />
          <Choice label="Font" value={prefs.font} options={[{ value: "sans", label: "Sans" }, { value: "serif", label: <span className="font-serif">Serif</span> }]} onChange={(font) => onPrefs({ ...prefs, font })} />
          <Choice label="Line width" value={prefs.width} options={WIDTHS.map((w) => ({ value: w, label: w }))} onChange={(width) => onPrefs({ ...prefs, width })} />
        </div>
      )}
      <button
        type="button"
        aria-label={open ? "Close reading settings" : "Reading settings"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "flex size-12 items-center justify-center rounded-full border border-line bg-white text-ink shadow-lg transition-[opacity,transform] duration-200 hover:bg-paper",
          visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
        )}
      >
        {open ? <X size={20} aria-hidden="true" /> : <Settings size={20} aria-hidden="true" />}
      </button>
    </div>
  );
}
