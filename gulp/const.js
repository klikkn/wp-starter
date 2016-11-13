/* def: path constants */
export const PROJECT_NAME = 'wp-starter-kit'
export const PROXY = 'wp.dev'
export const DIST_PATH = '../../local/wp-custom-pack/wp-content/themes/wp-custom'

/* def: tasks entries */
export const ENTRIES = {
    app: 'src/js/bootstrap.js',
    assets: 'src/assets/**/*',
    template: 'src/theme/**/*',
    styles: 'src/style/style.styl'
}

/* def: watch entries */
export const WATCHERS = {
    assets: 'src/assets/**/*',
    html: 'src/**/*.html',
    styles: 'src/**/*.styl'
}

/* def: environment constants */
export const ENV = process.env.NODE_ENV
export const WATCH = (ENV !== 'production')
export const DEV = ENV !== 'production'
