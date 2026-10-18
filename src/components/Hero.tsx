import { useEffect, useRef } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });
// .shine runs two animations: the rise, then the sweep once the letters have landed
const shineDelay = (ms: number) => ({ animationDelay: `${ms}ms, ${ms + 1000}ms` });

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const lens = useRef<HTMLDivElement>(null);

  // The clear circle in the white wash eases after the pointer, and returns to the crowd when it leaves.
  // Touch screens get a slow drift from CSS instead.
  useEffect(() => {
    const el = root.current;
    const wash = lens.current;
    if (!el || !wash || !window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;
    let x = 0, y = 0, tx = 0, ty = 0, frame = 0;
    const home = () => {
      const b = el.getBoundingClientRect();
      tx = b.width * 0.5;
      ty = b.height * 0.82;
    };
    const tick = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      wash.style.setProperty("--mx", `${x}px`);
      wash.style.setProperty("--my", `${y}px`);
      frame = Math.abs(tx - x) + Math.abs(ty - y) > 0.5 ? requestAnimationFrame(tick) : 0;
    };
    const go = () => (frame ||= requestAnimationFrame(tick));
    const onMove = (e: PointerEvent) => {
      const b = el.getBoundingClientRect();
      tx = e.clientX - b.left;
      ty = e.clientY - b.top;
      go();
    };
    const onLeave = () => {
      home();
      go();
    };
    home();
    x = tx;
    y = ty;
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    // The hero slides up under the sticky nav so the photo starts at the very top.
    <section ref={root} aria-labelledby="hero-title" className="relative isolate -mt-(--nav-h) overflow-hidden">
      <img
        className="absolute inset-0 -z-20 size-full object-cover object-[50%_62%]"
        src={`${import.meta.env.BASE_URL}assets/hero.webp`}
        srcSet={`${import.meta.env.BASE_URL}assets/hero-900.webp 900w, ${import.meta.env.BASE_URL}assets/hero.webp 1440w`}
        sizes="100vw"
        alt="Over a hundred UDSF members at GEC Wayanad posing together on a hilltop with KSU and MSF flags"
        width={1440}
        height={1170}
        fetchPriority="high"
      />
      <div ref={lens} className="lens absolute inset-0 -z-10" aria-hidden="true" />

      <div className="wrap flex min-h-[max(100svh,680px)] flex-col items-center justify-center pt-(--nav-h) pb-[12vh] text-center">
        <p className="animate-rise font-ml text-[1.1rem] text-ink-2 [text-shadow:0_0_14px_white]" lang="ml">
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
        <p className="mt-6 max-w-[38ch] animate-rise text-[1.05rem] leading-[1.55] text-ink-2 [text-shadow:0_0_14px_white,0_0_4px_white]" style={delay(360)}>
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
