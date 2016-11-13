import gulp from 'gulp'
import path from 'path'
import notify from 'gulp-notify'
import concat from 'gulp-concat'
import bowerFiles from 'main-bower-files'
import filter from 'gulp-filter'
import uglify from 'gulp-uglify'
import cssnano from 'gulp-cssnano'
import merge from 'merge-stream'

import { DEV, DIST_PATH } from '../const'

export default () => {
    let js = filter('**/*.js', { restore: true });
    let css = filter('**/*.css', { restore: true });
    
    return merge(
        gulp.src(bowerFiles())
        .pipe(js)
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path.join(DIST_PATH, 'js')))
        .pipe(notify({ message: 'bower-js complete' })),

        gulp.src(bowerFiles())
        .pipe(css)
        .pipe(cssnano())
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(path.join(DIST_PATH, 'css')))
        .pipe(notify({ message: 'bower-css complete' }))
    )
}
