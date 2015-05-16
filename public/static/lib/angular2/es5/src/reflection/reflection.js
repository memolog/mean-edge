System.register(["./reflector", "./reflection_capabilities"], function($__export) {
  "use strict";
  var Reflector,
      ReflectionCapabilities,
      __esModule,
      reflector;
  return {
    setters: [function($__m) {
      Reflector = $__m.Reflector;
      $__export("Reflector", $__m.Reflector);
    }, function($__m) {
      ReflectionCapabilities = $__m.ReflectionCapabilities;
    }],
    execute: function() {
      __esModule = true;
      $__export("__esModule", __esModule);
      reflector = new Reflector(new ReflectionCapabilities());
      $__export("reflector", reflector);
    }
  };
});
//# sourceMappingURL=reflection.js.map

//# sourceMappingURL=../../src/reflection/reflection.js.map