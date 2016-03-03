/**
 * Created by songshuang on 16/2/29.
 */

var mysql = require('mysql');
var log = require('log4js').getLogger();
var CONFIG = require('./defaultConfig').MYSQL;

var connection = mysql.createConnection({
    host     : CONFIG.host,
    user     : CONFIG.user,
    password : CONFIG.password,
    database : CONFIG.database
});

log.info('连接数据库: ' + connection.host);

connection.connect();

module.exports = connection;