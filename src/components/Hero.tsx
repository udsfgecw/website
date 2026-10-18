import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    // The hero slides up under the sticky nav so the photo starts at the very top.
    <section aria-labelledby="hero-title" className="relative isolate -mt-(--nav-h) overflow-hidden">
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
      {/* heavy white wash so the group photo only shows through faintly */}
      <div className="absolute inset-0 -z-10 bg-white/[0.88]" aria-hidden="true" />

      <div className="wrap flex min-h-[max(100svh,680px)] flex-col items-center justify-center pt-(--nav-h) pb-[12vh] text-center">
        <p className="font-ml text-[1.1rem] text-ink-2" lang="ml">
          GEC വയനാടിന്റെ
        </p>
        <h1 id="hero-title" className="mt-1 text-[length:clamp(5.25rem,11vw,9rem)] leading-[0.82] font-extrabold tracking-[-0.065em]">
          <span className="text-green">UD</span>
          <span className="text-blue">SF</span>
        </h1>
        <p className="mt-6 max-w-[38ch] text-[1.05rem] leading-[1.55] text-ink-2">
          The KSU and MSF student alliance at Government Engineering College Wayanad, standing with every student on campus.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          <Button asChild className="h-12 px-6">
            <a href="#join">
              Join UDSF
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          </Button>
          <Button asChild variant="outline" className="h-12 bg-white px-6">
            <a href="#progress">
              See our progress
              <ArrowDown size={17} aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
