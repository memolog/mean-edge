"use strict";
Object.defineProperties(module.exports, {
  Attribute: {get: function() {
      return Attribute;
    }},
  Query: {get: function() {
      return Query;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_di_47_annotations_95_impl__;
var CONST = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).CONST;
var DependencyAnnotation = ($__angular2_47_src_47_di_47_annotations_95_impl__ = require("angular2/src/di/annotations_impl"), $__angular2_47_src_47_di_47_annotations_95_impl__ && $__angular2_47_src_47_di_47_annotations_95_impl__.__esModule && $__angular2_47_src_47_di_47_annotations_95_impl__ || {default: $__angular2_47_src_47_di_47_annotations_95_impl__}).DependencyAnnotation;
var Attribute = function Attribute(attributeName) {
  $traceurRuntime.superConstructor($Attribute).call(this);
  this.attributeName = attributeName;
};
var $Attribute = Attribute;
($traceurRuntime.createClass)(Attribute, {get token() {
    return this;
  }}, {}, DependencyAnnotation);
Object.defineProperty(Attribute, "annotations", {get: function() {
    return [new CONST()];
  }});
var Query = function Query(directive) {
  $traceurRuntime.superConstructor($Query).call(this);
  this.directive = directive;
};
var $Query = Query;
($traceurRuntime.createClass)(Query, {}, {}, DependencyAnnotation);
Object.defineProperty(Query, "annotations", {get: function() {
    return [new CONST()];
  }});
//# sourceMappingURL=di.js.map

//# sourceMappingURL=./di.map