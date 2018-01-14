"use strict";

const location = require('../models').location;

exports.list = function (req, res) {
    location.findAll().then(location => {
    res.jsonp(location);
  });
};

exports.create = function (req, res) {
  res.jsonp(location.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  location.findById(id).then(location => {
    res.jsonp(location);
  });
};

exports.update = function (req, res) {
  let id = req.params.id;
  location.findById(id).then(location => {
    location.update(req.body);
  });
  res.jsonp(location);
};

exports.delete = function (req, res) {
  let id = req.params.id;
  location.findById(req.params.id)
    .then(location => {
      if (!location) {
        return res.status(400).send({
          message: 'Location Not Found',
        });
      }
      return location
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};