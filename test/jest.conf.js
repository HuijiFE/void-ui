const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, '../'),
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'vue'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.tsx?$': '<rootDir>/node_modules/ts-jest',
    '^.+\\.jsx?$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.vue$': '<rootDir>/node_modules/vue-jest',
  },
  testMatch: [
    '**/__tests__/**/*.js?(x)',
    '**/?(*.)(spec|test).js?(x)',
    '**/__tests__/**/*.ts?(x)',
    '**/?(*.)(spec|test).ts?(x)',
  ],
  testPathIgnorePatterns: ['<rootDir>/docs'],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/test/setup'],
  mapCoverage: true,
  coverageDirectory: '<rootDir>/test/coverage',
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text', 'html'],
  collectCoverageFrom: [
    'src/**/*.{ts,js,vue}',
    '!src/index.ts',
    '!src/controls/index.ts',
    '!**/node_modules/**',
    '!**/*.d.ts',
  ],
  // testMatch: ['**/?(*.)(spec|test).js?(x)'],
};
