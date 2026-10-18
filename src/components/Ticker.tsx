import { ACHIEVEMENTS } from "@/data/progress";
import { cn } from "@/lib/utils";

/* Scrolling strip of delivered work. The list is rendered twice and shifted by half its width,
   so the loop is seamless. Hovering pauses it. */
export default function Ticker() {
  const items = ACHIEVEMENTS.map((a) => a.title);
  const row = (hidden?: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((t, i) => (
        <li key={t} className="flex items-center gap-5 pr-5 whitespace-nowrap">
          <span className={cn("size-1.5 rounded-full", i % 2 ? "bg-blue" : "bg-green")} aria-hidden="true" />
          <span className="text-[0.95rem] font-medium tracking-[-0.01em]">{t}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <a
      href="#progress"
      aria-label="See everything UDSF has delivered on campus"
      className="group relative flex h-14 items-center overflow-hidden bg-ink text-white"
    >
      <span className="label relative z-10 flex h-full shrink-0 items-center gap-2 bg-ink pr-5 pl-5 text-white/60 md:pl-10">
        Delivered
        <span className="h-4 w-px bg-white/20" aria-hidden="true" />
      </span>
      <div className="flex min-w-0 flex-1 [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {row()}
          {row(true)}
        </div>
      </div>
    </a>
  );
}
