"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _people = _interopRequireDefault(require("./people/people.router"));

var _connect = require("./connect");

var _bodyParser = require("body-parser");

var _morgan = _interopRequireDefault(require("morgan"));

var _people2 = require("./people/people.model");

var _dns = require("dns");

var PORT = 3000;
var app = (0, _express["default"])();
exports.app = app;
app.use((0, _bodyParser.json)());
app.use((0, _bodyParser.urlencoded)({
  extended: true
}));
app.use((0, _morgan["default"])("dev"));
app.use("/api/person", _people["default"]);
(0, _connect.connect)("mongodb://localhost:27017/codyNodeApi").then(
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(connection) {
    var person;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _people2.Person.create({
              firstName: "Quest",
              lastName: "Jarrett",
              email: "questHJarrett@gmail.com",
              age: 0.1,
              highestEducation: 'nowhere',
              sex: "MALE"
            });

          case 2:
            person = _context.sent;
            console.log(person);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}())["catch"](function (e) {
  return console.error(e);
});