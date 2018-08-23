module.exports = {
  coverageDirectory: './coverage',
  collectCoverageFrom: [
    '**/src/**/*.js',
    '!**/__test__/**',
    '!**/node_modules/**',
  ],
  coverageThreshold: {
    global: {
      statements: 18,
      branches: 10,
      functions: 19,
      lines: 18,
    },
  },
  projects: ['./client', './server'],
};
