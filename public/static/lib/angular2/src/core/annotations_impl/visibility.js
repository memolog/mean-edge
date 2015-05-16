"use strict";
Object.defineProperties(module.exports, {
  Parent: {get: function() {
      return Parent;
    }},
  Ancestor: {get: function() {
      return Ancestor;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_di_47_annotations_95_impl__;
var CONST = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).CONST;
var DependencyAnnotation = ($__angular2_47_src_47_di_47_annotations_95_impl__ = require("angular2/src/di/annotations_impl"), $__angular2_47_src_47_di_47_annotations_95_impl__ && $__angular2_47_src_47_di_47_annotations_95_impl__.__esModule && $__angular2_47_src_47_di_47_annotations_95_impl__ || {default: $__angular2_47_src_47_di_47_annotations_95_impl__}).DependencyAnnotation;
var Parent = function Parent() {
  $traceurRuntime.superConstructor($Parent).call(this);
};
var $Parent = Parent;
($traceurRuntime.createClass)(Parent, {}, {}, DependencyAnnotation);
Object.defineProperty(Parent, "annotations", {get: function() {
    return [new CONST()];
  }});
var Ancestor = function Ancestor() {
  $traceurRuntime.superConstructor($Ancestor).call(this);
};
var $Ancestor = Ancestor;
($traceurRuntime.createClass)(Ancestor, {}, {}, DependencyAnnotation);
Object.defineProperty(Ancestor, "annotations", {get: function() {
    return [new CONST()];
  }});
//# sourceMappingURL=visibility.js.map

//# sourceMappingURL=./visibility.map