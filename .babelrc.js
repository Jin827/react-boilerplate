module.exports = {
  presets: [
    "react",
    [
      "env",
      {
        targets: {
          browsers: ["last 2 versions", "safari >= 7"]
        },
        loose: true,
        modules: false,
        debug: true
      }
    ]
  ],
  retainLines: true,
  plugins: [
    "syntax-dynamic-import",
    // "dynamic-import-webpack",
    "transform-class-properties",
    "transform-object-rest-spread",
    "dynamic-import-node"
  ],
  env: {
    development: {
      plugins: ["transform-runtime", "react-hot-loader/babel"]
    }
  }
};
