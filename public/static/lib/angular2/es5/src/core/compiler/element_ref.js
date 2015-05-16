System.register(["angular2/src/dom/dom_adapter", "angular2/src/facade/lang", "./view_ref", "angular2/src/render/dom/view/view"], function($__export) {
  "use strict";
  var DOM,
      normalizeBlank,
      ViewRef,
      resolveInternalDomView,
      ElementRef;
  return {
    setters: [function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      normalizeBlank = $__m.normalizeBlank;
    }, function($__m) {
      ViewRef = $__m.ViewRef;
    }, function($__m) {
      resolveInternalDomView = $__m.resolveInternalDomView;
    }],
    execute: function() {
      ElementRef = (function() {
        function ElementRef(parentView, boundElementIndex) {
          this.parentView = parentView;
          this.boundElementIndex = boundElementIndex;
        }
        return ($traceurRuntime.createClass)(ElementRef, {
          get domElement() {
            return resolveInternalDomView(this.parentView.render).boundElements[this.boundElementIndex];
          },
          getAttribute: function(name) {
            return normalizeBlank(DOM.getAttribute(this.domElement, name));
          }
        }, {});
      }());
      $__export("ElementRef", ElementRef);
      Object.defineProperty(ElementRef, "parameters", {get: function() {
          return [[ViewRef], [assert.type.number]];
        }});
      Object.defineProperty(ElementRef.prototype.getAttribute, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
    }
  };
});
//# sourceMappingURL=element_ref.js.map

//# sourceMappingURL=../../../src/core/compiler/element_ref.js.map