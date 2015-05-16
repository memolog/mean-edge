System.register(["angular2/src/core/annotations_impl/annotations"], function($__export) {
  "use strict";
  var Directive,
      NonBindable;
  return {
    setters: [function($__m) {
      Directive = $__m.Directive;
    }],
    execute: function() {
      NonBindable = (function() {
        function NonBindable() {}
        return ($traceurRuntime.createClass)(NonBindable, {}, {});
      }());
      $__export("NonBindable", NonBindable);
      Object.defineProperty(NonBindable, "annotations", {get: function() {
          return [new Directive({
            selector: '[non-bindable]',
            compileChildren: false
          })];
        }});
    }
  };
});
//# sourceMappingURL=non_bindable.js.map

//# sourceMappingURL=../../src/directives/non_bindable.js.map