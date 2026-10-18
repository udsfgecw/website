import { cn } from "@/lib/utils";

export function Label({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cn("label text-ink-2", className)} {...props} />;
}

export function H2({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn("text-[length:clamp(2rem,4.2vw,3.25rem)] leading-[1.04] font-semibold tracking-[-0.045em] text-balance", className)}
      {...props}
    />
  );
}

/* Section with a small label above a bold heading, an optional intro on the right,
   and content below. */
export function Section({
  id,
  label,
  title,
  intro,
  children,
  className,
}: {
  id: string;
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn("wrap py-[clamp(5rem,11vw,9rem)]", className)}>
      <header data-reveal className="grid gap-x-12 gap-y-5 md:grid-cols-2 md:items-end">
        <div>
          <Label>{label}</Label>
          <H2 id={`${id}-title`} className="mt-4 max-w-[16ch]">
            {title}
          </H2>
        </div>
        {intro && <p className="max-w-[40ch] text-[0.95rem] leading-[1.6] text-ink-2 md:justify-self-end">{intro}</p>}
      </header>
      <div className="mt-[clamp(2.5rem,5vw,4rem)]">{children}</div>
    </section>
  );
}
