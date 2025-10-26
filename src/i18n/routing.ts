import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "pt"],
  defaultLocale: "en",
});

export const localesLabel: Record<(typeof routing.locales)[number], string> = {
  en: "English",
  pt: "Português",
};
