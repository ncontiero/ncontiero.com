import type { Metadata } from "next";

import { allProjects } from "contentlayer/generated";
import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import NextLink from "next/link";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/mdx";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import { getLanguages } from "@/i18n/utils";

type Props = PageProps<"/[locale]/projects/[slug]">;

export function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
    locale: project.locale,
  }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug, locale } = await props.params;
  const project = allProjects.find(
    (project) => project.slug === slug && project.locale === locale,
  );
  if (!project) {
    notFound();
  }

  const image =
    project.image ||
    `/og?title=${project.title}&description=${project.description}&isProject=true`;
  const imageAlt = `${project.title} - ${project.description}`;

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: project.path,
      languages: getLanguages(project.path),
    },
    openGraph: {
      title: project.title,
      description: project.description,
      url: project.path,
      images: { url: image, alt: imageAlt },
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: { url: image, alt: imageAlt },
    },
  };
}

export default async function ProjectPage(props: Props) {
  const { slug, locale } = await props.params;
  const project = allProjects.find(
    (project) => project.slug === slug && project.locale === locale,
  );

  if (!project) {
    notFound();
  }

  const t = await getTranslations("sections.projects");

  return (
    <div className="min-h-screen pt-16">
      <div className="relative mx-auto max-w-5xl">
        <div className="flex flex-col items-center px-6 text-center lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
          <p className="text-foreground/80 mt-4 leading-8">
            {project.description}
          </p>
          <time
            dateTime={project.lastModified}
            className="text-foreground/60 mt-2 text-sm"
          >
            {t("lastUpdated", {
              date: Intl.DateTimeFormat(locale, {
                year: "numeric",
                month: "long",
                day: "numeric",
              }).format(new Date(project.lastModified)),
            })}
          </time>
        </div>
        <div className="mt-10 flex justify-center space-x-3">
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2"
          >
            GitHub
            <ArrowUpRight
              size={20}
              className="duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
          {project.siteUrl ? (
            <Link
              href={project.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2"
            >
              Site
              <ArrowUpRight
                size={20}
                className="duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          ) : null}
        </div>
        <div className="bg-border mt-16 h-px w-full" />
        <div className="prose prose-quoteless dark:prose-invert mx-auto px-4 pt-6 sm:pt-10">
          <Mdx code={project.body.code} />
        </div>
        <div className="my-20 flex justify-center gap-2">
          <Button aria-label={t("goToProjects")} asChild>
            <NextLink href={`/${locale}/projects`}>
              {t("goToProjects")}
            </NextLink>
          </Button>
        </div>
      </div>
    </div>
  );
}
