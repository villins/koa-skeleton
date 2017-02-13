'use strict'

const router = require('koa-router')();
const users = require('./controllers/users');
const home = require('./controllers/home');
/*
 * add routers
 */
router.get('/', home.list);

router.get('/users', users.list);
router.get('/users/new', users.new);

module.exports = router
