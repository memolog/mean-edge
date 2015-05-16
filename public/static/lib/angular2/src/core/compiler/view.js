"use strict";
Object.defineProperties(module.exports, {
  AppViewContainer: {get: function() {
      return AppViewContainer;
    }},
  AppView: {get: function() {
      return AppView;
    }},
  AppProtoView: {get: function() {
      return AppProtoView;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_change_95_detection__,
    $__element_95_injector__,
    $__element_95_binder__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_render_47_api__;
var $__0 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__0.ListWrapper,
    MapWrapper = $__0.MapWrapper,
    Map = $__0.Map,
    StringMapWrapper = $__0.StringMapWrapper,
    List = $__0.List;
var $__1 = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
    AST = $__1.AST,
    Locals = $__1.Locals,
    ChangeDispatcher = $__1.ChangeDispatcher,
    ProtoChangeDetector = $__1.ProtoChangeDetector,
    ChangeDetector = $__1.ChangeDetector,
    ChangeRecord = $__1.ChangeRecord,
    BindingRecord = $__1.BindingRecord,
    DirectiveRecord = $__1.DirectiveRecord,
    DirectiveIndex = $__1.DirectiveIndex,
    ChangeDetectorRef = $__1.ChangeDetectorRef;
var $__2 = ($__element_95_injector__ = require("./element_injector"), $__element_95_injector__ && $__element_95_injector__.__esModule && $__element_95_injector__ || {default: $__element_95_injector__}),
    ProtoElementInjector = $__2.ProtoElementInjector,
    ElementInjector = $__2.ElementInjector,
    PreBuiltObjects = $__2.PreBuiltObjects,
    DirectiveBinding = $__2.DirectiveBinding;
var ElementBinder = ($__element_95_binder__ = require("./element_binder"), $__element_95_binder__ && $__element_95_binder__.__esModule && $__element_95_binder__ || {default: $__element_95_binder__}).ElementBinder;
var $__4 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    IMPLEMENTS = $__4.IMPLEMENTS,
    int = $__4.int,
    isPresent = $__4.isPresent,
    isBlank = $__4.isBlank,
    BaseException = $__4.BaseException;
var renderApi = ($__angular2_47_src_47_render_47_api__ = require("angular2/src/render/api"), $__angular2_47_src_47_render_47_api__ && $__angular2_47_src_47_render_47_api__.__esModule && $__angular2_47_src_47_render_47_api__ || {default: $__angular2_47_src_47_render_47_api__});
var AppViewContainer = function AppViewContainer() {
  this.views = [];
};
($traceurRuntime.createClass)(AppViewContainer, {}, {});
var AppView = function AppView(renderer, proto, protoLocals) {
  this.render = null;
  this.proto = proto;
  this.changeDetector = null;
  this.elementInjectors = null;
  this.rootElementInjectors = null;
  this.componentChildViews = null;
  this.viewContainers = ListWrapper.createFixedSize(this.proto.elementBinders.length);
  this.preBuiltObjects = null;
  this.context = null;
  this.locals = new Locals(null, MapWrapper.clone(protoLocals));
  this.renderer = renderer;
  this.inPlaceHostViews = [];
};
var $AppView = AppView;
($traceurRuntime.createClass)(AppView, {
  init: function(changeDetector, elementInjectors, rootElementInjectors, preBuiltObjects, componentChildViews) {
    this.changeDetector = changeDetector;
    this.elementInjectors = elementInjectors;
    this.rootElementInjectors = rootElementInjectors;
    this.preBuiltObjects = preBuiltObjects;
    this.componentChildViews = componentChildViews;
  },
  setLocal: function(contextName, value) {
    if (!this.hydrated())
      throw new BaseException('Cannot set locals on dehydrated view.');
    if (!MapWrapper.contains(this.proto.variableBindings, contextName)) {
      return ;
    }
    var templateName = MapWrapper.get(this.proto.variableBindings, contextName);
    this.locals.set(templateName, value);
  },
  hydrated: function() {
    return isPresent(this.context);
  },
  triggerEventHandlers: function(eventName, eventObj, binderIndex) {
    var locals = MapWrapper.create();
    MapWrapper.set(locals, '$event', eventObj);
    this.dispatchEvent(binderIndex, eventName, locals);
  },
  notifyOnBinding: function(b, currentValue) {
    if (b.isElement()) {
      this.renderer.setElementProperty(this.render, b.elementIndex, b.propertyName, currentValue);
    } else {
      this.renderer.setText(this.render, b.elementIndex, currentValue);
    }
  },
  getDirectiveFor: function(directive) {
    var elementInjector = this.elementInjectors[directive.elementIndex];
    return elementInjector.getDirectiveAtIndex(directive.directiveIndex);
  },
  getDetectorFor: function(directive) {
    var childView = this.componentChildViews[directive.elementIndex];
    return isPresent(childView) ? childView.changeDetector : null;
  },
  callAction: function(elementIndex, actionExpression, action) {
    this.renderer.callAction(this.render, elementIndex, actionExpression, action);
  },
  dispatchEvent: function(elementIndex, eventName, locals) {
    var $__5 = this;
    var allowDefaultBehavior = true;
    if (this.hydrated()) {
      var elBinder = this.proto.elementBinders[elementIndex];
      if (isBlank(elBinder.hostListeners))
        return allowDefaultBehavior;
      var eventMap = elBinder.hostListeners[eventName];
      if (isBlank(eventMap))
        return allowDefaultBehavior;
      MapWrapper.forEach(eventMap, (function(expr, directiveIndex) {
        var context;
        if (directiveIndex === -1) {
          context = $__5.context;
        } else {
          context = $__5.elementInjectors[elementIndex].getDirectiveAtIndex(directiveIndex);
        }
        var result = expr.eval(context, new Locals($__5.locals, locals));
        if (isPresent(result)) {
          allowDefaultBehavior = allowDefaultBehavior && result;
        }
      }));
    }
    return allowDefaultBehavior;
  }
}, {});
Object.defineProperty(AppView, "annotations", {get: function() {
    return [new IMPLEMENTS(ChangeDispatcher)];
  }});
Object.defineProperty(AppView, "parameters", {get: function() {
    return [[renderApi.Renderer], [AppProtoView], [Map]];
  }});
Object.defineProperty(AppView.prototype.init, "parameters", {get: function() {
    return [[ChangeDetector], [List], [List], [List], [List]];
  }});
Object.defineProperty(AppView.prototype.setLocal, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], []];
  }});
Object.defineProperty(AppView.prototype.triggerEventHandlers, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [], [int]];
  }});
Object.defineProperty(AppView.prototype.notifyOnBinding, "parameters", {get: function() {
    return [[BindingRecord], [$traceurRuntime.type.any]];
  }});
Object.defineProperty(AppView.prototype.getDirectiveFor, "parameters", {get: function() {
    return [[DirectiveIndex]];
  }});
Object.defineProperty(AppView.prototype.getDetectorFor, "parameters", {get: function() {
    return [[DirectiveIndex]];
  }});
Object.defineProperty(AppView.prototype.callAction, "parameters", {get: function() {
    return [[$traceurRuntime.type.number], [$traceurRuntime.type.string], [Object]];
  }});
Object.defineProperty(AppView.prototype.dispatchEvent, "parameters", {get: function() {
    return [[$traceurRuntime.type.number], [$traceurRuntime.type.string], [$traceurRuntime.genericType(Map, $traceurRuntime.type.string, $traceurRuntime.type.any)]];
  }});
var AppProtoView = function AppProtoView(render, protoChangeDetector, variableBindings, protoLocals, variableNames) {
  this.render = render;
  this.elementBinders = [];
  this.variableBindings = variableBindings;
  this.protoLocals = protoLocals;
  this.variableNames = variableNames;
  this.protoChangeDetector = protoChangeDetector;
};
($traceurRuntime.createClass)(AppProtoView, {
  bindElement: function(parent, distanceToParent, protoElementInjector) {
    var componentDirective = arguments[3] !== (void 0) ? arguments[3] : null;
    var elBinder = new ElementBinder(this.elementBinders.length, parent, distanceToParent, protoElementInjector, componentDirective);
    ListWrapper.push(this.elementBinders, elBinder);
    return elBinder;
  },
  bindEvent: function(eventBindings, boundElementIndex) {
    var directiveIndex = arguments[2] !== (void 0) ? arguments[2] : -1;
    var elBinder = this.elementBinders[boundElementIndex];
    var events = elBinder.hostListeners;
    if (isBlank(events)) {
      events = StringMapWrapper.create();
      elBinder.hostListeners = events;
    }
    for (var i = 0; i < eventBindings.length; i++) {
      var eventBinding = eventBindings[i];
      var eventName = eventBinding.fullName;
      var event = StringMapWrapper.get(events, eventName);
      if (isBlank(event)) {
        event = MapWrapper.create();
        StringMapWrapper.set(events, eventName, event);
      }
      MapWrapper.set(event, directiveIndex, eventBinding.source);
    }
  }
}, {});
Object.defineProperty(AppProtoView, "parameters", {get: function() {
    return [[renderApi.RenderProtoViewRef], [ProtoChangeDetector], [Map], [Map], [List]];
  }});
Object.defineProperty(AppProtoView.prototype.bindElement, "parameters", {get: function() {
    return [[ElementBinder], [int], [ProtoElementInjector], [DirectiveBinding]];
  }});
Object.defineProperty(AppProtoView.prototype.bindEvent, "parameters", {get: function() {
    return [[$traceurRuntime.genericType(List, renderApi.EventBinding)], [$traceurRuntime.type.number], [int]];
  }});
//# sourceMappingURL=view.js.map

//# sourceMappingURL=./view.map