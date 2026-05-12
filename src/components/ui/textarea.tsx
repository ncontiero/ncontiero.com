import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps extends ComponentProps<"textarea"> {}

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        `
          flex min-h-[80px] w-full resize-y rounded-md border border-border/80 bg-background/50 px-3 py-2
          ring-offset-background transition-[border,box-shadow] placeholder:text-foreground/60 focus-visible:ring-2
          focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:cursor-not-allowed
          disabled:opacity-50 dark:border-border/40 not-disabled:[:hover,:focus-visible]:border-primary
        `,
        className,
      )}
      {...props}
    />
  );
}
