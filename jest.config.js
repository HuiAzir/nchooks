module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  clearMocks: true,
  modulePathIgnorePatterns: ['<rootDir>/esm/', '<rootDir>/lib/', '<rootDir>/node_modules/'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  }
}
