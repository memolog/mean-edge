"use strict";
Object.defineProperties(module.exports, {
  resolveInternalDomView: {get: function() {
      return resolveInternalDomView;
    }},
  DomViewRef: {get: function() {
      return DomViewRef;
    }},
  DomView: {get: function() {
      return DomView;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_change_95_detection__,
    $__angular2_47_src_47_facade_47_lang__,
    $__view_95_container__,
    $__proto_95_view__,
    $___46__46__47_shadow_95_dom_47_light_95_dom__,
    $___46__46__47_shadow_95_dom_47_content_95_tag__,
    $___46__46__47__46__46__47_api__;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__1.ListWrapper,
    MapWrapper = $__1.MapWrapper,
    Map = $__1.Map,
    StringMapWrapper = $__1.StringMapWrapper,
    List = $__1.List;
var Locals = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}).Locals;
var $__3 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    int = $__3.int,
    isPresent = $__3.isPresent,
    isBlank = $__3.isBlank,
    BaseException = $__3.BaseException;
var DomViewContainer = ($__view_95_container__ = require("./view_container"), $__view_95_container__ && $__view_95_container__.__esModule && $__view_95_container__ || {default: $__view_95_container__}).DomViewContainer;
var DomProtoView = ($__proto_95_view__ = require("./proto_view"), $__proto_95_view__ && $__proto_95_view__.__esModule && $__proto_95_view__ || {default: $__proto_95_view__}).DomProtoView;
var LightDom = ($___46__46__47_shadow_95_dom_47_light_95_dom__ = require("../shadow_dom/light_dom"), $___46__46__47_shadow_95_dom_47_light_95_dom__ && $___46__46__47_shadow_95_dom_47_light_95_dom__.__esModule && $___46__46__47_shadow_95_dom_47_light_95_dom__ || {default: $___46__46__47_shadow_95_dom_47_light_95_dom__}).LightDom;
var Content = ($___46__46__47_shadow_95_dom_47_content_95_tag__ = require("../shadow_dom/content_tag"), $___46__46__47_shadow_95_dom_47_content_95_tag__ && $___46__46__47_shadow_95_dom_47_content_95_tag__.__esModule && $___46__46__47_shadow_95_dom_47_content_95_tag__ || {default: $___46__46__47_shadow_95_dom_47_content_95_tag__}).Content;
var RenderViewRef = ($___46__46__47__46__46__47_api__ = require("../../api"), $___46__46__47__46__46__47_api__ && $___46__46__47__46__46__47_api__.__esModule && $___46__46__47__46__46__47_api__ || {default: $___46__46__47__46__46__47_api__}).RenderViewRef;
function resolveInternalDomView(viewRef) {
  var domViewRef = viewRef;
  return domViewRef._view;
}
Object.defineProperty(resolveInternalDomView, "parameters", {get: function() {
    return [[RenderViewRef]];
  }});
var DomViewRef = function DomViewRef(view) {
  $traceurRuntime.superConstructor($DomViewRef).call(this);
  this._view = view;
};
var $DomViewRef = DomViewRef;
($traceurRuntime.createClass)(DomViewRef, {}, {}, RenderViewRef);
Object.defineProperty(DomViewRef, "parameters", {get: function() {
    return [[DomView]];
  }});
var NG_BINDING_CLASS = 'ng-binding';
var DomView = function DomView(proto, rootNodes, boundTextNodes, boundElements, contentTags) {
  this.proto = proto;
  this.rootNodes = rootNodes;
  this.boundTextNodes = boundTextNodes;
  this.boundElements = boundElements;
  this.viewContainers = ListWrapper.createFixedSize(boundElements.length);
  this.contentTags = contentTags;
  this.lightDoms = ListWrapper.createFixedSize(boundElements.length);
  this.hostLightDom = null;
  this.hydrated = false;
  this.eventHandlerRemovers = [];
  this.eventDispatcher = null;
  this.shadowRoot = null;
};
($traceurRuntime.createClass)(DomView, {
  getDirectParentLightDom: function(boundElementIndex) {
    var binder = this.proto.elementBinders[boundElementIndex];
    var destLightDom = null;
    if (binder.parentIndex !== -1 && binder.distanceToParent === 1) {
      destLightDom = this.lightDoms[binder.parentIndex];
    }
    return destLightDom;
  },
  setElementProperty: function(elementIndex, propertyName, value) {
    var setter = MapWrapper.get(this.proto.elementBinders[elementIndex].propertySetters, propertyName);
    setter(this.boundElements[elementIndex], value);
  },
  callAction: function(elementIndex, actionExpression, actionArgs) {
    var binder = this.proto.elementBinders[elementIndex];
    var hostAction = MapWrapper.get(binder.hostActions, actionExpression);
    hostAction.eval(this.boundElements[elementIndex], this._localsWithAction(actionArgs));
  },
  _localsWithAction: function(action) {
    var map = MapWrapper.create();
    MapWrapper.set(map, '$action', action);
    return new Locals(null, map);
  },
  setText: function(textIndex, value) {
    DOM.setText(this.boundTextNodes[textIndex], value);
  },
  dispatchEvent: function(elementIndex, eventName, event) {
    var allowDefaultBehavior = true;
    if (isPresent(this.eventDispatcher)) {
      var evalLocals = MapWrapper.create();
      MapWrapper.set(evalLocals, '$event', event);
      allowDefaultBehavior = this.eventDispatcher.dispatchEvent(elementIndex, eventName, evalLocals);
      if (!allowDefaultBehavior) {
        event.preventDefault();
      }
    }
    return allowDefaultBehavior;
  }
}, {});
Object.defineProperty(DomView, "parameters", {get: function() {
    return [[DomProtoView], [List], [List], [List], [List]];
  }});
Object.defineProperty(DomView.prototype.getDirectParentLightDom, "parameters", {get: function() {
    return [[$traceurRuntime.type.number]];
  }});
Object.defineProperty(DomView.prototype.setElementProperty, "parameters", {get: function() {
    return [[$traceurRuntime.type.number], [$traceurRuntime.type.string], [$traceurRuntime.type.any]];
  }});
Object.defineProperty(DomView.prototype.callAction, "parameters", {get: function() {
    return [[$traceurRuntime.type.number], [$traceurRuntime.type.string], [$traceurRuntime.type.any]];
  }});
Object.defineProperty(DomView.prototype._localsWithAction, "parameters", {get: function() {
    return [[Object]];
  }});
Object.defineProperty(DomView.prototype.setText, "parameters", {get: function() {
    return [[$traceurRuntime.type.number], [$traceurRuntime.type.string]];
  }});
//# sourceMappingURL=view.js.map

//# sourceMappingURL=./view.map