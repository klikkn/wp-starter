import gulp from 'gulp'
import rigger from 'gulp-rigger'
import notify from 'gulp-notify'
import bs from 'browser-sync'

import { DIST_PATH, ENTRIES} from '../const'

export default () => {
    return gulp.src(ENTRIES.template)
        .pipe(gulp.dest(DIST_PATH))
        .pipe(notify({ message: 'template complete' }))
        .pipe(bs.reload({
            stream: true
        }))
}
