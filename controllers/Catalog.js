'use strict';

var utils = require('../utils/writer.js');
var Catalog = require('../service/CatalogService');

module.exports.createCatalog = function createCatalog (req, res, next) {
  var body = req.swagger.params['body'].value;
  Catalog.createCatalog(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCatalog = function deleteCatalog (req, res, next) {
  var id = req.swagger.params['id'].value;
  Catalog.deleteCatalog(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listCatalog = function listCatalog (req, res, next) {
  var fields = req.swagger.params['fields'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  Catalog.listCatalog(fields,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patchCatalog = function patchCatalog (req, res, next) {
  var body = req.swagger.params['body'].value;
  var id = req.swagger.params['id'].value;
  Catalog.patchCatalog(body,id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveCatalog = function retrieveCatalog (req, res, next) {
  var id = req.swagger.params['id'].value;
  var fields = req.swagger.params['fields'].value;
  Catalog.retrieveCatalog(id,fields)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
