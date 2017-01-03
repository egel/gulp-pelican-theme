const gulp  = require('gulp');
const chalk = require('chalk');

const namespace = 'PELICAN-TEMPLATE-GULP'
const sGulp = '$ gulp'

gulp.task('help', function () {
  console.log(chalk.yellow('\n' + namespace + '\n' + 'A collation of GULP tasks for building pelican theme.') + '\n')
  console.log(chalk.bgGreen.white('TASKS') + '\n')
  console.log(sGulp + chalk.green(' build') + '\n\t' + 'This task is compiling whole project in development mode without minified files' + '\n')
  console.log(sGulp + chalk.green(' watch') + '\n\t' + 'This task constantly update build directory if some files will change' + '\n')
  console.log(sGulp + chalk.green(' production') + ' [' + chalk.magenta('--no-uglify') + ']' + '\n\t' + 'Sets up project for production environment.' + '\n')
  console.log(sGulp + chalk.green(' ci [, continuous-integration]') + '\n\t' + 'Sets up project to test minimal requirements for continuous integration. It runs normal build with `ci mode` and if any of requirements (like related modules, unit tests, minimal test coverage) will fail, the whole build also fail.' + '\n')

  console.log(chalk.bgMagenta.white('FLAGS') + '\n')
  console.log(chalk.magenta('--no-tests'), '- turns off tests'+ '\n')
  console.log(chalk.magenta('--no-uglify'), '- turns off uglifing (js) files. This flag can save some time for build' + '\n')
});
