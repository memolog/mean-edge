System.register(["angular2/src/facade/collection", "angular2/src/facade/lang", "angular2/src/render/api"], function($__export) {
  "use strict";
  var ListWrapper,
      MapWrapper,
      isPresent,
      DirectiveMetadata;
  function directiveMetadataToMap(meta) {
    return MapWrapper.createFromPairs([['id', meta.id], ['selector', meta.selector], ['compileChildren', meta.compileChildren], ['hostListeners', _cloneIfPresent(meta.hostListeners)], ['hostProperties', _cloneIfPresent(meta.hostProperties)], ['hostAttributes', _cloneIfPresent(meta.hostAttributes)], ['hostActions', _cloneIfPresent(meta.hostActions)], ['properties', _cloneIfPresent(meta.properties)], ['readAttributes', _cloneIfPresent(meta.readAttributes)], ['type', meta.type], ['version', 1]]);
  }
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
  function _cloneIfPresent(o) {
    if (!isPresent(o))
      return null;
    return ListWrapper.isList(o) ? ListWrapper.clone(o) : MapWrapper.clone(o);
  }
  $__export("directiveMetadataToMap", directiveMetadataToMap);
  $__export("directiveMetadataFromMap", directiveMetadataFromMap);
  return {
    setters: [function($__m) {
      ListWrapper = $__m.ListWrapper;
      MapWrapper = $__m.MapWrapper;
    }, function($__m) {
      isPresent = $__m.isPresent;
    }, function($__m) {
      DirectiveMetadata = $__m.DirectiveMetadata;
    }],
    execute: function() {
      Object.defineProperty(directiveMetadataToMap, "parameters", {get: function() {
          return [[DirectiveMetadata]];
        }});
      Object.defineProperty(directiveMetadataFromMap, "parameters", {get: function() {
          return [[Map]];
        }});
    }
  };
});
//# sourceMappingURL=convert.js.map

//# sourceMappingURL=../../../src/render/dom/convert.js.map