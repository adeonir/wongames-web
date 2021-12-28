module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/mock.ts',
    '!src/**/stories.tsx',
    '!src/graphql/**/*.ts',
    '!src/pages/**/*.tsx',
    '!src/services/**/*.ts',
    '!src/styles/**/*.ts',
    '!src/types/**/*.ts',
    '!src/utils/**/*.ts',
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/config.ts'],
  modulePaths: ['<rootDir>/src', '<rootDir>/.jest'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
}
