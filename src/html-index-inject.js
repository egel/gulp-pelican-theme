const buildConfig = require('../build.config.js')

const gulp = require('gulp')
const inject = require('gulp-inject')
const series = require('stream-series')
const prettyError = require('gulp-prettyerror')

gulp.task('html-index-inject', function () {
  const appSrc = gulp.src(buildConfig.output_js_path + '/**/*.js', { read: false })
  const gitCommit = gulp.src(buildConfig.additonal_plugins.git_last_commit.output_path + '/' + buildConfig.additonal_plugins.git_last_commit.output_filename + '.js')
  const styles = gulp.src(buildConfig.output_css_path + '/**/*.css', { read: false })

  return gulp.src('src/index.php')
    .pipe(prettyError())
    .pipe(inject(series(appSrc, gitCommit, styles), {
      ignorePath: buildConfig.project_build_dir
    }))
    .pipe(gulp.dest(buildConfig.project_build_dir))
})
