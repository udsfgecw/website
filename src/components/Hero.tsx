import { useEffect, useRef } from "react";
import {
  Armchair,
  ArrowDown,
  ArrowRight,
  Bus,
  Globe,
  Headphones,
  Lightbulb,
  Newspaper,
  Route,
  Signpost,
  SquareParking,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ACHIEVEMENTS } from "@/data/progress";
import { cn } from "@/lib/utils";

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });
// .shine runs two animations: the rise, then the sweep once the letters have landed
const shineDelay = (ms: number) => ({ animationDelay: `${ms}ms, ${ms + 1000}ms` });

const TONE = {
  green: "bg-green text-white",
  blue: "bg-blue text-white",
  ink: "bg-ink text-white",
  white: "border border-line bg-white text-ink",
};

/* One coloured tile per delivered initiative, in ACHIEVEMENTS order.
   d / m are [column, row] in the desktop (20×7) and phone (6×11) grids; null leaves the tile out.
   On desktop the headline covers roughly columns 7–12, rows 2–5, so tiles sit around it. */
const TILES: { icon: LucideIcon; tone: string; d: [number, number]; m: [number, number] | null }[] = [
  { icon: Users, tone: TONE.green, d: [5, 1], m: [1, 0] }, // clubs
  { icon: Bus, tone: TONE.blue, d: [3, 2], m: [2, 1] }, // bus
  { icon: Zap, tone: TONE.ink, d: [6, 4], m: [4, 0] }, // generators
  { icon: SquareParking, tone: TONE.white, d: [4, 5], m: null }, // parking
  { icon: Signpost, tone: TONE.ink, d: [2, 4], m: null }, // nameboard
  { icon: Newspaper, tone: TONE.blue, d: [9, 0], m: [0, 9] }, // web magazine
  { icon: Headphones, tone: TONE.green, d: [11, 6], m: [3, 9] }, // audiobook
  { icon: Lightbulb, tone: TONE.ink, d: [14, 1], m: [5, 1] }, // LH2 lights
  { icon: Route, tone: TONE.blue, d: [16, 3], m: [4, 10] }, // MH road
  { icon: Armchair, tone: TONE.white, d: [13, 5], m: [1, 10] }, // seating
  { icon: Globe, tone: TONE.green, d: [15, 6], m: null }, // German Consulate
];

function Field({ cols, rows, cell, gap, phone }: { cols: number; rows: number; cell: number; gap: number; phone?: boolean }) {
  const tile = cell - gap;

  return (
    <div
      className={cn(
        "absolute top-[calc(50%+var(--nav-h)/2)] left-1/2 -translate-x-1/2 -translate-y-1/2",
        phone ? "md:hidden" : "max-md:hidden",
      )}
      style={{ width: cols * cell, height: rows * cell }}
      aria-hidden="true"
    >
      <div
        className={cn("absolute inset-0 grid", phone ? "tile-mask-phone" : "tile-mask")}
        style={{ gridTemplateColumns: `repeat(${cols}, ${tile}px)`, padding: gap / 2, gap }}
      >
        {Array.from({ length: cols * rows }, (_, i) => (
          <span key={i} className="rounded-[14px] bg-[#f3f4f5]" style={{ height: tile }} />
        ))}
      </div>

      {TILES.map(({ icon: Icon, tone, d, m }, i) => {
        const at = phone ? m : d;
        if (!at) return null;
        return (
          <span
            key={i}
            className="parallax absolute"
            style={
              {
                left: at[0] * cell + gap / 2,
                top: at[1] * cell + gap / 2,
                width: tile,
                height: tile,
                "--depth": i % 3 === 0 ? 0.5 : 1,
              } as React.CSSProperties
            }
          >
            <span className="block size-full animate-[bob_6s_ease-in-out_infinite]" style={{ animationDuration: `${5 + (i % 4)}s`, animationDelay: `${-i * 0.7}s` }}>
              <span
                className={cn(
                  "group relative flex size-full animate-[pop_0.9s_var(--ease-out-expo)_both] items-center justify-center rounded-[16px] shadow-[0_14px_28px_-16px_rgba(20,22,26,0.55)] transition-transform duration-500 ease-out-expo hover:-translate-y-1",
                  tone,
                )}
                style={delay(500 + i * 70)}
              >
                <Icon size={phone ? 22 : 26} strokeWidth={1.75} />
                {/* what the tile stands for, on hover */}
                <span className="pointer-events-none absolute top-full left-1/2 z-10 mt-2 -translate-x-1/2 translate-y-1 rounded-md bg-ink px-2.5 py-1.5 text-[0.75rem] whitespace-nowrap text-white opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {ACHIEVEMENTS[i]?.title}
                </span>
              </span>
            </span>
          </span>
        );
      })}
    </div>
  );
}

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  // Tiles drift toward the pointer (mouse and trackpad only)
  useEffect(() => {
    const el = root.current;
    if (!el || !window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--px", (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3));
        el.style.setProperty("--py", (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3));
      });
    };
    el.addEventListener("pointermove", onMove);
    return () => {
      el.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    // The hero slides up under the sticky nav; the tile grid starts just below it.
    <section ref={root} aria-labelledby="hero-title" className="relative isolate -mt-(--nav-h) overflow-hidden">
      <Field cols={20} rows={7} cell={84} gap={12} />
      <Field cols={6} rows={11} cell={64} gap={10} phone />

      <div className="wrap relative flex min-h-[calc(11*64px+var(--nav-h))] flex-col items-center justify-center pt-(--nav-h) text-center md:min-h-[calc(7*84px+var(--nav-h)+3rem)]">
        <p className="animate-rise font-ml text-[1.1rem] text-ink-2" lang="ml">
          GEC വയനാടിന്റെ
        </p>
        <h1 id="hero-title" className="mt-1 text-[length:clamp(5.25rem,11vw,9rem)] leading-[0.82] font-extrabold tracking-[-0.065em]">
          <span className="shine inline-block [--c:var(--color-green)]" style={shineDelay(100)}>
            UD
          </span>
          <span className="shine inline-block [--c:var(--color-blue)]" style={shineDelay(200)}>
            SF
          </span>
        </h1>
        <p className="mt-6 max-w-[38ch] animate-rise text-[1.02rem] leading-[1.55] text-ink-2" style={delay(360)}>
          The KSU and MSF student alliance at Government Engineering College Wayanad, standing with every student on campus.
        </p>

        <div className="mt-8 flex animate-rise flex-wrap justify-center gap-2.5" style={delay(500)}>
          <Button asChild className="group h-12 px-6">
            <a href="#join">
              Join UDSF
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </Button>
          <Button asChild variant="outline" className="group h-12 bg-white px-6">
            <a href="#progress">
              See our progress
              <ArrowDown size={17} className="transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
