"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

export function ThemeToggle({ title }: { readonly title: string }) {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      type="button"
      size="icon"
      variant="ghost"
      radius="full"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      title={title}
    >
      <Sun className="size-6 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute size-6 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">{title}</span>
    </Button>
  );
}
