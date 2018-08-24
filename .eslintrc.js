module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  extends: [
    "plugin:flowtype/recommended",
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: "module"
  },
  plugins: ["flowtype", "prettier", "react", "jsx-a11y", "import"],
  rules: {
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "react/prop-types": "off",
    "react/jsx-boolean-value": "off",
    "no-nested-ternary": "off",
    "no-plusplus": "off",
    "import/no-named-as-default": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false
      }
    ],
    "class-methods-use-this": "off",
    "no-underscore-dangle": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"]
      }
    ],
    "react/destructuring-assignment": "off",
    "import/extensions": ["off", "never"],
    quotes: "off",
    "no-console": "warn",
    semi: "off",
    "no-unused-vars": "warn", // ["error", "always"],
    "no-inline-comments": "off",
    "init-declarations": "off",
    "prefer-destructuring": "off"
  }
};
