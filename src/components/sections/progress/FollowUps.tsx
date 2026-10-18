import { Check } from "lucide-react";
import { FOLLOW_UPS } from "@/data/progress";
import { cn } from "@/lib/utils";

const STAGE = ["Done", "Now", "Next"];
const STATUS = ["Completed: ", "Current stage: ", "Pending: "];

export default function FollowUps() {
  return (
    <div>
      <h2 className="max-w-[26ch] text-[length:clamp(1.6rem,3vw,2.5rem)] leading-[1.1] font-semibold tracking-[-0.04em] text-balance">
        Work in progress. <span className="text-ink/30">Following through to the finish.</span>
      </h2>
      <ul className="mt-10 grid gap-x-12 gap-y-12 lg:grid-cols-2">
        {FOLLOW_UPS.map((item) => (
          <li key={item.title}>
            <h3 className="text-[1.2rem] font-semibold tracking-[-0.025em]">{item.title}</h3>
            <p className="mt-2 max-w-[55ch] text-[0.92rem] leading-[1.6] text-ink-2">{item.description}</p>

            {/* three-part bar: done, current, still to come */}
            <ol aria-label={`${item.title} progress`} className="mt-7 grid grid-cols-3 gap-2">
              {item.steps.map((step, index) => (
                <li key={step}>
                  <div className="h-1 overflow-hidden rounded-full bg-line">
                    {index < 2 && <div className={cn("h-full rounded-full", index === 0 ? "bg-green" : "bg-blue")} />}
                  </div>
                  <p className={cn("label mt-3", index === 0 ? "text-green-ink" : index === 1 ? "text-blue-ink" : "text-ink-2/70")}>
                    {STAGE[index]}
                  </p>
                  <p className={cn("mt-1 flex items-center gap-1.5 text-[0.85rem] leading-snug", index === 2 ? "text-ink-2" : "font-medium text-ink")}>
                    <span className="sr-only">{STATUS[index]}</span>
                    {step}
                    {index === 0 && <Check size={14} strokeWidth={2.5} className="text-green" aria-hidden="true" />}
                  </p>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ul>
    </div>
  );
}
