const chalk = require('chalk')

const printLine = function (flagName, value) {
  console.log(chalk.bgYellow.gray('['+flagName+']'), 'is set to:', chalk.yellow(value))
}

module.exports = {
  production: typeof process.env['PRODUCTION'] !== 'undefined', // default false
  ciMode: typeof process.env['CI_MODE'] !== 'undefined',
  templatesCache: typeof process.env['CI_MODE'] === 'undefined', // default true
  requiredTestCoverage: 80,

  printFlags: function () {
    printLine('PRODUCTION',this.production)
    printLine('CI_MODE', this.ciMode)
    printLine('TEMPLATE_CACHE', this.templatesCache)
    printLine('REQUIRED_TEST_COVERAGE', this.requiredTestCoverage)
  }
}
