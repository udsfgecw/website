import { FEED } from "@/config";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { H2 } from "@/components/Section";

export default function Join() {
  return (
    <section className="wrap pb-[clamp(4rem,8vw,6rem)]" id="join" aria-labelledby="join-title">
      <Card className="items-center gap-0 rounded-[28px] bg-[radial-gradient(60%_80%_at_15%_0%,rgba(5,162,106,0.12),transparent_70%),radial-gradient(60%_80%_at_85%_100%,rgba(30,172,254,0.12),transparent_70%),var(--color-soft)] px-6 py-[clamp(2.5rem,7vw,4.5rem)] text-center shadow-none">
        <img className="mb-7 size-[88px] rounded-[22px] shadow-lift" src="/assets/logo-512.png" alt="" width={88} height={88} loading="lazy" />
        <H2 id="join-title">Be part of it.</H2>
        <p className="mt-[0.9rem] mb-7 max-w-[44ch] text-ink-2">
          First years, seniors, anyone who wants a better campus. Find us at college, or send us a message.
        </p>
        <Button asChild>
          <a href={FEED.profile} target="_blank" rel="noopener">
            <i className="ph-bold ph-instagram-logo"></i> Message us on Instagram
          </a>
        </Button>
      </Card>
    </section>
  );
}
