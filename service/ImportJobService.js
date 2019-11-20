'use strict';


/**
 * Creates a ImportJob
 * This operation creates a ImportJob entity.
 *
 * body ImportJob_Create The ImportJob to be created
 * returns ImportJob
 **/
exports.createImportJob = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "path" : "path",
  "@baseType" : "@baseType",
  "@type" : "@type",
  "completionDate" : "2000-01-23T04:56:07.000+00:00",
  "errorLog" : "errorLog",
  "id" : "id",
  "href" : "href",
  "creationDate" : "2000-01-23T04:56:07.000+00:00",
  "@schemaLocation" : "http://example.com/aeiou",
  "contentType" : "contentType",
  "url" : "url",
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
 * Deletes a ImportJob
 * This operation deletes a ImportJob entity.
 *
 * id String Identifier of the ImportJob
 * no response value expected for this operation
 **/
exports.deleteImportJob = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * List or find ImportJob objects
 * This operation list or find ImportJob entities
 *
 * fields String Comma-separated properties to be provided in response (optional)
 * offset Integer Requested index for start of resources to be provided in response (optional)
 * limit Integer Requested number of resources to be provided in response (optional)
 * returns List
 **/
exports.listImportJob = function(fields,offset,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "path" : "path",
  "@baseType" : "@baseType",
  "@type" : "@type",
  "completionDate" : "2000-01-23T04:56:07.000+00:00",
  "errorLog" : "errorLog",
  "id" : "id",
  "href" : "href",
  "creationDate" : "2000-01-23T04:56:07.000+00:00",
  "@schemaLocation" : "http://example.com/aeiou",
  "contentType" : "contentType",
  "url" : "url",
  "status" : "Not Started"
}, {
  "path" : "path",
  "@baseType" : "@baseType",
  "@type" : "@type",
  "completionDate" : "2000-01-23T04:56:07.000+00:00",
  "errorLog" : "errorLog",
  "id" : "id",
  "href" : "href",
  "creationDate" : "2000-01-23T04:56:07.000+00:00",
  "@schemaLocation" : "http://example.com/aeiou",
  "contentType" : "contentType",
  "url" : "url",
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
 * Retrieves a ImportJob by ID
 * This operation retrieves a ImportJob entity. Attribute selection is enabled for all first level attributes.
 *
 * id String Identifier of the ImportJob
 * fields String Comma-separated properties to provide in response (optional)
 * returns ImportJob
 **/
exports.retrieveImportJob = function(id,fields) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "path" : "path",
  "@baseType" : "@baseType",
  "@type" : "@type",
  "completionDate" : "2000-01-23T04:56:07.000+00:00",
  "errorLog" : "errorLog",
  "id" : "id",
  "href" : "href",
  "creationDate" : "2000-01-23T04:56:07.000+00:00",
  "@schemaLocation" : "http://example.com/aeiou",
  "contentType" : "contentType",
  "url" : "url",
  "status" : "Not Started"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

