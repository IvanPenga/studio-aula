import eslintPluginAstro from "eslint-plugin-astro";
import eslintTypeScriptParser from "@typescript-eslint/parser";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";

export default [
  ...eslintPluginAstro.configs.recommended,
  eslintPluginJsxA11y.flatConfigs.recommended,
];
