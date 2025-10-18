import { ncontiero } from "@ncontiero/eslint-config";

export default ncontiero(
  {
    tailwindcss: {
      overrides: {
        "tailwindcss/no-unknown-classes": "off",
      },
    },
    javascript: {
      overrides: {
        "node/no-unsupported-features/node-builtins": [
          "error",
          { allowExperimental: true },
        ],
      },
    },
  },
  {
    files: ["./src/app/icon.tsx"],
    rules: {
      "react-refresh/only-export-components": "off",
    },
  },
);
