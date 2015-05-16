"use strict";
Object.defineProperties(module.exports, {
  CSSClass: {get: function() {
      return CSSClass;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_core_47_annotations_95_impl_47_annotations__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_core_47_compiler_47_element_95_ref__;
var Directive = ($__angular2_47_src_47_core_47_annotations_95_impl_47_annotations__ = require("angular2/src/core/annotations_impl/annotations"), $__angular2_47_src_47_core_47_annotations_95_impl_47_annotations__ && $__angular2_47_src_47_core_47_annotations_95_impl_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_95_impl_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_95_impl_47_annotations__}).Directive;
var isPresent = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isPresent;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var ElementRef = ($__angular2_47_src_47_core_47_compiler_47_element_95_ref__ = require("angular2/src/core/compiler/element_ref"), $__angular2_47_src_47_core_47_compiler_47_element_95_ref__ && $__angular2_47_src_47_core_47_compiler_47_element_95_ref__.__esModule && $__angular2_47_src_47_core_47_compiler_47_element_95_ref__ || {default: $__angular2_47_src_47_core_47_compiler_47_element_95_ref__}).ElementRef;
var CSSClass = function CSSClass(ngEl) {
  this._domEl = ngEl.domElement;
};
($traceurRuntime.createClass)(CSSClass, {
  _toggleClass: function(className, enabled) {
    if (enabled) {
      DOM.addClass(this._domEl, className);
    } else {
      DOM.removeClass(this._domEl, className);
    }
  },
  set iterableChanges(changes) {
    var $__4 = this;
    if (isPresent(changes)) {
      changes.forEachAddedItem((function(record) {
        $__4._toggleClass(record.key, record.currentValue);
      }));
      changes.forEachChangedItem((function(record) {
        $__4._toggleClass(record.key, record.currentValue);
      }));
      changes.forEachRemovedItem((function(record) {
        if (record.previousValue) {
          DOM.removeClass($__4._domEl, record.key);
        }
      }));
    }
  }
}, {});
Object.defineProperty(CSSClass, "annotations", {get: function() {
    return [new Directive({
      selector: '[class]',
      properties: {'iterableChanges': 'class | keyValDiff'}
    })];
  }});
Object.defineProperty(CSSClass, "parameters", {get: function() {
    return [[ElementRef]];
  }});
//# sourceMappingURL=class.js.map

//# sourceMappingURL=./class.map