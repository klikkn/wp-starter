var gulp = require('gulp')
var path = require('path')
var gulpif = require('gulp-if')
var stylus = require('gulp-stylus')
var plumber = require('gulp-plumber')
var notify = require('gulp-notify')
var bs = require('browser-sync')

var consts = require('../const')

module.exports = function () {
  return gulp.src(consts.ENTRIES.style)
    .pipe(plumber({
      errorHandler: function (error) {
        notify().write({ title: 'Gulp', message: 'Style error' })
        console.log(error)
        this.emit('end')
      }
    }))
    .pipe(stylus({ compress: !consts.DEV, 'include css': true }))
    .pipe(gulp.dest(path.join(consts.DIST_PATH, 'css')))
    .pipe(bs.reload({ stream: true }))
}
