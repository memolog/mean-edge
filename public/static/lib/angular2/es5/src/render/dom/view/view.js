System.register(["angular2/src/dom/dom_adapter", "angular2/src/facade/collection", "angular2/change_detection", "angular2/src/facade/lang", "./view_container", "./proto_view", "../shadow_dom/light_dom", "../shadow_dom/content_tag", "../../api"], function($__export) {
  "use strict";
  var DOM,
      ListWrapper,
      MapWrapper,
      Map,
      StringMapWrapper,
      List,
      Locals,
      int,
      isPresent,
      isBlank,
      BaseException,
      DomViewContainer,
      DomProtoView,
      LightDom,
      Content,
      RenderViewRef,
      DomViewRef,
      NG_BINDING_CLASS,
      DomView;
  function resolveInternalDomView(viewRef) {
    var domViewRef = viewRef;
    return domViewRef._view;
  }
  $__export("resolveInternalDomView", resolveInternalDomView);
  return {
    setters: [function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      ListWrapper = $__m.ListWrapper;
      MapWrapper = $__m.MapWrapper;
      Map = $__m.Map;
      StringMapWrapper = $__m.StringMapWrapper;
      List = $__m.List;
    }, function($__m) {
      Locals = $__m.Locals;
    }, function($__m) {
      int = $__m.int;
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
      BaseException = $__m.BaseException;
    }, function($__m) {
      DomViewContainer = $__m.DomViewContainer;
    }, function($__m) {
      DomProtoView = $__m.DomProtoView;
    }, function($__m) {
      LightDom = $__m.LightDom;
    }, function($__m) {
      Content = $__m.Content;
    }, function($__m) {
      RenderViewRef = $__m.RenderViewRef;
    }],
    execute: function() {
      Object.defineProperty(resolveInternalDomView, "parameters", {get: function() {
          return [[RenderViewRef]];
        }});
      DomViewRef = (function($__super) {
        function DomViewRef(view) {
          $traceurRuntime.superConstructor(DomViewRef).call(this);
          this._view = view;
        }
        return ($traceurRuntime.createClass)(DomViewRef, {}, {}, $__super);
      }(RenderViewRef));
      $__export("DomViewRef", DomViewRef);
      Object.defineProperty(DomViewRef, "parameters", {get: function() {
          return [[DomView]];
        }});
      NG_BINDING_CLASS = 'ng-binding';
      DomView = (function() {
        function DomView(proto, rootNodes, boundTextNodes, boundElements, contentTags) {
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
        }
        return ($traceurRuntime.createClass)(DomView, {
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
      }());
      $__export("DomView", DomView);
      Object.defineProperty(DomView, "parameters", {get: function() {
          return [[DomProtoView], [List], [List], [List], [List]];
        }});
      Object.defineProperty(DomView.prototype.getDirectParentLightDom, "parameters", {get: function() {
          return [[assert.type.number]];
        }});
      Object.defineProperty(DomView.prototype.setElementProperty, "parameters", {get: function() {
          return [[assert.type.number], [assert.type.string], [assert.type.any]];
        }});
      Object.defineProperty(DomView.prototype.callAction, "parameters", {get: function() {
          return [[assert.type.number], [assert.type.string], [assert.type.any]];
        }});
      Object.defineProperty(DomView.prototype._localsWithAction, "parameters", {get: function() {
          return [[Object]];
        }});
      Object.defineProperty(DomView.prototype.setText, "parameters", {get: function() {
          return [[assert.type.number], [assert.type.string]];
        }});
    }
  };
});
//# sourceMappingURL=view.js.map

//# sourceMappingURL=../../../../src/render/dom/view/view.js.map