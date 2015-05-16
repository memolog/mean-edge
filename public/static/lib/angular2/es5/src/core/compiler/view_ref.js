System.register(["angular2/src/facade/lang", "./view", "angular2/src/render/api"], function($__export) {
  "use strict";
  var isPresent,
      viewModule,
      RenderViewRef,
      ViewRef,
      ProtoViewRef;
  function internalView(viewRef) {
    return viewRef._view;
  }
  function internalProtoView(protoViewRef) {
    return isPresent(protoViewRef) ? protoViewRef._protoView : null;
  }
  $__export("internalView", internalView);
  $__export("internalProtoView", internalProtoView);
  return {
    setters: [function($__m) {
      isPresent = $__m.isPresent;
    }, function($__m) {
      viewModule = $__m;
    }, function($__m) {
      RenderViewRef = $__m.RenderViewRef;
    }],
    execute: function() {
      Object.defineProperty(internalView, "parameters", {get: function() {
          return [[ViewRef]];
        }});
      Object.defineProperty(internalProtoView, "parameters", {get: function() {
          return [[ProtoViewRef]];
        }});
      ViewRef = (function() {
        function ViewRef(view) {
          this._view = view;
        }
        return ($traceurRuntime.createClass)(ViewRef, {
          get render() {
            return this._view.render;
          },
          setLocal: function(contextName, value) {
            this._view.setLocal(contextName, value);
          }
        }, {});
      }());
      $__export("ViewRef", ViewRef);
      Object.defineProperty(ViewRef, "parameters", {get: function() {
          return [[viewModule.AppView]];
        }});
      Object.defineProperty(ViewRef.prototype.setLocal, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.any]];
        }});
      ProtoViewRef = (function() {
        function ProtoViewRef(protoView) {
          this._protoView = protoView;
        }
        return ($traceurRuntime.createClass)(ProtoViewRef, {}, {});
      }());
      $__export("ProtoViewRef", ProtoViewRef);
    }
  };
});
//# sourceMappingURL=view_ref.js.map

//# sourceMappingURL=../../../src/core/compiler/view_ref.js.map