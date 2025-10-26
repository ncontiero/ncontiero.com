import type { Metadata, ResolvingMetadata } from "next";

import { getTranslations } from "next-intl/server";
import { data } from "@/data";
import { env } from "@/env";
import { getLanguages } from "@/i18n/utils";

export async function generateMetadata(
  { params }: LayoutProps<"/[locale]/projects">,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { locale } = await params;
  const { metadataBase } = await parent;

  const t = await getTranslations({ locale, namespace: "sections.projects" });

  const canonical = "/projects";
  const title = { default: t("title"), template: `%s • ${env.SITE_NAME}` };
  const description = t("description");

  const imageAlt = `${data.name} - ${description}`;
  const image = `/og?description=${description}`;

  return {
    metadataBase,
    title,
    description,
    alternates: {
      canonical,
      languages: getLanguages(canonical),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      images: { url: image, alt: imageAlt },
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: { url: image, alt: imageAlt },
    },
  };
}

export default function ProjectsLayout({
  children,
}: LayoutProps<"/[locale]/projects">) {
  return children;
}
