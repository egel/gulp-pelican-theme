const buildConfig = require('../build.config.js')

const path = require('path')
const gulp = require('gulp')
const prettyError = require('gulp-prettyerror')
const zip = require('gulp-zip')

gulp.task('make-archive-file', function () {
  return gulp.src(path.resolve(buildConfig.project_build_dir, './**/*'))
    .pipe(prettyError())
    .pipe(zip(buildConfig.output_zip_filename + '.zip'))
    .pipe(gulp.dest(buildConfig.project_bin_dir))
})
