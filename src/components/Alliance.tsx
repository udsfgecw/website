import { Card } from "@/components/ui/card";
import { H2, Kicker } from "@/components/Section";
import { cn } from "@/lib/utils";

const org = "gap-0 rounded-3xl border-0 p-[clamp(1.75rem,4vw,3rem)] shadow-none";
const orgName = "font-wordmark text-[length:clamp(3.5rem,7vw,5.5rem)] leading-[0.9] font-normal tracking-[0.01em]";

export default function Alliance() {
  return (
    <section className="wrap pb-[clamp(5rem,10vw,7.5rem)]" id="alliance" aria-labelledby="alliance-title">
      <header className="mb-9">
        <Kicker>The alliance</Kicker>
        <H2 id="alliance-title">Two organisations. One front.</H2>
      </header>

      <div className="relative grid grid-cols-2 gap-4 max-[760px]:grid-cols-1">
        <Card className={cn(org, "bg-blue-tint")}>
          <h3 className={cn(orgName, "text-blue-ink")}>KSU</h3>
          <p className="mt-3 mb-4 font-semibold">Kerala Students Union</p>
          <p className="max-w-[40ch] text-ink-2">
            The student organisation of the Congress movement in Kerala, active on campuses across the state for generations.
          </p>
        </Card>
        {/* the "+" sits on the seam between the two panels */}
        <span
          className="absolute top-1/2 left-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-[1.4rem] leading-none font-medium shadow-[0_0_0_1px_var(--color-line)]"
          aria-hidden="true"
        >
          +
        </span>
        <Card className={cn(org, "bg-green-tint")}>
          <h3 className={cn(orgName, "text-green-ink")}>MSF</h3>
          <p className="mt-3 mb-4 font-semibold">Muslim Students Federation</p>
          <p className="max-w-[40ch] text-ink-2">
            The student wing of the Indian Union Muslim League, with a strong presence in colleges throughout Kerala.
          </p>
        </Card>
      </div>
    </section>
  );
}
