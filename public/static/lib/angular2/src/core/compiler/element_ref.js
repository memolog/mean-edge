"use strict";
Object.defineProperties(module.exports, {
  ElementRef: {get: function() {
      return ElementRef;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_lang__,
    $__view_95_ref__,
    $__angular2_47_src_47_render_47_dom_47_view_47_view__;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var normalizeBlank = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).normalizeBlank;
var ViewRef = ($__view_95_ref__ = require("./view_ref"), $__view_95_ref__ && $__view_95_ref__.__esModule && $__view_95_ref__ || {default: $__view_95_ref__}).ViewRef;
var resolveInternalDomView = ($__angular2_47_src_47_render_47_dom_47_view_47_view__ = require("angular2/src/render/dom/view/view"), $__angular2_47_src_47_render_47_dom_47_view_47_view__ && $__angular2_47_src_47_render_47_dom_47_view_47_view__.__esModule && $__angular2_47_src_47_render_47_dom_47_view_47_view__ || {default: $__angular2_47_src_47_render_47_dom_47_view_47_view__}).resolveInternalDomView;
var ElementRef = function ElementRef(parentView, boundElementIndex) {
  this.parentView = parentView;
  this.boundElementIndex = boundElementIndex;
};
($traceurRuntime.createClass)(ElementRef, {
  get domElement() {
    return resolveInternalDomView(this.parentView.render).boundElements[this.boundElementIndex];
  },
  getAttribute: function(name) {
    return normalizeBlank(DOM.getAttribute(this.domElement, name));
  }
}, {});
Object.defineProperty(ElementRef, "parameters", {get: function() {
    return [[ViewRef], [$traceurRuntime.type.number]];
  }});
Object.defineProperty(ElementRef.prototype.getAttribute, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
//# sourceMappingURL=element_ref.js.map

//# sourceMappingURL=./element_ref.map