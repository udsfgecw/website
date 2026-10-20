import type { Achievement } from "@/data/progress";
import { cn } from "@/lib/utils";
import { MEDIA_BASE } from "@/lib/media";

function Placeholder({ number }: { number: number }) {
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-2xl bg-paper"
      aria-hidden="true"
    >
      <span className="text-[2.5rem] font-extrabold tracking-[-0.06em] text-line leading-none select-none">
        {String(number).padStart(2, "0")}
      </span>
      <span className="label text-ink/25">Photo coming</span>
    </div>
  );
}

function Picture({ a, className }: { a: Achievement; className?: string }) {
  if (!a.image)
    return (
      <div className={cn("overflow-hidden rounded-2xl", className)}>
        <Placeholder number={a.number} />
      </div>
    );
  return (
    <img
      src={`${MEDIA_BASE}/assets/progress/${a.image}`}
      alt={a.title}
      width={1200}
      height={800}
      loading="lazy"
      decoding="async"
      className={cn("w-full rounded-2xl bg-paper object-cover", className)}
    />
  );
}

export function AchievementCard({ a }: { a: Achievement }) {
  return (
    <article className="group flex flex-col gap-0">
      <div className="relative overflow-hidden rounded-2xl">
        <Picture a={a} className="aspect-[4/3] w-full" />
        <span className="absolute top-3 left-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-[0.68rem] font-semibold text-ink backdrop-blur-sm">
          {a.number}
        </span>
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <h3 className="text-[1rem] font-semibold leading-[1.3] tracking-[-0.02em] text-ink">
          {a.title}
        </h3>
        <span className="label shrink-0 text-ink/35 mt-0.5">{a.year}</span>
      </div>
    </article>
  );
}
