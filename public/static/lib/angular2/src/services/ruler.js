"use strict";
Object.defineProperties(module.exports, {
  Rectangle: {get: function() {
      return Rectangle;
    }},
  Ruler: {get: function() {
      return Ruler;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_core_47_compiler_47_element_95_ref__;
var $__0 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    Promise = $__0.Promise,
    PromiseWrapper = $__0.PromiseWrapper;
var DomAdapter = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DomAdapter;
var ElementRef = ($__angular2_47_src_47_core_47_compiler_47_element_95_ref__ = require("angular2/src/core/compiler/element_ref"), $__angular2_47_src_47_core_47_compiler_47_element_95_ref__ && $__angular2_47_src_47_core_47_compiler_47_element_95_ref__.__esModule && $__angular2_47_src_47_core_47_compiler_47_element_95_ref__ || {default: $__angular2_47_src_47_core_47_compiler_47_element_95_ref__}).ElementRef;
var Rectangle = function Rectangle(left, top, width, height) {
  this.left = left;
  this.right = left + width;
  this.top = top;
  this.bottom = top + height;
  this.height = height;
  this.width = width;
};
($traceurRuntime.createClass)(Rectangle, {}, {});
var Ruler = function Ruler(domAdapter) {
  this.domAdapter = domAdapter;
};
($traceurRuntime.createClass)(Ruler, {measure: function(el) {
    var clntRect = this.domAdapter.getBoundingClientRect(el.domElement);
    return PromiseWrapper.resolve(new Rectangle(clntRect.left, clntRect.top, clntRect.width, clntRect.height));
  }}, {});
Object.defineProperty(Ruler, "parameters", {get: function() {
    return [[DomAdapter]];
  }});
Object.defineProperty(Ruler.prototype.measure, "parameters", {get: function() {
    return [[ElementRef]];
  }});
//# sourceMappingURL=ruler.js.map

//# sourceMappingURL=./ruler.map