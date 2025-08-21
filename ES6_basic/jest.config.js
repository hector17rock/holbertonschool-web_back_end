export default {
  transform: {
    "^.+\\.js$": [
      "babel-jest",
      {
        // Use the project's Babel config
      }
    ]
  },
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".js"],
  moduleFileExtensions: ["js", "json"],
};

