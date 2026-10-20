import { createContext, useEffect, useState, type ReactNode } from "react";
import { EVENT_CATALOGUE, type EventEntry } from "@/data/event-catalogue";
import { shuffled } from "@/lib/shuffle";

export const InitialPrograms = createContext<readonly EventEntry[] | null>(null);

export function createProgramFeed() {
  return { programs: shuffled(EVENT_CATALOGUE).slice(0, 17) };
}

export function ProgramFeedProvider({ programs = null, children }: { programs?: readonly EventEntry[] | null; children: ReactNode }) {
  const [initial, setInitial] = useState(programs);
  // The server snapshot belongs to the first visit; subsequent visits fetch a fresh feed.
  useEffect(() => setInitial(null), []);
  return <InitialPrograms.Provider value={initial}>{children}</InitialPrograms.Provider>;
}
