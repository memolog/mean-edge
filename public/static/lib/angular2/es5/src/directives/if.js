System.register(["angular2/src/core/annotations_impl/annotations", "angular2/src/core/compiler/view_container_ref", "angular2/src/core/compiler/view_ref", "angular2/src/facade/lang"], function($__export) {
  "use strict";
  var Directive,
      ViewContainerRef,
      ProtoViewRef,
      isBlank,
      If;
  return {
    setters: [function($__m) {
      Directive = $__m.Directive;
    }, function($__m) {
      ViewContainerRef = $__m.ViewContainerRef;
    }, function($__m) {
      ProtoViewRef = $__m.ProtoViewRef;
    }, function($__m) {
      isBlank = $__m.isBlank;
    }],
    execute: function() {
      If = (function() {
        function If(viewContainer, protoViewRef) {
          this.viewContainer = viewContainer;
          this.prevCondition = null;
          this.protoViewRef = protoViewRef;
        }
        return ($traceurRuntime.createClass)(If, {set condition(newCondition) {
            if (newCondition && (isBlank(this.prevCondition) || !this.prevCondition)) {
              this.prevCondition = true;
              this.viewContainer.create(this.protoViewRef);
            } else if (!newCondition && (isBlank(this.prevCondition) || this.prevCondition)) {
              this.prevCondition = false;
              this.viewContainer.clear();
            }
          }}, {});
      }());
      $__export("If", If);
      Object.defineProperty(If, "annotations", {get: function() {
          return [new Directive({
            selector: '[if]',
            properties: {'condition': 'if'}
          })];
        }});
      Object.defineProperty(If, "parameters", {get: function() {
          return [[ViewContainerRef], [ProtoViewRef]];
        }});
    }
  };
});
//# sourceMappingURL=if.js.map

//# sourceMappingURL=../../src/directives/if.js.map