import { useEffect, useState } from "react";
import { FEED } from "@/config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LINKS = [
  ["#work", "What we do"],
  ["#alliance", "Alliance"],
  ["#values", "Values"],
  ["#updates", "Updates"],
] as const;

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Hairline under the nav once the page has scrolled
  useEffect(() => {
    const sentinel = document.getElementById("top-sentinel");
    if (!sentinel) return;
    const io = new IntersectionObserver(([e]) => setScrolled(!e.isIntersecting));
    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      id="nav"
      className={cn(
        "sticky top-0 z-50 h-(--nav-h) bg-white/85 backdrop-blur-[14px] transition-shadow duration-300",
        scrolled && "shadow-[0_1px_0_var(--color-line)]",
      )}
    >
      <div className="wrap flex h-full items-center justify-between gap-6">
        <a className="inline-flex items-center gap-[0.65rem]" href="#top" aria-label="UDSF GECW home">
          <img className="size-10 rounded-[10px]" src="/assets/logo-512.png" alt="" width={40} height={40} />
          <span className="text-[1.02rem] font-bold tracking-[-0.02em] max-[380px]:hidden">UDSF GECW</span>
        </a>

        <nav
          id="navLinks"
          aria-label="Primary"
          className={cn(
            "flex items-center gap-8",
            "max-[860px]:absolute max-[860px]:inset-x-4 max-[860px]:top-[calc(var(--nav-h)-6px)] max-[860px]:flex-col max-[860px]:items-stretch max-[860px]:gap-[0.15rem] max-[860px]:rounded-[20px] max-[860px]:bg-white max-[860px]:p-[0.6rem] max-[860px]:shadow-[0_30px_70px_-30px_rgba(13,31,26,0.35),0_0_0_1px_var(--color-line)]",
            "max-[860px]:transition-[opacity,transform] max-[860px]:duration-300 max-[860px]:ease-out-expo",
            open
              ? "max-[860px]:translate-y-0 max-[860px]:opacity-100"
              : "max-[860px]:pointer-events-none max-[860px]:-translate-y-2 max-[860px]:opacity-0",
          )}
        >
          {LINKS.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-[0.93rem] font-medium text-ink-2 transition-colors hover:text-foreground max-[860px]:rounded-xl max-[860px]:px-[0.9rem] max-[860px]:py-[0.8rem] max-[860px]:text-base max-[860px]:text-foreground max-[860px]:hover:bg-soft"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-[0.6rem]">
          <Button asChild variant="outline" size="icon" className="max-[860px]:hidden">
            <a href={FEED.profile} target="_blank" rel="noopener" aria-label="UDSF GECW on Instagram">
              <i className="ph-bold ph-instagram-logo"></i>
            </a>
          </Button>
          <Button asChild size="sm">
            <a href="#join">Join UDSF</a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            id="navToggle"
            className="min-[861px]:hidden"
            aria-expanded={open}
            aria-controls="navLinks"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <i className={`ph-bold ${open ? "ph-x" : "ph-list"}`}></i>
          </Button>
        </div>
      </div>
    </header>
  );
}
