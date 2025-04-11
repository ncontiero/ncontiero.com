import "./src/env.js";
import { withContentlayer } from "next-contentlayer2";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "github.com" }],
  },
  turbopack: {
    resolveExtensions: [
      ".mdx",
      ".md",
      ".tsx",
      ".ts",
      ".jsx",
      ".js",
      ".mjs",
      ".json",
    ],
  },
  experimental: {
    webpackBuildWorker: true,
  },
  trailingSlash: true,
};

export default withContentlayer(nextConfig);
