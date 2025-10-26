import { info } from "./info";

const name = "Nicolas Contiero";

export const MDX_CODE_THEME = "dracula";

export const data = {
  name,
  github: info.github,
  twitter: info.twitter,
  social: info.social,
  mdxCodeTheme: MDX_CODE_THEME,
  topProjects: ["ncontiero.com", "dkcutter", "sbily", "dkcutter-django"],
};

export type DataType = typeof data;
