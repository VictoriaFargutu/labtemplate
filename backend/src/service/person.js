"use strict";

const person = require('../models').person;

exports.list = function (req, res) {
  person.findAll().then(person => {
    res.jsonp(person);
  });
};

exports.create = function (req, res) {
  res.jsonp(person.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  person.findById(id).then(person => {
    res.jsonp(person);
  });
};

exports.update = function (req, res) {
  let id = req.params.id;
  person.findById(id).then(person => {
    person.update(req.body);
  });
  res.jsonp(person);
};

exports.delete = function (req, res) {
  let id = req.params.id;
  person.findById(req.params.id)
    .then(person => {
      if (!person) {
        return res.status(400).send({
          message: 'Person Not Found',
        });
      }
      return person
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};

exports.createPerson = function (req, res) {
  console.log("Voi crea un person");
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;
  console.log(req.body);
    //res.jsonp(user.create(req.params.firstName,req.params.lastName,req.params.email));
    person.create({
      attributes:[ 'firstName', 'lastName', 'email',],
      firstName: firstName, lastName: lastName, email: email}).then(person => {
      console.log(person);
      
      res.jsonp(person);
    });

};