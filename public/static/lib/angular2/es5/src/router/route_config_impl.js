System.register(["angular2/src/facade/lang", "angular2/src/facade/collection"], function($__export) {
  "use strict";
  var CONST,
      List,
      Map,
      RouteConfig;
  return {
    setters: [function($__m) {
      CONST = $__m.CONST;
    }, function($__m) {
      List = $__m.List;
      Map = $__m.Map;
    }],
    execute: function() {
      RouteConfig = (function() {
        function RouteConfig(configs) {
          this.configs = configs;
        }
        return ($traceurRuntime.createClass)(RouteConfig, {}, {});
      }());
      $__export("RouteConfig", RouteConfig);
      Object.defineProperty(RouteConfig, "annotations", {get: function() {
          return [new CONST()];
        }});
      Object.defineProperty(RouteConfig, "parameters", {get: function() {
          return [[assert.genericType(List, Map)]];
        }});
    }
  };
});
//# sourceMappingURL=route_config_impl.js.map

//# sourceMappingURL=../../src/router/route_config_impl.js.map