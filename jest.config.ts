import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom", // ✅ Simulates browser environment
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy", // ✅ Mocks CSS imports
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // ✅ Custom setup file
};

export default config;
