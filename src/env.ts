import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    // Node
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),

    // Formspree
    FORM_SEND_URL: z.url(),

    // these variables are used for the site's SEO
    SITE_NAME: z.string().default("Nicolas Contiero"),
    // URLs
    SITE_BASEURL: z.url().default("http://localhost:3000"),
  },
  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {},
  runtimeEnv: {
    // Node
    NODE_ENV: process.env.NODE_ENV,
    // Formspree
    FORM_SEND_URL: process.env.FORM_SEND_URL,
    // SEO
    SITE_NAME: process.env.SITE_NAME,
    SITE_BASEURL: process.env.SITE_BASEURL,

    // Client
    // ----------------------------
  },
  skipValidation: !!process.env.CI || !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined.
   * `SOME_VAR: z.string()` and `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
