import { useEffect } from "react";

/* Fades [data-reveal] elements up as they scroll into view. Call once, after the page renders. */
export function useReveal() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    document.querySelectorAll("[data-reveal]:not(.is-in)").forEach((el) => io.observe(el));
    document.documentElement.classList.add("reveal-ready");
    return () => io.disconnect();
  }, []);
}
