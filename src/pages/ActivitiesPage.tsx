import { useState } from "react";
import { ArrowRight, Expand } from "lucide-react";
import Lightbox from "@/components/activity/Lightbox";
import SiteLayout from "@/components/layout/SiteLayout";
import { CtaLink } from "@/components/ui/cta-link";
import { Label } from "@/components/ui/section";
import { pageTitle } from "@/config";
import type { Activity } from "@/data/activities";
import { ACTIVITY_RANKING } from "@/data/activity-ranking";
import { dayLabel, mediaUrl } from "@/lib/activity";
import { usePageMeta } from "@/lib/meta";
import { breadcrumbLd, collectionPageLd } from "@/lib/seo";
import { stageOf, THEMES, THEME_KEYS, themeOf, type Theme } from "@/lib/progress";
import { RANKED_ACTIVITIES } from "@/lib/ranked-activities";
import { cn } from "@/lib/utils";

/* Each post with its curated English title and summary, theme and stage, in ranked order. */
const ENTRIES = RANKED_ACTIVITIES.map((post) => {
  const rank = ACTIVITY_RANKING[post.id];
  return {
    ...post,
    title: rank?.title || post.title,
    summary: rank?.summary ?? "",
    initiative: rank?.initiative ?? post.id,
    outcome: rank?.outcome ?? 0,
    theme: rank ? themeOf(rank) : ("voice" as Theme),
    stage: rank ? stageOf(rank) : null,
  };
});
type Entry = (typeof ENTRIES)[number];

const FIRST_YEAR = ENTRIES.reduce((first, item) => (item.date < first ? item.date : first), "9999").slice(0, 4);
const DELIVERED = ENTRIES.filter((item) => item.stage === "delivered").length;
const FEATURED = ENTRIES.filter((item) => item.stage === "delivered").slice(0, 3);
const BY_THEME = THEME_KEYS.map((key) => ({ key, items: ENTRIES.filter((item) => item.theme === key && !FEATURED.includes(item)) }))
  .filter((group) => group.items.length);

/* Initiatives the archive follows from a request to a finished result: the first ask and the delivery. */
const STORIES = Object.values(
  ENTRIES.reduce<Record<string, Entry[]>>((groups, item) => ({ ...groups, [item.initiative]: [...(groups[item.initiative] ?? []), item] }), {}),
)
  .map((posts) => {
    const byDate = [...posts].sort((a, b) => a.date.localeCompare(b.date));
    const ask = byDate.find((item) => item.outcome <= 2);
    const answer = [...byDate].reverse().find((item) => item.outcome >= 4);
    return ask && answer && ask.date <= answer.date ? { ask, answer, steps: byDate.length } : null;
  })
  .filter((story) => story !== null)
  .sort((a, b) => ENTRIES.indexOf(a.answer) - ENTRIES.indexOf(b.answer));

type Viewer = { items: readonly Activity[]; index: number } | null;

export default function ActivitiesPage() {
  const description = `What UDSF GECW has raised, won and delivered since ${FIRST_YEAR}: ${DELIVERED} completed changes to campus, hostels, exams and student life at Government Engineering College Wayanad.`;
  usePageMeta({
    title: pageTitle("Our progress"),
    description,
    jsonLd: [
      collectionPageLd("Our progress", description, "/activities"),
      breadcrumbLd([{ name: "Home", path: "/" }, { name: "Our progress", path: "/activities" }]),
    ],
  });
  const [viewer, setViewer] = useState<Viewer>(null);
  const view = (items: readonly Activity[], item: Activity) => setViewer({ items, index: items.indexOf(item) });

  return (
    <SiteLayout>
      <main id="top" className="bg-white">
        {/* hero: the pipeline every piece of work moves through */}
        <section className="wrap pb-12 pt-[clamp(2.5rem,5vw,4rem)]">
          <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
            <div>
              <Label>Since {FIRST_YEAR}</Label>
              <h1 className="mt-3 text-[length:clamp(2.2rem,4.5vw,3.4rem)] font-semibold leading-[1] tracking-[-0.05em] text-ink">
                Our progress<span className="text-green">.</span>
              </h1>
            </div>
            <p className="max-w-[44ch] text-[0.95rem] leading-relaxed text-ink-2">
              What UDSF GECW asked for, pushed on and got done. Tap any poster to read the original post.
            </p>
          </div>
        </section>

        {/* the biggest finished changes */}
        <section aria-labelledby="wins-title" className="border-t border-line bg-[#fafbf9]">
          <div className="wrap py-[clamp(3rem,6vw,4.5rem)]">
            <SectionHead label="Headline wins" id="wins-title" title="Changes you can walk up to." />
            <div className="mt-8 grid gap-4 lg:grid-cols-[1.35fr_1fr]">
              {FEATURED[0] && <FeatureCard item={FEATURED[0]} large onOpen={() => view(FEATURED, FEATURED[0])} />}
              <div className="grid gap-4">
                {FEATURED.slice(1).map((item) => (
                  <FeatureCard key={item.id} item={item} onOpen={() => view(FEATURED, item)} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* request posters beside the posts that announced the result */}
        {STORIES.length > 0 && (
          <section aria-labelledby="stories-title" className="border-t border-line">
            <div className="wrap pt-[clamp(3rem,6vw,4.5rem)]">
              <SectionHead
                label="Follow-through"
                id="stories-title"
                title="From ask to answer."
                intro={`${STORIES.length} times the archive shows both the request and the result. Swipe through them.`}
              />
            </div>
            <ol className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-[clamp(3rem,6vw,4.5rem)] [scrollbar-width:none] md:scroll-px-[max(40px,calc((100vw_-_1240px)/2_+_40px))] md:px-[max(40px,calc((100vw_-_1240px)/2_+_40px))]">
              {STORIES.map(({ ask, answer, steps }, i) => (
                <li key={answer.id} className="w-[min(620px,88vw)] shrink-0 snap-start rounded-3xl border border-line bg-white p-3 sm:p-4">
                  <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-3">
                    <PosterStage item={ask} onOpen={() => view([ask, answer], ask)} className="aspect-[4/5] p-3 sm:p-4" />
                    <span className="grid size-9 place-items-center rounded-full bg-green text-white">
                      <ArrowRight aria-hidden className="size-4" />
                    </span>
                    <PosterStage item={answer} onOpen={() => view([ask, answer], answer)} className="aspect-[4/5] p-3 sm:p-4" />
                  </div>
                  <div className="grid grid-cols-2 gap-6 px-1 pb-1 pt-4">
                    <StoryStep date={ask.date} title={ask.title} />
                    <StoryStep date={answer.date} title={answer.title} />
                  </div>
                  <p className="label mt-3 flex justify-between border-t border-line px-1 pt-3 text-ink/40">
                    <span>{THEMES[answer.theme].name}</span>
                    <span>
                      {String(i + 1).padStart(2, "0")} · {steps} posts
                    </span>
                  </p>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* everything else, chapter by chapter */}
        <nav aria-label="Themes" className="sticky top-(--nav-h) z-30 border-y border-line bg-white/90 backdrop-blur-md">
          <ul className="wrap flex gap-1.5 overflow-x-auto py-2.5 [scrollbar-width:none]">
            {BY_THEME.map(({ key, items }) => (
              <li key={key} className="shrink-0">
                <a href={`#theme-${key}`} className="label inline-flex h-9 items-center gap-2 rounded-full px-3.5 text-ink transition hover:bg-paper">
                  {THEMES[key].name}
                  <span className="text-ink/35 tabular-nums">{items.length}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {BY_THEME.map(({ key, items }, i) => (
          <section
            key={key}
            id={`theme-${key}`}
            aria-labelledby={`theme-${key}-title`}
            className={cn("scroll-mt-[calc(var(--nav-h)+3.5rem)] border-b border-line", i % 2 && "bg-[#fafbf9]")}
          >
            <div className="wrap grid gap-6 py-[clamp(2.5rem,5vw,4rem)] lg:grid-cols-[220px_1fr] lg:gap-10">
              <header className="lg:sticky lg:top-[calc(var(--nav-h)+5rem)] lg:self-start">
                <h2 id={`theme-${key}-title`} className="text-[1.3rem] font-semibold leading-tight tracking-[-0.035em] text-ink">
                  {THEMES[key].name} <span className="text-ink/30 tabular-nums">{items.length}</span>
                </h2>
                <p className="mt-2 max-w-[30ch] text-[0.88rem] leading-relaxed text-ink-2">{THEMES[key].blurb}.</p>
              </header>
              <ul className="columns-1 gap-4 sm:columns-2 xl:columns-3">
                {items.map((item) => (
                  <li key={item.id} className="mb-4 break-inside-avoid">
                    <PosterCard item={item} onOpen={() => view(items, item)} />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        <section className="wrap flex flex-col items-start gap-5 py-[clamp(3rem,6vw,4.5rem)] md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[1.35rem] font-semibold leading-tight tracking-[-0.035em] text-ink">
              Work is half of it. The other half is the fun.
            </p>
            <p className="mt-2 text-ink-2">Fests, tournaments, talks and nights out, in one gallery.</p>
          </div>
          <CtaLink to="/events">See events &amp; programs</CtaLink>
        </section>
      </main>

      <Lightbox
        items={viewer?.items ?? []}
        index={viewer?.index ?? null}
        onIndex={(index) => setViewer((current) => (current && index !== null ? { ...current, index } : null))}
      />
    </SiteLayout>
  );
}

function SectionHead({ label, id, title, intro }: { label: string; id: string; title: string; intro?: string }) {
  return (
    <div className="grid gap-3 md:grid-cols-2 md:items-end">
      <div>
        <Label>{label}</Label>
        <h2 id={id} className="mt-2 text-[length:clamp(1.5rem,2.6vw,2rem)] font-semibold leading-[1.1] tracking-[-0.04em] text-ink">
          {title}
        </h2>
      </div>
      {intro && <p className="max-w-[40ch] text-[0.9rem] leading-relaxed text-ink-2 md:justify-self-end">{intro}</p>}
    </div>
  );
}

/* A poster shown whole, never cropped, with an expand hint. */
function Poster({ item, onOpen, className }: { item: Entry; onOpen: () => void; className?: string }) {
  return (
    <button type="button" onClick={onOpen} className={cn("group relative block w-full overflow-hidden rounded-xl bg-paper", className)}>
      <img
        src={mediaUrl(item.image)}
        alt=""
        loading="lazy"
        decoding="async"
        className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <span className="absolute right-2.5 top-2.5 grid size-8 place-items-center rounded-full bg-white/90 text-ink opacity-0 shadow-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
        <Expand aria-hidden className="size-3.5" />
      </span>
      <span className="sr-only">View the original post for {item.title} full screen</span>
    </button>
  );
}

/* A poster mounted whole on a soft backdrop that fills the space it is given, like a print on a wall. */
function PosterStage({ item, onOpen, className }: { item: Entry; onOpen: () => void; className?: string }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={cn("group relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-paper", className)}
    >
      <img
        src={mediaUrl(item.image)}
        alt=""
        loading="lazy"
        decoding="async"
        className="h-auto max-h-full w-full rounded-md object-contain shadow-[0_14px_34px_-14px_rgba(20,22,26,0.45)] transition-transform duration-500 group-hover:-rotate-1 group-hover:scale-[1.03]"
      />
      <span className="absolute right-2.5 top-2.5 grid size-8 place-items-center rounded-full bg-white/90 text-ink opacity-0 shadow-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
        <Expand aria-hidden className="size-3.5" />
      </span>
      <span className="sr-only">View the original post for {item.title} full screen</span>
    </button>
  );
}

function PosterCard({ item, onOpen }: { item: Entry; onOpen: () => void }) {
  return (
    <article className="rounded-2xl border border-line bg-white p-2.5 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(20,22,26,0.35)]">
      <Poster item={item} onOpen={onOpen} />
      <div className="px-2 pb-2 pt-4">
        <time dateTime={item.date} className="label text-ink/40">
          {dayLabel(item.date)}
        </time>
        <h3 className="mt-2 text-[1.08rem] font-semibold leading-snug tracking-[-0.025em] text-ink">{item.title}</h3>
        {item.summary && <p className="mt-2 text-[0.88rem] leading-relaxed text-ink-2">{item.summary}</p>}
      </div>
    </article>
  );
}

function FeatureCard({ item, large = false, onOpen }: { item: Entry; large?: boolean; onOpen: () => void }) {
  return (
    <article className={cn("grid gap-5 rounded-3xl border border-line bg-white p-3 sm:p-4", large ? "grid-rows-[auto_1fr]" : "sm:grid-cols-[180px_1fr]")}>
      <PosterStage item={item} onOpen={onOpen} className={large ? "aspect-[5/4] p-6 sm:p-10" : "p-4"} />
      <div className={cn("flex flex-col px-1 pb-1", large && "sm:px-3 sm:pb-3")}>
        <h3 className={cn("font-semibold tracking-[-0.04em] text-ink", large ? "text-[length:clamp(1.4rem,2.2vw,1.85rem)] leading-[1.1]" : "text-[1.25rem] leading-tight")}>
          {item.title}
        </h3>
        <p className={cn("mt-3 leading-relaxed text-ink-2", large ? "text-[1rem]" : "text-[0.9rem]")}>{item.summary}</p>
        <time dateTime={item.date} className={cn("label mt-auto text-ink/40", large ? "pt-4" : "pt-5")}>
          {dayLabel(item.date)}
        </time>
      </div>
    </article>
  );
}

function StoryStep({ date, title }: { date: string; title: string }) {
  return (
    <div>
      <time dateTime={date} className="label text-ink/45">
        {dayLabel(date)}
      </time>
      <p className="mt-1.5 text-[0.92rem] font-semibold leading-snug tracking-[-0.02em] text-ink">{title}</p>
    </div>
  );
}
