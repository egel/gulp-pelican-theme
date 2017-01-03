const buildConfig = require('../build.config.js')
const buildOptions = require('../parameters.js')

const addSrc = require('gulp-add-src')
const concat = require('gulp-concat')
const gulp = require('gulp')
const gulpif = require('gulp-if')
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const prettyError = require('gulp-prettyerror')

gulp.task('build-javascript', function () {
  return gulp.src(buildConfig.app_files.js_index)
    .pipe(addSrc.prepend(buildConfig.vendor_files.js_all))
    .pipe(prettyError())
    .pipe(gulpif(!buildOptions.production, sourcemaps.init()))
    .pipe(concat(buildConfig.output_js_filename + '.js')) // scripts
    .pipe(gulpif(buildOptions.production, uglify()))
    .pipe(gulpif(buildOptions.production, rename({
      extname: '.min.js'
    })))
    .pipe(gulpif(!buildOptions.production, sourcemaps.write('.')))
    .pipe(gulp.dest(buildConfig.output_js_path))
})
