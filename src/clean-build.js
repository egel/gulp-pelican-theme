const buildConfig = require('../build.config.js')

const chalk = require('chalk')
const del = require('del')
const gulp = require('gulp')

const taskNamespace = '[GULP/clean]'

gulp.task('clean-all', function () {
  return del([
    buildConfig.project_build_dir,
    buildConfig.project_bin_dir
  ], {
    force: true
  }).then(function (paths) {
    console.log(chalk.yellow(taskNamespace), 'Delete path:', chalk.magenta(paths.join('\n')))
  })
})
