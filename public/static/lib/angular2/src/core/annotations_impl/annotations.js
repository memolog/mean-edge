"use strict";
Object.defineProperties(module.exports, {
  Directive: {get: function() {
      return Directive;
    }},
  Component: {get: function() {
      return Component;
    }},
  onDestroy: {get: function() {
      return onDestroy;
    }},
  onChange: {get: function() {
      return onChange;
    }},
  onAllChangesDone: {get: function() {
      return onAllChangesDone;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_di_47_annotations_95_impl__,
    $__angular2_47_change_95_detection__;
var $__0 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    CONST = $__0.CONST,
    normalizeBlank = $__0.normalizeBlank,
    isPresent = $__0.isPresent;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__1.ListWrapper,
    List = $__1.List;
var Injectable = ($__angular2_47_src_47_di_47_annotations_95_impl__ = require("angular2/src/di/annotations_impl"), $__angular2_47_src_47_di_47_annotations_95_impl__ && $__angular2_47_src_47_di_47_annotations_95_impl__.__esModule && $__angular2_47_src_47_di_47_annotations_95_impl__ || {default: $__angular2_47_src_47_di_47_annotations_95_impl__}).Injectable;
var DEFAULT = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}).DEFAULT;
var Directive = function Directive() {
  var $__6;
  var $__5 = arguments[0] !== (void 0) ? arguments[0] : {},
      selector = $__5.selector,
      properties = $__5.properties,
      events = $__5.events,
      hostListeners = $__5.hostListeners,
      hostProperties = $__5.hostProperties,
      hostAttributes = $__5.hostAttributes,
      hostActions = $__5.hostActions,
      lifecycle = $__5.lifecycle,
      compileChildren = ($__6 = $__5.compileChildren) === void 0 ? true : $__6;
  $traceurRuntime.superConstructor($Directive).call(this);
  this.selector = selector;
  this.properties = properties;
  this.events = events;
  this.hostListeners = hostListeners;
  this.hostProperties = hostProperties;
  this.hostAttributes = hostAttributes;
  this.hostActions = hostActions;
  this.lifecycle = lifecycle;
  this.compileChildren = compileChildren;
};
var $Directive = Directive;
($traceurRuntime.createClass)(Directive, {hasLifecycleHook: function(hook) {
    return isPresent(this.lifecycle) ? ListWrapper.contains(this.lifecycle, hook) : false;
  }}, {}, Injectable);
Object.defineProperty(Directive, "annotations", {get: function() {
    return [new CONST()];
  }});
Object.defineProperty(Directive.prototype.hasLifecycleHook, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
var Component = function Component() {
  var $__6,
      $__7;
  var $__5 = arguments[0] !== (void 0) ? arguments[0] : {},
      selector = $__5.selector,
      properties = $__5.properties,
      events = $__5.events,
      hostListeners = $__5.hostListeners,
      hostProperties = $__5.hostProperties,
      hostAttributes = $__5.hostAttributes,
      hostActions = $__5.hostActions,
      injectables = $__5.injectables,
      lifecycle = $__5.lifecycle,
      changeDetection = ($__6 = $__5.changeDetection) === void 0 ? DEFAULT : $__6,
      compileChildren = ($__7 = $__5.compileChildren) === void 0 ? true : $__7,
      publishAs = $__5.publishAs;
  $traceurRuntime.superConstructor($Component).call(this, {
    selector: selector,
    properties: properties,
    events: events,
    hostListeners: hostListeners,
    hostProperties: hostProperties,
    hostAttributes: hostAttributes,
    hostActions: hostActions,
    lifecycle: lifecycle,
    compileChildren: compileChildren
  });
  this.changeDetection = changeDetection;
  this.injectables = injectables;
  this.publishAs = publishAs;
};
var $Component = Component;
($traceurRuntime.createClass)(Component, {}, {}, Directive);
Object.defineProperty(Component, "annotations", {get: function() {
    return [new CONST()];
  }});
var onDestroy = "onDestroy";
var onChange = "onChange";
var onAllChangesDone = "onAllChangesDone";
//# sourceMappingURL=annotations.js.map

//# sourceMappingURL=./annotations.map