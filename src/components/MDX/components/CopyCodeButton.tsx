"use client";

import { useState } from "react";
import { Copy } from "lucide-react";
import { type ButtonProps, Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
        `
          absolute top-2 right-2 z-50 opacity-0 duration-200 group-focus-within:opacity-100 group-hover:opacity-100
          focus-visible:opacity-100
        `,
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
