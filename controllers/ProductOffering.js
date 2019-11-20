'use strict';

var utils = require('../utils/writer.js');
var ProductOffering = require('../service/ProductOfferingService');

module.exports.createProductOffering = function createProductOffering (req, res, next) {
  var body = req.swagger.params['body'].value;
  ProductOffering.createProductOffering(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteProductOffering = function deleteProductOffering (req, res, next) {
  var id = req.swagger.params['id'].value;
  ProductOffering.deleteProductOffering(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listProductOffering = function listProductOffering (req, res, next) {
  var fields = req.swagger.params['fields'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  ProductOffering.listProductOffering(fields,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patchProductOffering = function patchProductOffering (req, res, next) {
  var body = req.swagger.params['body'].value;
  var id = req.swagger.params['id'].value;
  ProductOffering.patchProductOffering(body,id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveProductOffering = function retrieveProductOffering (req, res, next) {
  var id = req.swagger.params['id'].value;
  var fields = req.swagger.params['fields'].value;
  ProductOffering.retrieveProductOffering(id,fields)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
