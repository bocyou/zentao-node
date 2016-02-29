/**
 * Created by songshuang on 16/2/29.
 */

var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'me',
    password : 'secret',
    database : 'my_db'
});

connection.connect();

module.exports = connection;