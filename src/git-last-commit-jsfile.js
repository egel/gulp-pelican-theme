const buildConfig = require('../build.config.js')

const del = require('del')
const exec = require('child_process').exec
const fs = require('fs')
const gulp = require('gulp')
const mkdirp = require('mkdirp')

gulp.task('git-last-commit-jsfile', function (next) {
  return exec(buildConfig.additonal_plugins.git_last_commit.log_cmd, function (err, stdout, stderr) {
    const fileMsg = 'const gitLastCommit = "' + stdout + '"'
    const filePath = buildConfig.additonal_plugins.git_last_commit.output_path + '/' + buildConfig.additonal_plugins.git_last_commit.output_filename + '.js'
    mkdirp(buildConfig.additonal_plugins.git_last_commit.output_path)
    fs.writeFile(filePath, fileMsg, 'utf8', next)
  })
})

