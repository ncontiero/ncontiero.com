import { type Project, allProjects } from "contentlayer/generated";
import { getTranslations } from "next-intl/server";
import { MotionDiv } from "@/components/motion/div";
import { MotionH1 } from "@/components/motion/h1";
import { MotionP } from "@/components/motion/p";
import { ProjectCard } from "@/components/ProjectCard";
import { data } from "@/data";

const projectsContainer = {
  hidden: {
    opacity: 0,
    y: 100,
    transition: {
      when: "afterChildren",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};
const projectsItem = {
  hidden: { y: 20, opacity: 0, filter: "blur(10px)" },
  visible: { y: 0, opacity: 1, filter: "blur(0px)" },
};

export default async function ProjectsPage({
  params,
}: PageProps<"/[locale]/projects">) {
  const { locale } = await params;

  const t = await getTranslations("sections.projects");

  const topProjects = data.topProjects.map((top) =>
    allProjects.find(
      (project) => project.slug === top && project.locale === locale,
    ),
  ) as Project[];
  const otherProjects = allProjects.filter(
    (project) => !topProjects.includes(project) && project.locale === locale,
  );
  const sortedProjects = otherProjects.sort((a, b) => {
    return (
      new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime()
    );
  });
  const projects = [...topProjects, ...sortedProjects];

  return (
    <MotionDiv
      variants={projectsContainer}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.5, duration: 0.5 }}
      className="mx-auto mb-28 min-h-screen max-w-7xl space-y-8 px-4 md:space-y-16 md:px-6 md:pt-6 lg:px-8"
    >
      <div className="mx-auto mt-10 max-w-2xl md:mx-0">
        <MotionH1
          variants={projectsItem}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold tracking-tight"
        >
          {t("title")}
        </MotionH1>
        <MotionP
          variants={projectsItem}
          transition={{ duration: 0.5 }}
          className="text-foreground/70 mt-4"
        >
          {t("description")}
        </MotionP>
      </div>
      <div className="bg-border h-px w-full" />
      <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:mx-0">
        <div className="grid h-fit grid-cols-1 gap-4">
          {projects
            .filter((_, i) => i % 2 === 0)
            .map((project) => (
              <MotionDiv
                key={project._id}
                variants={projectsItem}
                transition={{ duration: 0.5 }}
                className="h-fit"
              >
                <ProjectCard shouldAddHFit {...project} />
              </MotionDiv>
            ))}
        </div>
        <div className="grid h-fit grid-cols-1 gap-4">
          {projects
            .filter((_, i) => i % 2 === 1)
            .map((project) => (
              <MotionDiv
                key={project._id}
                variants={projectsItem}
                transition={{ duration: 0.5 }}
                className="h-fit"
              >
                <ProjectCard shouldAddHFit {...project} />
              </MotionDiv>
            ))}
        </div>
      </div>
    </MotionDiv>
  );
}
