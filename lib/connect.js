"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var connect = function connect(url) {
  return _mongoose["default"].connect(url);
};

exports.connect = connect;