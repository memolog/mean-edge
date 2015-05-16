System.register(["angular2/src/facade/async"], function($__export) {
  "use strict";
  var Promise,
      XHR;
  return {
    setters: [function($__m) {
      Promise = $__m.Promise;
    }],
    execute: function() {
      XHR = (function() {
        function XHR() {}
        return ($traceurRuntime.createClass)(XHR, {get: function(url) {
            return null;
          }}, {});
      }());
      $__export("XHR", XHR);
      Object.defineProperty(XHR.prototype.get, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
    }
  };
});
//# sourceMappingURL=xhr.js.map

//# sourceMappingURL=../../src/services/xhr.js.map