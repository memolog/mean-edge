System.register(["./src/router/router", "./src/router/router_outlet", "./src/router/router_link", "./src/router/instruction", "./src/router/route_config_annotation", "./src/router/route_config_decorator", "./src/router/browser_location", "./src/router/route_registry", "./src/router/pipeline", "./src/router/location", "./src/core/application_tokens", "./di"], function($__export) {
  "use strict";
  var BrowserLocation,
      Router,
      RootRouter,
      RouteRegistry,
      Pipeline,
      Location,
      appComponentAnnotatedTypeToken,
      bind,
      routerInjectables;
  var $__exportNames = {
    routerInjectables: true,
    undefined: true
  };
  var $__exportNames = {
    routerInjectables: true,
    undefined: true
  };
  return {
    setters: [function($__m) {
      Router = $__m.Router;
      RootRouter = $__m.RootRouter;
      $__export("Router", $__m.Router);
    }, function($__m) {
      $__export("RouterOutlet", $__m.RouterOutlet);
    }, function($__m) {
      $__export("RouterLink", $__m.RouterLink);
    }, function($__m) {
      $__export("RouteParams", $__m.RouteParams);
    }, function($__m) {
      Object.keys($__m).forEach(function(p) {
        if (!$__exportNames[p])
          $__export(p, $__m[p]);
      });
    }, function($__m) {
      Object.keys($__m).forEach(function(p) {
        if (!$__exportNames[p])
          $__export(p, $__m[p]);
      });
    }, function($__m) {
      BrowserLocation = $__m.BrowserLocation;
    }, function($__m) {
      RouteRegistry = $__m.RouteRegistry;
    }, function($__m) {
      Pipeline = $__m.Pipeline;
    }, function($__m) {
      Location = $__m.Location;
    }, function($__m) {
      appComponentAnnotatedTypeToken = $__m.appComponentAnnotatedTypeToken;
    }, function($__m) {
      bind = $__m.bind;
    }],
    execute: function() {
      routerInjectables = [RouteRegistry, Pipeline, BrowserLocation, Location, bind(Router).toFactory((function(registry, pipeline, location, meta) {
        return new RootRouter(registry, pipeline, location, meta.type);
      }), [RouteRegistry, Pipeline, Location, appComponentAnnotatedTypeToken])];
      $__export("routerInjectables", routerInjectables);
    }
  };
});
//# sourceMappingURL=router.js.map

//# sourceMappingURL=router.js.map