import type { ProjectsSectionTypes } from "@/utils/types";
import { type Project, allProjects } from "contentlayer/generated";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { data } from "@/data";
import { MotionDiv } from "../motion/div";
import { ProjectCard } from "../ProjectCard";
import { Button } from "../ui/button";
import { projectsAnimation } from "./animationVariants";
import {
  SectionContainer,
  SectionDescription,
  SectionRoot,
  SectionTitle,
} from "./components";

export function ProjectsSection({
  id,
  title,
  description,
  viewMore,
  locale,
}: ProjectsSectionTypes) {
  const projects = data.topProjects.map((top) =>
    allProjects.find(
      (project) => project.slug === top && project.locale === locale,
    ),
  ) as Project[];

  return (
    <SectionRoot id={id}>
      <MotionDiv
        variants={projectsAnimation.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <SectionContainer>
          <SectionTitle>{title}</SectionTitle>
          <SectionDescription>{description}</SectionDescription>
          <div className="mdlg:grid-cols-2 mdlg:px-0 grid gap-6 px-2 md:px-10">
            {projects.map((project) => (
              <MotionDiv
                key={project._id}
                variants={projectsAnimation.item}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard {...project} />
              </MotionDiv>
            ))}
          </div>
          <MotionDiv
            variants={projectsAnimation.item}
            transition={{ duration: 0.5 }}
            className="mt-10 flex items-center justify-center"
          >
            <Button asChild>
              <Link
                href={`/${locale}/projects`}
                className="group flex items-center gap-1"
              >
                <span>{viewMore}</span>
                <ArrowUpRight
                  size={20}
                  className="duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </Button>
          </MotionDiv>
        </SectionContainer>
      </MotionDiv>
    </SectionRoot>
  );
}
