const path = require("path");
const TEST_REGEX = "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$";

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  jest: {
    verbose: true,
    testRegex: TEST_REGEX,
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/src/$1",
    },
    testPathIgnorePatterns: [
      "<rootDir>/build/",
      "<rootDir>/node_modules/",
      "<rootDir>/dist/",
    ],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  },
};
