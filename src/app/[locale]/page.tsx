import type { Locale } from "@/i18n/types";
import { getMessages } from "next-intl/server";
import { Sections } from "@/components/Sections";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const locale = (await params).locale as Locale;
  const messages = await getMessages({ locale });
  const { home, about, projects, contact } = messages.sections;

  return (
    <>
      <Sections.Home {...home} />
      <Sections.About {...about} />
      <Sections.Projects {...projects} locale={locale} />
      <Sections.Contact {...contact} />
    </>
  );
}
