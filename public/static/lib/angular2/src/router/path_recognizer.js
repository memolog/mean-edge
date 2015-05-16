"use strict";
Object.defineProperties(module.exports, {
  PathRecognizer: {get: function() {
      return PathRecognizer;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__url__;
var $__0 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    RegExp = $__0.RegExp,
    RegExpWrapper = $__0.RegExpWrapper,
    RegExpMatcherWrapper = $__0.RegExpMatcherWrapper,
    StringWrapper = $__0.StringWrapper,
    isPresent = $__0.isPresent,
    isBlank = $__0.isBlank,
    BaseException = $__0.BaseException;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    Map = $__1.Map,
    MapWrapper = $__1.MapWrapper,
    StringMap = $__1.StringMap,
    StringMapWrapper = $__1.StringMapWrapper,
    List = $__1.List,
    ListWrapper = $__1.ListWrapper;
var escapeRegex = ($__url__ = require("./url"), $__url__ && $__url__.__esModule && $__url__ || {default: $__url__}).escapeRegex;
var StaticSegment = function StaticSegment(string) {
  this.string = string;
  this.name = '';
  this.regex = escapeRegex(string);
};
($traceurRuntime.createClass)(StaticSegment, {generate: function(params) {
    return this.string;
  }}, {});
Object.defineProperty(StaticSegment, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
var DynamicSegment = function DynamicSegment(name) {
  this.name = name;
  this.regex = "([^/]+)";
};
($traceurRuntime.createClass)(DynamicSegment, {generate: function(params) {
    if (!StringMapWrapper.contains(params, this.name)) {
      throw new BaseException(("Route generator for '" + this.name + "' was not included in parameters passed."));
    }
    return StringMapWrapper.get(params, this.name);
  }}, {});
Object.defineProperty(DynamicSegment, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
Object.defineProperty(DynamicSegment.prototype.generate, "parameters", {get: function() {
    return [[StringMap]];
  }});
var StarSegment = function StarSegment(name) {
  this.name = name;
  this.regex = "(.+)";
};
($traceurRuntime.createClass)(StarSegment, {generate: function(params) {
    return StringMapWrapper.get(params, this.name);
  }}, {});
Object.defineProperty(StarSegment, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
Object.defineProperty(StarSegment.prototype.generate, "parameters", {get: function() {
    return [[StringMap]];
  }});
var paramMatcher = RegExpWrapper.create("^:([^\/]+)$");
var wildcardMatcher = RegExpWrapper.create("^\\*([^\/]+)$");
function parsePathString(route) {
  if (route[0] === "/") {
    route = StringWrapper.substring(route, 1);
  }
  var segments = splitBySlash(route);
  var results = ListWrapper.create();
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i],
        match = void 0;
    if (isPresent(match = RegExpWrapper.firstMatch(paramMatcher, segment))) {
      ListWrapper.push(results, new DynamicSegment(match[1]));
    } else if (isPresent(match = RegExpWrapper.firstMatch(wildcardMatcher, segment))) {
      ListWrapper.push(results, new StarSegment(match[1]));
    } else if (segment.length > 0) {
      ListWrapper.push(results, new StaticSegment(segment));
    }
  }
  return results;
}
Object.defineProperty(parsePathString, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
var SLASH_RE = RegExpWrapper.create('/');
function splitBySlash(url) {
  return StringWrapper.split(url, SLASH_RE);
}
Object.defineProperty(splitBySlash, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
var PathRecognizer = function PathRecognizer(path, handler) {
  this.handler = handler;
  this.segments = ListWrapper.create();
  var segments = parsePathString(path);
  var regexString = '^';
  ListWrapper.forEach(segments, (function(segment) {
    regexString += '/' + segment.regex;
  }));
  this.regex = RegExpWrapper.create(regexString);
  this.segments = segments;
};
($traceurRuntime.createClass)(PathRecognizer, {
  parseParams: function(url) {
    var params = StringMapWrapper.create();
    var urlPart = url;
    for (var i = 0; i < this.segments.length; i++) {
      var segment = this.segments[i];
      var match = RegExpWrapper.firstMatch(RegExpWrapper.create('/' + segment.regex), urlPart);
      urlPart = StringWrapper.substring(urlPart, match[0].length);
      if (segment.name.length > 0) {
        StringMapWrapper.set(params, segment.name, match[1]);
      }
    }
    return params;
  },
  generate: function(params) {
    return ListWrapper.join(ListWrapper.map(this.segments, (function(segment) {
      return '/' + segment.generate(params);
    })), '');
  }
}, {});
Object.defineProperty(PathRecognizer, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.any]];
  }});
Object.defineProperty(PathRecognizer.prototype.parseParams, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
Object.defineProperty(PathRecognizer.prototype.generate, "parameters", {get: function() {
    return [[StringMap]];
  }});
//# sourceMappingURL=path_recognizer.js.map

//# sourceMappingURL=./path_recognizer.map