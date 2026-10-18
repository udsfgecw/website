import { useEffect, useRef } from "react";

/* The group photo, widening from an inset card to full size as it scrolls into view. */
export default function Crowd() {
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = frameRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      // 0 when the top edge enters the viewport, 1 once the photo is a third of the way up
      const t = Math.min(1, Math.max(0, (window.innerHeight - r.top) / (window.innerHeight * 0.66)));
      el.style.setProperty("transform", `scale(${0.9 + 0.1 * t})`);
    };
    const onScroll = () => (frame ||= requestAnimationFrame(update));
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <figure className="wrap">
      <div ref={frameRef} className="overflow-hidden rounded-[clamp(1.25rem,3vw,2rem)] bg-paper will-change-transform">
        <img
          className="aspect-[4/3] w-full object-cover object-[50%_70%] sm:aspect-[21/9] sm:object-[50%_68%]"
          src={`${import.meta.env.BASE_URL}assets/hero.webp`}
          srcSet={`${import.meta.env.BASE_URL}assets/hero-900.webp 900w, ${import.meta.env.BASE_URL}assets/hero.webp 1440w`}
          sizes="(min-width: 1240px) 1160px, 100vw"
          alt="Over a hundred UDSF members at GEC Wayanad posing together on a hilltop with KSU and MSF flags"
          width={1440}
          height={1170}
          loading="lazy"
          decoding="async"
        />
      </div>
      <figcaption className="mt-4 flex flex-wrap items-baseline justify-between gap-2">
        <span className="text-[1.05rem] font-semibold tracking-[-0.02em]">One campus. One team.</span>
        <span className="text-[0.85rem] text-ink-2">UDSF members at GEC Wayanad</span>
      </figcaption>
    </figure>
  );
}
