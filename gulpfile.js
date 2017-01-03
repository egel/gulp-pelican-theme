const fs = require('fs')
const chalk = require('chalk')
const path = require('path')

try {
  fs.readdirSync(path.join(__dirname, './src/')).forEach(function (val) { // due to using file as symlink
    require(path.resolve(__dirname, './src/', val))
  })
  require(path.resolve(__dirname, './build-project.js')) // each project need a build configuration
} catch (e) {
  console.log(chalk.bgRed.white(e))
}