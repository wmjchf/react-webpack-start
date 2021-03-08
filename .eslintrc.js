module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: ["plugin:@typescript-eslint/recommended", "eslint:recommended"], // 扩展的规则
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
    "no-console": 2, //不禁用console
    "react/jsx-uses-react": 2, //防止反应被错误地标记为未使用
    "@typescript-eslint/no-var-requires": 0
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
