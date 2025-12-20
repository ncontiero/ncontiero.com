import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps extends ComponentProps<"textarea"> {}

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        `
          border-border/80 bg-background/50 ring-offset-background not-disabled:[:hover,:focus-visible]:border-primary
          placeholder:text-foreground/60 focus-visible:ring-ring dark:border-border/40 flex min-h-[80px] w-full resize-y
          rounded-md border px-3 py-2 transition-[border,box-shadow] focus-visible:ring-2 focus-visible:ring-offset-2
          focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50
        `,
        className,
      )}
      {...props}
    />
  );
}
