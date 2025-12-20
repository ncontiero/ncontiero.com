import type { HTMLAttributes } from "react";
import { Info, MessageSquareWarning } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NotesProps extends HTMLAttributes<HTMLDivElement> {
  readonly level: "INFO" | "IMPORTANT";
  readonly levelLabel?: string;
}

export function Notes({
  children,
  className,
  levelLabel,
  level = "INFO",
  ...props
}: NotesProps) {
  return (
    <div
      className={cn(
        "[&_p]:not-first:text-foreground/80 my-7 gap-6 rounded-lg border p-6 [&_p]:not-first:my-0!",
        level === "INFO" && "border-blue-600 bg-blue-600/10",
        level === "IMPORTANT" && "border-primary bg-primary/10",
        className,
      )}
      {...props}
    >
      <div className="mb-2 flex items-center gap-2">
        {level === "INFO" ? (
          <Info className="text-blue-600" />
        ) : level === "IMPORTANT" ? (
          <MessageSquareWarning className="text-primary" />
        ) : null}
        <p
          className={cn(
            level === "INFO" && "text-blue-600! dark:text-blue-400!",
            level === "IMPORTANT" && "text-primary! dark:text-primary!",
          )}
        >
          {levelLabel || level}
        </p>
      </div>
      {children}
    </div>
  );
}
