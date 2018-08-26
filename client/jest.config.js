module.exports = {
  displayName: 'client',
  testURL: 'https://til.test.com',
  testPathIgnorePatterns: ['/node_modules/', '/helpers/'],
  setupTestFrameworkScriptFile: require.resolve(
    '../test.config/setup-test-framework.js',
  ),
  modulePaths: ['<rootDir>/src', '<rootDir>/test'],
  moduleNameMapper: {
    // module must come first
    // '\\.module\\.css$': 'identity-obj-proxy',
    '\\.scss||css$': require.resolve('../test.config/style-mock.js'),
    '\\.svg$': require.resolve('../test.config/svg-file-mock.js'),
    // can also map files that are loaded by webpack with the file-loader
  },
}
