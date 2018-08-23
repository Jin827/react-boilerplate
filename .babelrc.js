const isTest = String(process.env.NODE_ENV) === 'test'

module.exports = {
  presets: [
    'react',
    [
      'env',
      {
        targets: {
          browsers: ['last 2 versions', 'safari >= 7']
        },
        loose: true,
        modules: isTest ? 'commonjs' : false,
        debug: true
      }
    ]
  ],
  retainLines: true,
  plugins: [
    'syntax-dynamic-import',
    // "dynamic-import-webpack",
    'transform-class-properties',
    'transform-object-rest-spread',
    // isTest ? 'dynamic-import-node' : null
  ].filter(Boolean),
  env: {
    development: {
      plugins: ['transform-runtime', 'react-hot-loader/babel']
    }
  }
};
