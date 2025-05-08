import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js, prettier: pluginPrettier },
    languageOptions: { globals: globals.browser },
    rules: {
      ...pluginPrettier.configs.recommended.rules, // active prettier en tant que linter
    },
    extends: ["js/recommended", prettierConfig],
  },
  pluginReact.configs.flat.recommended,
]);
