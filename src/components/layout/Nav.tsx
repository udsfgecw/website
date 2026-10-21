import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { MEDIA_BASE } from "@/lib/media";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const LINKS = [
  ["/", "Home"],
  ["/#work", "What we do"],
  ["/activities", "Our progress"],
  ["/events", "Events"],
  ["/#alliance", "Alliance"],
] as const;

const EXPLORE = [
  ["/#work", "What we do", "The pillars of work we take on for the college."],
  ["/activities", "Our progress", "Headline wins and stories you can walk up to."],
  ["/events", "Events", "What is coming up and what we have run."],
  ["/#alliance", "Alliance", "The groups and partners we work alongside."],
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

  const link = "label text-ink transition-opacity hover:opacity-55";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 h-(--nav-h) border-b border-transparent transition-colors duration-300 print:hidden",
        (scrolled || open) && "border-line bg-white/90 backdrop-blur-md",
      )}
    >
      <div className="grid h-full grid-cols-[1fr_auto_1fr] items-center gap-6 px-5 md:px-10">
        <NavigationMenu aria-label="Primary" viewport={false} className="justify-self-start max-md:hidden">
          <NavigationMenuList className="justify-start gap-2">
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={link}>
                <Link to="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={cn(link, "h-auto bg-transparent px-2 py-1 hover:bg-transparent")}>
                Explore
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[320px] gap-1">
                  {EXPLORE.map(([href, title, desc]) => (
                    <li key={href}>
                      <NavigationMenuLink asChild>
                        <Link to={href}>
                          <span className="leading-none font-medium">{title}</span>
                          <span className="line-clamp-2 text-muted-foreground">{desc}</span>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <button
          className="label justify-self-start text-ink md:hidden"
          aria-expanded={open}
          aria-controls="navLinks"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <Link to="/" aria-label="UDSF GECW home" className="justify-self-center">
          <img className="size-7 rounded-[6px]" src={`${MEDIA_BASE}/assets/logo-96.webp`} alt="" width={28} height={28} />
        </Link>

        <div className="flex items-center justify-self-end gap-4 md:gap-6">
          <Link to="/contact" className={link} onClick={() => setOpen(false)}>Contact</Link>
          <Link to="/notes" className={link} onClick={() => setOpen(false)}>Notes</Link>
        </div>
      </div>

      {/* phone menu */}
      <nav
        id="navLinks"
        aria-label="Primary"
        className={cn(
          "absolute inset-x-0 top-(--nav-h) border-b border-line bg-white md:hidden",
          !open && "hidden",
        )}
      >
        {LINKS.map(([href, label]) => (
          <Link key={href} to={href} onClick={() => setOpen(false)} className="wrap block border-t border-line py-4 text-[0.95rem]">
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
