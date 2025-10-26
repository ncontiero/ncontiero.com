import type en from "./messages/en";
import type { routing } from "./routing";

export type Locales = typeof routing.locales;
export type Locale = Locales[number];

export type Messages = typeof en;

declare module "next-intl" {
  interface AppConfig {
    Messages: Messages;
  }
}

export type Sections = Messages["sections"];
