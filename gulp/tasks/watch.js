import gulp from 'gulp'

import { WATCHERS } from '../const'

export default () => {
    gulp.watch(WATCHERS.html, ['html'])
    gulp.watch(WATCHERS.assets, ['assets'])
    gulp.watch(WATCHERS.styles, ['styles'])
}
