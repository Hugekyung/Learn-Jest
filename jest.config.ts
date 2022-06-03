import { defaults } from "jest-config";
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    collectCoverage: false,
    coverageDirectory: "coverage",
    clearMocks: true, // * mock함수를 모든 테스트 수행 전 초기화한다
    transform: {
        "^.+\\.ts?$": "ts-jest",
    },
    transformIgnorePatterns: ["<rootDir>/node_modules/"],
    moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
};
