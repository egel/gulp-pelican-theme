const buildConfig = require('../build.config.js')
const buildOptions = require('../parameters.js')

const addSrc = require('gulp-add-src')
const autoprefixer = require('gulp-autoprefixer')
const concat = require('gulp-concat')
const connect = require('gulp-connect')
const cssnano = require('gulp-cssnano')
const gulp = require('gulp')
const gulpif = require('gulp-if')
const prettyError = require('gulp-prettyerror')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')

gulp.task('build-sass', function () {
  return gulp.src(buildConfig.app_files.sass_index)
    .pipe(prettyError())
    .pipe(gulpif(buildOptions.production, sourcemaps.init()))
    .pipe(sass({
      errLogToConsole: true,
      indentedSyntax: true,
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(addSrc.prepend(buildConfig.vendor_files.css_all))
    .pipe(concat(buildConfig.output_css_filename + '.css'))  // fixme: -> styles
    .pipe(autoprefixer({
      browsers: ['last 3 versions']
    }))
    .pipe(gulpif(buildOptions.production, cssnano()))
    .pipe(gulpif(buildOptions.production, rename({
      extname: '.min.css'
    })))
    .pipe(gulpif(buildOptions.production, sourcemaps.write('.')))
    .pipe(gulp.dest(buildConfig.output_css_path))
    .pipe(connect.reload())
})
