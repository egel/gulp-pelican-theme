const buildConfig = require('../build.config.js')

const copy = require('gulp-copy')
const gulp = require('gulp')
const prettyError = require('gulp-prettyerror')

gulp.task('copy-fonts', function() {
  return gulp.src(buildConfig.vendor_files.fonts_all)
    .pipe(gulp.dest(buildConfig.output_assets_fonts_path))
})

gulp.task('copy-html', function() {
  return gulp.src(buildConfig.app_files.html_files)
    .pipe(gulp.dest(buildConfig.output_template_path))
})

gulp.task('copy-used_plugins', function() {
  return gulp.src(buildConfig.app_files.used_plugins)
    .pipe(gulp.dest(buildConfig.output_assets_plugins_path))
})
