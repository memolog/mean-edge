"use strict";
Object.defineProperties(module.exports, {
  ElementBinder: {get: function() {
      return ElementBinder;
    }},
  Event: {get: function() {
      return Event;
    }},
  HostAction: {get: function() {
      return HostAction;
    }},
  __esModule: {value: true}
});
var $__angular2_47_change_95_detection__,
    $__angular2_47_src_47_reflection_47_types__,
    $__angular2_47_src_47_facade_47_collection__,
    $__proto_95_view__;
var AST = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}).AST;
var SetterFn = ($__angular2_47_src_47_reflection_47_types__ = require("angular2/src/reflection/types"), $__angular2_47_src_47_reflection_47_types__ && $__angular2_47_src_47_reflection_47_types__.__esModule && $__angular2_47_src_47_reflection_47_types__ || {default: $__angular2_47_src_47_reflection_47_types__}).SetterFn;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__2.List,
    ListWrapper = $__2.ListWrapper;
var protoViewModule = ($__proto_95_view__ = require("./proto_view"), $__proto_95_view__ && $__proto_95_view__.__esModule && $__proto_95_view__ || {default: $__proto_95_view__});
var ElementBinder = function ElementBinder() {
  var $__4 = arguments[0] !== (void 0) ? arguments[0] : {},
      textNodeIndices = $__4.textNodeIndices,
      contentTagSelector = $__4.contentTagSelector,
      nestedProtoView = $__4.nestedProtoView,
      componentId = $__4.componentId,
      eventLocals = $__4.eventLocals,
      localEvents = $__4.localEvents,
      globalEvents = $__4.globalEvents,
      hostActions = $__4.hostActions,
      parentIndex = $__4.parentIndex,
      distanceToParent = $__4.distanceToParent,
      propertySetters = $__4.propertySetters;
  this.textNodeIndices = textNodeIndices;
  this.contentTagSelector = contentTagSelector;
  this.nestedProtoView = nestedProtoView;
  this.componentId = componentId;
  this.eventLocals = eventLocals;
  this.localEvents = localEvents;
  this.globalEvents = globalEvents;
  this.hostActions = hostActions;
  this.parentIndex = parentIndex;
  this.distanceToParent = distanceToParent;
  this.propertySetters = propertySetters;
};
($traceurRuntime.createClass)(ElementBinder, {}, {});
var Event = function Event(name, target, fullName) {
  this.name = name;
  this.target = target;
  this.fullName = fullName;
};
($traceurRuntime.createClass)(Event, {}, {});
Object.defineProperty(Event, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.string], [$traceurRuntime.type.string]];
  }});
var HostAction = function HostAction(actionName, actionExpression, expression) {
  this.actionName = actionName;
  this.actionExpression = actionExpression;
  this.expression = expression;
};
($traceurRuntime.createClass)(HostAction, {}, {});
Object.defineProperty(HostAction, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.string], [AST]];
  }});
//# sourceMappingURL=element_binder.js.map

//# sourceMappingURL=./element_binder.map