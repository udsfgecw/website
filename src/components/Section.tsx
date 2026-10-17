import { cn } from "@/lib/utils";

export function Kicker({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("mb-[0.9rem] font-mono text-xs leading-none font-medium tracking-[0.14em] text-ink-2 uppercase", className)}
      {...props}
    />
  );
}

export function H2({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn("text-[length:clamp(1.9rem,3.6vw,2.75rem)] leading-[1.1] font-semibold tracking-[-0.035em]", className)}
      {...props}
    />
  );
}
