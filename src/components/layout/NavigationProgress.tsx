import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const MIN_VISIBLE_MS = 350; // fast navigations still show the bar long enough to notice
const GIVE_UP_MS = 10000; // a click that never leads to a new page must not leave the bar stuck

/* A thin green-to-blue bar across the top of the window. It starts the moment an internal link
   is clicked (or back/forward is used) and completes once the new page has rendered, so a slow
   page chunk never looks like a dead click. It is driven straight through the DOM, not React
   state, so it paints even while React is busy rendering the next page. */
export default function NavigationProgress() {
  const { key, pathname, search } = useLocation();
  const wrap = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const current = useRef("");
  current.current = pathname + search;
  const state = useRef({ active: false, startedAt: 0, timers: [] as number[] });

  const clear = () => {
    state.current.timers.forEach(clearTimeout);
    state.current.timers = [];
  };

  const start = () => {
    const w = wrap.current;
    const b = bar.current;
    if (!w || !b) return;
    const s = state.current;
    if (s.active) return;
    clear();
    s.active = true;
    s.startedAt = performance.now();
    b.style.transition = "none";
    b.style.width = "0%";
    w.style.transition = "none";
    w.style.opacity = "1";
    void b.offsetWidth; // apply the reset before animating
    // Rushes to about half, then crawls towards 90% and waits for the page.
    b.style.transition = "width 15s cubic-bezier(0.05, 0.75, 0.1, 1)";
    b.style.width = "90%";
    s.timers.push(window.setTimeout(finish, GIVE_UP_MS));
  };

  const finish = () => {
    const w = wrap.current;
    const b = bar.current;
    const s = state.current;
    if (!w || !b || !s.active) return;
    clear();
    s.active = false;
    const wait = Math.max(0, MIN_VISIBLE_MS - (performance.now() - s.startedAt));
    s.timers.push(
      window.setTimeout(() => {
        b.style.transition = "width 200ms ease-out";
        b.style.width = "100%";
      }, wait),
      window.setTimeout(() => {
        w.style.transition = "opacity 300ms";
        w.style.opacity = "0";
      }, wait + 200),
      window.setTimeout(() => {
        b.style.transition = "none";
        b.style.width = "0%";
      }, wait + 550),
    );
  };

  // The new page is on screen.
  useEffect(() => {
    finish();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a || (a.target && a.target !== "_self") || a.hasAttribute("download")) return;
      if (a.origin !== location.origin) return;
      // Same page (including in-page #anchors) never changes the route.
      if (a.pathname + a.search === current.current) return;
      start();
    };
    // Back/forward: the router may already have shown the page by the time this runs.
    const onPop = () => {
      if (location.pathname + location.search !== current.current) start();
    };
    // Capture phase: the router pushes the new URL during the click, so look before it does.
    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", onPop);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", onPop);
      clear();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={wrap}
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-1 opacity-0"
    >
      <div
        ref={bar}
        className="h-full w-0 rounded-r-full bg-linear-to-r from-green to-blue shadow-[0_0_10px_rgba(30,172,254,0.7)]"
      />
    </div>
  );
}
