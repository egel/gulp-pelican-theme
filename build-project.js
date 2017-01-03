const chalk = require('chalk')
const gulp = require('gulp')
const runSequence = require('run-sequence')

const taskNamespace = '[GULP/project-builder]'

const buildStages = {
  stage1: [
    'clean-all'
  ],
  stage2: [
    'git-last-commit-jsfile'
  ],
  stage3: [
    'copy-fonts',
    'copy-html',
    'copy-used_plugins',
    'build-javascript',
    'build-sass'
  ],
  stage4: [
    'html-index-inject',
    'replace-for-packages-json-variables'
  ],
  stage5: [
    'make-archive-file'
  ]
}

gulp.task('build', function (done) {
  var buildBegin = Date.now()
  runSequence(buildStages.stage1, buildStages.stage2, buildStages.stage3, buildStages.stage4, buildStages.stage5, function () {
    var diff = String((Date.now() - buildBegin) / 1000)
    console.log(
      chalk.yellow(taskNamespace),
      'Build has been completed successfully in', chalk.white.bgGreen(diff + chalk.white.bgGreen('s'))
    )
    return done()
  })
})

gulp.task('watch', function (done) {
  console.log(
    chalk.yellow(taskNamespace),
    'Starting watch and build'
  )
  runSequence('build', 'watchers', function () {
    console.log(
      chalk.yellow(taskNamespace),
      'Watchers had been turned on'
    )
    return done()
  })
})
