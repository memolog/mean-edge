System.register(["angular2/di", "angular2/src/di/annotations_impl", "./compiler", "angular2/src/facade/lang", "angular2/src/facade/async", "angular2/src/core/compiler/view_manager", "./element_ref"], function($__export) {
  "use strict";
  var Key,
      Injector,
      ResolvedBinding,
      Binding,
      bind,
      Injectable,
      Compiler,
      Type,
      BaseException,
      stringify,
      isPresent,
      Promise,
      AppViewManager,
      ComponentCreateResult,
      ElementRef,
      ComponentRef,
      DynamicComponentLoader;
  return {
    setters: [function($__m) {
      Key = $__m.Key;
      Injector = $__m.Injector;
      ResolvedBinding = $__m.ResolvedBinding;
      Binding = $__m.Binding;
      bind = $__m.bind;
    }, function($__m) {
      Injectable = $__m.Injectable;
    }, function($__m) {
      Compiler = $__m.Compiler;
    }, function($__m) {
      Type = $__m.Type;
      BaseException = $__m.BaseException;
      stringify = $__m.stringify;
      isPresent = $__m.isPresent;
    }, function($__m) {
      Promise = $__m.Promise;
    }, function($__m) {
      AppViewManager = $__m.AppViewManager;
      ComponentCreateResult = $__m.ComponentCreateResult;
    }, function($__m) {
      ElementRef = $__m.ElementRef;
    }],
    execute: function() {
      ComponentRef = (function() {
        function ComponentRef(location, instance, dispose) {
          this.location = location;
          this.instance = instance;
          this._dispose = dispose;
        }
        return ($traceurRuntime.createClass)(ComponentRef, {
          get hostView() {
            return this.location.parentView;
          },
          dispose: function() {
            this._dispose();
          }
        }, {});
      }());
      $__export("ComponentRef", ComponentRef);
      Object.defineProperty(ComponentRef, "parameters", {get: function() {
          return [[ElementRef], [assert.type.any], [Function]];
        }});
      DynamicComponentLoader = (function() {
        function DynamicComponentLoader(compiler, viewManager) {
          this._compiler = compiler;
          this._viewManager = viewManager;
        }
        return ($traceurRuntime.createClass)(DynamicComponentLoader, {
          loadIntoExistingLocation: function(typeOrBinding, location) {
            var injector = arguments[2] !== (void 0) ? arguments[2] : null;
            var $__0 = this;
            var binding = this._getBinding(typeOrBinding);
            return this._compiler.compile(binding.token).then((function(componentProtoViewRef) {
              $__0._viewManager.createDynamicComponentView(location, componentProtoViewRef, binding, injector);
              var component = $__0._viewManager.getComponent(location);
              var dispose = (function() {
                throw new BaseException("Not implemented");
              });
              return new ComponentRef(location, component, dispose);
            }));
          },
          loadIntoNewLocation: function(typeOrBinding, parentComponentLocation, elementSelector) {
            var injector = arguments[3] !== (void 0) ? arguments[3] : null;
            var $__0 = this;
            return this._compiler.compileInHost(this._getBinding(typeOrBinding)).then((function(hostProtoViewRef) {
              var hostViewRef = $__0._viewManager.createInPlaceHostView(parentComponentLocation, elementSelector, hostProtoViewRef, injector);
              var newLocation = new ElementRef(hostViewRef, 0);
              var component = $__0._viewManager.getComponent(newLocation);
              var dispose = (function() {
                $__0._viewManager.destroyInPlaceHostView(parentComponentLocation, hostViewRef);
              });
              return new ComponentRef(newLocation, component, dispose);
            }));
          },
          loadNextToExistingLocation: function(typeOrBinding, location) {
            var injector = arguments[2] !== (void 0) ? arguments[2] : null;
            var $__0 = this;
            var binding = this._getBinding(typeOrBinding);
            return this._compiler.compileInHost(binding).then((function(hostProtoViewRef) {
              var viewContainer = $__0._viewManager.getViewContainer(location);
              var hostViewRef = viewContainer.create(hostProtoViewRef, viewContainer.length, null, injector);
              var newLocation = new ElementRef(hostViewRef, 0);
              var component = $__0._viewManager.getComponent(newLocation);
              var dispose = (function() {
                var index = viewContainer.indexOf(hostViewRef);
                viewContainer.remove(index);
              });
              return new ComponentRef(newLocation, component, dispose);
            }));
          },
          _getBinding: function(typeOrBinding) {
            var binding;
            if (typeOrBinding instanceof Binding) {
              binding = typeOrBinding;
            } else {
              binding = bind(typeOrBinding).toClass(typeOrBinding);
            }
            return binding;
          }
        }, {});
      }());
      $__export("DynamicComponentLoader", DynamicComponentLoader);
      Object.defineProperty(DynamicComponentLoader, "annotations", {get: function() {
          return [new Injectable()];
        }});
      Object.defineProperty(DynamicComponentLoader, "parameters", {get: function() {
          return [[Compiler], [AppViewManager]];
        }});
      Object.defineProperty(DynamicComponentLoader.prototype.loadIntoExistingLocation, "parameters", {get: function() {
          return [[], [ElementRef], [Injector]];
        }});
      Object.defineProperty(DynamicComponentLoader.prototype.loadIntoNewLocation, "parameters", {get: function() {
          return [[], [ElementRef], [assert.type.string], [Injector]];
        }});
      Object.defineProperty(DynamicComponentLoader.prototype.loadNextToExistingLocation, "parameters", {get: function() {
          return [[], [ElementRef], [Injector]];
        }});
    }
  };
});
//# sourceMappingURL=dynamic_component_loader.js.map

//# sourceMappingURL=../../../src/core/compiler/dynamic_component_loader.js.map