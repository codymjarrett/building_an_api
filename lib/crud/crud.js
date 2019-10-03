"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crudControllers = exports.removeOne = exports.updateOne = exports.createOne = exports.getMany = exports.getOne = void 0;

var getOne = function getOne(model) {
  return function (req, res) {};
};

exports.getOne = getOne;

var getMany = function getMany(model) {
  return function (req, res) {};
};

exports.getMany = getMany;

var createOne = function createOne(model) {
  return function (req, res) {};
};

exports.createOne = createOne;

var updateOne = function updateOne(model) {
  return function (req, res) {};
};

exports.updateOne = updateOne;

var removeOne = function removeOne(model) {
  return function (req, res) {};
};

exports.removeOne = removeOne;

var crudControllers = function crudControllers(models) {
  return {
    getOne: getOne(model),
    getMany: getMany(model),
    createOne: createOne(model),
    updateOne: updateOne(model),
    removeOne: removeOne(model)
  };
};

exports.crudControllers = crudControllers;