module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended"],
  plugins: ["react", "react-hooks"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // Здесь можно добавлять свои правила или переопределять стандартные.
  },
};
