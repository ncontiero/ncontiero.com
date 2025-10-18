import { type AnchorHTMLAttributes, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const linkVariants = cva(
  `
    ring-offset-background inline-flex items-center justify-center font-medium underline-offset-4 duration-200
    focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden
    hover:underline active:opacity-70
  `,
  {
    variants: {
      variant: {
        default: "text-primary",
        destructive:
          "text-destructive hover:text-destructive/90 focus-visible:ring-destructive",
        ghost: `
          px-0.5 shadow-[hsl(var(--primary))_0_-2px_0_0_inset] hover:no-underline
          hover:shadow-[hsl(var(--primary))_0_-30px_0_-1px_inset]
          focus-visible:shadow-[hsl(var(--primary))_0_-30px_0_-1px_inset] focus-visible:ring-transparent
        `,
      },
      size: {
        sm: "text-sm",
        default: "text-base",
        lg: "text-lg",
      },
      radius: {
        sm: "rounded-sm",
        default: "rounded-md",
        full: "rounded-full",
        none: "rounded-none",
      },
    },
    compoundVariants: [
      {
        variant: ["ghost"],
        className: "rounded-none",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      radius: "default",
    },
  },
);

export interface LinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  readonly asChild?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, size, radius, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";
    return (
      <Comp
        className={cn(linkVariants({ variant, size, radius, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Link.displayName = "Link";
