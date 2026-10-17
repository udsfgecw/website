import { H2, Kicker } from "@/components/Section";

const VALUES = [
  ["Together", "KSU and MSF work as one team, so you never have to pick a side to get help."],
  ["Your say", "Every student has a vote and a voice, from first year to final year."],
  ["Everyone in", "Whatever your background or beliefs, this campus is yours too."],
  ["Students first", "Hostel, exams, fees and buses. Your daily problems come before politics."],
] as const;

export default function Values() {
  return (
    <section
      className="halftone relative isolate overflow-hidden bg-[linear-gradient(160deg,#0a2e1f_0%,#0d2a33_50%,var(--color-navy)_100%)] py-[clamp(4rem,8vw,6rem)] text-white"
      id="values"
      aria-labelledby="values-title"
    >
      <div className="wrap grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-start gap-x-[clamp(2rem,6vw,6rem)] gap-y-8 max-[860px]:grid-cols-1">
        <header className="sticky top-[calc(var(--nav-h)+2rem)] max-[860px]:static">
          <Kicker className="text-white/60">Our promise</Kicker>
          <H2
            id="values-title"
            className="max-w-[12ch] text-[length:clamp(2.2rem,4.4vw,3.6rem)] font-medium max-[860px]:max-w-[16ch]"
          >
            What you can expect from us
          </H2>
        </header>
        <ol className="border-t border-white/15">
          {VALUES.map(([word, text], i) => (
            <li
              key={word}
              className="grid grid-cols-[3rem_minmax(0,1fr)] gap-x-2 gap-y-[0.4rem] border-b border-white/15 py-[clamp(1.4rem,3vw,2rem)] max-[480px]:grid-cols-[2.4rem_minmax(0,1fr)]"
            >
              <span className="row-[1/3] pt-[0.55em] font-mono text-[0.78rem] leading-none font-medium tracking-[0.08em] text-[#5fd0a2]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[length:clamp(1.7rem,3vw,2.4rem)] leading-[1.1] font-medium tracking-[-0.03em]">{word}</h3>
              <p className="max-w-[44ch] text-[1.02rem] leading-[1.55] text-pretty text-white/80">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
