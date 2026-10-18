import type { NotesModule } from "../types";

export const TEXT_SIZES = [16, 18, 20, 22];

export interface ReadingPlace {
  page: number;
  /** how far down that page, 0 to 1 */
  offset: number;
  size: number;
}

/* The reader's place and text size, kept in this browser's localStorage. Places saved by the earlier
   paginated reader still load (the oldest key counted the cover as page 1). */
export function readPlace(notes: NotesModule): ReadingPlace | null {
  try {
    let shift = 0;
    let value = JSON.parse(localStorage.getItem(notes.storageKey) || "null");
    if (!value && notes.legacyStorageKey) {
      value = JSON.parse(localStorage.getItem(notes.legacyStorageKey) || "null");
      shift = 1;
    }
    if (!value || typeof value !== "object") return null;
    const page = Number(value.page) - shift;
    return {
      page: Number.isInteger(page) && page >= 1 && page <= notes.pages.length ? page : 1,
      offset: Number.isFinite(value.offset) ? Math.max(0, Math.min(1, value.offset)) : 0,
      size: TEXT_SIZES.includes(value.size) ? value.size : 18,
    };
  } catch {
    return null;
  }
}

export function savePlace(notes: NotesModule, place: ReadingPlace) {
  try {
    const previous = JSON.parse(localStorage.getItem(notes.storageKey) || "{}");
    localStorage.setItem(notes.storageKey, JSON.stringify({ ...previous, ...place }));
    return true;
  } catch {
    return false;
  }
}
