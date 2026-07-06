"use client";

import type { ComponentProps } from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";

import { cn, createRipple } from "@/lib/utils";

const buttonVariants = cva(
  `
    relative inline-flex items-center justify-center overflow-hidden font-medium ring-offset-background duration-200
    focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-hidden
    active:not-disabled:scale-95 active:not-disabled:opacity-70 disabled:cursor-not-allowed disabled:opacity-50
  `,
  {
    variants: {
      variant: {
        default:
          "bg-primary/80 text-primary-foreground hover:not-disabled:bg-primary dark:bg-primary/60",
        destructive: `
          bg-destructive/80 text-primary-foreground hover:not-disabled:bg-destructive focus-visible:ring-destructive
          [&>.ripple]:bg-background/20
        `,
        outline: `
          border border-primary/80 bg-transparent text-foreground hover:text-primary-foreground
          hover:not-disabled:bg-primary/80 focus-visible:bg-primary/80 focus-visible:text-primary-foreground
        `,
        secondary:
          "bg-secondary hover:not-disabled:bg-secondary/80 focus-visible:ring-ring [&>.ripple]:bg-white/20",
        ghost:
          "not-disabled:hover:bg-accent not-disabled:hover:text-accent-foreground",
        success: `
          bg-success/80 text-primary-foreground hover:not-disabled:bg-success focus-visible:ring-success dark:text-foreground
          [&>.ripple]:bg-background/20
        `,
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        md: "px-4 py-2",
        lg: "p-4",
        xlg: "px-8 py-4",
        icon: "size-10",
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
        size: ["default", "sm", "icon"],
        className: "text-sm",
      },
      {
        size: ["md", "lg"],
        className: "text-base",
      },
      {
        variant: ["default", "outline", "ghost"],
        className: "[&>.ripple]:bg-background/60",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      radius: "default",
    },
  },
);

export interface ButtonProps
  extends ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  readonly asChild?: boolean;
}

export function Button({
  className,
  variant,
  size,
  radius,
  onMouseDown,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, radius, className }))}
      onMouseDown={(e) => createRipple(e, onMouseDown)}
      {...props}
    />
  );
}
