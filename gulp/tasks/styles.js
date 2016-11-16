var gulp = require('gulp')
var path = require('path')
var gulpif = require('gulp-if')
var less = require('gulp-less')
var plumber = require('gulp-plumber')
var notify = require('gulp-notify')
var bs = require('browser-sync')

var consts = require('../const')

module.exports.default = function() {
    return gulp.src(consts.ENTRIES.styles)
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest(path.join(consts.DIST_PATH, 'css')))
        .pipe(notify({ message: 'styles complete' }))
        .pipe(bs.reload({
            stream: true
        }))
}
