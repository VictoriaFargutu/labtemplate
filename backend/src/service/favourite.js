"use strict";

const favourite = require('../models').favourite;

exports.list = function (req, res) {
    favourite.findAll().then(favourite => {
    res.jsonp(favourite);
  });
};

exports.create = function (req, res) {
  res.jsonp(favourite.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  favourite.findById(id).then(favourite => {
    res.jsonp(favourite);
  });
};

exports.update = function (req, res) {
  let id = req.params.id;
  favourite.findById(id).then(favourite => {
    favourite.update(req.body);
  });
  res.jsonp(favourite);
};

exports.delete = function (req, res) {
  let id = req.params.id;
  favourite.findById(req.params.id)
    .then(favourite => {
      if (!favourite) {
        return res.status(400).send({
          message: 'Favourite Not Found',
        });
      }
      return favourite
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};