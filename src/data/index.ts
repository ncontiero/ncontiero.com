import { info } from "./info";

const name = "Nicolas Contiero";
const description =
  "Full-Stack Web Developer dedicated to transforming ideas into innovative digital experiences. With expertise in React, Next.js, Node.js, TypeScript, Python, and Django, I build complete and robust web solutions from front-end to back-end.";

export const MDX_CODE_THEME = "dracula";

export const data = {
  name,
  description,
  github: info.github,
  twitter: info.twitter,
  social: info.social,
  mdxCodeTheme: MDX_CODE_THEME,
  sections: {
    home: {
      id: "home",
      title: "Hey, I'm Nicolas",
      description,
      btnSectionId: "projects",
      content: {},
    },
    about: {
      id: "about",
      title: "About Me",
      description:
        "Here you will find more information about me, what I do, and my current skills, mostly in programming and technology.",
      btnSectionId: "contact",
      content: {
        getToKnowMe: {
          title: "Get to know me!",
          content: [
            "I'm a web developer with experience in front-end technologies like React, Next.js, HTML5, CSS3, and JavaScript. Explore some of my work in the Projects section.",
            "I have experience in back-end development, using Node.js, TypeScript, Python, and Django to create robust and scalable applications.",
            "I enjoy creating functional, responsive, and user-friendly websites and applications. I like to solve problems and find creative solutions to web development challenges. I always strive to stay updated on the latest news and trends in the web market.",
            "I am a results-oriented developer, passionate about learning new technologies and applying them to my projects to create efficient solutions.",
          ],
        },
        mySkills: {
          title: "My Skills",
          content: info.skills,
        },
      },
    },
    projects: {
      id: "projects",
      title: "Projects",
      description:
        "Here you will find some of the personal projects I created.",
      tops: ["ncontiero.com", "dkcutter", "sbily", "dkcutter-django"],
      content: {},
    },
    contact: {
      id: "contact",
      title: "Contact",
      description:
        "Feel free to contact me by submitting the form below and I will get back to you as soon as possible.",
      content: {},
    },
  },
};

export type DataType = typeof data;
