import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    // The hero slides up under the translucent sticky nav so the photo starts at the very top.
    // The veil only lightens the top ~55% and fades out, so the crowd is never behind fog.
    <section
      className="relative isolate -mt-(--nav-h) flex min-h-[max(100dvh,700px)] flex-col overflow-hidden"
      aria-labelledby="hero-title"
    >
      <picture className="absolute inset-0 -z-20 overflow-hidden">
        <source type="image/webp" srcSet="/assets/hero-900.webp 900w, /assets/hero.webp 1440w" sizes="100vw" />
        <img
          className="size-full object-cover object-[50%_66%]"
          src="/assets/hero.jpg"
          alt="Over a hundred UDSF members at GEC Wayanad posing together on a hilltop with KSU and MSF flags"
          width={1440}
          height={1170}
          fetchPriority="high"
        />
      </picture>
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_55%_at_50%_42%,rgba(255,255,255,0.55),transparent_80%),linear-gradient(180deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.74)_45%,rgba(255,255,255,0.6)_100%)]"
        aria-hidden="true"
      ></div>

      <div className="wrap flex flex-1 flex-col justify-center pt-[calc(var(--nav-h)+1rem)] pb-[clamp(3rem,18vh,11rem)]">
        <div className="flex flex-col items-center gap-[clamp(1.25rem,3vh,2rem)] text-center">
          <h1 id="hero-title" className="font-normal">
            <span className="block font-ml text-[length:clamp(1.7rem,3.4vw,3rem)] leading-[1.2] font-bold" lang="ml">
              GEC വയനാടിന്റെ
            </span>
            <span
              className="mt-[0.02em] block font-wordmark text-[length:clamp(6.5rem,min(20vw,30vh),15rem)] leading-[0.82] tracking-[0.005em] max-[860px]:text-[length:clamp(6.5rem,34vw,10rem)]"
              aria-label="UDSF"
            >
              {/* echoes the hard drop shadow on the logo lettering */}
              <span className="text-green [text-shadow:0.04em_0.04em_0_rgba(11,43,34,0.16)]">UD</span>
              <span className="text-blue [text-shadow:0.04em_0.04em_0_rgba(16,32,63,0.16)]">SF</span>
            </span>
          </h1>

          <div>
            <p className="mx-auto max-w-[46ch] text-[length:clamp(1.05rem,1.5vw,1.2rem)] leading-[1.55] font-medium text-pretty text-[#2a3834]">
              Standing with every student at Government Engineering College Wayanad, on the issues that matter on campus.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <Button asChild className="max-[480px]:flex-auto">
                <a href="#join">
                  Join UDSF <i className="ph-bold ph-arrow-right"></i>
                </a>
              </Button>
              <Button asChild variant="link">
                <a href="#work">What we do</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
