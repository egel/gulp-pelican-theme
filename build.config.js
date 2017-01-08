/**
 * This file contains all configuration for the build process.
 */
const path = require('path')
const pkg = require(path.resolve(__dirname, '../package.json'))
const parameters = require(path.resolve(__dirname, './parameters.js'))

parameters.printFlags()

const VENDOR_PATH = path.resolve('./node_modules/')
const PROJECT_SRC_DIR = 'src'
const PROJECT_BUILD_DIR = 'build' // compiled files
const PROJECT_BIN_DIR = 'bin' // for compiled archives
const OUTPUT_ASSETS_PATH = path.resolve('./', PROJECT_BUILD_DIR)

/**
 * Flavor for the theme.
 * Actually it's a directory into src/themes/<flavor> that you can make more
 * sub-themes.
 */
const PROJECT_THEME_NAME = 'official'
const PROJECT_THEME_PATH = path.resolve('./', PROJECT_SRC_DIR, './themes', PROJECT_THEME_NAME)
const OUTPUT_ZIP_FILENAME = pkg.name + '_' + PROJECT_THEME_NAME

module.exports = {
  project_src_dir: PROJECT_SRC_DIR,
  project_build_dir: PROJECT_BUILD_DIR,
  project_bin_dir: PROJECT_BIN_DIR,
  project_theme_name: PROJECT_THEME_NAME,
  project_theme_path: PROJECT_THEME_PATH,

  output_assets_path: OUTPUT_ASSETS_PATH,
  output_assets_fonts_path: path.resolve(OUTPUT_ASSETS_PATH, './static/fonts/'),
  output_assets_plugins_path: path.resolve(OUTPUT_ASSETS_PATH, './static/plugins/'),

  output_template_path: path.resolve('./', PROJECT_BUILD_DIR, './templates/'),
  output_css_path: path.resolve('./', PROJECT_BUILD_DIR, './static/css/'),
  output_css_filename: pkg.name + '-' + PROJECT_THEME_NAME + '-v' + pkg.version,
  output_js_path: path.resolve('./', PROJECT_BUILD_DIR, './static/js/'),
  output_js_filename: pkg.name + '-v' + pkg.version,

  output_zip_filename: OUTPUT_ZIP_FILENAME,

  additonal_plugins: {
    git_last_commit: {
      log_cmd: 'git log --pretty=format:"%H - %an, %ad : %s" -1',
      output_filename: 'git-last-commit',
      output_path: path.resolve('./', PROJECT_BUILD_DIR)
    }
  },

  app_files: {
    unitjs_all: [
      path.resolve('./gulpfile.js'),
      path.resolve('./build.config.js'),
      path.resolve('./gulp-src/**/*.js')
    ],
    js_index: path.resolve('./', PROJECT_SRC_DIR, './js/main.js'),
    js_all: [
      path.resolve('./', PROJECT_SRC_DIR, './js/**/*.js'),
      '!' + path.resolve('./', PROJECT_SRC_DIR, './js/**/*.spec.js')
    ],
    assets_all: [
      path.resolve('./', PROJECT_THEME_PATH, './assets/**/*') // fixme
    ],
    sass_index: path.resolve('./', PROJECT_THEME_PATH, './stylesheets/index.scss'),
    sass_all: [
      path.resolve('./', PROJECT_THEME_PATH, './stylesheets/**/*.scss')
    ],
    html_files: [
      path.resolve('./', PROJECT_SRC_DIR, './framework/html/**')
    ],
    used_plugins: [
      path.resolve('./', PROJECT_SRC_DIR, './framework/plugins/tipuesearch/**')
    ]
  },

  vendor_files: {
    js_all: [
      'node_modules/jquery/dist/jquery.js',
      'node_modules/jquery.easing/jquery.easing.js',
      'node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
      'node_modules/anchor-js/anchor.js'
    ],
    css_all: [
    ],
    fonts_all: [
      path.resolve(VENDOR_PATH, './bootstrap-sass/assets/fonts/bootstrap/*'),
      path.resolve(VENDOR_PATH, './font-awesome/fonts/*')
    ]
  }
}
