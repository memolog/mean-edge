"use strict";
Object.defineProperties(module.exports, {
  ElementBinder: {get: function() {
      return ElementBinder;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__element_95_injector__,
    $__element_95_injector__,
    $__angular2_47_src_47_facade_47_collection__,
    $__view__;
var $__0 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    int = $__0.int,
    isBlank = $__0.isBlank,
    isPresent = $__0.isPresent,
    BaseException = $__0.BaseException;
var eiModule = ($__element_95_injector__ = require("./element_injector"), $__element_95_injector__ && $__element_95_injector__.__esModule && $__element_95_injector__ || {default: $__element_95_injector__});
var DirectiveBinding = ($__element_95_injector__ = require("./element_injector"), $__element_95_injector__ && $__element_95_injector__.__esModule && $__element_95_injector__ || {default: $__element_95_injector__}).DirectiveBinding;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__2.List,
    StringMap = $__2.StringMap;
var viewModule = ($__view__ = require("./view"), $__view__ && $__view__.__esModule && $__view__ || {default: $__view__});
var ElementBinder = function ElementBinder(index, parent, distanceToParent, protoElementInjector, componentDirective) {
  if (isBlank(index)) {
    throw new BaseException('null index not allowed.');
  }
  this.protoElementInjector = protoElementInjector;
  this.componentDirective = componentDirective;
  this.parent = parent;
  this.index = index;
  this.distanceToParent = distanceToParent;
  this.hostListeners = null;
  this.nestedProtoView = null;
};
var $ElementBinder = ElementBinder;
($traceurRuntime.createClass)(ElementBinder, {
  hasStaticComponent: function() {
    return isPresent(this.componentDirective) && isPresent(this.nestedProtoView);
  },
  hasDynamicComponent: function() {
    return isPresent(this.componentDirective) && isBlank(this.nestedProtoView);
  },
  hasEmbeddedProtoView: function() {
    return !isPresent(this.componentDirective) && isPresent(this.nestedProtoView);
  }
}, {});
Object.defineProperty(ElementBinder, "parameters", {get: function() {
    return [[int], [ElementBinder], [int], [eiModule.ProtoElementInjector], [DirectiveBinding]];
  }});
//# sourceMappingURL=element_binder.js.map

//# sourceMappingURL=./element_binder.map