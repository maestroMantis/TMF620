'use strict';

var utils = require('../utils/writer.js');
var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToCatalogBatchEvent = function listenToCatalogBatchEvent (req, res, next) {
  var body = req.swagger.params['body'].value;
  NotificationListenersClientSide.listenToCatalogBatchEvent(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listenToCatalogCreateEvent = function listenToCatalogCreateEvent (req, res, next) {
  var body = req.swagger.params['body'].value;
  NotificationListenersClientSide.listenToCatalogCreateEvent(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listenToCatalogDeleteEvent = function listenToCatalogDeleteEvent (req, res, next) {
  var body = req.swagger.params['body'].value;
  NotificationListenersClientSide.listenToCatalogDeleteEvent(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listenToCategoryCreateEvent = function listenToCategoryCreateEvent (req, res, next) {
  var body = req.swagger.params['body'].value;
  NotificationListenersClientSide.listenToCategoryCreateEvent(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listenToCategoryDeleteEvent = function listenToCategoryDeleteEvent (req, res, next) {
  var body = req.swagger.params['body'].value;
  NotificationListenersClientSide.listenToCategoryDeleteEvent(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listenToProductOfferingAttributeValueChangeEvent = function listenToProductOfferingAttributeValueChangeEvent (req, res, next) {
  var body = req.swagger.params['body'].value;
  NotificationListenersClientSide.listenToProductOfferingAttributeValueChangeEvent(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listenToProductOfferingCreateEvent = function listenToProductOfferingCreateEvent (req, res, next) {
  var body = req.swagger.params['body'].value;
  NotificationListenersClientSide.listenToProductOfferingCreateEvent(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listenToProductOfferingDeleteEvent = function listenToProductOfferingDeleteEvent (req, res, next) {
  var body = req.swagger.params['body'].value;
  NotificationListenersClientSide.listenToProductOfferingDeleteEvent(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listenToProductOfferingPriceAttributeValueChangeEvent = function listenToProductOfferingPriceAttributeValueChangeEvent (req, res, next) {
  var body = req.swagger.params['body'].value;
  NotificationListenersClientSide.listenToProductOfferingPriceAttributeValueChangeEvent(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listenToProductOfferingPriceCreateEvent = function listenToProductOfferingPriceCreateEvent (req, res, next) {
  var body = req.swagger.params['body'].value;
  NotificationListenersClientSide.listenToProductOfferingPriceCreateEvent(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listenToProductOfferingPriceDeleteEvent = function listenToProductOfferingPriceDeleteEvent (req, res, next) {
  var body = req.swagger.params['body'].value;
  NotificationListenersClientSide.listenToProductOfferingPriceDeleteEvent(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listenToProductOfferingPriceStateChangeEvent = function listenToProductOfferingPriceStateChangeEvent (req, res, next) {
  var body = req.swagger.params['body'].value;
  NotificationListenersClientSide.listenToProductOfferingPriceStateChangeEvent(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listenToProductOfferingStateChangeEvent = function listenToProductOfferingStateChangeEvent (req, res, next) {
  var body = req.swagger.params['body'].value;
  NotificationListenersClientSide.listenToProductOfferingStateChangeEvent(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listenToProductSpecificationCreateEvent = function listenToProductSpecificationCreateEvent (req, res, next) {
  var body = req.swagger.params['body'].value;
  NotificationListenersClientSide.listenToProductSpecificationCreateEvent(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listenToProductSpecificationDeleteEvent = function listenToProductSpecificationDeleteEvent (req, res, next) {
  var body = req.swagger.params['body'].value;
  NotificationListenersClientSide.listenToProductSpecificationDeleteEvent(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
