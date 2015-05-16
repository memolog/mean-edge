"use strict";
Object.defineProperties(module.exports, {
  directiveMetadataToMap: {get: function() {
      return directiveMetadataToMap;
    }},
  directiveMetadataFromMap: {get: function() {
      return directiveMetadataFromMap;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_render_47_api__;
var $__0 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__0.ListWrapper,
    MapWrapper = $__0.MapWrapper;
var isPresent = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isPresent;
var DirectiveMetadata = ($__angular2_47_src_47_render_47_api__ = require("angular2/src/render/api"), $__angular2_47_src_47_render_47_api__ && $__angular2_47_src_47_render_47_api__.__esModule && $__angular2_47_src_47_render_47_api__ || {default: $__angular2_47_src_47_render_47_api__}).DirectiveMetadata;
function directiveMetadataToMap(meta) {
  return MapWrapper.createFromPairs([['id', meta.id], ['selector', meta.selector], ['compileChildren', meta.compileChildren], ['hostListeners', _cloneIfPresent(meta.hostListeners)], ['hostProperties', _cloneIfPresent(meta.hostProperties)], ['hostAttributes', _cloneIfPresent(meta.hostAttributes)], ['hostActions', _cloneIfPresent(meta.hostActions)], ['properties', _cloneIfPresent(meta.properties)], ['readAttributes', _cloneIfPresent(meta.readAttributes)], ['type', meta.type], ['version', 1]]);
}
Object.defineProperty(directiveMetadataToMap, "parameters", {get: function() {
    return [[DirectiveMetadata]];
  }});
function directiveMetadataFromMap(map) {
  return new DirectiveMetadata({
    id: MapWrapper.get(map, 'id'),
    selector: MapWrapper.get(map, 'selector'),
    compileChildren: MapWrapper.get(map, 'compileChildren'),
    hostListeners: _cloneIfPresent(MapWrapper.get(map, 'hostListeners')),
    hostProperties: _cloneIfPresent(MapWrapper.get(map, 'hostProperties')),
    hostActions: _cloneIfPresent(MapWrapper.get(map, 'hostActions')),
    hostAttributes: _cloneIfPresent(MapWrapper.get(map, 'hostAttributes')),
    properties: _cloneIfPresent(MapWrapper.get(map, 'properties')),
    readAttributes: _cloneIfPresent(MapWrapper.get(map, 'readAttributes')),
    type: MapWrapper.get(map, 'type')
  });
}
Object.defineProperty(directiveMetadataFromMap, "parameters", {get: function() {
    return [[Map]];
  }});
function _cloneIfPresent(o) {
  if (!isPresent(o))
    return null;
  return ListWrapper.isList(o) ? ListWrapper.clone(o) : MapWrapper.clone(o);
}
//# sourceMappingURL=convert.js.map

//# sourceMappingURL=./convert.map