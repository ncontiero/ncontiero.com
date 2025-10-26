import type { MetadataRoute } from "next";
import { getTranslations } from "next-intl/server";
import { cookies } from "next/headers";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const locale = (await cookies()).get("NEXT_LOCALE")?.value || "en";
  const t = await getTranslations({ locale, namespace: "manifest" });

  return {
    name: "Nicolas Contiero",
    short_name: "Nicolas Contiero",
    description: t("description"),
    lang: locale,
    start_url: "/",
    display: "standalone",
    background_color: "#f9fafb",
    theme_color: "#7c3aed",
    icons: [
      {
        src: "/icon",
        type: "image/png",
        sizes: "52x52",
      },
    ],
  };
}
