"use strict";

const continent = require('../models').continent;

exports.list = function (req, res) {
  continent.findAll().then(continent => {
    res.jsonp(continent);
  });
};

exports.create = function (req, res) {
  res.jsonp(continent.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  continent.findById(id).then(continent => {
    res.jsonp(continent);
  });
};

exports.update = function (req, res) {
  let id = req.params.id;
  continent.findById(id).then(continent => {
    continent.update(req.body);
  });
  res.jsonp(continent);
};

exports.delete = function (req, res) {
  let id = req.params.id;
  continent.findById(req.params.id)
    .then(continent => {
      if (!continent) {
        return res.status(400).send({
          message: 'Continent Not Found',
        });
      }
      return continent
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};