import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const LINKS = [
  ["/#work", "What we do"],
  ["/#progress", "Our progress"],
  ["/#alliance", "Alliance"],
  ["/notes", "Notes"],
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
        "sticky top-0 z-50 h-(--nav-h) border-b border-transparent transition-colors duration-300",
        (scrolled || open) && "border-line bg-white/90 backdrop-blur-md",
      )}
    >
      <div className="grid h-full grid-cols-[1fr_auto_1fr] items-center gap-6 px-5 md:px-10">
        <nav aria-label="Primary" className="flex items-center gap-6 max-md:hidden">
          {LINKS.map(([href, label]) => (
            <Link key={href} to={href} onClick={() => setOpen(false)} className={link}>
              {label}
            </Link>
          ))}
        </nav>

        <button
          className="label justify-self-start text-ink md:hidden"
          aria-expanded={open}
          aria-controls="navLinks"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <Link to="/" aria-label="UDSF GECW home" className="justify-self-center">
          <img className="size-7 rounded-[6px]" src={`${import.meta.env.BASE_URL}assets/logo-96.webp`} alt="" width={28} height={28} />
        </Link>

        <Link to="/notes" className={cn(link, "justify-self-end")}>
          Notes
        </Link>
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
