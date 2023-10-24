/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^Application/(.*)$': '<rootDir>/src/Application/$1',
    '^Domain/(.*)$': '<rootDir>/src/Domain/$1',
    '^Infrastructure/(.*)$': '<rootDir>/src/Infrastructure/$1',
  },
  testPathIgnorePatterns: ['dist'],
};
