import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold tracking-[0.08em] uppercase cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "text-primary-foreground border border-[oklch(0.28_0.12_28)] bg-[radial-gradient(circle_at_20%_0%,oklch(0.77_0.17_72_/_0.5),transparent_45%),linear-gradient(180deg,oklch(0.58_0.2_36),oklch(0.4_0.16_30))] shadow-[inset_0_1px_0_oklch(1_0_0_/_0.35),inset_0_-1px_0_oklch(0.2_0.08_30_/_0.5),0_10px_22px_-14px_oklch(0.22_0.08_28_/_0.95),0_4px_0_oklch(0.25_0.08_30_/_0.45)] hover:-translate-y-0.5 hover:saturate-110",
        destructive:
          "bg-destructive text-destructive-foreground border border-destructive/70 shadow-[0_8px_18px_-12px_oklch(0.38_0.2_28_/_0.9)] hover:-translate-y-0.5 hover:bg-destructive/95",
        outline:
          "border border-[var(--border)] bg-[oklch(0.965_0.025_86)] text-[var(--ink)] shadow-[inset_0_1px_0_oklch(1_0_0_/_0.5),0_8px_18px_-14px_oklch(0.26_0.08_30_/_0.5)] hover:-translate-y-0.5 hover:bg-[oklch(0.94_0.04_82)] hover:text-[var(--vermilion)]",
        secondary:
          "bg-secondary text-secondary-foreground border border-[var(--border)] shadow-[0_10px_22px_-16px_oklch(0.24_0.08_30_/_0.55)] hover:-translate-y-0.5 hover:bg-secondary/90",
        ghost: "text-[var(--ink)] hover:bg-accent/60 hover:text-[var(--vermilion)]",
        link: "text-primary underline-offset-4 normal-case tracking-normal hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2.5",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-11 rounded-md px-8 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
