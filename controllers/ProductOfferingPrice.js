'use strict';

var utils = require('../utils/writer.js');
var ProductOfferingPrice = require('../service/ProductOfferingPriceService');

module.exports.createProductOfferingPrice = function createProductOfferingPrice (req, res, next) {
  var body = req.swagger.params['body'].value;
  ProductOfferingPrice.createProductOfferingPrice(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteProductOfferingPrice = function deleteProductOfferingPrice (req, res, next) {
  var id = req.swagger.params['id'].value;
  ProductOfferingPrice.deleteProductOfferingPrice(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listProductOfferingPrice = function listProductOfferingPrice (req, res, next) {
  var fields = req.swagger.params['fields'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  ProductOfferingPrice.listProductOfferingPrice(fields,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patchProductOfferingPrice = function patchProductOfferingPrice (req, res, next) {
  var body = req.swagger.params['body'].value;
  var id = req.swagger.params['id'].value;
  ProductOfferingPrice.patchProductOfferingPrice(body,id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveProductOfferingPrice = function retrieveProductOfferingPrice (req, res, next) {
  var id = req.swagger.params['id'].value;
  var fields = req.swagger.params['fields'].value;
  ProductOfferingPrice.retrieveProductOfferingPrice(id,fields)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
