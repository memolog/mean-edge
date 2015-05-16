"use strict";
Object.defineProperties(module.exports, {
  Component: {get: function() {
      return Component;
    }},
  Directive: {get: function() {
      return Directive;
    }},
  View: {get: function() {
      return View;
    }},
  Ancestor: {get: function() {
      return Ancestor;
    }},
  Parent: {get: function() {
      return Parent;
    }},
  Attribute: {get: function() {
      return Attribute;
    }},
  Query: {get: function() {
      return Query;
    }},
  __esModule: {value: true}
});
var $__annotations__,
    $__view__,
    $__visibility__,
    $__di__,
    $___46__46__47__46__46__47_util_47_decorators__;
var $__0 = ($__annotations__ = require("./annotations"), $__annotations__ && $__annotations__.__esModule && $__annotations__ || {default: $__annotations__}),
    ComponentAnnotation = $__0.ComponentAnnotation,
    DirectiveAnnotation = $__0.DirectiveAnnotation;
var ViewAnnotation = ($__view__ = require("./view"), $__view__ && $__view__.__esModule && $__view__ || {default: $__view__}).ViewAnnotation;
var $__2 = ($__visibility__ = require("./visibility"), $__visibility__ && $__visibility__.__esModule && $__visibility__ || {default: $__visibility__}),
    AncestorAnnotation = $__2.AncestorAnnotation,
    ParentAnnotation = $__2.ParentAnnotation;
var $__3 = ($__di__ = require("./di"), $__di__ && $__di__.__esModule && $__di__ || {default: $__di__}),
    AttributeAnnotation = $__3.AttributeAnnotation,
    QueryAnnotation = $__3.QueryAnnotation;
var $__4 = ($___46__46__47__46__46__47_util_47_decorators__ = require("../../util/decorators"), $___46__46__47__46__46__47_util_47_decorators__ && $___46__46__47__46__46__47_util_47_decorators__.__esModule && $___46__46__47__46__46__47_util_47_decorators__ || {default: $___46__46__47__46__46__47_util_47_decorators__}),
    makeDecorator = $__4.makeDecorator,
    makeParamDecorator = $__4.makeParamDecorator;
var Component = makeDecorator(ComponentAnnotation);
var Directive = makeDecorator(DirectiveAnnotation);
var View = makeDecorator(ViewAnnotation);
var Ancestor = makeParamDecorator(AncestorAnnotation);
var Parent = makeParamDecorator(ParentAnnotation);
var Attribute = makeParamDecorator(AttributeAnnotation);
var Query = makeParamDecorator(QueryAnnotation);
//# sourceMappingURL=decorators.es6.map

//# sourceMappingURL=./decorators.map