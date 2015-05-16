System.register(["./route_recognizer", "./instruction", "angular2/src/facade/collection", "angular2/src/facade/lang", "./route_config_impl", "angular2/src/reflection/reflection"], function($__export) {
  "use strict";
  var RouteRecognizer,
      Instruction,
      noopInstruction,
      List,
      ListWrapper,
      Map,
      MapWrapper,
      StringMap,
      StringMapWrapper,
      isPresent,
      isBlank,
      isType,
      StringWrapper,
      BaseException,
      RouteConfig,
      reflector,
      RouteRegistry;
  function handlerToLeafInstructions(context, parentComponent) {
    var children = StringMapWrapper.create();
    StringMapWrapper.forEach(context['handler']['components'], (function(component, outletName) {
      children[outletName] = new Instruction({
        component: component,
        params: context['params']
      });
    }));
    return new Instruction({
      component: parentComponent,
      children: children,
      matchedUrl: context['matchedUrl']
    });
  }
  function normalizeConfig(config) {
    if (StringMapWrapper.contains(config, 'component')) {
      var component = StringMapWrapper.get(config, 'component');
      var components = StringMapWrapper.create();
      StringMapWrapper.set(components, 'default', component);
      var newConfig = StringMapWrapper.create();
      StringMapWrapper.set(newConfig, 'components', components);
      StringMapWrapper.forEach(config, (function(value, key) {
        if (!StringWrapper.equals(key, 'component') && !StringWrapper.equals(key, 'components')) {
          StringMapWrapper.set(newConfig, key, value);
        }
      }));
      return newConfig;
    }
    return config;
  }
  return {
    setters: [function($__m) {
      RouteRecognizer = $__m.RouteRecognizer;
    }, function($__m) {
      Instruction = $__m.Instruction;
      noopInstruction = $__m.noopInstruction;
    }, function($__m) {
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
      Map = $__m.Map;
      MapWrapper = $__m.MapWrapper;
      StringMap = $__m.StringMap;
      StringMapWrapper = $__m.StringMapWrapper;
    }, function($__m) {
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
      isType = $__m.isType;
      StringWrapper = $__m.StringWrapper;
      BaseException = $__m.BaseException;
    }, function($__m) {
      RouteConfig = $__m.RouteConfig;
    }, function($__m) {
      reflector = $__m.reflector;
    }],
    execute: function() {
      RouteRegistry = (function() {
        function RouteRegistry() {
          this._rules = MapWrapper.create();
        }
        return ($traceurRuntime.createClass)(RouteRegistry, {
          config: function(parentComponent, config) {
            var $__0 = this;
            if (!StringMapWrapper.contains(config, 'path')) {
              throw new BaseException('Route config does not contain "path"');
            }
            if (!StringMapWrapper.contains(config, 'component') && !StringMapWrapper.contains(config, 'components') && !StringMapWrapper.contains(config, 'redirectTo')) {
              throw new BaseException('Route config does not contain "component," "components," or "redirectTo"');
            }
            var recognizer;
            if (MapWrapper.contains(this._rules, parentComponent)) {
              recognizer = MapWrapper.get(this._rules, parentComponent);
            } else {
              recognizer = new RouteRecognizer();
              MapWrapper.set(this._rules, parentComponent, recognizer);
            }
            config = normalizeConfig(config);
            if (StringMapWrapper.contains(config, 'redirectTo')) {
              recognizer.addRedirect(StringMapWrapper.get(config, 'path'), StringMapWrapper.get(config, 'redirectTo'));
              return ;
            }
            var components = StringMapWrapper.get(config, 'components');
            StringMapWrapper.forEach(components, (function(component, _) {
              $__0.configFromComponent(component);
            }));
            recognizer.addConfig(config['path'], config, config['as']);
          },
          configFromComponent: function(component) {
            var $__0 = this;
            if (!isType(component)) {
              return ;
            }
            if (MapWrapper.contains(this._rules, component)) {
              return ;
            }
            var annotations = reflector.annotations(component);
            if (isPresent(annotations)) {
              for (var i = 0; i < annotations.length; i++) {
                var annotation = annotations[i];
                if (annotation instanceof RouteConfig) {
                  ListWrapper.forEach(annotation.configs, (function(config) {
                    $__0.config(component, config);
                  }));
                }
              }
            }
          },
          recognize: function(url, parentComponent) {
            var $__0 = this;
            var componentRecognizer = MapWrapper.get(this._rules, parentComponent);
            if (isBlank(componentRecognizer)) {
              return null;
            }
            var solutions = componentRecognizer.recognize(url);
            for (var i = 0; i < solutions.length; i++) {
              var candidate = solutions[i];
              if (candidate['unmatchedUrl'].length == 0) {
                return handlerToLeafInstructions(candidate, parentComponent);
              }
              var children = StringMapWrapper.create(),
                  allMapped = true;
              StringMapWrapper.forEach(candidate['handler']['components'], (function(component, name) {
                if (!allMapped) {
                  return ;
                }
                var childInstruction = $__0.recognize(candidate['unmatchedUrl'], component);
                if (isPresent(childInstruction)) {
                  childInstruction.params = candidate['params'];
                  children[name] = childInstruction;
                } else {
                  allMapped = false;
                }
              }));
              if (allMapped) {
                return new Instruction({
                  component: parentComponent,
                  children: children,
                  matchedUrl: candidate['matchedUrl']
                });
              }
            }
            return null;
          },
          generate: function(name, params, hostComponent) {
            var componentRecognizer = MapWrapper.get(this._rules, hostComponent);
            if (isPresent(componentRecognizer)) {
              return componentRecognizer.generate(name, params);
            }
          }
        }, {});
      }());
      $__export("RouteRegistry", RouteRegistry);
      Object.defineProperty(RouteRegistry.prototype.recognize, "parameters", {get: function() {
          return [[assert.type.string], []];
        }});
      Object.defineProperty(RouteRegistry.prototype.generate, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.any], []];
        }});
      Object.defineProperty(normalizeConfig, "parameters", {get: function() {
          return [[StringMap]];
        }});
    }
  };
});
//# sourceMappingURL=route_registry.js.map

//# sourceMappingURL=../../src/router/route_registry.js.map