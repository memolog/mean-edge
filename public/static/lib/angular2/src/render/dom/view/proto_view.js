"use strict";
Object.defineProperties(module.exports, {
  resolveInternalDomProtoView: {get: function() {
      return resolveInternalDomProtoView;
    }},
  DomProtoViewRef: {get: function() {
      return DomProtoViewRef;
    }},
  DomProtoView: {get: function() {
      return DomProtoView;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_collection__,
    $__element_95_binder__,
    $___46__46__47_util__,
    $___46__46__47__46__46__47_api__;
var isPresent = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isPresent;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var List = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).List;
var ElementBinder = ($__element_95_binder__ = require("./element_binder"), $__element_95_binder__ && $__element_95_binder__.__esModule && $__element_95_binder__ || {default: $__element_95_binder__}).ElementBinder;
var NG_BINDING_CLASS = ($___46__46__47_util__ = require("../util"), $___46__46__47_util__ && $___46__46__47_util__.__esModule && $___46__46__47_util__ || {default: $___46__46__47_util__}).NG_BINDING_CLASS;
var RenderProtoViewRef = ($___46__46__47__46__46__47_api__ = require("../../api"), $___46__46__47__46__46__47_api__ && $___46__46__47__46__46__47_api__.__esModule && $___46__46__47__46__46__47_api__ || {default: $___46__46__47__46__46__47_api__}).RenderProtoViewRef;
function resolveInternalDomProtoView(protoViewRef) {
  var domProtoViewRef = protoViewRef;
  return domProtoViewRef._protoView;
}
Object.defineProperty(resolveInternalDomProtoView, "parameters", {get: function() {
    return [[RenderProtoViewRef]];
  }});
var DomProtoViewRef = function DomProtoViewRef(protoView) {
  $traceurRuntime.superConstructor($DomProtoViewRef).call(this);
  this._protoView = protoView;
};
var $DomProtoViewRef = DomProtoViewRef;
($traceurRuntime.createClass)(DomProtoViewRef, {}, {}, RenderProtoViewRef);
Object.defineProperty(DomProtoViewRef, "parameters", {get: function() {
    return [[DomProtoView]];
  }});
var DomProtoView = function DomProtoView($__7) {
  var $__8 = $__7,
      elementBinders = $__8.elementBinders,
      element = $__8.element;
  this.element = element;
  this.elementBinders = elementBinders;
  this.isTemplateElement = DOM.isTemplateElement(this.element);
  this.rootBindingOffset = (isPresent(this.element) && DOM.hasClass(this.element, NG_BINDING_CLASS)) ? 1 : 0;
};
($traceurRuntime.createClass)(DomProtoView, {}, {});
//# sourceMappingURL=proto_view.js.map

//# sourceMappingURL=./proto_view.map