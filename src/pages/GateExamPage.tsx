import { useEffect } from "react";

const GATE_URL = "https://gecwyd.github.io/gate-question-bank";

export default function GateExamPage() {
  useEffect(() => {
    const t = setTimeout(() => {
      window.location.href = GATE_URL;
    }, 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-[#0a0a0a]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #181818 0%, #181818 38%, transparent 38.5%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "linear-gradient(315deg, #141414 0%, #141414 42%, transparent 42.5%)",
        }}
      />

      <a
        href={GATE_URL}
        className="group relative z-10 flex flex-col items-center gap-4 text-center outline-none"
      >
        <span className="text-[0.82rem] font-light tracking-[0.01em] text-white/70 transition-colors duration-200 group-hover:text-white group-focus-visible:text-white">
          {GATE_URL.replace("https://", "")}
        </span>
        <span className="h-px w-0 bg-white/30 transition-all duration-500 group-hover:w-full" />
      </a>
    </div>
  );
}
