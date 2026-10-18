import { ArrowUpRight } from "lucide-react";
import { INSTAGRAM } from "@/config";
import { Button } from "@/components/ui/button";
import { H2 } from "@/components/Section";

export default function Join() {
  return (
    <section className="wrap pb-[clamp(4rem,8vw,7rem)]" id="join" aria-labelledby="join-title">
      <div className="rounded-[2rem] bg-ink px-[clamp(1.5rem,5vw,4.5rem)] py-[clamp(3.5rem,8vw,6rem)] text-white">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <p className="label text-white/60">Join</p>
            <H2 id="join-title" className="mt-4 max-w-[12ch] text-[length:clamp(2.75rem,6.5vw,5rem)] leading-[0.98]">
              Let's build a better campus.
            </H2>
          </div>
          <div className="md:justify-self-end">
            <p className="max-w-[38ch] text-[0.95rem] leading-[1.6] text-white/70">
              First years, seniors, anyone who wants a better campus. Find us at college, or send us a message.
            </p>
            <Button asChild className="mt-7 h-12 bg-white px-6 text-ink hover:bg-white/90">
              <a href={INSTAGRAM} target="_blank" rel="noopener">
                Message us on Instagram
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
