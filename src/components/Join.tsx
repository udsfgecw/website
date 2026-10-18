import { INSTAGRAM } from "@/config";
import { Button } from "@/components/ui/button";
import { H2, Label } from "@/components/Section";

export default function Join() {
  return (
    <section className="wrap border-t border-line py-[clamp(5rem,11vw,9rem)]" id="join" aria-labelledby="join-title">
      <div className="grid gap-10 md:grid-cols-2 md:items-end">
        <div>
          <Label>Join</Label>
          <H2 id="join-title" className="mt-4 text-[length:clamp(2.5rem,6vw,4.5rem)]">
            Let's build a better campus.
          </H2>
        </div>
        <div className="md:justify-self-end">
          <p className="max-w-[40ch] text-[0.95rem] leading-[1.6] text-ink-2">
            First years, seniors, anyone who wants a better campus. Find us at college, or send us a message.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Button asChild>
              <a href={INSTAGRAM} target="_blank" rel="noopener">
                Message us on Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
