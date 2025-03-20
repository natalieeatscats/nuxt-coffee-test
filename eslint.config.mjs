import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";
import typescriptEslint from "typescript-eslint";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
    { ignores: ["*.d.ts", "**/coverage", "**/dist"] },
    {
        files: ["**/*.{ts,vue}"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: globals.browser,
            parserOptions: {
                parser: typescriptEslint.parser,
            },
        },
        rules: {
            // your rules
        },
    },
    eslintConfigPrettier,
);