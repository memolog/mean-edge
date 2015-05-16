"use strict";
Object.defineProperties(module.exports, {
  RouteRegistry: {get: function() {
      return RouteRegistry;
    }},
  __esModule: {value: true}
});
var $__route_95_recognizer__,
    $__instruction__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__,
    $__route_95_config_95_impl__,
    $__angular2_47_src_47_reflection_47_reflection__;
var RouteRecognizer = ($__route_95_recognizer__ = require("./route_recognizer"), $__route_95_recognizer__ && $__route_95_recognizer__.__esModule && $__route_95_recognizer__ || {default: $__route_95_recognizer__}).RouteRecognizer;
var $__1 = ($__instruction__ = require("./instruction"), $__instruction__ && $__instruction__.__esModule && $__instruction__ || {default: $__instruction__}),
    Instruction = $__1.Instruction,
    noopInstruction = $__1.noopInstruction;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__2.List,
    ListWrapper = $__2.ListWrapper,
    Map = $__2.Map,
    MapWrapper = $__2.MapWrapper,
    StringMap = $__2.StringMap,
    StringMapWrapper = $__2.StringMapWrapper;
var $__3 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__3.isPresent,
    isBlank = $__3.isBlank,
    isType = $__3.isType,
    StringWrapper = $__3.StringWrapper,
    BaseException = $__3.BaseException;
var RouteConfig = ($__route_95_config_95_impl__ = require("./route_config_impl"), $__route_95_config_95_impl__ && $__route_95_config_95_impl__.__esModule && $__route_95_config_95_impl__ || {default: $__route_95_config_95_impl__}).RouteConfig;
var reflector = ($__angular2_47_src_47_reflection_47_reflection__ = require("angular2/src/reflection/reflection"), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}).reflector;
var RouteRegistry = function RouteRegistry() {
  this._rules = MapWrapper.create();
};
($traceurRuntime.createClass)(RouteRegistry, {
  config: function(parentComponent, config) {
    var $__6 = this;
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
      $__6.configFromComponent(component);
    }));
    recognizer.addConfig(config['path'], config, config['as']);
  },
  configFromComponent: function(component) {
    var $__6 = this;
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
            $__6.config(component, config);
          }));
        }
      }
    }
  },
  recognize: function(url, parentComponent) {
    var $__6 = this;
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
        var childInstruction = $__6.recognize(candidate['unmatchedUrl'], component);
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
Object.defineProperty(RouteRegistry.prototype.recognize, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], []];
  }});
Object.defineProperty(RouteRegistry.prototype.generate, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.any], []];
  }});
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
Object.defineProperty(normalizeConfig, "parameters", {get: function() {
    return [[StringMap]];
  }});
//# sourceMappingURL=route_registry.js.map

//# sourceMappingURL=./route_registry.map