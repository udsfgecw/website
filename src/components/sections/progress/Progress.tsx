import { Label } from "@/components/ui/section";
import { ACHIEVEMENTS } from "@/data/progress";
import { AchievementCard } from "./Achievement";

export default function Progress() {
  return (
    <section id="progress" aria-labelledby="progress-title" className="border-y border-line bg-[#fafbf9]">
      <div className="wrap py-[clamp(5rem,11vw,9rem)]">
        <Label>Our progress · 2025–26</Label>
        <h2
          id="progress-title"
          className="mt-6 max-w-[28ch] text-[length:clamp(2rem,4.6vw,3.9rem)] leading-[1.08] font-semibold tracking-[-0.045em] text-balance text-ink"
        >
          What we've brought to campus.{" "}
          <span className="text-ink/30">Better facilities, new opportunities and work that makes a difference.</span>
        </h2>

        <ul className="mt-[clamp(3.5rem,7vw,6rem)] grid gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {ACHIEVEMENTS.map((a) => (
            <li key={a.number}>
              <AchievementCard a={a} />
            </li>
          ))}
        </ul>

        <p className="mt-12 text-[0.75rem] text-ink-2">
          Photos will be added shortly. Placeholder tiles show item numbers for reference.
        </p>
      </div>
    </section>
  );
}
