System.register(["angular2/src/facade/async", "angular2/src/facade/collection", "angular2/src/facade/lang", "./route_registry", "./pipeline", "./instruction", "./router_outlet", "./location"], function($__export) {
  "use strict";
  var Promise,
      PromiseWrapper,
      EventEmitter,
      ObservableWrapper,
      Map,
      MapWrapper,
      List,
      ListWrapper,
      isBlank,
      isPresent,
      Type,
      RouteRegistry,
      Pipeline,
      Instruction,
      RouterOutlet,
      Location,
      Router,
      RootRouter,
      ChildRouter;
  function mapObjAsync(obj, fn) {
    return PromiseWrapper.all(mapObj(obj, fn));
  }
  function mapObj(obj, fn) {
    var result = ListWrapper.create();
    MapWrapper.forEach(obj, (function(value, key) {
      return ListWrapper.push(result, fn(value, key));
    }));
    return result;
  }
  return {
    setters: [function($__m) {
      Promise = $__m.Promise;
      PromiseWrapper = $__m.PromiseWrapper;
      EventEmitter = $__m.EventEmitter;
      ObservableWrapper = $__m.ObservableWrapper;
    }, function($__m) {
      Map = $__m.Map;
      MapWrapper = $__m.MapWrapper;
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      isBlank = $__m.isBlank;
      isPresent = $__m.isPresent;
      Type = $__m.Type;
    }, function($__m) {
      RouteRegistry = $__m.RouteRegistry;
    }, function($__m) {
      Pipeline = $__m.Pipeline;
    }, function($__m) {
      Instruction = $__m.Instruction;
    }, function($__m) {
      RouterOutlet = $__m.RouterOutlet;
    }, function($__m) {
      Location = $__m.Location;
    }],
    execute: function() {
      Router = (function() {
        function Router(registry, pipeline, location, parent, hostComponent) {
          this.hostComponent = hostComponent;
          this.navigating = false;
          this.parent = parent;
          this.previousUrl = null;
          this._outlets = MapWrapper.create();
          this._children = MapWrapper.create();
          this._location = location;
          this._registry = registry;
          this._pipeline = pipeline;
          this._subject = new EventEmitter();
          this._currentInstruction = null;
        }
        return ($traceurRuntime.createClass)(Router, {
          childRouter: function() {
            var outletName = arguments[0] !== (void 0) ? arguments[0] : 'default';
            if (!MapWrapper.contains(this._children, outletName)) {
              MapWrapper.set(this._children, outletName, new ChildRouter(this, outletName));
            }
            return MapWrapper.get(this._children, outletName);
          },
          registerOutlet: function(outlet) {
            var name = arguments[1] !== (void 0) ? arguments[1] : 'default';
            MapWrapper.set(this._outlets, name, outlet);
            if (isPresent(this._currentInstruction)) {
              var childInstruction = this._currentInstruction.getChildInstruction(name);
              return outlet.activate(childInstruction);
            }
            return PromiseWrapper.resolve(true);
          },
          config: function(config) {
            var $__0 = this;
            if (config instanceof List) {
              config.forEach((function(configObject) {
                $__0._registry.config($__0.hostComponent, configObject);
              }));
            } else {
              this._registry.config(this.hostComponent, config);
            }
            return this.renavigate();
          },
          navigate: function(url) {
            var $__0 = this;
            if (this.navigating) {
              return PromiseWrapper.resolve(true);
            }
            this.lastNavigationAttempt = url;
            var matchedInstruction = this.recognize(url);
            if (isBlank(matchedInstruction)) {
              return PromiseWrapper.resolve(false);
            }
            if (isPresent(this._currentInstruction)) {
              matchedInstruction.reuseComponentsFrom(this._currentInstruction);
            }
            matchedInstruction.router = this;
            this._startNavigating();
            var result = this._pipeline.process(matchedInstruction).then((function(_) {
              $__0._location.go(matchedInstruction.matchedUrl);
              ObservableWrapper.callNext($__0._subject, matchedInstruction.matchedUrl);
              $__0._finishNavigating();
              $__0._currentInstruction = matchedInstruction;
            }));
            PromiseWrapper.catchError(result, (function(_) {
              return $__0._finishNavigating();
            }));
            return result;
          },
          _startNavigating: function() {
            this.navigating = true;
          },
          _finishNavigating: function() {
            this.navigating = false;
          },
          subscribe: function(onNext) {
            ObservableWrapper.subscribe(this._subject, onNext);
          },
          activateOutlets: function(instruction) {
            return this._queryOutlets((function(outlet, name) {
              var childInstruction = instruction.getChildInstruction(name);
              if (childInstruction.reuse) {
                return PromiseWrapper.resolve(true);
              }
              return outlet.activate(childInstruction);
            })).then((function(_) {
              return instruction.mapChildrenAsync((function(instruction, _) {
                return instruction.router.activateOutlets(instruction);
              }));
            }));
          },
          traverseOutlets: function(fn) {
            var $__0 = this;
            return this._queryOutlets(fn).then((function(_) {
              return mapObjAsync($__0._children, (function(child, _) {
                return child.traverseOutlets(fn);
              }));
            }));
          },
          _queryOutlets: function(fn) {
            return mapObjAsync(this._outlets, fn);
          },
          recognize: function(url) {
            return this._registry.recognize(url, this.hostComponent);
          },
          renavigate: function() {
            var destination = isBlank(this.previousUrl) ? this.lastNavigationAttempt : this.previousUrl;
            if (this.navigating || isBlank(destination)) {
              return PromiseWrapper.resolve(false);
            }
            return this.navigate(destination);
          },
          generate: function(name, params) {
            return this._registry.generate(name, params, this.hostComponent);
          }
        }, {});
      }());
      $__export("Router", Router);
      Object.defineProperty(Router, "parameters", {get: function() {
          return [[RouteRegistry], [Pipeline], [Location], [Router], []];
        }});
      Object.defineProperty(Router.prototype.registerOutlet, "parameters", {get: function() {
          return [[RouterOutlet], []];
        }});
      Object.defineProperty(Router.prototype.config, "parameters", {get: function() {
          return [[assert.type.any]];
        }});
      Object.defineProperty(Router.prototype.navigate, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(Router.prototype.activateOutlets, "parameters", {get: function() {
          return [[Instruction]];
        }});
      Object.defineProperty(Router.prototype.recognize, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(Router.prototype.generate, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.any]];
        }});
      RootRouter = (function($__super) {
        function RootRouter(registry, pipeline, location, hostComponent) {
          var $__0;
          $traceurRuntime.superConstructor(RootRouter).call(this, registry, pipeline, location, null, hostComponent);
          this._location.subscribe(($__0 = this, function(change) {
            return $__0.navigate(change['url']);
          }));
          this._registry.configFromComponent(hostComponent);
          this.navigate(location.path());
        }
        return ($traceurRuntime.createClass)(RootRouter, {}, {}, $__super);
      }(Router));
      $__export("RootRouter", RootRouter);
      Object.defineProperty(RootRouter, "parameters", {get: function() {
          return [[RouteRegistry], [Pipeline], [Location], [Type]];
        }});
      ChildRouter = (function($__super) {
        function ChildRouter(parent, hostComponent) {
          $traceurRuntime.superConstructor(ChildRouter).call(this, parent._registry, parent._pipeline, parent._location, parent, hostComponent);
          this.parent = parent;
        }
        return ($traceurRuntime.createClass)(ChildRouter, {}, {}, $__super);
      }(Router));
      Object.defineProperty(ChildRouter, "parameters", {get: function() {
          return [[Router], []];
        }});
      Object.defineProperty(mapObjAsync, "parameters", {get: function() {
          return [[Map], []];
        }});
      Object.defineProperty(mapObj, "parameters", {get: function() {
          return [[Map], []];
        }});
    }
  };
});
//# sourceMappingURL=router.js.map

//# sourceMappingURL=../../src/router/router.js.map