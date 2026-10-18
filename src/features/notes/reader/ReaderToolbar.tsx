import { Bookmark, Moon, Sun } from "lucide-react";
import { TEXT_SIZES, type ReaderPrefs } from "./useReaderStorage";

/* Text size, light/dark and bookmarking the current page. */
export default function ReaderToolbar({
  prefs,
  page,
  onChange,
}: {
  prefs: ReaderPrefs;
  page: number;
  onChange: (next: Partial<ReaderPrefs>) => void;
}) {
  const { size, dark, bookmarks } = prefs;
  const saved = bookmarks.includes(page);
  const min = TEXT_SIZES[0];
  const max = TEXT_SIZES[TEXT_SIZES.length - 1];

  return (
    <div className="reader-toolbar">
      <div className="reader-tools">
        <span className="reader-eyebrow">READING VIEW</span>
        <button aria-label="Decrease text size" disabled={size <= min} onClick={() => onChange({ size: size - 2 })}>
          A−
        </button>
        <span className="reader-size">{size}</span>
        <button aria-label="Increase text size" disabled={size >= max} onClick={() => onChange({ size: size + 2 })}>
          A+
        </button>
        <span className="reader-tool-divider" />
        <button aria-label={dark ? "Use light theme" : "Use dark theme"} onClick={() => onChange({ dark: !dark })}>
          {dark ? <Sun size={17} /> : <Moon size={17} />}
        </button>
      </div>
      <button
        className={`reader-bookmark${saved ? " is-saved" : ""}`}
        aria-pressed={saved}
        onClick={() => onChange({ bookmarks: saved ? bookmarks.filter((p) => p !== page) : [...bookmarks, page] })}
      >
        <Bookmark size={16} fill={saved ? "currentColor" : "none"} />
        <span>{saved ? "Bookmarked" : "Bookmark"}</span>
      </button>
    </div>
  );
}
