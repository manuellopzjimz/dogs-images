const { pathsToModuleNameMapper } = require('ts-jest/utils');

const { compilerOptions } = require('./tsconfig.paths.json');

module.exports = {
  setupFilesAfterEnv: ['jest-canvas-mock'],
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
      },
      "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
      moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/src/' } )
};