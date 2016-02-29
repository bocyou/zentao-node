/**
 * Created by songshuang on 16/2/26.
 */

var log4js = require('log4js');
var path = require('path');

log4js.configure(path.resolve(__dirname + '/log4js-config.json'), 'utf-8');

module.exports = log4js;