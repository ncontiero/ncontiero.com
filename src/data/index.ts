import { info } from "./info";

const name = "Nicolas Contiero";

export const data = {
  name,
  github: info.github,
  twitter: info.twitter,
  social: info.social,
  topProjects: ["ncontiero.com", "dkcutter", "sbily", "dkcutter-django"],
};

export type DataType = typeof data;
