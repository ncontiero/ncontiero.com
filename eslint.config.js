import { ncontiero } from "@ncontiero/eslint-config";

export default ncontiero(
  {
    jsx: {
      a11y: true,
    },
    javascript: {
      overrides: {
        "node/no-unsupported-features/node-builtins": [
          "error",
          { allowExperimental: true },
        ],
      },
    },
    typescript: {
      tsconfigPath: "./tsconfig.json",
    },
  },
  {
    files: ["./src/app/icon.tsx"],
    rules: {
      "react-refresh/only-export-components": "off",
    },
  },
  {
    files: ["./src/i18n/messages/*.ts", "./src/i18n/request.ts"],
    rules: {
      "import/no-default-export": "off",
    },
  },
);
