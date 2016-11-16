var gulp = require('gulp')
var bs = require('browser-sync')

var consts = require('../const')

module.exports.default = function() {
    bs.init({
        proxy: consts.PROXY,
        logPrefix: consts.PROJECT_NAME,
        port: 9000
    })
}
