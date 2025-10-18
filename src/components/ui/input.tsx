import { type InputHTMLAttributes, forwardRef } from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          `
            border-border bg-background/50 ring-offset-background flex w-full rounded-md border p-3 text-base
            duration-200 placeholder:text-foreground/60 focus-visible:ring-ring focus-visible:ring-2
            focus-visible:ring-offset-2 focus-visible:outline-hidden hover:[:not(:focus-visible)&]:border-primary
            disabled:cursor-not-allowed disabled:opacity-50
          `,
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
