"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crudControllers = exports.createOne = exports.getMany = exports.getOne = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var getOne = function getOne(model) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var id, document;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = req.params.id;
                _context.next = 3;
                return model.findOne({
                  _id: id
                }).exec();

              case 3:
                document = _context.sent;

                if (document) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", res.status(404).end());

              case 6:
                res.status(200).json({
                  data: document
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

exports.getOne = getOne;

var getMany = function getMany(model) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        var document;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return model.find({}).exec();

              case 2:
                document = _context2.sent;

                if (document) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", res.status(404).end());

              case 5:
                res.status(200).json({
                  data: document
                });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};

exports.getMany = getMany;

var createOne = function createOne(model) {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(req, res) {
        var body, document;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                body = req.body;

                if (body) {
                  document = model.create(_objectSpread({}, body));
                  res.status(201).json({
                    data: document
                  });
                }

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x5, _x6) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
}; // export const updateOne = model => async (req, res) => {};
// export const removeOne = model => async (req, res) => {};


exports.createOne = createOne;

var crudControllers = function crudControllers(model) {
  return {
    getOne: getOne(model),
    getMany: getMany(model),
    createOne: createOne(model) //   updateOne: updateOne(model),
    //   removeOne: removeOne(model)

  };
};

exports.crudControllers = crudControllers;