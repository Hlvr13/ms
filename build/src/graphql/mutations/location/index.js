'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _add = require('./add');

var _add2 = _interopRequireDefault(_add);

var _delete = require('./delete');

var _delete2 = _interopRequireDefault(_delete);

var _update = require('./update');

var _update2 = _interopRequireDefault(_update);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    addLocation: _add2.default,
    deleteLocation: _delete2.default,
    updateLocation: _update2.default
};