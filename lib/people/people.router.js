"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _people = _interopRequireDefault(require("./people.controller"));

var router = (0, _express.Router)();
router.route("/").get(_people["default"].getMany).post(_people["default"].createOne);
router.route("/:id").get(_people["default"].getOne); //   .put(controllers.updateOne)
//   .delete(controllers.removeOne);

var _default = router;
exports["default"] = _default;