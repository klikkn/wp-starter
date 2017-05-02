var gulp = require('gulp')

var consts = require('../const')

module.exports = function () {
  gulp.watch(consts.WATCHERS.php, ['php'])
  gulp.watch(consts.WATCHERS.assets, ['assets'])
  gulp.watch(consts.WATCHERS.styles, ['styles'])
  gulp.watch(consts.WATCHERS.js, ['js'])
  gulp.watch(consts.WATCHERS.json, ['js'])
}
