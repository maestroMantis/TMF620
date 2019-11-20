'use strict';

var utils = require('../utils/writer.js');
var ExportJob = require('../service/ExportJobService');

module.exports.createExportJob = function createExportJob (req, res, next) {
  var body = req.swagger.params['body'].value;
  ExportJob.createExportJob(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteExportJob = function deleteExportJob (req, res, next) {
  var id = req.swagger.params['id'].value;
  ExportJob.deleteExportJob(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listExportJob = function listExportJob (req, res, next) {
  var fields = req.swagger.params['fields'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  ExportJob.listExportJob(fields,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveExportJob = function retrieveExportJob (req, res, next) {
  var id = req.swagger.params['id'].value;
  var fields = req.swagger.params['fields'].value;
  ExportJob.retrieveExportJob(id,fields)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
