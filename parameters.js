const chalk = require('chalk')

var printLine = function (flagName, value) {
  console.log(chalk.bgYellow.gray('['+flagName+']'), 'is set to:', chalk.yellow(value));
}

module.exports = {
  production: typeof process.env['PRODUCTION'] !== 'undefined', // default false
  ciMode: typeof process.env['CI_MODE'] !== 'undefined',
  templatesCache: typeof process.env['CI_MODE'] === 'undefined', // default true
  requiredTestCoverage: 80,

  // liveReload: typeof process.env['live-reload'] === 'undefined' ? true : argv['live-reload'],
  // liveReloadPort: typeof process.env['live-reload-port'] === 'undefined' ? 35729 : argv['live-reload-port'],
  // uniqeNames: typeof process.env['uniqe-names'] !== 'undefined',
  // serverPort: typeof process.env['server-port'] === 'undefined' ? 4242 : argv['server-port'],
  // test_dir: typeof process.env['test-dir'] === 'undefined' ? '/' :  argv['test-dir'] + '/',
  // tests: Boolean((typeof argv.tests === 'undefined') || (argv.tests === true)),
  // docs: Boolean((typeof argv.docs === 'undefined') || (argv.docs === true)),

  printFlags: function () {
    printLine('PRODUCTION',this.production);
    printLine('CI_MODE', this.ciMode);
    printLine('TEMPLATE_CACHE', this.templatesCache);
  }
}
