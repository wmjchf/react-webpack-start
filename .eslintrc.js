module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended"
  ], // 扩展的规则
  globals: {
    $: true,
    process: true,
    __dirname: true
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: "module",
    ecmaVersion: 7
  },
  plugins: ["@typescript-eslint", "react"],
  rules: {
    "@typescript-eslint/no-unused-vars": ["off"]
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
