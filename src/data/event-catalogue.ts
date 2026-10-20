import { ACTIVITIES, EVENTS_AND_PROGRAMS, type Activity } from "./activities";
import { PROGRAMS } from "./progress";
import { EVENT_REELS } from "./event-reels";
import { EVENT_STORIES } from "./event-stories";
import { PRO_SHOW_REEL_IDS } from "./event-priority";

export interface EventEntry {
  id: string;
  title: string;
  year: string;
  yearLabel: string;
  image: string | null;
  post: Activity | null;
}

const posts = new Map(ACTIVITIES.map((post) => [post.id, post]));
const linked = new Set(PROGRAMS.flatMap((program) => program.post ? [program.post] : []));

// One collection of programs, photos and reels, without repeating linked photo posts.
export const EVENT_CATALOGUE: readonly EventEntry[] = [
  ...PROGRAMS.map((program): EventEntry => {
    const post = program.post ? posts.get(program.post) ?? null : null;
    return {
      id: post?.id ?? `program-${program.year}-${program.number}`,
      title: program.title,
      year: post?.date.slice(0, 4) ?? program.year.slice(0, 4),
      yearLabel: post?.date ?? program.year,
      image: post?.image ?? (program.image ? `/assets/progress/${program.image}` : null),
      post,
    };
  }),
  ...[...EVENTS_AND_PROGRAMS, ...EVENT_REELS, ...EVENT_STORIES].filter((post) => !linked.has(post.id)).map((post): EventEntry => ({
    id: post.id,
    title: post.title,
    year: post.date.slice(0, 4),
    yearLabel: post.date,
    image: post.image,
    post,
  })),
].sort((a, b) => Number(PRO_SHOW_REEL_IDS.has(b.id)) - Number(PRO_SHOW_REEL_IDS.has(a.id))
  || (b.post?.date ?? `${b.year}-01-01`).localeCompare(a.post?.date ?? `${a.year}-01-01`) || a.id.localeCompare(b.id));
