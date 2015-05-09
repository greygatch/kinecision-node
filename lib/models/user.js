'use strict';

var Mongoose = require('mongoose');

var userSchema = Mongoose.Schema({
  firebaseId: {type: String, required: true},
  createdAt : {type: Date, required: true, default: Date.now},
  name: {type: String},
  age: {type: number},
  email: {type: String}
});

var User = Mongoose.model('User', userSchema);
module.exports = User;
