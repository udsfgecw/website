import type { Achievement } from "@/data/progress";
import { cn } from "@/lib/utils";

const src = (image: string) => `${import.meta.env.BASE_URL}assets/progress/${image}`;

/* Photo, or for the web magazine (no photo yet) a typographic cover in the alliance gradient. */
function Picture({ a, className }: { a: Achievement; className?: string }) {
  if (!a.image)
    return (
      <div
        className={cn("flex items-end rounded-2xl bg-[linear-gradient(135deg,var(--color-green),var(--color-blue))] p-6 text-white", className)}
        aria-hidden="true"
      >
        <span className="text-[length:clamp(2.2rem,3.6vw,2.8rem)] leading-[0.92] font-extrabold tracking-[-0.055em]">
          Web
          <br />
          magazine
        </span>
      </div>
    );
  return (
    <img
      src={src(a.image)}
      alt={`${a.location}, ${a.photo ? "original event photograph" : "adapted from the UDSF campaign poster"}`}
      width={1200}
      height={800}
      loading="lazy"
      decoding="async"
      className={cn("w-full rounded-2xl bg-paper object-cover", className)}
    />
  );
}

function Caption({ a, large }: { a: Achievement; large?: boolean }) {
  return (
    <>
      <p className="label text-green-ink">{a.location}</p>
      <h3
        className={cn(
          "mt-2.5 font-semibold text-balance",
          large ? "text-[length:clamp(1.8rem,3vw,2.6rem)] leading-[1.05] tracking-[-0.04em]" : "text-[1.2rem] leading-[1.2] tracking-[-0.025em]",
        )}
      >
        {a.title}
      </h3>
      <p className={cn("mt-3 text-ink-2", large ? "max-w-[40ch] text-[1rem] leading-[1.6]" : "text-[0.92rem] leading-[1.6]")}>{a.description}</p>
    </>
  );
}

/* Wide row: a large picture with the caption beside it; `flip` puts the caption on the left. */
export function AchievementFeature({ a, flip }: { a: Achievement; flip?: boolean }) {
  return (
    <article className="grid items-end gap-x-12 gap-y-6 lg:grid-cols-12">
      <Picture a={a} className={cn("aspect-[16/10] lg:col-span-8", flip && "lg:order-2")} />
      <div className={cn("lg:col-span-4", flip && "lg:order-1")}>
        <Caption a={a} large />
      </div>
    </article>
  );
}

export function AchievementCard({ a }: { a: Achievement }) {
  return (
    <article>
      <Picture a={a} className="aspect-[4/3]" />
      <div className="mt-5">
        <Caption a={a} />
      </div>
    </article>
  );
}
