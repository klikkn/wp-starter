/* def: path constants */
module.exports.PROJECT_NAME = 'vigenere-cipher'
module.exports.PROXY = 'wp.dev'
module.exports.DIST_PATH = '../../local/wp-custom-pack/wp-content/themes/wp-custom'

/* def: tasks entries */
module.exports.ENTRIES = {
    js: './src/js/bootstrap.js',
    assets: './src/assets/**/*',
    template: './src/theme/**/*',
    styles: './src/style/style.less'
}

/* def: watch entries */
module.exports.WATCHERS = {
    assets: './src/assets/**/*',
    template: './src/**/*.php',
    styles: './src/**/*.less',
    js: './src/**/*.js',
    json: './src/**/*.json'
}

/* def: environment constants */
const ENV = process.env.NODE_ENV
module.exports.ENV = ENV
module.exports.WATCH = (ENV !== 'production')
module.exports.DEV = ENV !== 'production'