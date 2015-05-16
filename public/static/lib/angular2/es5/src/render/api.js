System.register(["angular2/src/facade/lang", "angular2/src/facade/async", "angular2/src/facade/collection", "angular2/change_detection"], function($__export) {
  "use strict";
  var isPresent,
      Promise,
      List,
      Map,
      ASTWithSource,
      EventBinding,
      ElementBinder,
      DirectiveBinder,
      ProtoViewDto,
      DirectiveMetadata,
      RenderProtoViewRef,
      RenderViewRef,
      ViewDefinition,
      RenderCompiler,
      Renderer,
      EventDispatcher;
  return {
    setters: [function($__m) {
      isPresent = $__m.isPresent;
    }, function($__m) {
      Promise = $__m.Promise;
    }, function($__m) {
      List = $__m.List;
      Map = $__m.Map;
    }, function($__m) {
      ASTWithSource = $__m.ASTWithSource;
    }],
    execute: function() {
      EventBinding = (function() {
        function EventBinding(fullName, source) {
          this.fullName = fullName;
          this.source = source;
        }
        return ($traceurRuntime.createClass)(EventBinding, {}, {});
      }());
      $__export("EventBinding", EventBinding);
      Object.defineProperty(EventBinding, "parameters", {get: function() {
          return [[assert.type.string], [ASTWithSource]];
        }});
      ElementBinder = (function() {
        function ElementBinder($__1) {
          var $__2 = $__1,
              index = $__2.index,
              parentIndex = $__2.parentIndex,
              distanceToParent = $__2.distanceToParent,
              directives = $__2.directives,
              nestedProtoView = $__2.nestedProtoView,
              propertyBindings = $__2.propertyBindings,
              variableBindings = $__2.variableBindings,
              eventBindings = $__2.eventBindings,
              textBindings = $__2.textBindings,
              readAttributes = $__2.readAttributes;
          this.index = index;
          this.parentIndex = parentIndex;
          this.distanceToParent = distanceToParent;
          this.directives = directives;
          this.nestedProtoView = nestedProtoView;
          this.propertyBindings = propertyBindings;
          this.variableBindings = variableBindings;
          this.eventBindings = eventBindings;
          this.textBindings = textBindings;
          this.readAttributes = readAttributes;
        }
        return ($traceurRuntime.createClass)(ElementBinder, {}, {});
      }());
      $__export("ElementBinder", ElementBinder);
      DirectiveBinder = (function() {
        function DirectiveBinder($__1) {
          var $__2 = $__1,
              directiveIndex = $__2.directiveIndex,
              propertyBindings = $__2.propertyBindings,
              eventBindings = $__2.eventBindings,
              hostPropertyBindings = $__2.hostPropertyBindings;
          this.directiveIndex = directiveIndex;
          this.propertyBindings = propertyBindings;
          this.eventBindings = eventBindings;
          this.hostPropertyBindings = hostPropertyBindings;
        }
        return ($traceurRuntime.createClass)(DirectiveBinder, {}, {});
      }());
      $__export("DirectiveBinder", DirectiveBinder);
      ProtoViewDto = (function() {
        function ProtoViewDto() {
          var $__1 = arguments[0] !== (void 0) ? arguments[0] : {},
              render = $__1.render,
              elementBinders = $__1.elementBinders,
              variableBindings = $__1.variableBindings,
              type = $__1.type;
          this.render = render;
          this.elementBinders = elementBinders;
          this.variableBindings = variableBindings;
          this.type = type;
        }
        return ($traceurRuntime.createClass)(ProtoViewDto, {}, {
          get HOST_VIEW_TYPE() {
            return 0;
          },
          get COMPONENT_VIEW_TYPE() {
            return 1;
          },
          get EMBEDDED_VIEW_TYPE() {
            return 1;
          }
        });
      }());
      $__export("ProtoViewDto", ProtoViewDto);
      DirectiveMetadata = (function() {
        function DirectiveMetadata($__1) {
          var $__2 = $__1,
              id = $__2.id,
              selector = $__2.selector,
              compileChildren = $__2.compileChildren,
              hostListeners = $__2.hostListeners,
              hostProperties = $__2.hostProperties,
              hostAttributes = $__2.hostAttributes,
              hostActions = $__2.hostActions,
              properties = $__2.properties,
              readAttributes = $__2.readAttributes,
              type = $__2.type;
          this.id = id;
          this.selector = selector;
          this.compileChildren = isPresent(compileChildren) ? compileChildren : true;
          this.hostListeners = hostListeners;
          this.hostProperties = hostProperties;
          this.hostAttributes = hostAttributes;
          this.hostActions = hostActions;
          this.properties = properties;
          this.readAttributes = readAttributes;
          this.type = type;
        }
        return ($traceurRuntime.createClass)(DirectiveMetadata, {}, {
          get DIRECTIVE_TYPE() {
            return 0;
          },
          get COMPONENT_TYPE() {
            return 1;
          }
        });
      }());
      $__export("DirectiveMetadata", DirectiveMetadata);
      RenderProtoViewRef = (function() {
        function RenderProtoViewRef() {}
        return ($traceurRuntime.createClass)(RenderProtoViewRef, {}, {});
      }());
      $__export("RenderProtoViewRef", RenderProtoViewRef);
      RenderViewRef = (function() {
        function RenderViewRef() {}
        return ($traceurRuntime.createClass)(RenderViewRef, {}, {});
      }());
      $__export("RenderViewRef", RenderViewRef);
      ViewDefinition = (function() {
        function ViewDefinition($__1) {
          var $__2 = $__1,
              componentId = $__2.componentId,
              absUrl = $__2.absUrl,
              template = $__2.template,
              directives = $__2.directives;
          this.componentId = componentId;
          this.absUrl = absUrl;
          this.template = template;
          this.directives = directives;
        }
        return ($traceurRuntime.createClass)(ViewDefinition, {}, {});
      }());
      $__export("ViewDefinition", ViewDefinition);
      RenderCompiler = (function() {
        function RenderCompiler() {}
        return ($traceurRuntime.createClass)(RenderCompiler, {
          compileHost: function(componentId) {
            return null;
          },
          compile: function(template) {
            return null;
          }
        }, {});
      }());
      $__export("RenderCompiler", RenderCompiler);
      Object.defineProperty(RenderCompiler.prototype.compile, "parameters", {get: function() {
          return [[ViewDefinition]];
        }});
      Renderer = (function() {
        function Renderer() {}
        return ($traceurRuntime.createClass)(Renderer, {
          createInPlaceHostView: function(parentHostViewRef, hostElementSelector, hostProtoViewRef) {
            return null;
          },
          destroyInPlaceHostView: function(parentHostViewRef, hostViewRef) {},
          createView: function(protoViewRef) {
            return null;
          },
          destroyView: function(viewRef) {},
          attachComponentView: function(hostViewRef, elementIndex, componentViewRef) {},
          detachComponentView: function(hostViewRef, boundElementIndex, componentViewRef) {},
          attachViewInContainer: function(parentViewRef, boundElementIndex, atIndex, viewRef) {},
          detachViewInContainer: function(parentViewRef, boundElementIndex, atIndex, viewRef) {},
          hydrateView: function(viewRef) {},
          dehydrateView: function(viewRef) {},
          setElementProperty: function(viewRef, elementIndex, propertyName, propertyValue) {},
          callAction: function(viewRef, elementIndex, actionExpression, actionArgs) {},
          setText: function(viewRef, textNodeIndex, text) {},
          setEventDispatcher: function(viewRef, dispatcher) {}
        }, {});
      }());
      $__export("Renderer", Renderer);
      Object.defineProperty(Renderer.prototype.createInPlaceHostView, "parameters", {get: function() {
          return [[RenderViewRef], [assert.type.string], [RenderProtoViewRef]];
        }});
      Object.defineProperty(Renderer.prototype.destroyInPlaceHostView, "parameters", {get: function() {
          return [[RenderViewRef], [RenderViewRef]];
        }});
      Object.defineProperty(Renderer.prototype.createView, "parameters", {get: function() {
          return [[RenderProtoViewRef]];
        }});
      Object.defineProperty(Renderer.prototype.destroyView, "parameters", {get: function() {
          return [[RenderViewRef]];
        }});
      Object.defineProperty(Renderer.prototype.attachComponentView, "parameters", {get: function() {
          return [[RenderViewRef], [assert.type.number], [RenderViewRef]];
        }});
      Object.defineProperty(Renderer.prototype.detachComponentView, "parameters", {get: function() {
          return [[RenderViewRef], [assert.type.number], [RenderViewRef]];
        }});
      Object.defineProperty(Renderer.prototype.attachViewInContainer, "parameters", {get: function() {
          return [[RenderViewRef], [assert.type.number], [assert.type.number], [RenderViewRef]];
        }});
      Object.defineProperty(Renderer.prototype.detachViewInContainer, "parameters", {get: function() {
          return [[RenderViewRef], [assert.type.number], [assert.type.number], [RenderViewRef]];
        }});
      Object.defineProperty(Renderer.prototype.hydrateView, "parameters", {get: function() {
          return [[RenderViewRef]];
        }});
      Object.defineProperty(Renderer.prototype.dehydrateView, "parameters", {get: function() {
          return [[RenderViewRef]];
        }});
      Object.defineProperty(Renderer.prototype.setElementProperty, "parameters", {get: function() {
          return [[RenderViewRef], [assert.type.number], [assert.type.string], [assert.type.any]];
        }});
      Object.defineProperty(Renderer.prototype.callAction, "parameters", {get: function() {
          return [[RenderViewRef], [assert.type.number], [assert.type.string], [assert.type.any]];
        }});
      Object.defineProperty(Renderer.prototype.setText, "parameters", {get: function() {
          return [[RenderViewRef], [assert.type.number], [assert.type.string]];
        }});
      Object.defineProperty(Renderer.prototype.setEventDispatcher, "parameters", {get: function() {
          return [[RenderViewRef], [assert.type.any]];
        }});
      EventDispatcher = (function() {
        function EventDispatcher() {}
        return ($traceurRuntime.createClass)(EventDispatcher, {dispatchEvent: function(elementIndex, eventName, locals) {}}, {});
      }());
      $__export("EventDispatcher", EventDispatcher);
      Object.defineProperty(EventDispatcher.prototype.dispatchEvent, "parameters", {get: function() {
          return [[assert.type.number], [assert.type.string], [assert.genericType(Map, assert.type.string, assert.type.any)]];
        }});
    }
  };
});
//# sourceMappingURL=api.js.map

//# sourceMappingURL=../../src/render/api.js.map