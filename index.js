module.exports = {
  parser: require.resolve('babel-eslint'),
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
      impliedStrict: true,
      experimentalObjectRestSpread: true,
      jsx: true,
    }
  },
  rules: {
    'prettier/prettier': ['warn', {
      semi: true,
      singleQuote: true,
      trailingComma: 'es5',
      bracketSpacing: true,
      jsxBracketSameLine: true,
      printWidth: 80,
      tabWidth: 2,
      useTabs: false,
      arrowParens: 'avoid',
    }]
  },
};
