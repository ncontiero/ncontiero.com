import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { PageError } from "@/components/PageError";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("pageNotFound");
  const title = t("title");

  return {
    title,
  };
}

export default function PageNotFound() {
  const t = useTranslations("pageNotFound");

  const title = t("title");
  const description = t("description");

  return <PageError title={title} description={description} />;
}
