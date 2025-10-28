"use client";

import { type ComponentProps, type MouseEvent, useState } from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";

import { Copy } from "lucide-react";
import { cn, createRipple } from "@/lib/utils";

const buttonVariants = cva(
  `
    ring-offset-background relative inline-flex items-center justify-center overflow-hidden font-medium duration-200
    focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden
    active:not-disabled:scale-95 active:not-disabled:opacity-70 disabled:cursor-not-allowed disabled:opacity-50
  `,
  {
    variants: {
      variant: {
        default:
          "bg-primary/80 text-primary-foreground dark:bg-primary/60 hover:not-disabled:bg-primary",
        destructive: `
          bg-destructive/80 text-primary-foreground focus-visible:ring-destructive [&>.ripple]:bg-background/20
          hover:not-disabled:bg-destructive
        `,
        outline: `
          border-primary/80 text-foreground border bg-transparent hover:text-primary-foreground
          focus-visible:bg-primary/80 focus-visible:text-primary-foreground hover:not-disabled:bg-primary/80
        `,
        secondary:
          "bg-secondary focus-visible:ring-ring hover:not-disabled:bg-secondary/80 [&>.ripple]:bg-white/20",
        ghost:
          "not-disabled:hover:bg-accent not-disabled:hover:text-accent-foreground",
        success: `
          bg-success/80 text-primary-foreground dark:text-foreground focus-visible:ring-success
          [&>.ripple]:bg-background/20 hover:not-disabled:bg-success
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
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
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
      onMouseDown={(e) =>
        createRipple(e as MouseEvent<HTMLButtonElement>, onMouseDown)
      }
      {...props}
    />
  );
}

export function CopyCodeButton({
  code,
  children,
  className,
  ...props
}: ButtonProps & { readonly code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      title={copied ? "Copied!" : "Copy Code"}
      aria-label={copied ? "Copied!" : "Copy Code"}
      variant={copied ? "success" : "outline"}
      size={copied ? "default" : "icon"}
      className={cn(
        "absolute top-2 right-2 z-50 opacity-0 duration-200 group-hover:opacity-100 focus-visible:opacity-100",
        className,
      )}
      onClick={handleCopy}
      disabled={copied}
      {...props}
    >
      {copied ? "Copied!" : <Copy />}
      {children}
    </Button>
  );
}
