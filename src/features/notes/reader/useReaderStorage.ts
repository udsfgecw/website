import { useCallback, useEffect, useRef, useState } from "react";
import type { NotesModule } from "../types";

export const TEXT_SIZES = [16, 18, 20, 22];

export interface ReaderPrefs {
  size: number;
  dark: boolean;
  bookmarks: number[];
}

export interface ReadingPlace {
  page: number;
  /** how far down the page, 0 to 1 */
  offset: number;
}

const DEFAULT_PREFS: ReaderPrefs = { size: 18, dark: false, bookmarks: [] };
const clamp01 = (n: number) => Math.max(0, Math.min(1, n));

function read(notes: NotesModule): { prefs: ReaderPrefs; place: ReadingPlace } | null {
  try {
    let shift = 0;
    let value = JSON.parse(localStorage.getItem(notes.storageKey) || "null");
    if (!value && notes.legacyStorageKey) {
      value = JSON.parse(localStorage.getItem(notes.legacyStorageKey) || "null");
      shift = 1;
    }
    if (!value || typeof value !== "object") return null;
    const valid = (n: number) => Number.isInteger(n) && n >= 1 && n <= notes.pages.length;
    const page = Number(value.page) - shift;
    return {
      place: { page: valid(page) ? page : 1, offset: Number.isFinite(value.offset) ? clamp01(value.offset) : 0 },
      prefs: {
        size: TEXT_SIZES.includes(value.size) ? value.size : DEFAULT_PREFS.size,
        dark: value.dark === true,
        bookmarks: Array.isArray(value.bookmarks) ? value.bookmarks.map((n: number) => n - shift).filter(valid) : [],
      },
    };
  } catch {
    return null;
  }
}

/* The reader's preferences and place, kept in localStorage. Nothing is read until after the first
   render, so the pre-rendered HTML and the browser's first render match. */
export function useReaderStorage(notes: NotesModule, page: number) {
  const [prefs, setPrefs] = useState(DEFAULT_PREFS);
  const [savedPlace, setSavedPlace] = useState<ReadingPlace | null>(null);
  const [available, setAvailable] = useState(true);
  const place = useRef<ReadingPlace>({ page, offset: 0 });
  const prefsRef = useRef(prefs);
  prefsRef.current = prefs;
  const loaded = useRef(false);

  const save = useCallback(() => {
    if (!loaded.current) return; // never overwrite what is stored before it has been read
    try {
      localStorage.setItem(notes.storageKey, JSON.stringify({ ...place.current, ...prefsRef.current }));
      setAvailable(true);
    } catch {
      setAvailable(false);
    }
  }, [notes.storageKey]);

  useEffect(() => {
    const stored = read(notes);
    if (stored) {
      setPrefs(stored.prefs);
      setSavedPlace(stored.place);
      place.current = stored.place;
    }
    loaded.current = true;
  }, [notes]);

  useEffect(save, [prefs, save]);

  return { prefs, setPrefs, savedPlace, place, save, available };
}
