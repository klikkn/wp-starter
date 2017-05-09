/* def: path constants */
module.exports.PROJECT_NAME = 'wp-starter'
module.exports.PROXY = 'http://localhost:8080'
module.exports.DIST_PATH = './dist/wordpress/wp-content/themes/custom'

/* def: tasks entries */
module.exports.ENTRIES = {
  js: './src/js/index.js',
  assets: './src/assets/*',
  php: './src/theme/**/*',
  style: './src/style/style.styl'
}

/* def: watch entries */
module.exports.WATCHERS = {
  assets: './src/assets/*',
  php: './src/**/*.php',
  style: './src/**/*.styl',
  js: './src/**/*.js',
  json: './src/**/*.json'
}
