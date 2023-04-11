export default {

  roots: ['<rootDir>/src'],

  testMatch: ['**/*.spec.ts'],

  testEnvironment: 'node',

  coverageDirectory: 'coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],

  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testTimeout: 100000,
  // setupFilesAfterEnv: ['./jest.setup.js'],

};
