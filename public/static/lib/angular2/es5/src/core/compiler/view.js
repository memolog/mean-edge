System.register(["angular2/src/facade/collection", "angular2/change_detection", "./element_injector", "./element_binder", "angular2/src/facade/lang", "angular2/src/render/api"], function($__export) {
  "use strict";
  var ListWrapper,
      MapWrapper,
      Map,
      StringMapWrapper,
      List,
      AST,
      Locals,
      ChangeDispatcher,
      ProtoChangeDetector,
      ChangeDetector,
      ChangeRecord,
      BindingRecord,
      DirectiveRecord,
      DirectiveIndex,
      ChangeDetectorRef,
      ProtoElementInjector,
      ElementInjector,
      PreBuiltObjects,
      DirectiveBinding,
      ElementBinder,
      IMPLEMENTS,
      int,
      isPresent,
      isBlank,
      BaseException,
      renderApi,
      AppViewContainer,
      AppView,
      AppProtoView;
  return {
    setters: [function($__m) {
      ListWrapper = $__m.ListWrapper;
      MapWrapper = $__m.MapWrapper;
      Map = $__m.Map;
      StringMapWrapper = $__m.StringMapWrapper;
      List = $__m.List;
    }, function($__m) {
      AST = $__m.AST;
      Locals = $__m.Locals;
      ChangeDispatcher = $__m.ChangeDispatcher;
      ProtoChangeDetector = $__m.ProtoChangeDetector;
      ChangeDetector = $__m.ChangeDetector;
      ChangeRecord = $__m.ChangeRecord;
      BindingRecord = $__m.BindingRecord;
      DirectiveRecord = $__m.DirectiveRecord;
      DirectiveIndex = $__m.DirectiveIndex;
      ChangeDetectorRef = $__m.ChangeDetectorRef;
    }, function($__m) {
      ProtoElementInjector = $__m.ProtoElementInjector;
      ElementInjector = $__m.ElementInjector;
      PreBuiltObjects = $__m.PreBuiltObjects;
      DirectiveBinding = $__m.DirectiveBinding;
    }, function($__m) {
      ElementBinder = $__m.ElementBinder;
    }, function($__m) {
      IMPLEMENTS = $__m.IMPLEMENTS;
      int = $__m.int;
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
      BaseException = $__m.BaseException;
    }, function($__m) {
      renderApi = $__m;
    }],
    execute: function() {
      AppViewContainer = (function() {
        function AppViewContainer() {
          this.views = [];
        }
        return ($traceurRuntime.createClass)(AppViewContainer, {}, {});
      }());
      $__export("AppViewContainer", AppViewContainer);
      AppView = (function() {
        function AppView(renderer, proto, protoLocals) {
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
        }
        return ($traceurRuntime.createClass)(AppView, {
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
            var $__0 = this;
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
                  context = $__0.context;
                } else {
                  context = $__0.elementInjectors[elementIndex].getDirectiveAtIndex(directiveIndex);
                }
                var result = expr.eval(context, new Locals($__0.locals, locals));
                if (isPresent(result)) {
                  allowDefaultBehavior = allowDefaultBehavior && result;
                }
              }));
            }
            return allowDefaultBehavior;
          }
        }, {});
      }());
      $__export("AppView", AppView);
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
          return [[assert.type.string], []];
        }});
      Object.defineProperty(AppView.prototype.triggerEventHandlers, "parameters", {get: function() {
          return [[assert.type.string], [], [int]];
        }});
      Object.defineProperty(AppView.prototype.notifyOnBinding, "parameters", {get: function() {
          return [[BindingRecord], [assert.type.any]];
        }});
      Object.defineProperty(AppView.prototype.getDirectiveFor, "parameters", {get: function() {
          return [[DirectiveIndex]];
        }});
      Object.defineProperty(AppView.prototype.getDetectorFor, "parameters", {get: function() {
          return [[DirectiveIndex]];
        }});
      Object.defineProperty(AppView.prototype.callAction, "parameters", {get: function() {
          return [[assert.type.number], [assert.type.string], [Object]];
        }});
      Object.defineProperty(AppView.prototype.dispatchEvent, "parameters", {get: function() {
          return [[assert.type.number], [assert.type.string], [assert.genericType(Map, assert.type.string, assert.type.any)]];
        }});
      AppProtoView = (function() {
        function AppProtoView(render, protoChangeDetector, variableBindings, protoLocals, variableNames) {
          this.render = render;
          this.elementBinders = [];
          this.variableBindings = variableBindings;
          this.protoLocals = protoLocals;
          this.variableNames = variableNames;
          this.protoChangeDetector = protoChangeDetector;
        }
        return ($traceurRuntime.createClass)(AppProtoView, {
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
      }());
      $__export("AppProtoView", AppProtoView);
      Object.defineProperty(AppProtoView, "parameters", {get: function() {
          return [[renderApi.RenderProtoViewRef], [ProtoChangeDetector], [Map], [Map], [List]];
        }});
      Object.defineProperty(AppProtoView.prototype.bindElement, "parameters", {get: function() {
          return [[ElementBinder], [int], [ProtoElementInjector], [DirectiveBinding]];
        }});
      Object.defineProperty(AppProtoView.prototype.bindEvent, "parameters", {get: function() {
          return [[assert.genericType(List, renderApi.EventBinding)], [assert.type.number], [int]];
        }});
    }
  };
});
//# sourceMappingURL=view.js.map

//# sourceMappingURL=../../../src/core/compiler/view.js.map