import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full border border-transparent text-[0.98rem] leading-none font-medium whitespace-nowrap transition-[transform,background-color,border-color,box-shadow] duration-300 ease-out-expo outline-none focus-visible:ring-[3px] focus-visible:ring-ring/40 active:translate-y-px active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 [&_i]:text-[1.05em] [&_.ph-arrow-right]:transition-transform [&_.ph-arrow-right]:duration-300 hover:[&_.ph-arrow-right]:translate-x-[3px]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-deep-hover hover:shadow-[0_10px_24px_-12px_rgba(11,43,34,0.6)]",
        outline:
          "border-border bg-background text-foreground hover:border-[#c9d3cf] hover:bg-soft",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "relative rounded-none px-[0.15rem] text-foreground after:absolute after:inset-x-[0.15rem] after:bottom-[11px] after:h-[1.5px] after:origin-left after:scale-x-[0.35] after:bg-current after:transition-transform after:duration-500 after:ease-out-expo hover:after:scale-x-100",
      },
      size: {
        default: "h-12 px-[1.4rem]",
        sm: "h-10 px-[1.1rem] text-[0.92rem]",
        icon: "size-10 text-[1.15rem]",
      },
    },
    compoundVariants: [{ variant: "link", className: "px-[0.15rem]" }],
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
