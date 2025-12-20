"use client";

import type { Locale, Messages } from "@/i18n/types";
import { Languages } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { localesLabel, routing } from "@/i18n/routing";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface ChangeLocaleProps {
  readonly navbarLocale: Messages["navbar"]["locale"];
  readonly locale: Locale;
}

export function ChangeLocale({ navbarLocale, locale }: ChangeLocaleProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          size="icon"
          variant="ghost"
          radius="full"
          aria-label={navbarLocale.changeLocale}
          title={navbarLocale.currentLanguage}
        >
          <Languages size={24} />
          <p className="sr-only">{navbarLocale.changeLocale}</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={`
          border-border/60 bg-background/60 shadow-secondary/20 dark:bg-background/80 shadow-xl backdrop-blur-md
        `}
      >
        <DropdownMenuRadioGroup
          value={locale}
          onValueChange={(value) => {
            if (value === locale) return;
            router.replace({ pathname }, { locale: value });
          }}
        >
          {routing.locales.map((loc) => (
            <DropdownMenuRadioItem key={loc} value={loc} className="py-2">
              {localesLabel[loc]}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
