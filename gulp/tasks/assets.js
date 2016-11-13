import gulp from 'gulp'
import path from 'path'
import notify from 'gulp-notify'
import bs from 'browser-sync'

import { DIST_PATH, ENTRIES } from '../const'

export default () => {
    gulp.src(ENTRIES.assets)
        .pipe(gulp.dest(DIST_PATH))
        .pipe(notify({ message: 'assets complete' }))
        .pipe(bs.reload({
            stream: true
        }))
}
