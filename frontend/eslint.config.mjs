import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  js.configs.recommended,
  ...compat.extends("next/core-web-vitals"),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      // Disable all rules
      "react/react-in-jsx-scope": "off", // Next.js doesn't require React to be in scope
      "react/no-unescaped-entities": "off", // Allow unescaped entities
      "no-undef": "off", // Allow undefined variables
      "no-unused-vars": "off", // Allow unused variables
      "react/no-unused-vars": "off",
      "react-hooks/exhaustive-deps": "off", // Disable exhaustive deps check for hooks
      "no-console": "off", // Allow console logs
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];

export default eslintConfig;
