import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends ComponentProps<"input"> {}

export function Input({ type, className, ...props }: InputProps) {
  return (
    <input
      type={type}
      className={cn(
        `
          flex w-full rounded-md border border-border/80 bg-background/50 p-3 text-base ring-offset-background duration-200
          placeholder:text-foreground/60 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
          focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 dark:border-border/40
          not-disabled:[:hover,:focus-visible]:border-primary
        `,
        className,
      )}
      {...props}
    />
  );
}
