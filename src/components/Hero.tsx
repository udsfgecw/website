import { useEffect, useRef } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ACHIEVEMENTS, FOLLOW_UPS } from "@/data/progress";

const STATS = [
  [ACHIEVEMENTS.length, "Initiatives delivered"],
  [ACHIEVEMENTS[0].tags?.length ?? 0, "New student clubs"],
  [FOLLOW_UPS.length, "Being followed up"],
] as const;

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });
// .shine runs two animations: the rise, then the sweep once the letters have landed
const shineDelay = (ms: number) => ({ animationDelay: `${ms}ms, ${ms + 1000}ms` });

export default function Hero() {
  const photo = useRef<HTMLDivElement>(null);

  // The photo drifts down at a quarter of the scroll speed while the hero is on screen
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = Math.min(window.scrollY, window.innerHeight * 1.2);
      photo.current?.style.setProperty("transform", `translate3d(0, ${y * 0.25}px, 0)`);
    };
    const onScroll = () => (frame ||= requestAnimationFrame(update));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    // The hero slides up under the sticky nav so the photo starts at the very top.
    <section aria-labelledby="hero-title" className="relative isolate -mt-(--nav-h) overflow-hidden">
      <div ref={photo} className="absolute inset-0 -z-20 will-change-transform">
        <img
          className="size-full animate-settle object-cover object-[50%_62%] max-sm:object-[50%_70%]"
          src={`${import.meta.env.BASE_URL}assets/hero.webp`}
          srcSet={`${import.meta.env.BASE_URL}assets/hero-900.webp 900w, ${import.meta.env.BASE_URL}assets/hero.webp 1440w`}
          sizes="100vw"
          alt="Over a hundred UDSF members at GEC Wayanad posing together on a hilltop with KSU and MSF flags"
          width={1440}
          height={1170}
          fetchPriority="high"
        />
      </div>
      {/* white veil: solid behind the text up top, clearing toward the bottom so the crowd stays sharp */}
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_45%_at_50%_34%,rgba(255,255,255,0.8),transparent_75%),linear-gradient(180deg,rgba(255,255,255,0.97)_0%,rgba(255,255,255,0.9)_34%,rgba(255,255,255,0.5)_58%,rgba(255,255,255,0.05)_82%,rgba(20,22,26,0.25)_100%)]"
        aria-hidden="true"
      />

      <div className="wrap flex min-h-[max(100svh,680px)] flex-col items-center pt-[calc(var(--nav-h)+clamp(2.5rem,11vh,7.5rem))] pb-6 text-center">
        <p
          className="label flex animate-rise items-center gap-2 rounded-full border border-white/80 bg-white/60 py-1.5 pr-3.5 pl-2.5 text-ink shadow-[0_6px_20px_-12px_rgba(20,22,26,0.4)] backdrop-blur-md"
          style={delay(0)}
        >
          <span className="relative flex size-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-green/60" />
            <span className="size-2 rounded-full bg-green" />
          </span>
          KSU <span className="text-ink-2">+</span> MSF alliance
        </p>

        <p className="mt-6 animate-rise font-ml text-[1.05rem] text-ink/70" lang="ml" style={delay(80)}>
          GEC വയനാടിന്റെ
        </p>
        <h1
          id="hero-title"
          className="mt-2 text-[length:clamp(5.75rem,17vw,12.5rem)] leading-[0.82] font-extrabold tracking-[-0.065em]"
        >
          <span className="shine inline-block [--c:var(--color-green)]" style={shineDelay(160)}>
            UD
          </span>
          <span className="shine inline-block [--c:var(--color-blue)]" style={shineDelay(280)}>
            SF
          </span>
        </h1>
        <p className="mt-7 max-w-[40ch] animate-rise text-[1.02rem] leading-[1.55] text-ink/75" style={delay(440)}>
          The KSU and MSF student alliance at Government Engineering College Wayanad, standing with every student on campus.
        </p>

        <div className="mt-8 flex animate-rise flex-wrap justify-center gap-2.5" style={delay(580)}>
          <Button asChild className="group h-12 px-6 shadow-[0_12px_28px_-14px_rgba(20,22,26,0.7)]">
            <a href="#join">
              Join UDSF
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </Button>
          <Button asChild variant="outline" className="group h-12 border-white/80 bg-white/60 px-6 backdrop-blur-md hover:border-ink hover:bg-white">
            <a href="#progress">
              See our progress
              <ArrowDown size={17} className="transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
            </a>
          </Button>
        </div>

        {/* glass stats panel resting on the crowd photo */}
        <a
          href="#progress"
          className="group mt-auto grid w-full max-w-[680px] animate-rise grid-cols-3 divide-x divide-white/50 overflow-hidden rounded-2xl border border-white/70 bg-white/75 shadow-[0_24px_60px_-30px_rgba(20,22,26,0.6)] backdrop-blur-xl transition-[background-color,transform] duration-500 ease-out-expo hover:-translate-y-1 hover:bg-white/90"
          style={delay(760)}
          aria-label={`See our progress: ${STATS.map(([n, label]) => `${n} ${label.toLowerCase()}`).join(", ")}`}
        >
          {STATS.map(([n, label]) => (
            <span key={label} className="flex flex-col items-center px-2 py-4 sm:py-5">
              <span className="text-[length:clamp(1.6rem,4vw,2.25rem)] leading-none font-semibold tracking-[-0.05em] text-ink tabular-nums">
                {String(n).padStart(2, "0")}
              </span>
              <span className="label mt-2 text-[0.6rem] text-ink/70 sm:text-[0.68rem]">{label}</span>
            </span>
          ))}
        </a>
      </div>
    </section>
  );
}
