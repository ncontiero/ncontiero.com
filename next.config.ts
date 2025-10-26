import "./src/env";
import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer2";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "github.com" }],
    qualities: [100],
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
  trailingSlash: true,
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(withContentlayer(nextConfig));
