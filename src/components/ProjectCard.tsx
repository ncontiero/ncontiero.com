import type { ProjectType } from "@/utils/types";

import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardContainer, CardDescription, CardRoot, CardTitle } from "./Card";

interface ProjectCardProps extends ProjectType {}

export function ProjectCard({
  title,
  description,
  githubUrl,
  siteUrl,
  path,
}: ProjectCardProps) {
  return (
    <CardRoot radialWidth={512}>
      <CardContainer projectUrl={path}>
        <div className="h-1/2 w-full">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <div className="mt-4 flex h-1/2 items-end space-x-4">
          <Button
            className="z-20 flex items-center gap-2"
            variant="outline"
            asChild
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <span>GitHub</span>
              <Github size={20} />
            </a>
          </Button>
          {siteUrl ? (
            <Button className="z-20 flex items-center gap-1" asChild>
              <a
                href={siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/demo"
              >
                <span>Site</span>
                <ArrowUpRight
                  size={20}
                  className="duration-300 group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5"
                />
              </a>
            </Button>
          ) : null}
        </div>
      </CardContainer>
    </CardRoot>
  );
}
