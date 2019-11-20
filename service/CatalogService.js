'use strict';


/**
 * Creates a Catalog
 * This operation creates a Catalog entity.
 *
 * body Catalog_Create The Catalog to be created
 * returns Catalog
 **/
exports.createCatalog = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "catalogType" : "catalogType",
  "lifecycleStatus" : "lifecycleStatus",
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "@type" : "@type",
  "description" : "description",
  "relatedParty" : [ {
    "@referredType" : "@referredType",
    "role" : "role",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "role" : "role",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "version" : "version",
  "@baseType" : "@baseType",
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : "id",
  "href" : "href",
  "category" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou",
    "version" : "version"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou",
    "version" : "version"
  } ],
  "@schemaLocation" : "http://example.com/aeiou"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deletes a Catalog
 * This operation deletes a Catalog entity.
 *
 * id String Identifier of the Catalog
 * no response value expected for this operation
 **/
exports.deleteCatalog = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * List or find Catalog objects
 * This operation list or find Catalog entities
 *
 * fields String Comma-separated properties to be provided in response (optional)
 * offset Integer Requested index for start of resources to be provided in response (optional)
 * limit Integer Requested number of resources to be provided in response (optional)
 * returns List
 **/
exports.listCatalog = function(fields,offset,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "catalogType" : "catalogType",
  "lifecycleStatus" : "lifecycleStatus",
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "@type" : "@type",
  "description" : "description",
  "relatedParty" : [ {
    "@referredType" : "@referredType",
    "role" : "role",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "role" : "role",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "version" : "version",
  "@baseType" : "@baseType",
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : "id",
  "href" : "href",
  "category" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou",
    "version" : "version"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou",
    "version" : "version"
  } ],
  "@schemaLocation" : "http://example.com/aeiou"
}, {
  "catalogType" : "catalogType",
  "lifecycleStatus" : "lifecycleStatus",
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "@type" : "@type",
  "description" : "description",
  "relatedParty" : [ {
    "@referredType" : "@referredType",
    "role" : "role",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "role" : "role",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "version" : "version",
  "@baseType" : "@baseType",
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : "id",
  "href" : "href",
  "category" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou",
    "version" : "version"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou",
    "version" : "version"
  } ],
  "@schemaLocation" : "http://example.com/aeiou"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates partially a Catalog
 * This operation updates partially a Catalog entity.
 *
 * body Catalog_Update The Catalog to be updated
 * id String Identifier of the Catalog
 * returns Catalog
 **/
exports.patchCatalog = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "catalogType" : "catalogType",
  "lifecycleStatus" : "lifecycleStatus",
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "@type" : "@type",
  "description" : "description",
  "relatedParty" : [ {
    "@referredType" : "@referredType",
    "role" : "role",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "role" : "role",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "version" : "version",
  "@baseType" : "@baseType",
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : "id",
  "href" : "href",
  "category" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou",
    "version" : "version"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou",
    "version" : "version"
  } ],
  "@schemaLocation" : "http://example.com/aeiou"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves a Catalog by ID
 * This operation retrieves a Catalog entity. Attribute selection is enabled for all first level attributes.
 *
 * id String Identifier of the Catalog
 * fields String Comma-separated properties to provide in response (optional)
 * returns Catalog
 **/
exports.retrieveCatalog = function(id,fields) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "catalogType" : "catalogType",
  "lifecycleStatus" : "lifecycleStatus",
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "@type" : "@type",
  "description" : "description",
  "relatedParty" : [ {
    "@referredType" : "@referredType",
    "role" : "role",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "role" : "role",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "version" : "version",
  "@baseType" : "@baseType",
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : "id",
  "href" : "href",
  "category" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou",
    "version" : "version"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou",
    "version" : "version"
  } ],
  "@schemaLocation" : "http://example.com/aeiou"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

