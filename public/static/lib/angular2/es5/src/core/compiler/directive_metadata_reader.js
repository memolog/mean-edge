System.register(["angular2/di", "angular2/src/di/annotations_impl", "angular2/src/facade/lang", "../annotations_impl/annotations", "./directive_metadata", "angular2/src/reflection/reflection"], function($__export) {
  "use strict";
  var Injector,
      Injectable,
      Type,
      isPresent,
      BaseException,
      stringify,
      Directive,
      Component,
      DirectiveMetadata,
      reflector,
      DirectiveMetadataReader;
  return {
    setters: [function($__m) {
      Injector = $__m.Injector;
    }, function($__m) {
      Injectable = $__m.Injectable;
    }, function($__m) {
      Type = $__m.Type;
      isPresent = $__m.isPresent;
      BaseException = $__m.BaseException;
      stringify = $__m.stringify;
    }, function($__m) {
      Directive = $__m.Directive;
      Component = $__m.Component;
    }, function($__m) {
      DirectiveMetadata = $__m.DirectiveMetadata;
    }, function($__m) {
      reflector = $__m.reflector;
    }],
    execute: function() {
      DirectiveMetadataReader = (function() {
        function DirectiveMetadataReader() {}
        return ($traceurRuntime.createClass)(DirectiveMetadataReader, {read: function(type) {
            var annotations = reflector.annotations(type);
            if (isPresent(annotations)) {
              for (var i = 0; i < annotations.length; i++) {
                var annotation = annotations[i];
                if (annotation instanceof Directive) {
                  var resolvedInjectables = null;
                  if (annotation instanceof Component && isPresent(annotation.injectables)) {
                    resolvedInjectables = Injector.resolve(annotation.injectables);
                  }
                  return new DirectiveMetadata(type, annotation, resolvedInjectables);
                }
              }
            }
            throw new BaseException(("No Directive annotation found on " + stringify(type)));
          }}, {});
      }());
      $__export("DirectiveMetadataReader", DirectiveMetadataReader);
      Object.defineProperty(DirectiveMetadataReader, "annotations", {get: function() {
          return [new Injectable()];
        }});
      Object.defineProperty(DirectiveMetadataReader.prototype.read, "parameters", {get: function() {
          return [[Type]];
        }});
    }
  };
});
//# sourceMappingURL=directive_metadata_reader.js.map

//# sourceMappingURL=../../../src/core/compiler/directive_metadata_reader.js.map