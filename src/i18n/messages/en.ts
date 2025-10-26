const description =
  "Full-Stack Web Developer dedicated to transforming ideas into innovative digital experiences. With expertise in React, Next.js, Node.js, TypeScript, Python, and Django, I build complete and robust web solutions from front-end to back-end.";

export default {
  description,
  manifest: {
    description: "Nicolas Contiero's personal website.",
  },
  pageError: {
    goBackToHome: "Go back to the <link>home</link>.",
  },
  pageNotFound: {
    title: "Page not found",
    description: "The requested page cannot be found.",
  },
  navbar: {
    logoAlt: "{name} Image",
    toggleMenu: "Toggle navigation menu",
    toggleTheme: "Toggle theme",
    locale: {
      changeLocale: "Change locale",
      currentLanguage: "Current language: English",
      langLabel: "English",
    },
  },
  sections: {
    home: {
      id: "home",
      navbarLabel: "Home",
      title: "Hey, I'm Nicolas",
      description,
      btnSectionId: "projects",
      btnSectionLabel: "Projects",
    },
    about: {
      id: "about",
      navbarLabel: "About",
      title: "About Me",
      description:
        "Here you will find more information about me, what I do, and my current skills, mostly in programming and technology.",
      btnSectionId: "contact",
      btnSectionLabel: "Contact",
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
        },
      },
    },
    projects: {
      id: "projects",
      navbarLabel: "Projects",
      title: "Projects",
      description:
        "Here you will find some of the personal projects I created.",
      viewMore: "View more projects",
      viewProject: "View project",
      lastUpdated: "Last updated: {date}",
      goToProjects: "Go to projects page",
    },
    contact: {
      id: "contact",
      navbarLabel: "Contact",
      title: "Contact",
      description:
        "Feel free to contact me by submitting the form below and I will get back to you as soon as possible.",
      form: {
        invalidData: "Invalid data",
        unknownError: "An unknown error occurred",
        somethingWentWrong: "Something went wrong. Please try again later.",
        success: "Message sent successfully!",
        name: {
          label: "Name",
          placeholder: "Enter your name",
          error: "The name must be at least 2 characters long.",
        },
        email: {
          label: "Email",
          placeholder: "Enter your email",
          error: "Invalid email address.",
        },
        message: {
          label: "Message",
          placeholder: "Enter your message",
          error: "The message must be at least 5 characters long.",
        },
        submit: "Submit",
      },
    },
  },
  footer: {
    rightsReserved: "All rights reserved",
  },
};
