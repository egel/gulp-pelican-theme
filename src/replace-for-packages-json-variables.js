const pkg = require('../../package.json')
const buildConfig = require('../build.config.js')
const parameters = require('../parameters.js')

const path = require('path')
const gulp = require('gulp')
const gulpIf = require('gulp-if')
const prettyError = require('gulp-prettyerror')
const replace = require('gulp-replace')

gulp.task('replace-for-packages-json-variables', function () {
  var today = new Date()
  var cssFILE = (parameters.production) ? buildConfig.output_css_filename + ".min.css" : buildConfig.output_css_filename + ".css"
  var jsFILE = (parameters.production) ? buildConfig.output_js_filename + ".min.js" : buildConfig.output_js_filename + ".js"
  return gulp.src([
    path.resolve(buildConfig.project_build_dir, './**/*.html'),
  ])
  .pipe(prettyError())
  .pipe(replace(/@googleMapApiKey@/g, buildConfig.googleMapsApiKey))
  .pipe(replace(/@todayCurrentDate@/g, today.toUTCString()))
  .pipe(replace(/@name@/g, pkg.name))
  .pipe(replace(/@fullName@/g, pkg.fullName))
  .pipe(replace(/@authorName@/g, pkg.author.name))
  .pipe(replace(/@authorEmail@/g, pkg.author.email))
  .pipe(replace(/@authorWebpage@/g, pkg.author.webpage))
  .pipe(replace(/@license@/g, pkg.license))
  .pipe(replace(/@version@/g, pkg.version))
  .pipe(replace(/@generatedCssFilename@/g, cssFILE))
  .pipe(replace(/@generatedJsFilename@/g, jsFILE))
  .pipe(gulp.dest(path.resolve(buildConfig.project_build_dir)))
})
