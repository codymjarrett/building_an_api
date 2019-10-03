"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _crud = require("../crud/crud");

var _people = require("./people.model");

var _default = (0, _crud.crudControllers)(_people.Person);

exports["default"] = _default;