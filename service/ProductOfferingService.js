'use strict';


/**
 * Creates a ProductOffering
 * This operation creates a ProductOffering entity.
 *
 * body ProductOffering_Create The ProductOffering to be created
 * returns ProductOffering
 **/
exports.createProductOffering = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "isBundle" : true,
  "lifecycleStatus" : "lifecycleStatus",
  "serviceCandidate" : {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou",
    "version" : "version"
  },
  "@type" : "@type",
  "channel" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "description" : "description",
  "productOfferingPrice" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "resourceCandidate" : {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou",
    "version" : "version"
  },
  "statusReason" : "statusReason",
  "bundledProductOffering" : [ {
    "bundledProductOfferingOption" : {
      "@baseType" : "@baseType",
      "numberRelOfferDefault" : 6,
      "numberRelOfferLowerLimit" : 1,
      "@type" : "@type",
      "numberRelOfferUpperLimit" : 5,
      "@schemaLocation" : "http://example.com/aeiou"
    },
    "lifecycleStatus" : "lifecycleStatus",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "bundledProductOfferingOption" : {
      "@baseType" : "@baseType",
      "numberRelOfferDefault" : 6,
      "numberRelOfferLowerLimit" : 1,
      "@type" : "@type",
      "numberRelOfferUpperLimit" : 5,
      "@schemaLocation" : "http://example.com/aeiou"
    },
    "lifecycleStatus" : "lifecycleStatus",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
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
  "id" : "id",
  "href" : "href",
  "place" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "@schemaLocation" : "http://example.com/aeiou",
  "productOfferingTerm" : [ {
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "description" : "description",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "description" : "description",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "marketSegment" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "prodSpecCharValueUse" : [ {
    "minCardinality" : 2,
    "productSpecification" : {
      "@referredType" : "@referredType",
      "targetProductSchema" : {
        "@baseType" : "@baseType",
        "@type" : "@type",
        "@schemaLocation" : "@schemaLocation"
      },
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou",
      "version" : "version"
    },
    "@baseType" : "@baseType",
    "@type" : "@type",
    "valueType" : "valueType",
    "name" : "name",
    "description" : "description",
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
    "maxCardinality" : 5
  }, {
    "minCardinality" : 2,
    "productSpecification" : {
      "@referredType" : "@referredType",
      "targetProductSchema" : {
        "@baseType" : "@baseType",
        "@type" : "@type",
        "@schemaLocation" : "@schemaLocation"
      },
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou",
      "version" : "version"
    },
    "@baseType" : "@baseType",
    "@type" : "@type",
    "valueType" : "valueType",
    "name" : "name",
    "description" : "description",
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
    "maxCardinality" : 5
  } ],
  "agreement" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "isSellable" : true,
  "serviceLevelAgreement" : {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  },
  "version" : "version",
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
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
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deletes a ProductOffering
 * This operation deletes a ProductOffering entity.
 *
 * id String Identifier of the ProductOffering
 * no response value expected for this operation
 **/
exports.deleteProductOffering = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * List or find ProductOffering objects
 * This operation list or find ProductOffering entities
 *
 * fields String Comma-separated properties to be provided in response (optional)
 * offset Integer Requested index for start of resources to be provided in response (optional)
 * limit Integer Requested number of resources to be provided in response (optional)
 * returns List
 **/
exports.listProductOffering = function(fields,offset,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "isBundle" : true,
  "lifecycleStatus" : "lifecycleStatus",
  "serviceCandidate" : {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou",
    "version" : "version"
  },
  "@type" : "@type",
  "channel" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "description" : "description",
  "productOfferingPrice" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "resourceCandidate" : {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou",
    "version" : "version"
  },
  "statusReason" : "statusReason",
  "bundledProductOffering" : [ {
    "bundledProductOfferingOption" : {
      "@baseType" : "@baseType",
      "numberRelOfferDefault" : 6,
      "numberRelOfferLowerLimit" : 1,
      "@type" : "@type",
      "numberRelOfferUpperLimit" : 5,
      "@schemaLocation" : "http://example.com/aeiou"
    },
    "lifecycleStatus" : "lifecycleStatus",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "bundledProductOfferingOption" : {
      "@baseType" : "@baseType",
      "numberRelOfferDefault" : 6,
      "numberRelOfferLowerLimit" : 1,
      "@type" : "@type",
      "numberRelOfferUpperLimit" : 5,
      "@schemaLocation" : "http://example.com/aeiou"
    },
    "lifecycleStatus" : "lifecycleStatus",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
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
  "id" : "id",
  "href" : "href",
  "place" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "@schemaLocation" : "http://example.com/aeiou",
  "productOfferingTerm" : [ {
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "description" : "description",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "description" : "description",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "marketSegment" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "prodSpecCharValueUse" : [ {
    "minCardinality" : 2,
    "productSpecification" : {
      "@referredType" : "@referredType",
      "targetProductSchema" : {
        "@baseType" : "@baseType",
        "@type" : "@type",
        "@schemaLocation" : "@schemaLocation"
      },
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou",
      "version" : "version"
    },
    "@baseType" : "@baseType",
    "@type" : "@type",
    "valueType" : "valueType",
    "name" : "name",
    "description" : "description",
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
    "maxCardinality" : 5
  }, {
    "minCardinality" : 2,
    "productSpecification" : {
      "@referredType" : "@referredType",
      "targetProductSchema" : {
        "@baseType" : "@baseType",
        "@type" : "@type",
        "@schemaLocation" : "@schemaLocation"
      },
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou",
      "version" : "version"
    },
    "@baseType" : "@baseType",
    "@type" : "@type",
    "valueType" : "valueType",
    "name" : "name",
    "description" : "description",
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
    "maxCardinality" : 5
  } ],
  "agreement" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "isSellable" : true,
  "serviceLevelAgreement" : {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  },
  "version" : "version",
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
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
  } ]
}, {
  "isBundle" : true,
  "lifecycleStatus" : "lifecycleStatus",
  "serviceCandidate" : {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou",
    "version" : "version"
  },
  "@type" : "@type",
  "channel" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "description" : "description",
  "productOfferingPrice" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "resourceCandidate" : {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou",
    "version" : "version"
  },
  "statusReason" : "statusReason",
  "bundledProductOffering" : [ {
    "bundledProductOfferingOption" : {
      "@baseType" : "@baseType",
      "numberRelOfferDefault" : 6,
      "numberRelOfferLowerLimit" : 1,
      "@type" : "@type",
      "numberRelOfferUpperLimit" : 5,
      "@schemaLocation" : "http://example.com/aeiou"
    },
    "lifecycleStatus" : "lifecycleStatus",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "bundledProductOfferingOption" : {
      "@baseType" : "@baseType",
      "numberRelOfferDefault" : 6,
      "numberRelOfferLowerLimit" : 1,
      "@type" : "@type",
      "numberRelOfferUpperLimit" : 5,
      "@schemaLocation" : "http://example.com/aeiou"
    },
    "lifecycleStatus" : "lifecycleStatus",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
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
  "id" : "id",
  "href" : "href",
  "place" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "@schemaLocation" : "http://example.com/aeiou",
  "productOfferingTerm" : [ {
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "description" : "description",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "description" : "description",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "marketSegment" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "prodSpecCharValueUse" : [ {
    "minCardinality" : 2,
    "productSpecification" : {
      "@referredType" : "@referredType",
      "targetProductSchema" : {
        "@baseType" : "@baseType",
        "@type" : "@type",
        "@schemaLocation" : "@schemaLocation"
      },
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou",
      "version" : "version"
    },
    "@baseType" : "@baseType",
    "@type" : "@type",
    "valueType" : "valueType",
    "name" : "name",
    "description" : "description",
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
    "maxCardinality" : 5
  }, {
    "minCardinality" : 2,
    "productSpecification" : {
      "@referredType" : "@referredType",
      "targetProductSchema" : {
        "@baseType" : "@baseType",
        "@type" : "@type",
        "@schemaLocation" : "@schemaLocation"
      },
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou",
      "version" : "version"
    },
    "@baseType" : "@baseType",
    "@type" : "@type",
    "valueType" : "valueType",
    "name" : "name",
    "description" : "description",
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
    "maxCardinality" : 5
  } ],
  "agreement" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "isSellable" : true,
  "serviceLevelAgreement" : {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  },
  "version" : "version",
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
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
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates partially a ProductOffering
 * This operation updates partially a ProductOffering entity.
 *
 * body ProductOffering_Update The ProductOffering to be updated
 * id String Identifier of the ProductOffering
 * returns ProductOffering
 **/
exports.patchProductOffering = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "isBundle" : true,
  "lifecycleStatus" : "lifecycleStatus",
  "serviceCandidate" : {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou",
    "version" : "version"
  },
  "@type" : "@type",
  "channel" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "description" : "description",
  "productOfferingPrice" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "resourceCandidate" : {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou",
    "version" : "version"
  },
  "statusReason" : "statusReason",
  "bundledProductOffering" : [ {
    "bundledProductOfferingOption" : {
      "@baseType" : "@baseType",
      "numberRelOfferDefault" : 6,
      "numberRelOfferLowerLimit" : 1,
      "@type" : "@type",
      "numberRelOfferUpperLimit" : 5,
      "@schemaLocation" : "http://example.com/aeiou"
    },
    "lifecycleStatus" : "lifecycleStatus",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "bundledProductOfferingOption" : {
      "@baseType" : "@baseType",
      "numberRelOfferDefault" : 6,
      "numberRelOfferLowerLimit" : 1,
      "@type" : "@type",
      "numberRelOfferUpperLimit" : 5,
      "@schemaLocation" : "http://example.com/aeiou"
    },
    "lifecycleStatus" : "lifecycleStatus",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
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
  "id" : "id",
  "href" : "href",
  "place" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "@schemaLocation" : "http://example.com/aeiou",
  "productOfferingTerm" : [ {
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "description" : "description",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "description" : "description",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "marketSegment" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "prodSpecCharValueUse" : [ {
    "minCardinality" : 2,
    "productSpecification" : {
      "@referredType" : "@referredType",
      "targetProductSchema" : {
        "@baseType" : "@baseType",
        "@type" : "@type",
        "@schemaLocation" : "@schemaLocation"
      },
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou",
      "version" : "version"
    },
    "@baseType" : "@baseType",
    "@type" : "@type",
    "valueType" : "valueType",
    "name" : "name",
    "description" : "description",
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
    "maxCardinality" : 5
  }, {
    "minCardinality" : 2,
    "productSpecification" : {
      "@referredType" : "@referredType",
      "targetProductSchema" : {
        "@baseType" : "@baseType",
        "@type" : "@type",
        "@schemaLocation" : "@schemaLocation"
      },
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou",
      "version" : "version"
    },
    "@baseType" : "@baseType",
    "@type" : "@type",
    "valueType" : "valueType",
    "name" : "name",
    "description" : "description",
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
    "maxCardinality" : 5
  } ],
  "agreement" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "isSellable" : true,
  "serviceLevelAgreement" : {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  },
  "version" : "version",
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
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
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves a ProductOffering by ID
 * This operation retrieves a ProductOffering entity. Attribute selection is enabled for all first level attributes.
 *
 * id String Identifier of the ProductOffering
 * fields String Comma-separated properties to provide in response (optional)
 * returns ProductOffering
 **/
exports.retrieveProductOffering = function(id,fields) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "isBundle" : true,
  "lifecycleStatus" : "lifecycleStatus",
  "serviceCandidate" : {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou",
    "version" : "version"
  },
  "@type" : "@type",
  "channel" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "description" : "description",
  "productOfferingPrice" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "resourceCandidate" : {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou",
    "version" : "version"
  },
  "statusReason" : "statusReason",
  "bundledProductOffering" : [ {
    "bundledProductOfferingOption" : {
      "@baseType" : "@baseType",
      "numberRelOfferDefault" : 6,
      "numberRelOfferLowerLimit" : 1,
      "@type" : "@type",
      "numberRelOfferUpperLimit" : 5,
      "@schemaLocation" : "http://example.com/aeiou"
    },
    "lifecycleStatus" : "lifecycleStatus",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "bundledProductOfferingOption" : {
      "@baseType" : "@baseType",
      "numberRelOfferDefault" : 6,
      "numberRelOfferLowerLimit" : 1,
      "@type" : "@type",
      "numberRelOfferUpperLimit" : 5,
      "@schemaLocation" : "http://example.com/aeiou"
    },
    "lifecycleStatus" : "lifecycleStatus",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
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
  "id" : "id",
  "href" : "href",
  "place" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "@schemaLocation" : "http://example.com/aeiou",
  "productOfferingTerm" : [ {
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "description" : "description",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "description" : "description",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "marketSegment" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "prodSpecCharValueUse" : [ {
    "minCardinality" : 2,
    "productSpecification" : {
      "@referredType" : "@referredType",
      "targetProductSchema" : {
        "@baseType" : "@baseType",
        "@type" : "@type",
        "@schemaLocation" : "@schemaLocation"
      },
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou",
      "version" : "version"
    },
    "@baseType" : "@baseType",
    "@type" : "@type",
    "valueType" : "valueType",
    "name" : "name",
    "description" : "description",
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
    "maxCardinality" : 5
  }, {
    "minCardinality" : 2,
    "productSpecification" : {
      "@referredType" : "@referredType",
      "targetProductSchema" : {
        "@baseType" : "@baseType",
        "@type" : "@type",
        "@schemaLocation" : "@schemaLocation"
      },
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou",
      "version" : "version"
    },
    "@baseType" : "@baseType",
    "@type" : "@type",
    "valueType" : "valueType",
    "name" : "name",
    "description" : "description",
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
    "maxCardinality" : 5
  } ],
  "agreement" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "isSellable" : true,
  "serviceLevelAgreement" : {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  },
  "version" : "version",
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
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
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

