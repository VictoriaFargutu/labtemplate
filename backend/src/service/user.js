"use strict";

const user = require('../models').user;

exports.list = function (req, res) {
  user.findAll().then(user => {
    res.jsonp(user);
  });
};

exports.create = function (req, res) {
  res.jsonp(user.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  user.findById(id).then(user => {
    res.jsonp(user);
  });
};

exports.findByUsernameAndPassword = function (req, res) {
  let username = req.params.username;
  let password = req.params.password;
  user.findOne({
    attributes:['id', 'username', 'password', 'userType'],
     where: { username: username, password: password } }).then(user => {
    if (!user) {
      return res.status(400).send({
        message: 'User Not Found',
      });
    }
      res.jsonp(user);
  });
};
