System.register(["angular2/src/facade/lang", "./element_injector", "angular2/src/facade/collection", "./view"], function($__export) {
  "use strict";
  var int,
      isBlank,
      isPresent,
      BaseException,
      eiModule,
      DirectiveBinding,
      List,
      StringMap,
      viewModule,
      ElementBinder;
  return {
    setters: [function($__m) {
      int = $__m.int;
      isBlank = $__m.isBlank;
      isPresent = $__m.isPresent;
      BaseException = $__m.BaseException;
    }, function($__m) {
      DirectiveBinding = $__m.DirectiveBinding;
      eiModule = $__m;
    }, function($__m) {
      List = $__m.List;
      StringMap = $__m.StringMap;
    }, function($__m) {
      viewModule = $__m;
    }],
    execute: function() {
      ElementBinder = (function() {
        function ElementBinder(index, parent, distanceToParent, protoElementInjector, componentDirective) {
          if (isBlank(index)) {
            throw new BaseException('null index not allowed.');
          }
          this.protoElementInjector = protoElementInjector;
          this.componentDirective = componentDirective;
          this.parent = parent;
          this.index = index;
          this.distanceToParent = distanceToParent;
          this.hostListeners = null;
          this.nestedProtoView = null;
        }
        return ($traceurRuntime.createClass)(ElementBinder, {
          hasStaticComponent: function() {
            return isPresent(this.componentDirective) && isPresent(this.nestedProtoView);
          },
          hasDynamicComponent: function() {
            return isPresent(this.componentDirective) && isBlank(this.nestedProtoView);
          },
          hasEmbeddedProtoView: function() {
            return !isPresent(this.componentDirective) && isPresent(this.nestedProtoView);
          }
        }, {});
      }());
      $__export("ElementBinder", ElementBinder);
      Object.defineProperty(ElementBinder, "parameters", {get: function() {
          return [[int], [ElementBinder], [int], [eiModule.ProtoElementInjector], [DirectiveBinding]];
        }});
    }
  };
});
//# sourceMappingURL=element_binder.js.map

//# sourceMappingURL=../../../src/core/compiler/element_binder.js.map