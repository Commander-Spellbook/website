module.exports = {
  preset: "ts-jest",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^~/(.*)$": "<rootDir>/$1",
    "^vue$": "vue/dist/vue.common.js",
  },
  moduleFileExtensions: ["ts", "js", "vue", "json"],
  transform: {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.js$": "babel-jest",
    ".*\\.(vue)$": "vue-jest",
  },
  resetMocks: true,
  restoreMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/components/**/*.vue",
    "<rootDir>/pages/**/*.vue",
  ],
};
