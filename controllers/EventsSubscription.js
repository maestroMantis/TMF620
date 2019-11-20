'use strict';

var utils = require('../utils/writer.js');
var EventsSubscription = require('../service/EventsSubscriptionService');

module.exports.registerListener = function registerListener (req, res, next) {
  var body = req.swagger.params['body'].value;
  EventsSubscription.registerListener(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.unregisterListener = function unregisterListener (req, res, next) {
  var id = req.swagger.params['id'].value;
  EventsSubscription.unregisterListener(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
