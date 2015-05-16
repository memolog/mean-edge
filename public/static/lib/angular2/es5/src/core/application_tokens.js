System.register(["angular2/di"], function($__export) {
  "use strict";
  var OpaqueToken,
      appComponentRefToken,
      appComponentAnnotatedTypeToken;
  return {
    setters: [function($__m) {
      OpaqueToken = $__m.OpaqueToken;
    }],
    execute: function() {
      appComponentRefToken = new OpaqueToken('ComponentRef');
      $__export("appComponentRefToken", appComponentRefToken);
      appComponentAnnotatedTypeToken = new OpaqueToken('AppComponentAnnotatedType');
      $__export("appComponentAnnotatedTypeToken", appComponentAnnotatedTypeToken);
    }
  };
});
//# sourceMappingURL=application_tokens.js.map

//# sourceMappingURL=../../src/core/application_tokens.js.map