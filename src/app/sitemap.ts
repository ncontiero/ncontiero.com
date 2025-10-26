import type { MetadataRoute } from "next";
import { allProjects } from "contentlayer/generated";
import { env } from "@/env";
import { getAbsoluteLangs } from "@/i18n/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = new URL(env.SITE_BASEURL).toString();
  const toUrl = (path: string) => new URL(path, baseUrl).toString();

  return [
    {
      url: baseUrl,
      lastModified: "2025-10-26",
      priority: 1,
      alternates: {
        languages: getAbsoluteLangs("/", baseUrl),
      },
    },
    {
      url: toUrl("/projects/"),
      lastModified: "2025-10-26",
      priority: 0.8,
      alternates: {
        languages: getAbsoluteLangs("/projects", baseUrl),
      },
    },
    ...allProjects
      .sort((a, b) => b.lastModified.localeCompare(a.lastModified))
      .map((project) => ({
        url: toUrl(`/projects/${project.slug}/`),
        lastModified: project.lastModified,
        alternates: {
          languages: getAbsoluteLangs(`/projects/${project.slug}`, baseUrl),
        },
      })),
  ];
}
