const GITHUB = "https://github.com/ncontiero";
const TWITTER_USER = "dkshs_";

const social = {
  github: {
    icon: "/icons/github-ico.png", // files in the `/public` folder
    url: GITHUB,
  },
  linkedin: {
    icon: "/icons/linkedin-ico.png", // files in the `/public` folder
    url: "https://www.linkedin.com/in/nicolas-contiero/",
  },
  twitter: {
    icon: "/icons/x-logo.png", // files in the `/public` folder
    url: `https://x.com/${TWITTER_USER}`,
  },
};

const skills = [
  "HTML",
  "CSS",
  "JavaScript (ES6+)",
  "Node.js",
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "Django",
  "RESTful APIs",
  "GIT",
  "GitHub",
  "Docker",
];

export const info = {
  github: GITHUB,
  twitter: TWITTER_USER,
  social,
  skills,
};
