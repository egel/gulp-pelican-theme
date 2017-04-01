const buildConfig = require('../build.config.js')

const chalk       = require('chalk')
const gulp        = require('gulp')
const runSequence = require('run-sequence')
const watch       = require('gulp-watch')

gulp.task('watchers', function() {
  // JS
  gulp.watch(buildConfig.app_files.js_all, function() {
    runSequence('build-javascript')
  })
  .on('change', function(e) {
    console.log(chalk.yellow('[JS] ' + chalk.yellow(e.path)))
  })
  .on('add', function(e) {
    setTimeout(function() {
      runSequence('html-injector')
    }, 500)
    console.log(chalk.yellow('[NEW JS FILE INJECTED] ' + chalk.yellow(e)))
  })

  // SASS
  gulp.watch(buildConfig.app_files.sass_all, function() {
    runSequence('build-sass')
  })
  .on('change', function(e) {
    console.log(chalk.yellow('[SASS] ' + chalk.yellow(e.path)))
  })

  // Framework HTML
  gulp.watch(buildConfig.app_files.html_files, function() {
    runSequence('copy-html')
  })
  .on('change', function(e) {
    runSequence('copy-html', 'html-index-inject', 'replace-for-packages-json-variables')
    console.log(chalk.yellow('[THEME HTML] ' + chalk.yellow(e.path)))
  })

  // Enabled plugins
  gulp.watch(buildConfig.app_files.used_plugins, function() {
    runSequence('copy-used_plugins')
  })
  .on('change', function(e) {
    runSequence('copy-used_plugins', 'html-index-inject', 'replace-for-packages-json-variables')
    console.log(chalk.yellow('[THEME PLUGINS] ' + chalk.yellow(e.path)))
  })
})

