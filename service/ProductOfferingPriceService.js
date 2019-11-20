'use strict';


/**
 * Creates a ProductOfferingPrice
 * This operation creates a ProductOfferingPrice entity.
 *
 * body ProductOfferingPrice_Create The ProductOfferingPrice to be created
 * returns ProductOfferingPrice
 **/
exports.createProductOfferingPrice = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "isBundle" : true,
  "popRelationship" : [ {
    "relationshipType" : "relationshipType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "relationshipType" : "relationshipType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "lifecycleStatus" : "lifecycleStatus",
  "@type" : "@type",
  "description" : "description",
  "recurringChargePeriodType" : "recurringChargePeriodType",
  "recurringChargePeriodLength" : 6,
  "@baseType" : "@baseType",
  "price" : {
    "unit" : "unit",
    "value" : 1.4658129
  },
  "percentage" : 0.8008282,
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
  "@schemaLocation" : "@schemaLocation",
  "bundledPopRelationship" : [ {
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
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
  "unitOfMeasure" : {
    "amount" : 0.8008282,
    "units" : "units"
  },
  "priceType" : "priceType",
  "tax" : [ {
    "taxRate" : 5.962134,
    "@baseType" : "@baseType",
    "@type" : "@type",
    "@schemaLocation" : "http://example.com/aeiou",
    "taxCategory" : "taxCategory"
  }, {
    "taxRate" : 5.962134,
    "@baseType" : "@baseType",
    "@type" : "@type",
    "@schemaLocation" : "http://example.com/aeiou",
    "taxCategory" : "taxCategory"
  } ],
  "version" : "version",
  "pricingLogicAlgorithm" : [ {
    "@baseType" : "@baseType",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "@type" : "@type",
    "name" : "name",
    "description" : "description",
    "id" : "id",
    "href" : "href",
    "plaSpecId" : "plaSpecId",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@baseType" : "@baseType",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "@type" : "@type",
    "name" : "name",
    "description" : "description",
    "id" : "id",
    "href" : "href",
    "plaSpecId" : "plaSpecId",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "constraint" : [ {
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
 * Deletes a ProductOfferingPrice
 * This operation deletes a ProductOfferingPrice entity.
 *
 * id String Identifier of the ProductOfferingPrice
 * no response value expected for this operation
 **/
exports.deleteProductOfferingPrice = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * List or find ProductOfferingPrice objects
 * This operation list or find ProductOfferingPrice entities
 *
 * fields String Comma-separated properties to be provided in response (optional)
 * offset Integer Requested index for start of resources to be provided in response (optional)
 * limit Integer Requested number of resources to be provided in response (optional)
 * returns List
 **/
exports.listProductOfferingPrice = function(fields,offset,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "isBundle" : true,
  "popRelationship" : [ {
    "relationshipType" : "relationshipType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "relationshipType" : "relationshipType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "lifecycleStatus" : "lifecycleStatus",
  "@type" : "@type",
  "description" : "description",
  "recurringChargePeriodType" : "recurringChargePeriodType",
  "recurringChargePeriodLength" : 6,
  "@baseType" : "@baseType",
  "price" : {
    "unit" : "unit",
    "value" : 1.4658129
  },
  "percentage" : 0.8008282,
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
  "@schemaLocation" : "@schemaLocation",
  "bundledPopRelationship" : [ {
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
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
  "unitOfMeasure" : {
    "amount" : 0.8008282,
    "units" : "units"
  },
  "priceType" : "priceType",
  "tax" : [ {
    "taxRate" : 5.962134,
    "@baseType" : "@baseType",
    "@type" : "@type",
    "@schemaLocation" : "http://example.com/aeiou",
    "taxCategory" : "taxCategory"
  }, {
    "taxRate" : 5.962134,
    "@baseType" : "@baseType",
    "@type" : "@type",
    "@schemaLocation" : "http://example.com/aeiou",
    "taxCategory" : "taxCategory"
  } ],
  "version" : "version",
  "pricingLogicAlgorithm" : [ {
    "@baseType" : "@baseType",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "@type" : "@type",
    "name" : "name",
    "description" : "description",
    "id" : "id",
    "href" : "href",
    "plaSpecId" : "plaSpecId",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@baseType" : "@baseType",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "@type" : "@type",
    "name" : "name",
    "description" : "description",
    "id" : "id",
    "href" : "href",
    "plaSpecId" : "plaSpecId",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "constraint" : [ {
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
  "popRelationship" : [ {
    "relationshipType" : "relationshipType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "relationshipType" : "relationshipType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "lifecycleStatus" : "lifecycleStatus",
  "@type" : "@type",
  "description" : "description",
  "recurringChargePeriodType" : "recurringChargePeriodType",
  "recurringChargePeriodLength" : 6,
  "@baseType" : "@baseType",
  "price" : {
    "unit" : "unit",
    "value" : 1.4658129
  },
  "percentage" : 0.8008282,
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
  "@schemaLocation" : "@schemaLocation",
  "bundledPopRelationship" : [ {
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
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
  "unitOfMeasure" : {
    "amount" : 0.8008282,
    "units" : "units"
  },
  "priceType" : "priceType",
  "tax" : [ {
    "taxRate" : 5.962134,
    "@baseType" : "@baseType",
    "@type" : "@type",
    "@schemaLocation" : "http://example.com/aeiou",
    "taxCategory" : "taxCategory"
  }, {
    "taxRate" : 5.962134,
    "@baseType" : "@baseType",
    "@type" : "@type",
    "@schemaLocation" : "http://example.com/aeiou",
    "taxCategory" : "taxCategory"
  } ],
  "version" : "version",
  "pricingLogicAlgorithm" : [ {
    "@baseType" : "@baseType",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "@type" : "@type",
    "name" : "name",
    "description" : "description",
    "id" : "id",
    "href" : "href",
    "plaSpecId" : "plaSpecId",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@baseType" : "@baseType",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "@type" : "@type",
    "name" : "name",
    "description" : "description",
    "id" : "id",
    "href" : "href",
    "plaSpecId" : "plaSpecId",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "constraint" : [ {
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
 * Updates partially a ProductOfferingPrice
 * This operation updates partially a ProductOfferingPrice entity.
 *
 * body ProductOfferingPrice_Update The ProductOfferingPrice to be updated
 * id String Identifier of the ProductOfferingPrice
 * returns ProductOfferingPrice
 **/
exports.patchProductOfferingPrice = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "isBundle" : true,
  "popRelationship" : [ {
    "relationshipType" : "relationshipType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "relationshipType" : "relationshipType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "lifecycleStatus" : "lifecycleStatus",
  "@type" : "@type",
  "description" : "description",
  "recurringChargePeriodType" : "recurringChargePeriodType",
  "recurringChargePeriodLength" : 6,
  "@baseType" : "@baseType",
  "price" : {
    "unit" : "unit",
    "value" : 1.4658129
  },
  "percentage" : 0.8008282,
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
  "@schemaLocation" : "@schemaLocation",
  "bundledPopRelationship" : [ {
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
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
  "unitOfMeasure" : {
    "amount" : 0.8008282,
    "units" : "units"
  },
  "priceType" : "priceType",
  "tax" : [ {
    "taxRate" : 5.962134,
    "@baseType" : "@baseType",
    "@type" : "@type",
    "@schemaLocation" : "http://example.com/aeiou",
    "taxCategory" : "taxCategory"
  }, {
    "taxRate" : 5.962134,
    "@baseType" : "@baseType",
    "@type" : "@type",
    "@schemaLocation" : "http://example.com/aeiou",
    "taxCategory" : "taxCategory"
  } ],
  "version" : "version",
  "pricingLogicAlgorithm" : [ {
    "@baseType" : "@baseType",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "@type" : "@type",
    "name" : "name",
    "description" : "description",
    "id" : "id",
    "href" : "href",
    "plaSpecId" : "plaSpecId",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@baseType" : "@baseType",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "@type" : "@type",
    "name" : "name",
    "description" : "description",
    "id" : "id",
    "href" : "href",
    "plaSpecId" : "plaSpecId",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "constraint" : [ {
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
 * Retrieves a ProductOfferingPrice by ID
 * This operation retrieves a ProductOfferingPrice entity. Attribute selection is enabled for all first level attributes.
 *
 * id String Identifier of the ProductOfferingPrice
 * fields String Comma-separated properties to provide in response (optional)
 * returns ProductOfferingPrice
 **/
exports.retrieveProductOfferingPrice = function(id,fields) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "isBundle" : true,
  "popRelationship" : [ {
    "relationshipType" : "relationshipType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "relationshipType" : "relationshipType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "lifecycleStatus" : "lifecycleStatus",
  "@type" : "@type",
  "description" : "description",
  "recurringChargePeriodType" : "recurringChargePeriodType",
  "recurringChargePeriodLength" : 6,
  "@baseType" : "@baseType",
  "price" : {
    "unit" : "unit",
    "value" : 1.4658129
  },
  "percentage" : 0.8008282,
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
  "@schemaLocation" : "@schemaLocation",
  "bundledPopRelationship" : [ {
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
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
  "unitOfMeasure" : {
    "amount" : 0.8008282,
    "units" : "units"
  },
  "priceType" : "priceType",
  "tax" : [ {
    "taxRate" : 5.962134,
    "@baseType" : "@baseType",
    "@type" : "@type",
    "@schemaLocation" : "http://example.com/aeiou",
    "taxCategory" : "taxCategory"
  }, {
    "taxRate" : 5.962134,
    "@baseType" : "@baseType",
    "@type" : "@type",
    "@schemaLocation" : "http://example.com/aeiou",
    "taxCategory" : "taxCategory"
  } ],
  "version" : "version",
  "pricingLogicAlgorithm" : [ {
    "@baseType" : "@baseType",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "@type" : "@type",
    "name" : "name",
    "description" : "description",
    "id" : "id",
    "href" : "href",
    "plaSpecId" : "plaSpecId",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@baseType" : "@baseType",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "@type" : "@type",
    "name" : "name",
    "description" : "description",
    "id" : "id",
    "href" : "href",
    "plaSpecId" : "plaSpecId",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "constraint" : [ {
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

