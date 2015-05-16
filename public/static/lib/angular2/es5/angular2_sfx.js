System.register(["./angular2", "./router"], function($__export) {
  "use strict";
  var angular,
      router,
      _prevAngular;
  return {
    setters: [function($__m) {
      angular = $__m;
    }, function($__m) {
      router = $__m;
    }],
    execute: function() {
      angular.router = router;
      _prevAngular = window.angular;
      angular.noConflict = function() {
        window.angular = _prevAngular;
        return angular;
      };
      window.angular = angular;
    }
  };
});
//# sourceMappingURL=angular2_sfx.js.map

//# sourceMappingURL=angular2_sfx.js.map