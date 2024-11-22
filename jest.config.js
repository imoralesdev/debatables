const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  // Additional module directories
  moduleDirectories: ["node_modules", "<rootDir>/"],

  // Mock CSS/SCSS/SASS files
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Maps CSS imports to an empty object
  },

  // Supported file extensions for Jest to resolve without explicit extensions
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],

  // Setup additional Jest environment files
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  // Define Jest test environment
  testEnvironment: "jest-environment-jsdom",

  // Transform ESM packages that Jest cannot handle natively
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
};

module.exports = createJestConfig(customJestConfig);