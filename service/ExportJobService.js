'use strict';


/**
 * Creates a ExportJob
 * This operation creates a ExportJob entity.
 *
 * body ExportJob_Create The ExportJob to be created
 * returns ExportJob
 **/
exports.createExportJob = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "@type" : "@type",
  "query" : "query",
  "errorLog" : "errorLog",
  "creationDate" : "2000-01-23T04:56:07.000+00:00",
  "url" : "url",
  "path" : "path",
  "@baseType" : "@baseType",
  "completionDate" : "2000-01-23T04:56:07.000+00:00",
  "id" : "id",
  "href" : "href",
  "@schemaLocation" : "http://example.com/aeiou",
  "contentType" : "contentType",
  "status" : "Not Started"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deletes a ExportJob
 * This operation deletes a ExportJob entity.
 *
 * id String Identifier of the ExportJob
 * no response value expected for this operation
 **/
exports.deleteExportJob = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * List or find ExportJob objects
 * This operation list or find ExportJob entities
 *
 * fields String Comma-separated properties to be provided in response (optional)
 * offset Integer Requested index for start of resources to be provided in response (optional)
 * limit Integer Requested number of resources to be provided in response (optional)
 * returns List
 **/
exports.listExportJob = function(fields,offset,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "@type" : "@type",
  "query" : "query",
  "errorLog" : "errorLog",
  "creationDate" : "2000-01-23T04:56:07.000+00:00",
  "url" : "url",
  "path" : "path",
  "@baseType" : "@baseType",
  "completionDate" : "2000-01-23T04:56:07.000+00:00",
  "id" : "id",
  "href" : "href",
  "@schemaLocation" : "http://example.com/aeiou",
  "contentType" : "contentType",
  "status" : "Not Started"
}, {
  "@type" : "@type",
  "query" : "query",
  "errorLog" : "errorLog",
  "creationDate" : "2000-01-23T04:56:07.000+00:00",
  "url" : "url",
  "path" : "path",
  "@baseType" : "@baseType",
  "completionDate" : "2000-01-23T04:56:07.000+00:00",
  "id" : "id",
  "href" : "href",
  "@schemaLocation" : "http://example.com/aeiou",
  "contentType" : "contentType",
  "status" : "Not Started"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves a ExportJob by ID
 * This operation retrieves a ExportJob entity. Attribute selection is enabled for all first level attributes.
 *
 * id String Identifier of the ExportJob
 * fields String Comma-separated properties to provide in response (optional)
 * returns ExportJob
 **/
exports.retrieveExportJob = function(id,fields) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "@type" : "@type",
  "query" : "query",
  "errorLog" : "errorLog",
  "creationDate" : "2000-01-23T04:56:07.000+00:00",
  "url" : "url",
  "path" : "path",
  "@baseType" : "@baseType",
  "completionDate" : "2000-01-23T04:56:07.000+00:00",
  "id" : "id",
  "href" : "href",
  "@schemaLocation" : "http://example.com/aeiou",
  "contentType" : "contentType",
  "status" : "Not Started"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

