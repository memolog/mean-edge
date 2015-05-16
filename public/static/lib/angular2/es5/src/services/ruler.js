System.register(["angular2/src/facade/async", "angular2/src/dom/dom_adapter", "angular2/src/core/compiler/element_ref"], function($__export) {
  "use strict";
  var Promise,
      PromiseWrapper,
      DomAdapter,
      ElementRef,
      Rectangle,
      Ruler;
  return {
    setters: [function($__m) {
      Promise = $__m.Promise;
      PromiseWrapper = $__m.PromiseWrapper;
    }, function($__m) {
      DomAdapter = $__m.DomAdapter;
    }, function($__m) {
      ElementRef = $__m.ElementRef;
    }],
    execute: function() {
      Rectangle = (function() {
        function Rectangle(left, top, width, height) {
          this.left = left;
          this.right = left + width;
          this.top = top;
          this.bottom = top + height;
          this.height = height;
          this.width = width;
        }
        return ($traceurRuntime.createClass)(Rectangle, {}, {});
      }());
      $__export("Rectangle", Rectangle);
      Ruler = (function() {
        function Ruler(domAdapter) {
          this.domAdapter = domAdapter;
        }
        return ($traceurRuntime.createClass)(Ruler, {measure: function(el) {
            var clntRect = this.domAdapter.getBoundingClientRect(el.domElement);
            return PromiseWrapper.resolve(new Rectangle(clntRect.left, clntRect.top, clntRect.width, clntRect.height));
          }}, {});
      }());
      $__export("Ruler", Ruler);
      Object.defineProperty(Ruler, "parameters", {get: function() {
          return [[DomAdapter]];
        }});
      Object.defineProperty(Ruler.prototype.measure, "parameters", {get: function() {
          return [[ElementRef]];
        }});
    }
  };
});
//# sourceMappingURL=ruler.js.map

//# sourceMappingURL=../../src/services/ruler.js.map