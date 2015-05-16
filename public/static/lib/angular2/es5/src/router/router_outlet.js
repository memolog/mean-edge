System.register(["angular2/src/facade/async", "angular2/src/facade/lang", "angular2/src/core/annotations_impl/annotations", "angular2/src/core/annotations_impl/di", "angular2/core", "angular2/di", "./router", "./instruction"], function($__export) {
  "use strict";
  var Promise,
      PromiseWrapper,
      isBlank,
      Directive,
      Attribute,
      Compiler,
      ViewContainerRef,
      Injector,
      bind,
      routerMod,
      Instruction,
      RouteParams,
      RouterOutlet;
  return {
    setters: [function($__m) {
      Promise = $__m.Promise;
      PromiseWrapper = $__m.PromiseWrapper;
    }, function($__m) {
      isBlank = $__m.isBlank;
    }, function($__m) {
      Directive = $__m.Directive;
    }, function($__m) {
      Attribute = $__m.Attribute;
    }, function($__m) {
      Compiler = $__m.Compiler;
      ViewContainerRef = $__m.ViewContainerRef;
    }, function($__m) {
      Injector = $__m.Injector;
      bind = $__m.bind;
    }, function($__m) {
      routerMod = $__m;
    }, function($__m) {
      Instruction = $__m.Instruction;
      RouteParams = $__m.RouteParams;
    }],
    execute: function() {
      RouterOutlet = (function() {
        function RouterOutlet(viewContainer, compiler, router, injector, nameAttr) {
          if (isBlank(nameAttr)) {
            nameAttr = 'default';
          }
          this._router = router;
          this._viewContainer = viewContainer;
          this._compiler = compiler;
          this._injector = injector;
          this._router.registerOutlet(this, nameAttr);
        }
        return ($traceurRuntime.createClass)(RouterOutlet, {
          activate: function(instruction) {
            var $__0 = this;
            return this._compiler.compileInHost(instruction.component).then((function(pv) {
              var outletInjector = $__0._injector.resolveAndCreateChild([bind(RouteParams).toValue(new RouteParams(instruction.params)), bind(routerMod.Router).toValue(instruction.router)]);
              $__0._viewContainer.clear();
              $__0._viewContainer.create(pv, 0, null, outletInjector);
            }));
          },
          canActivate: function(instruction) {
            return PromiseWrapper.resolve(true);
          },
          canDeactivate: function(instruction) {
            return PromiseWrapper.resolve(true);
          }
        }, {});
      }());
      $__export("RouterOutlet", RouterOutlet);
      Object.defineProperty(RouterOutlet, "annotations", {get: function() {
          return [new Directive({selector: 'router-outlet'})];
        }});
      Object.defineProperty(RouterOutlet, "parameters", {get: function() {
          return [[ViewContainerRef], [Compiler], [routerMod.Router], [Injector], [String, new Attribute('name')]];
        }});
      Object.defineProperty(RouterOutlet.prototype.activate, "parameters", {get: function() {
          return [[Instruction]];
        }});
      Object.defineProperty(RouterOutlet.prototype.canActivate, "parameters", {get: function() {
          return [[assert.type.any]];
        }});
      Object.defineProperty(RouterOutlet.prototype.canDeactivate, "parameters", {get: function() {
          return [[assert.type.any]];
        }});
    }
  };
});
//# sourceMappingURL=router_outlet.js.map

//# sourceMappingURL=../../src/router/router_outlet.js.map