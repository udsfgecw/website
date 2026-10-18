import { Label } from "@/components/ui/section";
import { ACHIEVEMENTS } from "@/data/progress";
import { AchievementCard, AchievementFeature } from "./Achievement";
import FollowUps from "./FollowUps";

export default function Progress() {
  const first = ACHIEVEMENTS[0];
  const last = ACHIEVEMENTS[ACHIEVEMENTS.length - 1];
  const middle = ACHIEVEMENTS.slice(1, -1);

  return (
    <section id="progress" aria-labelledby="progress-title" className="border-y border-line bg-[#fafbf9]">
      <div className="wrap py-[clamp(5rem,11vw,9rem)]">
        <Label>Our progress</Label>
        <h2
          id="progress-title"
          className="mt-6 max-w-[26ch] text-[length:clamp(2rem,4.6vw,3.9rem)] leading-[1.08] font-semibold tracking-[-0.045em] text-balance text-ink"
        >
          What we’ve brought to campus.{" "}
          <span className="text-ink/30">Better facilities, new opportunities and work that makes a difference to students.</span>
        </h2>

        <div className="mt-[clamp(3.5rem,7vw,6rem)] flex flex-col gap-[clamp(3.5rem,6vw,5.5rem)]">
          <AchievementFeature a={first} />
          {/* nine items, three to a row on wider screens */}
          <ul className="grid gap-x-8 gap-y-14 md:grid-cols-3">
            {middle.map((a) => (
              <li key={a.title}>
                <AchievementCard a={a} />
              </li>
            ))}
          </ul>
          <AchievementFeature a={last} flip />
        </div>

        <div className="mt-[clamp(5rem,9vw,8rem)]">
          <FollowUps />
        </div>

        <p className="mt-14 text-[0.75rem] text-ink-2">
          Event photographs use original source images. Other visuals are adapted from our campaign posters; some scenes are illustrative.
        </p>
      </div>
    </section>
  );
}
