"use strict";
Object.defineProperties(module.exports, {
  DirectiveMetadataReader: {get: function() {
      return DirectiveMetadataReader;
    }},
  __esModule: {value: true}
});
var $__angular2_47_di__,
    $__angular2_47_src_47_di_47_annotations_95_impl__,
    $__angular2_47_src_47_facade_47_lang__,
    $___46__46__47_annotations_95_impl_47_annotations__,
    $__directive_95_metadata__,
    $__angular2_47_src_47_reflection_47_reflection__;
var Injector = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).Injector;
var Injectable = ($__angular2_47_src_47_di_47_annotations_95_impl__ = require("angular2/src/di/annotations_impl"), $__angular2_47_src_47_di_47_annotations_95_impl__ && $__angular2_47_src_47_di_47_annotations_95_impl__.__esModule && $__angular2_47_src_47_di_47_annotations_95_impl__ || {default: $__angular2_47_src_47_di_47_annotations_95_impl__}).Injectable;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    Type = $__2.Type,
    isPresent = $__2.isPresent,
    BaseException = $__2.BaseException,
    stringify = $__2.stringify;
var $__3 = ($___46__46__47_annotations_95_impl_47_annotations__ = require("../annotations_impl/annotations"), $___46__46__47_annotations_95_impl_47_annotations__ && $___46__46__47_annotations_95_impl_47_annotations__.__esModule && $___46__46__47_annotations_95_impl_47_annotations__ || {default: $___46__46__47_annotations_95_impl_47_annotations__}),
    Directive = $__3.Directive,
    Component = $__3.Component;
var DirectiveMetadata = ($__directive_95_metadata__ = require("./directive_metadata"), $__directive_95_metadata__ && $__directive_95_metadata__.__esModule && $__directive_95_metadata__ || {default: $__directive_95_metadata__}).DirectiveMetadata;
var reflector = ($__angular2_47_src_47_reflection_47_reflection__ = require("angular2/src/reflection/reflection"), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}).reflector;
var DirectiveMetadataReader = function DirectiveMetadataReader() {
  ;
};
($traceurRuntime.createClass)(DirectiveMetadataReader, {read: function(type) {
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
Object.defineProperty(DirectiveMetadataReader, "annotations", {get: function() {
    return [new Injectable()];
  }});
Object.defineProperty(DirectiveMetadataReader.prototype.read, "parameters", {get: function() {
    return [[Type]];
  }});
//# sourceMappingURL=directive_metadata_reader.js.map

//# sourceMappingURL=./directive_metadata_reader.map