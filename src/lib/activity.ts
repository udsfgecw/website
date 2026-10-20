/* Helpers for the activity archive: posts imported from the UDSF GECW feed. */
import { MEDIA_BASE } from "@/lib/media";

/** Public URL of an archived activity photo or video: absolute R2 URLs pass through, bare paths resolve against the bucket. */
export const mediaUrl = (path: string) => (/^https?:\/\//.test(path) ? path : `${MEDIA_BASE}/${path.replace(/^\//, "")}`);

/** Caption text, still in WhatsApp formatting, without its trailing hashtag block, the lone "."
    spacer lines, or a first line that only repeats the post's title. */
export function cleanCaption(caption: string, title = "") {
  const text = caption
    .replace(/(\s*#[\p{L}\p{N}_]+)+\s*$/u, "")
    .replace(/\n(\s*\.\s*\n)+/g, "\n")
    .trim();
  const [first, ...rest] = text.split("\n");
  const bare = (line: string) => line.replace(/[*_~\s]+/g, " ").trim();
  return bare(first) === bare(title) ? rest.join("\n").trim() : text;
}

/** Hashtags in a caption, lower-cased and without duplicates. */
export function hashtags(caption: string) {
  return [...new Set([...caption.matchAll(/#([\p{L}\p{N}_]+)/gu)].map((m) => m[1].toLowerCase()))];
}

const MONTH = new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric", timeZone: "UTC" });
const DAY = new Intl.DateTimeFormat("en-US", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });

/** "October 2026" from "2026-10-13" */
export const monthLabel = (date: string) => MONTH.format(new Date(`${date.slice(0, 7)}-01T00:00:00Z`));
/** "Oct 13, 2026" from "2026-10-13" */
export const dayLabel = (date: string) => DAY.format(new Date(`${date}T00:00:00Z`));

const EVENT = /\b(fresher|farewell|tournament|fest\b|festival|iftar|ifthar|convention|meet\b|celebrat|onam|arts|sports day|lantern|ethnic|competition|quiz|workshop|seminar|talk|camp\b|league|cup\b|trip|tour\b|night|show\b|programme|program\b|event)/i;
const MOURNING = /condolence|\brip\b|demise|homage|ആദരാഞ്ജലി/i;

/** Whether an archive post looks like an event or program rather than a greeting or notice. */
export const isEventPost = ({ title, caption }: { title: string; caption: string }) =>
  EVENT.test(`${title} ${caption}`) && !MOURNING.test(caption);
