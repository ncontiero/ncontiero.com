import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends ComponentProps<"input"> {}

export function Input({ type, className, ...props }: InputProps) {
  return (
    <input
      type={type}
      className={cn(
        `
          border-border/80 bg-background/50 ring-offset-background placeholder:text-foreground/60
          focus-visible:ring-ring not-disabled:[:hover,:focus-visible]:border-primary dark:border-border/40 flex w-full
          rounded-md border p-3 text-base duration-200 focus-visible:ring-2 focus-visible:ring-offset-2
          focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50
        `,
        className,
      )}
      {...props}
    />
  );
}
