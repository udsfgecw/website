import { Fragment } from "react";
import { Label } from "@/components/ui/section";
import { PILLARS } from "@/data/pillars";

/* "student welfare, college development, … and academic rights", with the joining words in grey */
function PillarList() {
  return PILLARS.map(({ title }, i) => (
    <Fragment key={title}>
      {i > 0 && <span className="text-ink/30">{i === PILLARS.length - 1 ? " and " : ", "}</span>}
      {title.toLowerCase()}
    </Fragment>
  ));
}

export default function WhatWeDo() {
  return (
    <section id="work" aria-labelledby="work-title" className="wrap py-[clamp(5rem,11vw,9rem)]">
      <Label>What we do</Label>
      <h2
        id="work-title"
        className="mt-6 max-w-[24ch] text-[length:clamp(2rem,4.6vw,3.9rem)] leading-[1.08] font-semibold tracking-[-0.045em] text-balance text-ink"
      >
        <span className="text-ink/30">We stand for </span>
        <PillarList />
        <span className="text-ink/30">.</span>
      </h2>

      {/* green-to-blue stroke shared by the pillar icons; user space so straight lines still get it */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <linearGradient id="pillar-icon" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="24" y2="24">
          <stop offset="0" stopColor="var(--color-green)" />
          <stop offset="1" stopColor="var(--color-blue)" />
        </linearGradient>
      </svg>
      <ul className="mt-[clamp(3.5rem,7vw,6rem)] grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {PILLARS.map(({ icon: Icon, title, text }) => (
          <li key={title}>
            <Icon size={24} strokeWidth={1.75} color="url(#pillar-icon)" aria-hidden="true" />
            <h3 className="mt-5 text-[1.15rem] font-semibold tracking-[-0.02em]">{title}</h3>
            <p className="mt-2 max-w-[36ch] text-[0.95rem] leading-[1.6] text-ink-2">{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
