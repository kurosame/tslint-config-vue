module.exports = {
  extends: ['tslint:recommended', 'tslint-config-prettier'],
  rulesDirectory: ['tslint-plugin-prettier'],
  rules: {
    'no-console': [true, 'log', 'debug', 'info', 'time', 'timeEnd', 'trace'],
    'no-unused-expression': [true, 'allow-fast-null-checks'],
    'no-unused-variable': true,
    'object-literal-sort-keys': false,
    prettier: [
      true,
      {
        singleQuote: true,
        semi: false
      }
    ]
  }
}
