'use strict'

const User = require("../models").User;

module.exports.list = async (ctx) => {
  let users = await User.find({});

  ctx.body = users;
}

module.exports.new = async (ctx) => {
  let user = new User({
    userName: ctx.query.name,
    phone: '13800138000',
    realName: 'Villins'
  });

  user = await user.save();

  ctx.body = { user: user };
}
