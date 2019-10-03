"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Person = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var personSchema = new _mongoose["default"].Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    required: true
  },
  highestEducation: {
    type: String
  },
  sex: {
    type: String,
    "enum": ["MALE", "FEMALE", "NON-BINARY", "UNDISCLOSED"]
  }
}, {
  timestamps: true
});

var Person = _mongoose["default"].model("person", personSchema);

exports.Person = Person;