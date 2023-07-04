const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
  
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(nanoid)/)"
  ]
}

module.exports = createJestConfig(customJestConfig)
