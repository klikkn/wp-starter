var gulp = require('gulp');
var path = require('path');
var notify = require('gulp-notify');
var bs = require('browser-sync');

var consts = require('../const');

module.exports.default = function() {
    gulp.src(consts.ENTRIES.assets)
        .pipe(gulp.dest(consts.DIST_PATH))
        .pipe(notify({ message: 'assets complete' }))
        .pipe(bs.reload({
            stream: true
        }))
}
