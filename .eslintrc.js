const pluginVue = require('eslint-plugin-vue');
const vueTsEslintConfig = require('@vue/eslint-config-typescript');
const skipFormatting = require('@vue/eslint-config-prettier/skip-formatting');

const isProduction = process.env.VITE_NODE_ENV === 'production';

module.exports = {
  overrides: [
    {
      files: ['**/*.{ts,mts,tsx,vue}'],
      rules: {
        // Eslint common
        'linebreak-style': 'off', // Disable linebreak-style rule
        'import/prefer-default-export': 'off',
        'no-magic-numbers': ['error', { ignore: [-1, 0, 1] }],
        'no-debugger': isProduction ? 'error' : 'warn',
        'no-alert': isProduction ? 'error' : 'warn',
        'no-console': isProduction ? 'error' : 'off',
        '@typescript-eslint/no-explicit-any': isProduction ? 'error' : 'off',
        'prefer-const': 'warn',
        'no-undef': 'error',
        'no-dupe-keys': 'error',
        'no-dupe-else-if': 'error',
        'vue/multi-word-component-names': 'off',

        // Eslint Typescript
        '@typescript-eslint/explicit-function-return-type': 'warn',

        // The core 'no-unused-vars' rules (in the eslint:recommended ruleset)
        // does not work with type definitions
        'no-unused-vars': 'off',

        // Eslint Vue plugin
        'vue/no-v-html': 'off',
        'vue/html-self-closing': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/html-indent': 'off', // Conflict with prettier
        'vue/singleline-html-element-content-newline': 'off', // Conflict with prettier
      },
    },
  ],
  ignorePatterns: [
    '**/dist/**',
    '**/node_modules/**',
    'eslint.config.js',
    'vite.config.ts',
    'tsconfig.app.json',
    'tsconfig.node.json',
  ],
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
};
