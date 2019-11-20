'use strict';

var utils = require('../utils/writer.js');
var ProductSpecification = require('../service/ProductSpecificationService');

module.exports.createProductSpecification = function createProductSpecification (req, res, next) {
  var body = req.swagger.params['body'].value;
  ProductSpecification.createProductSpecification(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteProductSpecification = function deleteProductSpecification (req, res, next) {
  var id = req.swagger.params['id'].value;
  ProductSpecification.deleteProductSpecification(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listProductSpecification = function listProductSpecification (req, res, next) {
  var fields = req.swagger.params['fields'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  ProductSpecification.listProductSpecification(fields,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patchProductSpecification = function patchProductSpecification (req, res, next) {
  var body = req.swagger.params['body'].value;
  var id = req.swagger.params['id'].value;
  ProductSpecification.patchProductSpecification(body,id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveProductSpecification = function retrieveProductSpecification (req, res, next) {
  var id = req.swagger.params['id'].value;
  var fields = req.swagger.params['fields'].value;
  ProductSpecification.retrieveProductSpecification(id,fields)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
