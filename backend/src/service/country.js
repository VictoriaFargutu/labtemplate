"use strict";

const country = require('../models').country;

exports.list = function (req, res) {
    country.findAll().then(country => {
    res.jsonp(country);
  });
};

exports.create = function (req, res) {
  res.jsonp(country.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  country.findById(id).then(country => {
    res.jsonp(country);
  });
};

exports.update = function (req, res) {
  let id = req.params.id;
  country.findById(id).then(country => {
    country.update(req.body);
  });
  res.jsonp(country);
};

exports.delete = function (req, res) {
  let id = req.params.id;
  country.findById(req.params.id)
    .then(country => {
      if (!country) {
        return res.status(400).send({
          message: 'Country Not Found',
        });
      }
      return country
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};