System.register([], function($__export) {
  "use strict";
  var OpaqueToken;
  return {
    setters: [],
    execute: function() {
      OpaqueToken = (function() {
        function OpaqueToken(desc) {
          this._desc = ("Token(" + desc + ")");
        }
        return ($traceurRuntime.createClass)(OpaqueToken, {toString: function() {
            return this._desc;
          }}, {});
      }());
      $__export("OpaqueToken", OpaqueToken);
    }
  };
});
//# sourceMappingURL=opaque_token.js.map

//# sourceMappingURL=../../src/di/opaque_token.js.map