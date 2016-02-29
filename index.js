/**
 * Created by songshuang on 16/2/26.
 */


'use strict';
var Config = require('./config');
var koa = require('koa');

var logger = require('log4js').getLogger();

var app = koa();

app.use(function *(next){
    var start = new Date;
    yield next;
    var ms = new Date - start;
    console.log('%s %s - %s', this.method, this.url, ms);
});

// response

app.use(function *(){
    this.body = 'Hello World';
});

app.listen(3000, function () {
    logger.info("start server");
});