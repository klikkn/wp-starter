import gulp from 'gulp'
import path from 'path'
import gulpif from 'gulp-if'
import stylus from 'gulp-stylus'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import bs from 'browser-sync'

import { DEV, DIST_PATH, ENTRIES } from '../const'

export default () => {
    return gulp.src(ENTRIES.styles)
        .pipe(plumber())
        .pipe(stylus({ compress: !DEV, 'include css': true }))
        .pipe(gulp.dest(path.join(DIST_PATH, 'css')))
        .pipe(notify({ message: 'styles complete' }))
        .pipe(bs.reload({
            stream: true
        }))
}
