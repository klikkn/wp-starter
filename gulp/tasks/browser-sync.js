import gulp from 'gulp'
import bs from 'browser-sync'

import { DIST_PATH, PROJECT_NAME, PROXY } from '../const'

export default () => {
    bs.init({
        proxy: PROXY,
        logPrefix: PROJECT_NAME,
        port: 9000
    })
}
