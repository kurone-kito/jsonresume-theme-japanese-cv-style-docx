/* eslint @typescript-eslint/no-var-requires: off */
const convPaths = require('tsconfig-paths-jest');

const tsconfig = require('./tsconfig.json');

module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
  moduleNameMapper: convPaths(tsconfig),
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  transform: { '.tsx?$': 'ts-jest' }
};
