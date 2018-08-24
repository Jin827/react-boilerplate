module.exports = {
  testEnvironment: 'jsdom',
  setupTestFrameworkScriptFile: require.resolve(
    '../test.config/setup-test-framework.js',
  ),
  moduleNameMapper: {
    // module must come first
    // '\\.module\\.css$': 'identity-obj-proxy',
    '\\.scss||css$': require.resolve('../test.config/style-mock.js'),
    // can also map files that are loaded by webpack with the file-loader
  },
  collectCoverageFrom: ['**/src/**/*.js'],
};
