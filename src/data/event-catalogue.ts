import { ACTIVITIES, EVENTS_AND_PROGRAMS, type Activity } from "./activities";
import { PROGRAMS } from "./progress";
import { EVENT_REELS } from "./event-reels";
import { EVENT_STORIES } from "./event-stories";
import { SATHVA_MEDIA } from "./sathva-media";
import { PRO_SHOWS } from "./pro-shows";
import { MEDIA_BASE } from "@/lib/media";

export interface EventEntry {
  id: string;
  title: string;
  year: string;
  yearLabel: string;
  image: string | null;
  description: string;
  post: Activity | null;
}

/** Calendar day (YYYY-MM-DD) an entry is dated to; entries without a post use the start of their year. */
export const eventDay = (event: EventEntry) => event.post?.date ?? `${event.year}-01-01`;

const posts = new Map([...ACTIVITIES, ...EVENT_REELS, ...EVENT_STORIES, ...SATHVA_MEDIA].map((post) => [post.id, post]));
const linked = new Set(PROGRAMS.flatMap((program) => program.post ? [program.post] : []));

// One collection of programs, photos and reels, without repeating linked photo posts.
const allEvents: readonly EventEntry[] = [
  ...PROGRAMS.map((program): EventEntry => {
    const post = program.post ? posts.get(program.post) ?? null : null;
    return {
      id: post?.id ?? `program-${program.year}-${program.number}`,
      title: program.title,
      year: post?.date.slice(0, 4) ?? program.year.slice(0, 4),
      yearLabel: post?.date ?? program.year,
      image: post?.image ?? (program.image ? `${MEDIA_BASE}/assets/progress/${program.image}` : null),
      description: post?.caption ?? program.title,
      post,
    };
  }),
  ...[...EVENTS_AND_PROGRAMS, ...EVENT_REELS, ...EVENT_STORIES, ...SATHVA_MEDIA].filter((post) => !linked.has(post.id)).map((post): EventEntry => ({
    id: post.id,
    title: post.title,
    year: post.date.slice(0, 4),
    yearLabel: post.date,
    image: post.image,
    description: post.caption,
    post,
  })),
].sort((a, b) => eventDay(b).localeCompare(eventDay(a)) || a.id.localeCompare(b.id));
export const ALL_EVENT_CATALOGUE = allEvents;

const showById = new Map<string, (typeof PRO_SHOWS)[number]>(PRO_SHOWS.map((show) => [show.id, show]));
export const EVENT_CATALOGUE: readonly EventEntry[] = allEvents.flatMap((event) => {
  const show = showById.get(event.id);
  if (!show) return [];
  const post = event.post ? {
    ...event.post,
    title: show.title,
    caption: show.description,
    ...(show.stillVideo ? { video: undefined, subtitles: undefined } : {}),
  } : null;
  return [{ ...event, title: show.title, description: show.description, post }];
});
