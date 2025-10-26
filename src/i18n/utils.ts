import { getPathname } from "./navigation";
import { routing } from "./routing";

export function getLanguages(href: string) {
  return routing.locales.reduce(
    (acc, locale) => ({
      ...acc,
      [locale]: getPathname({ locale, href }),
    }),
    {},
  );
}

export function getAbsoluteLangs(href: string, baseUrl: string) {
  return routing.locales.reduce(
    (acc, locale) => ({
      ...acc,
      [locale]: `${new URL(getPathname({ locale, href }), baseUrl).toString()}/`,
    }),
    {},
  );
}
