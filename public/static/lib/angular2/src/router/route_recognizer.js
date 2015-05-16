"use strict";
Object.defineProperties(module.exports, {
  RouteRecognizer: {get: function() {
      return RouteRecognizer;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__path_95_recognizer__;
var $__0 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    RegExp = $__0.RegExp,
    RegExpWrapper = $__0.RegExpWrapper,
    StringWrapper = $__0.StringWrapper,
    isPresent = $__0.isPresent;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    Map = $__1.Map,
    MapWrapper = $__1.MapWrapper,
    List = $__1.List,
    ListWrapper = $__1.ListWrapper,
    StringMap = $__1.StringMap,
    StringMapWrapper = $__1.StringMapWrapper;
var PathRecognizer = ($__path_95_recognizer__ = require("./path_recognizer"), $__path_95_recognizer__ && $__path_95_recognizer__.__esModule && $__path_95_recognizer__ || {default: $__path_95_recognizer__}).PathRecognizer;
var RouteRecognizer = function RouteRecognizer() {
  this.names = MapWrapper.create();
  this.matchers = MapWrapper.create();
  this.redirects = MapWrapper.create();
};
($traceurRuntime.createClass)(RouteRecognizer, {
  addRedirect: function(path, target) {
    MapWrapper.set(this.redirects, path, target);
  },
  addConfig: function(path, handler) {
    var alias = arguments[2] !== (void 0) ? arguments[2] : null;
    var recognizer = new PathRecognizer(path, handler);
    MapWrapper.set(this.matchers, recognizer.regex, recognizer);
    if (isPresent(alias)) {
      MapWrapper.set(this.names, alias, recognizer);
    }
  },
  recognize: function(url) {
    var solutions = [];
    MapWrapper.forEach(this.redirects, (function(target, path) {
      if (StringWrapper.startsWith(url, path)) {
        url = target + StringWrapper.substring(url, path.length);
      }
    }));
    MapWrapper.forEach(this.matchers, (function(pathRecognizer, regex) {
      var match;
      if (isPresent(match = RegExpWrapper.firstMatch(regex, url))) {
        var solution = StringMapWrapper.create();
        StringMapWrapper.set(solution, 'handler', pathRecognizer.handler);
        StringMapWrapper.set(solution, 'params', pathRecognizer.parseParams(url));
        if (url == '/') {
          StringMapWrapper.set(solution, 'matchedUrl', '/');
          StringMapWrapper.set(solution, 'unmatchedUrl', '');
        } else {
          StringMapWrapper.set(solution, 'matchedUrl', match[0]);
          var unmatchedUrl = StringWrapper.substring(url, match[0].length);
          StringMapWrapper.set(solution, 'unmatchedUrl', unmatchedUrl);
        }
        ListWrapper.push(solutions, solution);
      }
    }));
    return solutions;
  },
  hasRoute: function(name) {
    return MapWrapper.contains(this.names, name);
  },
  generate: function(name, params) {
    var pathRecognizer = MapWrapper.get(this.names, name);
    return pathRecognizer.generate(params);
  }
}, {});
Object.defineProperty(RouteRecognizer.prototype.addRedirect, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.string]];
  }});
Object.defineProperty(RouteRecognizer.prototype.addConfig, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.any], [$traceurRuntime.type.string]];
  }});
Object.defineProperty(RouteRecognizer.prototype.recognize, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
Object.defineProperty(RouteRecognizer.prototype.hasRoute, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
Object.defineProperty(RouteRecognizer.prototype.generate, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.any]];
  }});
//# sourceMappingURL=route_recognizer.js.map

//# sourceMappingURL=./route_recognizer.map