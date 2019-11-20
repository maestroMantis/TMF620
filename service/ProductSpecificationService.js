'use strict';


/**
 * Creates a ProductSpecification
 * This operation creates a ProductSpecification entity.
 *
 * body ProductSpecification_Create The ProductSpecification to be created
 * returns ProductSpecification
 **/
exports.createProductSpecification = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "isBundle" : true,
  "productSpecCharacteristic" : [ {
    "@type" : "@type",
    "isUnique" : true,
    "description" : "description",
    "maxCardinality" : 0,
    "minCardinality" : 6,
    "regex" : "regex",
    "@baseType" : "@baseType",
    "valueType" : "valueType",
    "name" : "name",
    "productSpecCharRelationship" : [ {
      "charSpecSeq" : 1,
      "relationshipType" : "relationshipType",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "charSpecSeq" : 1,
      "relationshipType" : "relationshipType",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "productSpecCharacteristicValue" : [ {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : "valueFrom"
    }, {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : "valueFrom"
    } ],
    "@schemaLocation" : "http://example.com/aeiou",
    "extensible" : true,
    "configurable" : true
  }, {
    "@type" : "@type",
    "isUnique" : true,
    "description" : "description",
    "maxCardinality" : 0,
    "minCardinality" : 6,
    "regex" : "regex",
    "@baseType" : "@baseType",
    "valueType" : "valueType",
    "name" : "name",
    "productSpecCharRelationship" : [ {
      "charSpecSeq" : 1,
      "relationshipType" : "relationshipType",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "charSpecSeq" : 1,
      "relationshipType" : "relationshipType",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "productSpecCharacteristicValue" : [ {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : "valueFrom"
    }, {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : "valueFrom"
    } ],
    "@schemaLocation" : "http://example.com/aeiou",
    "extensible" : true,
    "configurable" : true
  } ],
  "lifecycleStatus" : "lifecycleStatus",
  "targetProductSchema" : {
    "@baseType" : "@baseType",
    "@type" : "@type",
    "@schemaLocation" : "@schemaLocation"
  },
  "@type" : "@type",
  "resourceSpecification" : [ {
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
  "serviceSpecification" : [ {
    "targetServiceSchema" : {
      "@baseType" : "@baseType",
      "@type" : "@type",
      "@schemaLocation" : "@schemaLocation"
    },
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou",
    "version" : "version"
  }, {
    "targetServiceSchema" : {
      "@baseType" : "@baseType",
      "@type" : "@type",
      "@schemaLocation" : "@schemaLocation"
    },
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou",
    "version" : "version"
  } ],
  "description" : "description",
  "productNumber" : "productNumber",
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
  "attachment" : [ {
    "@referredType" : "@referredType",
    "attachmentType" : "attachmentType",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "@type" : "@type",
    "description" : "description",
    "mimeType" : "mimeType",
    "content" : "content",
    "url" : "url",
    "size" : {
      "amount" : 0.8008282,
      "units" : "units"
    },
    "@baseType" : "@baseType",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "attachmentType" : "attachmentType",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "@type" : "@type",
    "description" : "description",
    "mimeType" : "mimeType",
    "content" : "content",
    "url" : "url",
    "size" : {
      "amount" : 0.8008282,
      "units" : "units"
    },
    "@baseType" : "@baseType",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "@baseType" : "@baseType",
  "bundledProductSpecification" : [ {
    "lifecycleStatus" : "lifecycleStatus",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "lifecycleStatus" : "lifecycleStatus",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "productSpecificationRelationship" : [ {
    "relationshipType" : "relationshipType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "relationshipType" : "relationshipType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "id" : "id",
  "href" : "href",
  "@schemaLocation" : "http://example.com/aeiou",
  "brand" : "brand"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deletes a ProductSpecification
 * This operation deletes a ProductSpecification entity.
 *
 * id String Identifier of the ProductSpecification
 * no response value expected for this operation
 **/
exports.deleteProductSpecification = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * List or find ProductSpecification objects
 * This operation list or find ProductSpecification entities
 *
 * fields String Comma-separated properties to be provided in response (optional)
 * offset Integer Requested index for start of resources to be provided in response (optional)
 * limit Integer Requested number of resources to be provided in response (optional)
 * returns List
 **/
exports.listProductSpecification = function(fields,offset,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "isBundle" : true,
  "productSpecCharacteristic" : [ {
    "@type" : "@type",
    "isUnique" : true,
    "description" : "description",
    "maxCardinality" : 0,
    "minCardinality" : 6,
    "regex" : "regex",
    "@baseType" : "@baseType",
    "valueType" : "valueType",
    "name" : "name",
    "productSpecCharRelationship" : [ {
      "charSpecSeq" : 1,
      "relationshipType" : "relationshipType",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "charSpecSeq" : 1,
      "relationshipType" : "relationshipType",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "productSpecCharacteristicValue" : [ {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : "valueFrom"
    }, {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : "valueFrom"
    } ],
    "@schemaLocation" : "http://example.com/aeiou",
    "extensible" : true,
    "configurable" : true
  }, {
    "@type" : "@type",
    "isUnique" : true,
    "description" : "description",
    "maxCardinality" : 0,
    "minCardinality" : 6,
    "regex" : "regex",
    "@baseType" : "@baseType",
    "valueType" : "valueType",
    "name" : "name",
    "productSpecCharRelationship" : [ {
      "charSpecSeq" : 1,
      "relationshipType" : "relationshipType",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "charSpecSeq" : 1,
      "relationshipType" : "relationshipType",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "productSpecCharacteristicValue" : [ {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : "valueFrom"
    }, {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : "valueFrom"
    } ],
    "@schemaLocation" : "http://example.com/aeiou",
    "extensible" : true,
    "configurable" : true
  } ],
  "lifecycleStatus" : "lifecycleStatus",
  "targetProductSchema" : {
    "@baseType" : "@baseType",
    "@type" : "@type",
    "@schemaLocation" : "@schemaLocation"
  },
  "@type" : "@type",
  "resourceSpecification" : [ {
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
  "serviceSpecification" : [ {
    "targetServiceSchema" : {
      "@baseType" : "@baseType",
      "@type" : "@type",
      "@schemaLocation" : "@schemaLocation"
    },
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou",
    "version" : "version"
  }, {
    "targetServiceSchema" : {
      "@baseType" : "@baseType",
      "@type" : "@type",
      "@schemaLocation" : "@schemaLocation"
    },
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou",
    "version" : "version"
  } ],
  "description" : "description",
  "productNumber" : "productNumber",
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
  "attachment" : [ {
    "@referredType" : "@referredType",
    "attachmentType" : "attachmentType",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "@type" : "@type",
    "description" : "description",
    "mimeType" : "mimeType",
    "content" : "content",
    "url" : "url",
    "size" : {
      "amount" : 0.8008282,
      "units" : "units"
    },
    "@baseType" : "@baseType",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "attachmentType" : "attachmentType",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "@type" : "@type",
    "description" : "description",
    "mimeType" : "mimeType",
    "content" : "content",
    "url" : "url",
    "size" : {
      "amount" : 0.8008282,
      "units" : "units"
    },
    "@baseType" : "@baseType",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "@baseType" : "@baseType",
  "bundledProductSpecification" : [ {
    "lifecycleStatus" : "lifecycleStatus",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "lifecycleStatus" : "lifecycleStatus",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "productSpecificationRelationship" : [ {
    "relationshipType" : "relationshipType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "relationshipType" : "relationshipType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "id" : "id",
  "href" : "href",
  "@schemaLocation" : "http://example.com/aeiou",
  "brand" : "brand"
}, {
  "isBundle" : true,
  "productSpecCharacteristic" : [ {
    "@type" : "@type",
    "isUnique" : true,
    "description" : "description",
    "maxCardinality" : 0,
    "minCardinality" : 6,
    "regex" : "regex",
    "@baseType" : "@baseType",
    "valueType" : "valueType",
    "name" : "name",
    "productSpecCharRelationship" : [ {
      "charSpecSeq" : 1,
      "relationshipType" : "relationshipType",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "charSpecSeq" : 1,
      "relationshipType" : "relationshipType",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "productSpecCharacteristicValue" : [ {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : "valueFrom"
    }, {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : "valueFrom"
    } ],
    "@schemaLocation" : "http://example.com/aeiou",
    "extensible" : true,
    "configurable" : true
  }, {
    "@type" : "@type",
    "isUnique" : true,
    "description" : "description",
    "maxCardinality" : 0,
    "minCardinality" : 6,
    "regex" : "regex",
    "@baseType" : "@baseType",
    "valueType" : "valueType",
    "name" : "name",
    "productSpecCharRelationship" : [ {
      "charSpecSeq" : 1,
      "relationshipType" : "relationshipType",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "charSpecSeq" : 1,
      "relationshipType" : "relationshipType",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "productSpecCharacteristicValue" : [ {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : "valueFrom"
    }, {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : "valueFrom"
    } ],
    "@schemaLocation" : "http://example.com/aeiou",
    "extensible" : true,
    "configurable" : true
  } ],
  "lifecycleStatus" : "lifecycleStatus",
  "targetProductSchema" : {
    "@baseType" : "@baseType",
    "@type" : "@type",
    "@schemaLocation" : "@schemaLocation"
  },
  "@type" : "@type",
  "resourceSpecification" : [ {
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
  "serviceSpecification" : [ {
    "targetServiceSchema" : {
      "@baseType" : "@baseType",
      "@type" : "@type",
      "@schemaLocation" : "@schemaLocation"
    },
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou",
    "version" : "version"
  }, {
    "targetServiceSchema" : {
      "@baseType" : "@baseType",
      "@type" : "@type",
      "@schemaLocation" : "@schemaLocation"
    },
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou",
    "version" : "version"
  } ],
  "description" : "description",
  "productNumber" : "productNumber",
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
  "attachment" : [ {
    "@referredType" : "@referredType",
    "attachmentType" : "attachmentType",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "@type" : "@type",
    "description" : "description",
    "mimeType" : "mimeType",
    "content" : "content",
    "url" : "url",
    "size" : {
      "amount" : 0.8008282,
      "units" : "units"
    },
    "@baseType" : "@baseType",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "attachmentType" : "attachmentType",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "@type" : "@type",
    "description" : "description",
    "mimeType" : "mimeType",
    "content" : "content",
    "url" : "url",
    "size" : {
      "amount" : 0.8008282,
      "units" : "units"
    },
    "@baseType" : "@baseType",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "@baseType" : "@baseType",
  "bundledProductSpecification" : [ {
    "lifecycleStatus" : "lifecycleStatus",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "lifecycleStatus" : "lifecycleStatus",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "productSpecificationRelationship" : [ {
    "relationshipType" : "relationshipType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "relationshipType" : "relationshipType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "id" : "id",
  "href" : "href",
  "@schemaLocation" : "http://example.com/aeiou",
  "brand" : "brand"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates partially a ProductSpecification
 * This operation updates partially a ProductSpecification entity.
 *
 * body ProductSpecification_Update The ProductSpecification to be updated
 * id String Identifier of the ProductSpecification
 * returns ProductSpecification
 **/
exports.patchProductSpecification = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "isBundle" : true,
  "productSpecCharacteristic" : [ {
    "@type" : "@type",
    "isUnique" : true,
    "description" : "description",
    "maxCardinality" : 0,
    "minCardinality" : 6,
    "regex" : "regex",
    "@baseType" : "@baseType",
    "valueType" : "valueType",
    "name" : "name",
    "productSpecCharRelationship" : [ {
      "charSpecSeq" : 1,
      "relationshipType" : "relationshipType",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "charSpecSeq" : 1,
      "relationshipType" : "relationshipType",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "productSpecCharacteristicValue" : [ {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : "valueFrom"
    }, {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : "valueFrom"
    } ],
    "@schemaLocation" : "http://example.com/aeiou",
    "extensible" : true,
    "configurable" : true
  }, {
    "@type" : "@type",
    "isUnique" : true,
    "description" : "description",
    "maxCardinality" : 0,
    "minCardinality" : 6,
    "regex" : "regex",
    "@baseType" : "@baseType",
    "valueType" : "valueType",
    "name" : "name",
    "productSpecCharRelationship" : [ {
      "charSpecSeq" : 1,
      "relationshipType" : "relationshipType",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "charSpecSeq" : 1,
      "relationshipType" : "relationshipType",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "productSpecCharacteristicValue" : [ {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : "valueFrom"
    }, {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : "valueFrom"
    } ],
    "@schemaLocation" : "http://example.com/aeiou",
    "extensible" : true,
    "configurable" : true
  } ],
  "lifecycleStatus" : "lifecycleStatus",
  "targetProductSchema" : {
    "@baseType" : "@baseType",
    "@type" : "@type",
    "@schemaLocation" : "@schemaLocation"
  },
  "@type" : "@type",
  "resourceSpecification" : [ {
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
  "serviceSpecification" : [ {
    "targetServiceSchema" : {
      "@baseType" : "@baseType",
      "@type" : "@type",
      "@schemaLocation" : "@schemaLocation"
    },
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou",
    "version" : "version"
  }, {
    "targetServiceSchema" : {
      "@baseType" : "@baseType",
      "@type" : "@type",
      "@schemaLocation" : "@schemaLocation"
    },
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou",
    "version" : "version"
  } ],
  "description" : "description",
  "productNumber" : "productNumber",
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
  "attachment" : [ {
    "@referredType" : "@referredType",
    "attachmentType" : "attachmentType",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "@type" : "@type",
    "description" : "description",
    "mimeType" : "mimeType",
    "content" : "content",
    "url" : "url",
    "size" : {
      "amount" : 0.8008282,
      "units" : "units"
    },
    "@baseType" : "@baseType",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "attachmentType" : "attachmentType",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "@type" : "@type",
    "description" : "description",
    "mimeType" : "mimeType",
    "content" : "content",
    "url" : "url",
    "size" : {
      "amount" : 0.8008282,
      "units" : "units"
    },
    "@baseType" : "@baseType",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "@baseType" : "@baseType",
  "bundledProductSpecification" : [ {
    "lifecycleStatus" : "lifecycleStatus",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "lifecycleStatus" : "lifecycleStatus",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "productSpecificationRelationship" : [ {
    "relationshipType" : "relationshipType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "relationshipType" : "relationshipType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "id" : "id",
  "href" : "href",
  "@schemaLocation" : "http://example.com/aeiou",
  "brand" : "brand"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves a ProductSpecification by ID
 * This operation retrieves a ProductSpecification entity. Attribute selection is enabled for all first level attributes.
 *
 * id String Identifier of the ProductSpecification
 * fields String Comma-separated properties to provide in response (optional)
 * returns ProductSpecification
 **/
exports.retrieveProductSpecification = function(id,fields) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "isBundle" : true,
  "productSpecCharacteristic" : [ {
    "@type" : "@type",
    "isUnique" : true,
    "description" : "description",
    "maxCardinality" : 0,
    "minCardinality" : 6,
    "regex" : "regex",
    "@baseType" : "@baseType",
    "valueType" : "valueType",
    "name" : "name",
    "productSpecCharRelationship" : [ {
      "charSpecSeq" : 1,
      "relationshipType" : "relationshipType",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "charSpecSeq" : 1,
      "relationshipType" : "relationshipType",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "productSpecCharacteristicValue" : [ {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : "valueFrom"
    }, {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : "valueFrom"
    } ],
    "@schemaLocation" : "http://example.com/aeiou",
    "extensible" : true,
    "configurable" : true
  }, {
    "@type" : "@type",
    "isUnique" : true,
    "description" : "description",
    "maxCardinality" : 0,
    "minCardinality" : 6,
    "regex" : "regex",
    "@baseType" : "@baseType",
    "valueType" : "valueType",
    "name" : "name",
    "productSpecCharRelationship" : [ {
      "charSpecSeq" : 1,
      "relationshipType" : "relationshipType",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "charSpecSeq" : 1,
      "relationshipType" : "relationshipType",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "productSpecCharacteristicValue" : [ {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : "valueFrom"
    }, {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : "valueFrom"
    } ],
    "@schemaLocation" : "http://example.com/aeiou",
    "extensible" : true,
    "configurable" : true
  } ],
  "lifecycleStatus" : "lifecycleStatus",
  "targetProductSchema" : {
    "@baseType" : "@baseType",
    "@type" : "@type",
    "@schemaLocation" : "@schemaLocation"
  },
  "@type" : "@type",
  "resourceSpecification" : [ {
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
  "serviceSpecification" : [ {
    "targetServiceSchema" : {
      "@baseType" : "@baseType",
      "@type" : "@type",
      "@schemaLocation" : "@schemaLocation"
    },
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou",
    "version" : "version"
  }, {
    "targetServiceSchema" : {
      "@baseType" : "@baseType",
      "@type" : "@type",
      "@schemaLocation" : "@schemaLocation"
    },
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou",
    "version" : "version"
  } ],
  "description" : "description",
  "productNumber" : "productNumber",
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
  "attachment" : [ {
    "@referredType" : "@referredType",
    "attachmentType" : "attachmentType",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "@type" : "@type",
    "description" : "description",
    "mimeType" : "mimeType",
    "content" : "content",
    "url" : "url",
    "size" : {
      "amount" : 0.8008282,
      "units" : "units"
    },
    "@baseType" : "@baseType",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "attachmentType" : "attachmentType",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "@type" : "@type",
    "description" : "description",
    "mimeType" : "mimeType",
    "content" : "content",
    "url" : "url",
    "size" : {
      "amount" : 0.8008282,
      "units" : "units"
    },
    "@baseType" : "@baseType",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "@baseType" : "@baseType",
  "bundledProductSpecification" : [ {
    "lifecycleStatus" : "lifecycleStatus",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "lifecycleStatus" : "lifecycleStatus",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "productSpecificationRelationship" : [ {
    "relationshipType" : "relationshipType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "relationshipType" : "relationshipType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "id" : "id",
  "href" : "href",
  "@schemaLocation" : "http://example.com/aeiou",
  "brand" : "brand"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

