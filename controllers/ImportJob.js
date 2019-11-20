'use strict';

var utils = require('../utils/writer.js');
var ImportJob = require('../service/ImportJobService');

module.exports.createImportJob = function createImportJob (req, res, next) {
  var body = req.swagger.params['body'].value;
  ImportJob.createImportJob(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteImportJob = function deleteImportJob (req, res, next) {
  var id = req.swagger.params['id'].value;
  ImportJob.deleteImportJob(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listImportJob = function listImportJob (req, res, next) {
  var fields = req.swagger.params['fields'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  ImportJob.listImportJob(fields,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveImportJob = function retrieveImportJob (req, res, next) {
  var id = req.swagger.params['id'].value;
  var fields = req.swagger.params['fields'].value;
  ImportJob.retrieveImportJob(id,fields)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
