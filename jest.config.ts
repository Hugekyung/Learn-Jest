import { defaults } from "jest-config";
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    collectCoverage: false,
    coverageDirectory: "coverage",
    clearMocks: true,
    transform: {
        "^.+\\.ts?$": "ts-jest",
    },
    transformIgnorePatterns: ["<rootDir>/node_modules/"],
    moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
};
