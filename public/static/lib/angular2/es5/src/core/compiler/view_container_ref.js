System.register(["angular2/src/facade/collection", "angular2/di", "angular2/src/facade/lang", "./view_manager", "./element_ref", "./view_ref"], function($__export) {
  "use strict";
  var ListWrapper,
      List,
      Injector,
      isPresent,
      isBlank,
      avmModule,
      ElementRef,
      ViewRef,
      ProtoViewRef,
      internalView,
      ViewContainerRef;
  return {
    setters: [function($__m) {
      ListWrapper = $__m.ListWrapper;
      List = $__m.List;
    }, function($__m) {
      Injector = $__m.Injector;
    }, function($__m) {
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
    }, function($__m) {
      avmModule = $__m;
    }, function($__m) {
      ElementRef = $__m.ElementRef;
    }, function($__m) {
      ViewRef = $__m.ViewRef;
      ProtoViewRef = $__m.ProtoViewRef;
      internalView = $__m.internalView;
    }],
    execute: function() {
      ViewContainerRef = (function() {
        function ViewContainerRef(viewManager, element) {
          this._viewManager = viewManager;
          this._element = element;
        }
        return ($traceurRuntime.createClass)(ViewContainerRef, {
          _getViews: function() {
            var vc = internalView(this._element.parentView).viewContainers[this._element.boundElementIndex];
            return isPresent(vc) ? vc.views : [];
          },
          clear: function() {
            for (var i = this.length - 1; i >= 0; i--) {
              this.remove(i);
            }
          },
          get: function(index) {
            return new ViewRef(this._getViews()[index]);
          },
          get length() {
            return this._getViews().length;
          },
          create: function() {
            var protoViewRef = arguments[0] !== (void 0) ? arguments[0] : null;
            var atIndex = arguments[1] !== (void 0) ? arguments[1] : -1;
            var context = arguments[2];
            var injector = arguments[3] !== (void 0) ? arguments[3] : null;
            if (atIndex == -1)
              atIndex = this.length;
            return this._viewManager.createViewInContainer(this._element, atIndex, protoViewRef, context, injector);
          },
          insert: function(viewRef) {
            var atIndex = arguments[1] !== (void 0) ? arguments[1] : -1;
            if (atIndex == -1)
              atIndex = this.length;
            return this._viewManager.attachViewInContainer(this._element, atIndex, viewRef);
          },
          indexOf: function(viewRef) {
            return ListWrapper.indexOf(this._getViews(), internalView(viewRef));
          },
          remove: function() {
            var atIndex = arguments[0] !== (void 0) ? arguments[0] : -1;
            if (atIndex == -1)
              atIndex = this.length - 1;
            this._viewManager.destroyViewInContainer(this._element, atIndex);
          },
          detach: function() {
            var atIndex = arguments[0] !== (void 0) ? arguments[0] : -1;
            if (atIndex == -1)
              atIndex = this.length - 1;
            return this._viewManager.detachViewInContainer(this._element, atIndex);
          }
        }, {});
      }());
      $__export("ViewContainerRef", ViewContainerRef);
      Object.defineProperty(ViewContainerRef, "parameters", {get: function() {
          return [[avmModule.AppViewManager], [ElementRef]];
        }});
      Object.defineProperty(ViewContainerRef.prototype.get, "parameters", {get: function() {
          return [[assert.type.number]];
        }});
      Object.defineProperty(ViewContainerRef.prototype.create, "parameters", {get: function() {
          return [[ProtoViewRef], [assert.type.number], [ElementRef], [Injector]];
        }});
      Object.defineProperty(ViewContainerRef.prototype.insert, "parameters", {get: function() {
          return [[ViewRef], [assert.type.number]];
        }});
      Object.defineProperty(ViewContainerRef.prototype.indexOf, "parameters", {get: function() {
          return [[ViewRef]];
        }});
      Object.defineProperty(ViewContainerRef.prototype.remove, "parameters", {get: function() {
          return [[assert.type.number]];
        }});
      Object.defineProperty(ViewContainerRef.prototype.detach, "parameters", {get: function() {
          return [[assert.type.number]];
        }});
    }
  };
});
//# sourceMappingURL=view_container_ref.js.map

//# sourceMappingURL=../../../src/core/compiler/view_container_ref.js.map