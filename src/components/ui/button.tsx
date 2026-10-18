import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full border border-transparent text-[0.88rem] leading-none font-medium whitespace-nowrap transition-[transform,background-color,border-color] duration-200 ease-out outline-none focus-visible:ring-[3px] focus-visible:ring-ring/30 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 [&_i]:text-[1.05em] [&_.ph-arrow-right]:transition-transform [&_.ph-arrow-right]:duration-300 hover:[&_.ph-arrow-right]:translate-x-[3px]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-[#30343b]",
        outline:
          "border-[#cfd2d7] bg-transparent text-foreground hover:border-ink",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "rounded-none px-0 text-foreground underline decoration-border underline-offset-[6px] transition-[text-decoration-color] hover:decoration-current",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-8 px-3.5 text-[0.68rem] font-medium tracking-[0.08em] uppercase",
        icon: "size-9 text-[1.05rem]",
      },
    },
    compoundVariants: [{ variant: "link", className: "h-auto px-0" }],
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
