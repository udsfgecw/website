import { useEffect, useState } from "react";
import { FEED } from "../config";

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
    <header className={`nav${scrolled ? " nav--scrolled" : ""}${open ? " is-open" : ""}`} id="nav">
      <div className="nav__inner wrap">
        <a className="brand" href="#top" aria-label="UDSF GECW home">
          <img className="brand__logo" src="/assets/logo-512.png" alt="" width={40} height={40} />
          <span className="brand__name">UDSF GECW</span>
        </a>
        <nav className="nav__links" id="navLinks" aria-label="Primary">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
        <div className="nav__right">
          <a className="nav__ig" href={FEED.profile} target="_blank" rel="noopener" aria-label="UDSF GECW on Instagram">
            <i className="ph-bold ph-instagram-logo"></i>
          </a>
          <a className="btn btn--dark btn--sm" href="#join">Join UDSF</a>
          <button
            className="nav__toggle"
            id="navToggle"
            aria-expanded={open}
            aria-controls="navLinks"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <i className={`ph-bold ${open ? "ph-x" : "ph-list"}`}></i>
          </button>
        </div>
      </div>
    </header>
  );
}
