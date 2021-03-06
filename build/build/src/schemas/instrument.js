'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var Schema = _mongoose2.default.Schema;

var instrumentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    strings: {
        type: Number,
        required: false,
        default: 0
    }
}, { 'collections': 'instruments', timestamps: true });

exports.default = _mongoose2.default.model('instruments', instrumentSchema);