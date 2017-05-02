var gulp = require('gulp')
var path = require('path')
var gulpif = require('gulp-if')
var uglify = require('gulp-uglify')
var rigger = require('gulp-rigger')
var plumber = require('gulp-plumber')
var notify = require('gulp-notify')
var bs = require('browser-sync')

var consts = require('../const')

module.exports = function () {
  gulp.src(consts.ENTRIES.js)
    .pipe(plumber({
      errorHandler: function (error) {
        notify().write({ title: 'Gulp', message: 'JS error' })
        console.log(error)
        this.emit('end')
      }
    }))
    .pipe(rigger())
    .pipe(gulpif(!consts.DEV, uglify()))
    .pipe(gulp.dest(path.join(consts.DIST_PATH, 'js')))
    .pipe(bs.reload({ stream: true }))
}
