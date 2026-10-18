import { useEffect, useRef } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section aria-labelledby="hero-title" className="relative isolate -mt-(--nav-h) overflow-hidden bg-ink text-white">
      <div ref={photo} className="absolute inset-0 -z-20 will-change-transform">
        <img
          className="size-full animate-settle object-cover object-[50%_62%] max-sm:object-[50%_72%]"
          src={`${import.meta.env.BASE_URL}assets/hero.webp`}
          srcSet={`${import.meta.env.BASE_URL}assets/hero-900.webp 900w, ${import.meta.env.BASE_URL}assets/hero.webp 1440w`}
          sizes="100vw"
          alt="Over a hundred UDSF members at GEC Wayanad posing together on a hilltop with KSU and MSF flags"
          width={1440}
          height={1170}
          fetchPriority="high"
        />
      </div>
      {/* dark veil: deep behind the type up top, clearing over the crowd, then settling into the ticker's ink */}
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(12,16,18,0.92)_0%,rgba(12,16,18,0.8)_40%,rgba(12,16,18,0.6)_52%,rgba(12,16,18,0.15)_68%,rgba(12,16,18,0.1)_80%,rgba(20,22,26,0.95)_100%)]"
        aria-hidden="true"
      />
      {/* alliance-coloured light leaking in from the corners */}
      <div className="absolute -top-40 -left-32 -z-10 size-[30rem] rounded-full bg-green/30 blur-[120px]" aria-hidden="true" />
      <div className="absolute -top-24 -right-40 -z-10 size-[28rem] rounded-full bg-blue/25 blur-[120px]" aria-hidden="true" />

      <div className="wrap flex min-h-[max(100svh,680px)] flex-col pt-[calc(var(--nav-h)+clamp(2.5rem,9vh,6rem))] pb-10">
        <p
          className="label flex w-fit animate-rise items-center gap-2 rounded-full border border-white/20 bg-white/10 py-1.5 pr-3.5 pl-2.5 text-white backdrop-blur-md"
          style={delay(0)}
        >
          <span className="relative flex size-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-green/70" />
            <span className="size-2 rounded-full bg-green" />
          </span>
          KSU <span className="text-white/50">+</span> MSF alliance
        </p>

        <p className="mt-7 animate-rise font-ml text-[1.1rem] text-white/75" lang="ml" style={delay(80)}>
          GEC വയനാടിന്റെ
        </p>
        <h1
          id="hero-title"
          className="mt-1 -ml-[0.04em] text-[length:clamp(6rem,19vw,11.5rem)] leading-[0.82] font-extrabold tracking-[-0.065em] drop-shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
        >
          <span className="shine inline-block [--c:var(--color-green)]" style={shineDelay(160)}>
            UD
          </span>
          <span className="shine inline-block [--c:var(--color-blue)]" style={shineDelay(280)}>
            SF
          </span>
        </h1>

        <div className="mt-7 flex flex-col gap-7">
          <p className="max-w-[38ch] animate-rise text-[1.05rem] leading-[1.55] text-white/80" style={delay(440)}>
            The KSU and MSF student alliance at Government Engineering College Wayanad, standing with every student on campus.
          </p>
          <div className="flex animate-rise flex-wrap gap-2.5" style={delay(580)}>
            <Button asChild className="group h-12 bg-white px-6 text-ink hover:bg-white/90">
              <a href="#join">
                Join UDSF
                <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="outline" className="group h-12 border-white/30 bg-white/5 px-6 text-white backdrop-blur-md hover:border-white hover:bg-white/10">
              <a href="#progress">
                See our progress
                <ArrowDown size={17} className="transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>

        <p className="label mt-auto animate-rise pt-10 text-white/60" style={delay(760)}>
          Government Engineering College Wayanad, Mananthavady
        </p>
      </div>
    </section>
  );
}
