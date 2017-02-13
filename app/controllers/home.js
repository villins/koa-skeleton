'use strict'

const config = require('config');

module.exports.list = async (ctx, next) => {
  console.log("hello");
  await ctx.render('index', { message: config.get('appName') });
}
