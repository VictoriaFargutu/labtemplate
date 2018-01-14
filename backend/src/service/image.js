"use strict";

const image = require('../models').image;

exports.list = function (req, res) {
    image.findAll().then(image => {
    res.jsonp(image);
  });
};

exports.create = function (req, res) {
  res.jsonp(image.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  image.findById(id).then(image => {
    res.jsonp(image);
  });
};

exports.update = function (req, res) {
  let id = req.params.id;
  image.findById(id).then(image => {
    image.update(req.body);
  });
  res.jsonp(image);
};

exports.delete = function (req, res) {
  let id = req.params.id;
  image.findById(req.params.id)
    .then(image => {
      if (!image) {
        return res.status(400).send({
          message: 'Image Not Found',
        });
      }
      return image
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};