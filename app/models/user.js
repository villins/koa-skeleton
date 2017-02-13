'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
  userName: { type: String },
  phone: { type: String },
  realName: { type: String },
  password: { type: String },
  company: { type: String },
  accountType: { type: String },
  realName: { type: String },
  createdAt: { type: Number, default: new Date().getTime() },
  updatedAt: { type: Number, default: new Date().getTime() }
});

mongoose.model('User', UserSchema);
