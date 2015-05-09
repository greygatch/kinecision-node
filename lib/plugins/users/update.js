'use strict';

var User = require('../../models/user');
var Joi = require('joi');

exports.register = function(server, options, next){
  server.route({
    method: 'PUT',
    path: '/users',
    config: {
      description: 'Update a user',
      validate: {
        payload: {
          username: Joi.string().min(3).required(),
          avatar: Joi.string().uri().required()
        }
      },
      handler: function(request, reply){
        User.findByIdAndUpdate(request.auth.credentials._id, request.payload, function(err, user){
          if(err){
            return reply(JSON.stringify(err)).code(400);
          }else{
            return reply(user);
          }
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'users.update'
};
