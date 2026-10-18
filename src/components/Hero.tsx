/* The group photo sits under a white wash, and the letters UDSF are cut out of that wash so the
   students show through them. Two stacked layers share the same lettering:
   1. the wash, blended with "screen": light grey there leaves the photo 88% white, while the black
      letters leave it untouched, so they become windows onto the photo;
   2. a tint, blended with "multiply": green UD and blue SF colour the photo inside those windows.
   Both layers use the same Letters markup so the windows and the tint line up exactly. */

function Letters({ tint }: { tint?: boolean }) {
  return (
    <span className="absolute inset-x-0 bottom-[17%] text-center text-[length:clamp(8rem,34vw,22rem)] leading-[0.8] font-extrabold tracking-[-0.065em] whitespace-nowrap sm:bottom-[6%] sm:text-[length:clamp(8rem,24vw,22rem)]">
      <span className={tint ? "text-green" : "text-black"}>UD</span>
      <span className={tint ? "text-blue" : "text-black"}>SF</span>
    </span>
  );
}

export default function Hero() {
  return (
    // The hero slides up under the sticky nav so the photo starts at the very top.
    <section aria-labelledby="hero-title" className="relative isolate -mt-(--nav-h) min-h-[max(100svh,680px)] overflow-hidden">
      <img
        className="absolute inset-0 size-full object-cover object-[50%_62%]"
        src={`${import.meta.env.BASE_URL}assets/hero.webp`}
        srcSet={`${import.meta.env.BASE_URL}assets/hero-900.webp 900w, ${import.meta.env.BASE_URL}assets/hero.webp 1440w`}
        sizes="100vw"
        alt="Over a hundred UDSF members at GEC Wayanad posing together on a hilltop with KSU and MSF flags"
        width={1440}
        height={1170}
        fetchPriority="high"
      />
      <h1 id="hero-title" className="absolute inset-0 bg-[#e0e0e0] mix-blend-screen">
        <Letters />
      </h1>
      <div className="absolute inset-0 mix-blend-multiply" aria-hidden="true">
        <Letters tint />
      </div>

      <div className="wrap relative flex flex-col items-center pt-[calc(var(--nav-h)+clamp(4.5rem,17vh,11rem))] text-center">
        <p className="font-ml text-[1.25rem] text-ink" lang="ml">
          GEC വയനാടിന്റെ
        </p>
        <p className="mt-5 max-w-[34ch] text-[length:clamp(1.15rem,1.8vw,1.4rem)] leading-[1.45] tracking-[-0.01em] text-ink-2">
          The KSU and MSF student alliance at Government Engineering College Wayanad, standing with every student on campus.
        </p>
      </div>
    </section>
  );
}
