// https://prettier.io/docs/en/options.html
<<<<<<< HEAD
/** @type {import('prettier').RequiredOptions} */
module.exports = {
  trailingComma: 'es5',
  bracketSpacing: true,
  tabWidth: 4,
  semi: false,
  singleQuote: true,
  arrowParens: 'always',
  overrides: [
    {
      files: 'Routes.*',
      options: {
        printWidth: 999,
      },
    },
  ],
=======
module.exports = {
    trailingComma: 'es5',
    bracketSpacing: true,
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    arrowParens: 'always',
    overrides: [
        {
            files: 'Routes.js',
            options: {
                printWidth: 200,
            },
        },
    ],
>>>>>>> feat/chapter5
}
