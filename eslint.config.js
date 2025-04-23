import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";

export default tseslint
  .config(
    { ignores: ["dist", "**/routeTree.gen.ts"] },
    {
      extends: [js.configs.recommended, ...tseslint.configs.recommended],
      files: ["**/*.{ts,tsx}"],
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      plugins: {
        "react-hooks": reactHooks,
        "react-refresh": reactRefresh,
        react: react,
      },
      rules: {
        ...reactHooks.configs.recommended.rules,
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
        "react/jsx-key": "error",
        "react/no-array-index-key": "warn",
      },
    },
    {
      files: ["**/ui/**/*.ts", "**/ui/**/*.tsx", "**/tools/theme-provider.tsx"],
      rules: {
        "react-refresh/only-export-components": "off",
      },
    }
  )
  .concat(eslintPluginPrettier);
