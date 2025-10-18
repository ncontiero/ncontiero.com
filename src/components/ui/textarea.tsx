import { type TextareaHTMLAttributes, forwardRef } from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          `
            border-border bg-background/50 ring-offset-background flex min-h-[80px] w-full resize-y rounded-md border
            px-3 py-2 transition-[border,box-shadow] placeholder:text-foreground/60 focus-visible:ring-ring
            focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden
            hover:[:not(:focus-visible)&]:border-primary disabled:cursor-not-allowed disabled:opacity-50
          `,
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
