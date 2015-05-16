System.register(["angular2/src/facade/lang", "angular2/src/dom/dom_adapter", "angular2/src/facade/collection", "./element_binder", "../util", "../../api"], function($__export) {
  "use strict";
  var isPresent,
      DOM,
      List,
      ElementBinder,
      NG_BINDING_CLASS,
      RenderProtoViewRef,
      DomProtoViewRef,
      DomProtoView;
  function resolveInternalDomProtoView(protoViewRef) {
    var domProtoViewRef = protoViewRef;
    return domProtoViewRef._protoView;
  }
  $__export("resolveInternalDomProtoView", resolveInternalDomProtoView);
  return {
    setters: [function($__m) {
      isPresent = $__m.isPresent;
    }, function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      List = $__m.List;
    }, function($__m) {
      ElementBinder = $__m.ElementBinder;
    }, function($__m) {
      NG_BINDING_CLASS = $__m.NG_BINDING_CLASS;
    }, function($__m) {
      RenderProtoViewRef = $__m.RenderProtoViewRef;
    }],
    execute: function() {
      Object.defineProperty(resolveInternalDomProtoView, "parameters", {get: function() {
          return [[RenderProtoViewRef]];
        }});
      DomProtoViewRef = (function($__super) {
        function DomProtoViewRef(protoView) {
          $traceurRuntime.superConstructor(DomProtoViewRef).call(this);
          this._protoView = protoView;
        }
        return ($traceurRuntime.createClass)(DomProtoViewRef, {}, {}, $__super);
      }(RenderProtoViewRef));
      $__export("DomProtoViewRef", DomProtoViewRef);
      Object.defineProperty(DomProtoViewRef, "parameters", {get: function() {
          return [[DomProtoView]];
        }});
      DomProtoView = (function() {
        function DomProtoView($__1) {
          var $__2 = $__1,
              elementBinders = $__2.elementBinders,
              element = $__2.element;
          this.element = element;
          this.elementBinders = elementBinders;
          this.isTemplateElement = DOM.isTemplateElement(this.element);
          this.rootBindingOffset = (isPresent(this.element) && DOM.hasClass(this.element, NG_BINDING_CLASS)) ? 1 : 0;
        }
        return ($traceurRuntime.createClass)(DomProtoView, {}, {});
      }());
      $__export("DomProtoView", DomProtoView);
    }
  };
});
//# sourceMappingURL=proto_view.js.map

//# sourceMappingURL=../../../../src/render/dom/view/proto_view.js.map