import { cn } from "@/lib/utils";
import { MEDIA_BASE } from "@/lib/media";

/* The group photo sits under a white wash, and the letters UDSF are cut out of that wash so the
   students show through them. Three stacked layers render the same centred stack (Malayalam line,
   UDSF, description) so everything lines up exactly:
   1. the wash, blended with "screen": light grey leaves the photo 88% white, while the black
      letters leave it untouched, so they become windows onto the photo;
   2. a tint, blended with "multiply": green UD and blue SF colour the photo inside those windows;
   3. the readable content: the Malayalam line, the heading and the description.
   The photo is anchored so the crowd (about 71% of the way down the image) sits at the centre,
   behind the letters, whatever the screen shape. */

function Stack({ layer }: { layer: "wash" | "tint" | "content" }) {
  const text = layer === "content" ? "" : "invisible";
  const Heading = layer === "content" ? "h1" : "p";
  return (
    <div className="wrap flex h-full flex-col items-center justify-center pt-(--nav-h) text-center">
      <p className={cn("font-ml text-[1.25rem] text-ink", text)} lang="ml">
        GEC വയനാടിന്റെ
      </p>
      <Heading
        id={layer === "content" ? "hero-title" : undefined}
        className="mt-3 text-[length:clamp(7rem,34vw,22rem)] leading-[0.8] font-extrabold tracking-[-0.065em] whitespace-nowrap sm:text-[length:clamp(7rem,24vw,22rem)]"
      >
        <span className={layer === "wash" ? "text-black" : layer === "tint" ? "text-green" : "text-transparent"}>UD</span>
        <span className={layer === "wash" ? "text-black" : layer === "tint" ? "text-blue" : "text-transparent"}>SF</span>
      </Heading>
      <p className={cn("mt-7 max-w-[34ch] text-[length:clamp(1.1rem,1.8vw,1.35rem)] leading-[1.45] tracking-[-0.01em] text-ink-2", text)}>
        The KSU and MSF student alliance at Government Engineering College Wayanad, standing with every student on campus.
      </p>
    </div>
  );
}

export default function Hero() {
  return (
    // The hero slides up under the sticky nav so the photo starts at the very top.
    <section aria-labelledby="hero-title" className="relative isolate -mt-(--nav-h) h-[max(100svh,680px)] overflow-hidden">
      <img
        className="absolute top-1/2 left-1/2 h-[180%] w-auto max-w-none min-w-full -translate-x-1/2 -translate-y-[71%] object-cover object-[50%_71%]"
        src={`${MEDIA_BASE}/assets/hero.webp`}
        alt="Over a hundred UDSF members at GEC Wayanad posing together on a hilltop with KSU and MSF flags"
        width={1440}
        height={1170}
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-[#e0e0e0] mix-blend-screen" aria-hidden="true">
        <Stack layer="wash" />
      </div>
      <div className="absolute inset-0 mix-blend-multiply" aria-hidden="true">
        <Stack layer="tint" />
      </div>
      <div className="absolute inset-0">
        <Stack layer="content" />
      </div>
    </section>
  );
}
