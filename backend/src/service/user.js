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

exports.createUser = function (req, res) {
  console.log("Voi crea un user");
  let username = req.body.username;
  let password = req.body.password;
  //let userType = req.body.userType;
  console.log(req.body);
  //res.jsonp(user.create(req.body));
  // user.create(req.body.username);
  // return user;
   
    //res.jsonp(user.create(req.body.username,req.body.password,req.body.userType));

    user.create({
      attributes:[ 'username', 'password', 'userType',],
      username: username, password: password, userType: "user"}).then(user => {
      console.log(user);
      
      res.jsonp(user);
    });

    

   

};



