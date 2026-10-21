import { EVENT_CATALOGUE } from "./event-catalogue";
import { EVENT_REELS } from "./event-reels";
import { EVENT_STORIES } from "./event-stories";

// The landing-page showcase features stage performances and show recaps.
const SELECTION = [
  { id: "story-18134623687636539", title: "Arts pro show", detail: "Nawaf NSR · Thouryathrikam ’26" },
  { id: "story-17906639010564419", title: "Beatz on Music", detail: "DJ Jazeel · Thouryathrikam ’26" },
  { id: "reel-4439c4c8d9e6", title: "Magazine release pro show", detail: "Nizari band · Live at GECW" },
  { id: "reel-38608865affb", title: "Union inauguration pro show", detail: "Sathva College Union · 2026" },
  { id: "reel-8b0a0a22d870", title: "Dastha ’24", detail: "DJ ZAVIYOX & Gokul Krishna" },
  { id: "reel-4f82204fdcee", title: "ALOHA ’25", detail: "DJ Pranadev & Pranav Drummer · Foam party" },
  { id: "reel-1dd84c4f9c58", title: "Hypnomania", detail: "Yasir GKZ · Freshers Week ’25" },
  { id: "reel-e4f9a41473fa", title: "Gokul Krishna live", detail: "Violin performance · Dastha ’24" },
  { id: "reel-76c9c5c99640", title: "DJ ZAVIYOX live", detail: "Dastha ’24" },
  { id: "reel-1570aee3426e", title: "Magazine music night", detail: "Live performance · GECW" },
  { id: "reel-f1b075ec4f50", title: "Thouryathrikam ’22", detail: "Cultural night · Live on stage" },
  { id: "reel-ca94ec64d9e1", title: "ALOHA ’25 Christmas party", detail: "Christmas show recap · UDSF GECW" },
];

const CURATED = SELECTION.flatMap(({ id, title, detail }) => {
  const original = [...EVENT_STORIES, ...EVENT_REELS].find((post) => post.id === id);
  if (!original?.video) return [];
  const post = id === "reel-38608865affb" ? {
    ...original,
    title: "Union Inauguration Pro Show",
    caption: "Night-time stage performance at the Sathva College Union 2026 inauguration. An excerpt from the original inauguration reel.",
    video: "https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/event-stories/show-union-inauguration-2026.webm",
    image: "https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/event-stories/show-union-inauguration-2026.webp",
    subtitles: undefined,
  } : original;
  return [{ post, title, detail }];
});

const LATEST_DAYS = 8;
const dayLabel = (date: string) =>
  new Date(`${date}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });

// The newest show videos from the events page lead the showcase, one per day so a single night doesn't fill it.
const days = new Set<string>();
const LATEST = EVENT_CATALOGUE.flatMap(({ post, title }) => {
  if (!post?.video || days.has(post.date) || days.size >= LATEST_DAYS) return [];
  days.add(post.date);
  const by = post.id.startsWith("sathva-") ? "Sathva College Union" : "UDSF GECW";
  return [{ post, title, detail: `${by} · ${dayLabel(post.date)}` }];
});

export const HOMEPAGE_SHOWS = [...LATEST, ...CURATED];
