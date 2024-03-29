module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "next/core-web-vitals",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/jsx-runtime",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json",
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  globals: {
    __DEV__: false,
    jasmine: false,
    beforeAll: false,
    afterAll: false,
    beforeEach: false,
    afterEach: false,
    test: false,
    expect: false,
    describe: false,
    jest: false,
    it: false,
  },
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "eslint-plugin-import",
    "eslint-plugin-import-helpers",
    "simple-import-sort",
    "import",
  ],
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "@typescript-eslint/ban-ts-ignore": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/member-delimiter-style": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-object-literal-type-assertion": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-floating-promises": 0,
    "eol-last": ["error", "always"],
    "no-multiple-empty-lines": "error",
    "comma-dangle": 0,
    "multiline-ternary": 0,
    "no-undef": 0,
    "no-unused-vars": 0,
    "no-use-before-define": "off",
    quotes: 0,
    "react/no-unknown-property": ["error", { ignore: ["css", "tw"] }],
    "react/no-unescaped-entities": 0,
    "react/prop-types": "off",
    "react/display-name": "off",
    "space-before-function-paren": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/no-unresolved": 0,
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [
          // ".js",
          // ".jsx",
          ".ts",
          ".tsx",
        ],
      },
    ],
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    "@typescript-eslint/unbound-method": ["warn"],
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-empty-interface": [
      "warn",
      {
        allowSingleExtends: true,
      },
    ],
    "@typescript-eslint/ban-types": [
      "warn",
      {
        types: {
          "{}": {
            message: "Use object instead",
            fixWith: "object",
          },
          object: {
            message: "Use object instead",
            fixWith: "object",
          },
        },
      },
    ],
    "@typescript-eslint/no-empty-function": "warn",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
  },
  overrides: [
    {
      files: ["**/*.tsx"],
      rules: {
        "react/prop-types": "off",
      },
    },
  ],
}
