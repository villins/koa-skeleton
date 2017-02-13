'use strict'

const mongoose = require('mongoose');
const config = require('config');

mongoose.connect(config.get('mongodb.url'), {
    server: { poolSize: config.get('mongodb.poolSize') }
  }, function(err) {
    if(err) {
      process.exit(1);
    } else {
      console.log("connect database successfully!");
    }
  }
);

/* example
 * require('./user.js');
 * module.exports.User = mongoose.model('User');
 */
require('./user.js');
module.exports.User = mongoose.model('User');
