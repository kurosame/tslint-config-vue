module.exports = {
  extends: ['tslint:recommended', 'tslint-config-prettier'],
  rulesDirectory: ['tslint-plugin-prettier'],
  rules: {
    prettier: [
      true,
      {
        singleQuote: true,
        semi: false
      }
    ]
  }
}
