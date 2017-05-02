var gulp = require('gulp')
var changed = require('gulp-changed')
var notify = require('gulp-notify')
var bs = require('browser-sync')

var consts = require('../const')

module.exports = function () {
  return gulp.src(consts.ENTRIES.php)
  	.pipe(changed(consts.DIST_PATH))
    .pipe(gulp.dest(consts.DIST_PATH))
    .pipe(bs.reload({ stream: true }))
}
