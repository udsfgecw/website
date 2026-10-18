const TOPICS = [
  ["#work", "Student welfare"],
  ["#work", "Academics"],
  ["#work", "College union"],
  ["#alliance", "KSU + MSF"],
] as const;

export default function Hero() {
  return (
    // The hero slides up under the sticky nav so the photo starts at the very top.
    <section aria-labelledby="hero-title" className="relative isolate -mt-(--nav-h) overflow-hidden">
      <picture className="absolute inset-0 -z-20">
        <source type="image/webp" srcSet={`${import.meta.env.BASE_URL}assets/hero-900.webp 900w, ${import.meta.env.BASE_URL}assets/hero.webp 1440w`} sizes="100vw" />
        <img
          className="size-full animate-settle object-cover object-[50%_62%]"
          src={`${import.meta.env.BASE_URL}assets/hero.jpg`}
          alt="Over a hundred UDSF members at GEC Wayanad posing together on a hilltop with KSU and MSF flags"
          width={1440}
          height={1170}
          fetchPriority="high"
        />
      </picture>
      {/* white veil: solid behind the text up top, clearing toward the bottom so the crowd stays sharp */}
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(55%_45%_at_50%_38%,rgba(255,255,255,0.75),transparent_75%),linear-gradient(180deg,rgba(255,255,255,0.97)_0%,rgba(255,255,255,0.9)_35%,rgba(255,255,255,0.55)_62%,rgba(255,255,255,0.12)_100%)]"
        aria-hidden="true"
      />

      <div className="wrap flex min-h-[max(100svh,640px)] flex-col items-center pt-[calc(var(--nav-h)+clamp(3rem,14vh,10rem))] pb-12 text-center">
        <p className="animate-rise font-ml text-[1rem] text-ink/70" lang="ml">
          GEC വയനാടിന്റെ
        </p>
        <h1
          id="hero-title"
          className="mt-3 text-[length:clamp(4.5rem,15vw,12rem)] leading-[0.82] font-extrabold tracking-[-0.065em]"
        >
          <span className="inline-block animate-rise text-green [animation-delay:120ms]">UD</span>
          <span className="inline-block animate-rise text-blue [animation-delay:240ms]">SF</span>
        </h1>
        <p className="mt-7 max-w-[40ch] animate-rise text-[1rem] leading-[1.55] text-ink/75 [animation-delay:420ms]">
          The KSU and MSF student alliance at Government Engineering College Wayanad, standing with every student on campus.
        </p>

        <ul aria-label="Topics" className="mt-9 flex max-w-[560px] animate-rise flex-wrap justify-center gap-1.5 [animation-delay:560ms]">
          {TOPICS.map(([href, label]) => (
            <li key={label}>
              <a
                href={href}
                className="label inline-flex h-7 items-center rounded-full border border-[#c9ccd2] bg-white/70 px-3 text-ink backdrop-blur-sm transition-[border-color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:border-ink hover:bg-white"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#join"
              className="label inline-flex h-7 items-center rounded-full bg-ink px-3.5 text-white transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#30343b]"
            >
              Join us
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
