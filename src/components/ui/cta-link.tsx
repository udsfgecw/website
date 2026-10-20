import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const VARIANTS = {
  /* on light backgrounds */
  ink: { pill: "bg-ink text-white hover:bg-green-deep", knob: "bg-white text-ink" },
  outline: { pill: "border border-ink/15 bg-white text-ink hover:border-ink/40", knob: "bg-ink text-white" },
  /* on dark backgrounds */
  green: { pill: "bg-green text-ink hover:bg-white", knob: "bg-ink text-white" },
  ghost: { pill: "border border-white/20 text-white hover:border-white/50 hover:bg-white/5", knob: "bg-white text-ink" },
};

/* Pill-shaped link to another page, with an arrow knob that nudges on hover. */
export function CtaLink({
  to,
  variant = "ink",
  className,
  children,
}: {
  to: string;
  variant?: keyof typeof VARIANTS;
  className?: string;
  children: React.ReactNode;
}) {
  const v = VARIANTS[variant];
  return (
    <Link
      to={to}
      className={cn(
        "group inline-flex h-12 items-center gap-3 rounded-full pl-5 pr-1.5 text-[0.88rem] font-semibold tracking-[-0.01em] transition-colors duration-200",
        v.pill,
        className,
      )}
    >
      {children}
      <span className={cn("grid size-9 place-items-center rounded-full transition-transform duration-300 group-hover:rotate-45", v.knob)}>
        <ArrowUpRight aria-hidden className="size-4" />
      </span>
    </Link>
  );
}
