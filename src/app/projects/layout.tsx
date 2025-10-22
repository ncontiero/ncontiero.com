import type { Metadata, ResolvingMetadata } from "next";

import { data } from "@/data";
import { env } from "@/env";

export async function generateMetadata(
  _: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { description } = data.sections.projects;
  const canonical = `${(await parent).metadataBase}projects`;
  const image = `/og?description=${description}.`;

  return {
    title: { default: "Projects", template: `%s • ${env.SITE_NAME}` },
    description: `${description}.`,
    alternates: {
      canonical,
    },
    openGraph: {
      title: { default: "Projects", template: `%s • ${env.SITE_NAME}` },
      description: `${description}.`,
      url: canonical,
      images: { url: image, alt: `${data.name} - ${description}.` },
    },
    twitter: {
      card: "summary_large_image",
      title: { default: "Projects", template: `%s • ${env.SITE_NAME}` },
      description: `${description}.`,
      images: { url: image, alt: `${data.name} - ${description}.` },
    },
  };
}

export default function ProjectsLayout({ children }: LayoutProps<"/projects">) {
  return children;
}
