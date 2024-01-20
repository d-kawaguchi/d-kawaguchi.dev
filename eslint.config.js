import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import tsEsLintPlugin from "@typescript-eslint/eslint-plugin";
import tsEsLintParser from "@typescript-eslint/parser";
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default [
    js.configs.recommended, // eslint:recommended
    eslintConfigPrettier,
    {
        plugins: {
            "@typescript-eslint": tsEsLintPlugin,
            unicorn: eslintPluginUnicorn,
        },
    },
    {
        files: ['**/*.ts', '**/*.tsx', '**/*.cts', '**/*.mts'],
        languageOptions: {
            parser: tsEsLintParser,
            parserOptions: {
                project: true,
            },
        },
        rules: {
            ...tsEsLintPlugin.configs["eslint-recommended"].overrides[0].rules,
            ...tsEsLintPlugin.configs["recommended-type-checked"].rules,
            "@typescript-eslint/no-explicit-any": "error",
            ...eslintPluginUnicorn.configs["recommended"].rules
        }
    }
];
