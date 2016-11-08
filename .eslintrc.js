module.exports = {
  root: true,
  extends: [
    'airbnb-base',
  ],
  plugins: [
    'html',
  ],
  env: {
    "jasmine": true
  },
    // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "import/no-extraneous-dependencies": ["error", {"devDependencies": ["**/*.config.js", "**/*.spec.js"]}]
  },
};
