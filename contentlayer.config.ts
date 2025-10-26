import {
  type ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer2/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { MDX_CODE_THEME } from "./src/data";

const computedFields: ComputedFields = {
  path: {
    type: "string",
    resolve: (doc) => {
      const path = doc._raw.flattenedPath.split("/");
      return ["", path[0], path[2]].join("/");
    },
  },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.split(".").slice(0, -1).join("."),
  },
  locale: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileDir.split("/")[1],
  },
};

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "./projects/**/*.mdx",
  contentType: "mdx",

  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    githubUrl: { type: "string", required: true },
    siteUrl: { type: "string" },
    image: { type: "string" },
    lastModified: { type: "string", required: true },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "./src/data",
  documentTypes: [Project],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, [rehypePrettyCode, { theme: MDX_CODE_THEME }]],
  },
});
