'use strict'

const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const co = require('co');
const convert = require('koa-convert');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');
const helmet = require('koa-helmet');

const router = require('./app/routes');

// middlewares
app.use(convert(bodyparser));
app.use(helmet());
app.use(convert(json()));
app.use(convert(logger()));
app.use(require('koa-static')(__dirname + '/public'));

app.use(views(__dirname + '/app/views', {
  extension: 'pug'
}));

app.use(router.routes(), router.allowedMethods());

app.on('error', function(err, ctx){
  console.log(err)
  logger.error('server error', err, ctx);
});


module.exports = app
