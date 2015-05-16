System.register(["angular2/di", "angular2/src/di/annotations_impl", "angular2/src/facade/collection", "./element_injector", "angular2/src/facade/lang", "./view", "./view_manager", "angular2/src/render/api", "angular2/change_detection", "./directive_metadata_reader"], function($__export) {
  "use strict";
  var Injector,
      Binding,
      Injectable,
      ListWrapper,
      MapWrapper,
      Map,
      StringMapWrapper,
      List,
      eli,
      isPresent,
      isBlank,
      BaseException,
      viewModule,
      avmModule,
      Renderer,
      BindingPropagationConfig,
      Locals,
      DirectiveMetadataReader,
      RenderViewRef,
      AppViewManagerUtils;
  return {
    setters: [function($__m) {
      Injector = $__m.Injector;
      Binding = $__m.Binding;
    }, function($__m) {
      Injectable = $__m.Injectable;
    }, function($__m) {
      ListWrapper = $__m.ListWrapper;
      MapWrapper = $__m.MapWrapper;
      Map = $__m.Map;
      StringMapWrapper = $__m.StringMapWrapper;
      List = $__m.List;
    }, function($__m) {
      eli = $__m;
    }, function($__m) {
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
      BaseException = $__m.BaseException;
    }, function($__m) {
      viewModule = $__m;
    }, function($__m) {
      avmModule = $__m;
    }, function($__m) {
      Renderer = $__m.Renderer;
      RenderViewRef = $__m.RenderViewRef;
    }, function($__m) {
      BindingPropagationConfig = $__m.BindingPropagationConfig;
      Locals = $__m.Locals;
    }, function($__m) {
      DirectiveMetadataReader = $__m.DirectiveMetadataReader;
    }],
    execute: function() {
      AppViewManagerUtils = (function() {
        function AppViewManagerUtils(metadataReader) {
          this._metadataReader = metadataReader;
        }
        return ($traceurRuntime.createClass)(AppViewManagerUtils, {
          getComponentInstance: function(parentView, boundElementIndex) {
            var binder = parentView.proto.elementBinders[boundElementIndex];
            var eli = parentView.elementInjectors[boundElementIndex];
            if (binder.hasDynamicComponent()) {
              return eli.getDynamicallyLoadedComponent();
            } else {
              return eli.getComponent();
            }
          },
          createView: function(protoView, renderView, viewManager, renderer) {
            var view = new viewModule.AppView(renderer, protoView, protoView.protoLocals);
            view.render = renderView;
            var changeDetector = protoView.protoChangeDetector.instantiate(view);
            var binders = protoView.elementBinders;
            var elementInjectors = ListWrapper.createFixedSize(binders.length);
            var rootElementInjectors = [];
            var preBuiltObjects = ListWrapper.createFixedSize(binders.length);
            var componentChildViews = ListWrapper.createFixedSize(binders.length);
            for (var binderIdx = 0; binderIdx < binders.length; binderIdx++) {
              var binder = binders[binderIdx];
              var elementInjector = null;
              var protoElementInjector = binder.protoElementInjector;
              if (isPresent(protoElementInjector)) {
                if (isPresent(protoElementInjector.parent)) {
                  var parentElementInjector = elementInjectors[protoElementInjector.parent.index];
                  elementInjector = protoElementInjector.instantiate(parentElementInjector);
                } else {
                  elementInjector = protoElementInjector.instantiate(null);
                  ListWrapper.push(rootElementInjectors, elementInjector);
                }
              }
              elementInjectors[binderIdx] = elementInjector;
              if (isPresent(elementInjector)) {
                var embeddedProtoView = binder.hasEmbeddedProtoView() ? binder.nestedProtoView : null;
                preBuiltObjects[binderIdx] = new eli.PreBuiltObjects(viewManager, view, embeddedProtoView);
              }
            }
            view.init(changeDetector, elementInjectors, rootElementInjectors, preBuiltObjects, componentChildViews);
            return view;
          },
          attachComponentView: function(hostView, boundElementIndex, componentView) {
            var childChangeDetector = componentView.changeDetector;
            hostView.changeDetector.addShadowDomChild(childChangeDetector);
            hostView.componentChildViews[boundElementIndex] = componentView;
          },
          detachComponentView: function(hostView, boundElementIndex) {
            var componentView = hostView.componentChildViews[boundElementIndex];
            hostView.changeDetector.removeShadowDomChild(componentView.changeDetector);
            hostView.componentChildViews[boundElementIndex] = null;
          },
          hydrateComponentView: function(hostView, boundElementIndex) {
            var injector = arguments[2] !== (void 0) ? arguments[2] : null;
            var elementInjector = hostView.elementInjectors[boundElementIndex];
            var componentView = hostView.componentChildViews[boundElementIndex];
            var component = this.getComponentInstance(hostView, boundElementIndex);
            this._hydrateView(componentView, injector, elementInjector, component, null);
          },
          attachAndHydrateInPlaceHostView: function(parentComponentHostView, parentComponentBoundElementIndex, hostView) {
            var injector = arguments[3] !== (void 0) ? arguments[3] : null;
            var hostElementInjector = null;
            if (isPresent(parentComponentHostView)) {
              hostElementInjector = parentComponentHostView.elementInjectors[parentComponentBoundElementIndex];
              var parentView = parentComponentHostView.componentChildViews[parentComponentBoundElementIndex];
              parentView.changeDetector.addChild(hostView.changeDetector);
              ListWrapper.push(parentView.inPlaceHostViews, hostView);
            }
            this._hydrateView(hostView, injector, hostElementInjector, new Object(), null);
          },
          detachInPlaceHostView: function(parentView, hostView) {
            if (isPresent(parentView)) {
              parentView.changeDetector.removeChild(hostView.changeDetector);
              ListWrapper.remove(parentView.inPlaceHostViews, hostView);
            }
          },
          attachViewInContainer: function(parentView, boundElementIndex, contextView, contextBoundElementIndex, atIndex, view) {
            if (isBlank(contextView)) {
              contextView = parentView;
              contextBoundElementIndex = boundElementIndex;
            }
            parentView.changeDetector.addChild(view.changeDetector);
            var viewContainer = parentView.viewContainers[boundElementIndex];
            if (isBlank(viewContainer)) {
              viewContainer = new viewModule.AppViewContainer();
              parentView.viewContainers[boundElementIndex] = viewContainer;
            }
            ListWrapper.insert(viewContainer.views, atIndex, view);
            var sibling;
            if (atIndex == 0) {
              sibling = null;
            } else {
              sibling = ListWrapper.last(viewContainer.views[atIndex - 1].rootElementInjectors);
            }
            var elementInjector = contextView.elementInjectors[contextBoundElementIndex];
            for (var i = view.rootElementInjectors.length - 1; i >= 0; i--) {
              view.rootElementInjectors[i].linkAfter(elementInjector, sibling);
            }
          },
          detachViewInContainer: function(parentView, boundElementIndex, atIndex) {
            var viewContainer = parentView.viewContainers[boundElementIndex];
            var view = viewContainer.views[atIndex];
            view.changeDetector.remove();
            ListWrapper.removeAt(viewContainer.views, atIndex);
            for (var i = 0; i < view.rootElementInjectors.length; ++i) {
              view.rootElementInjectors[i].unlink();
            }
          },
          hydrateViewInContainer: function(parentView, boundElementIndex, contextView, contextBoundElementIndex, atIndex, injector) {
            if (isBlank(contextView)) {
              contextView = parentView;
              contextBoundElementIndex = boundElementIndex;
            }
            var viewContainer = parentView.viewContainers[boundElementIndex];
            var view = viewContainer.views[atIndex];
            var elementInjector = contextView.elementInjectors[contextBoundElementIndex].getHost();
            this._hydrateView(view, injector, elementInjector, contextView.context, contextView.locals);
          },
          hydrateDynamicComponentInElementInjector: function(hostView, boundElementIndex, componentBinding) {
            var injector = arguments[3] !== (void 0) ? arguments[3] : null;
            var elementInjector = hostView.elementInjectors[boundElementIndex];
            if (isPresent(elementInjector.getDynamicallyLoadedComponent())) {
              throw new BaseException(("There already is a dynamic component loaded at element " + boundElementIndex));
            }
            if (isBlank(injector)) {
              injector = elementInjector.getLightDomAppInjector();
            }
            var annotation = this._metadataReader.read(componentBinding.token).annotation;
            var componentDirective = eli.DirectiveBinding.createFromBinding(componentBinding, annotation);
            elementInjector.dynamicallyCreateComponent(componentDirective, injector);
          },
          _hydrateView: function(view, appInjector, hostElementInjector, context, parentLocals) {
            if (isBlank(appInjector)) {
              appInjector = hostElementInjector.getShadowDomAppInjector();
            }
            if (isBlank(appInjector)) {
              appInjector = hostElementInjector.getLightDomAppInjector();
            }
            view.context = context;
            view.locals.parent = parentLocals;
            var binders = view.proto.elementBinders;
            for (var i = 0; i < binders.length; ++i) {
              var elementInjector = view.elementInjectors[i];
              if (isPresent(elementInjector)) {
                elementInjector.instantiateDirectives(appInjector, hostElementInjector, view.preBuiltObjects[i]);
                this._setUpEventEmitters(view, elementInjector, i);
                this._setUpHostActions(view, elementInjector, i);
                var exportImplicitName = elementInjector.getExportImplicitName();
                if (elementInjector.isExportingComponent()) {
                  view.locals.set(exportImplicitName, elementInjector.getComponent());
                } else if (elementInjector.isExportingElement()) {
                  view.locals.set(exportImplicitName, elementInjector.getElementRef().domElement);
                }
              }
            }
            view.changeDetector.hydrate(view.context, view.locals, view);
          },
          _setUpEventEmitters: function(view, elementInjector, boundElementIndex) {
            var emitters = elementInjector.getEventEmitterAccessors();
            for (var directiveIndex = 0; directiveIndex < emitters.length; ++directiveIndex) {
              var directiveEmitters = emitters[directiveIndex];
              var directive = elementInjector.getDirectiveAtIndex(directiveIndex);
              for (var eventIndex = 0; eventIndex < directiveEmitters.length; ++eventIndex) {
                var eventEmitterAccessor = directiveEmitters[eventIndex];
                eventEmitterAccessor.subscribe(view, boundElementIndex, directive);
              }
            }
          },
          _setUpHostActions: function(view, elementInjector, boundElementIndex) {
            var hostActions = elementInjector.getHostActionAccessors();
            for (var directiveIndex = 0; directiveIndex < hostActions.length; ++directiveIndex) {
              var directiveHostActions = hostActions[directiveIndex];
              var directive = elementInjector.getDirectiveAtIndex(directiveIndex);
              for (var index = 0; index < directiveHostActions.length; ++index) {
                var hostActionAccessor = directiveHostActions[index];
                hostActionAccessor.subscribe(view, boundElementIndex, directive);
              }
            }
          },
          dehydrateView: function(view) {
            var binders = view.proto.elementBinders;
            for (var i = 0; i < binders.length; ++i) {
              var elementInjector = view.elementInjectors[i];
              if (isPresent(elementInjector)) {
                elementInjector.clearDirectives();
              }
            }
            if (isPresent(view.locals)) {
              view.locals.clearValues();
            }
            view.context = null;
            view.changeDetector.dehydrate();
          }
        }, {});
      }());
      $__export("AppViewManagerUtils", AppViewManagerUtils);
      Object.defineProperty(AppViewManagerUtils, "annotations", {get: function() {
          return [new Injectable()];
        }});
      Object.defineProperty(AppViewManagerUtils, "parameters", {get: function() {
          return [[DirectiveMetadataReader]];
        }});
      Object.defineProperty(AppViewManagerUtils.prototype.getComponentInstance, "parameters", {get: function() {
          return [[viewModule.AppView], [assert.type.number]];
        }});
      Object.defineProperty(AppViewManagerUtils.prototype.createView, "parameters", {get: function() {
          return [[viewModule.AppProtoView], [RenderViewRef], [avmModule.AppViewManager], [Renderer]];
        }});
      Object.defineProperty(AppViewManagerUtils.prototype.attachComponentView, "parameters", {get: function() {
          return [[viewModule.AppView], [assert.type.number], [viewModule.AppView]];
        }});
      Object.defineProperty(AppViewManagerUtils.prototype.detachComponentView, "parameters", {get: function() {
          return [[viewModule.AppView], [assert.type.number]];
        }});
      Object.defineProperty(AppViewManagerUtils.prototype.hydrateComponentView, "parameters", {get: function() {
          return [[viewModule.AppView], [assert.type.number], [Injector]];
        }});
      Object.defineProperty(AppViewManagerUtils.prototype.attachAndHydrateInPlaceHostView, "parameters", {get: function() {
          return [[viewModule.AppView], [assert.type.number], [viewModule.AppView], [Injector]];
        }});
      Object.defineProperty(AppViewManagerUtils.prototype.detachInPlaceHostView, "parameters", {get: function() {
          return [[viewModule.AppView], [viewModule.AppView]];
        }});
      Object.defineProperty(AppViewManagerUtils.prototype.attachViewInContainer, "parameters", {get: function() {
          return [[viewModule.AppView], [assert.type.number], [viewModule.AppView], [assert.type.number], [assert.type.number], [viewModule.AppView]];
        }});
      Object.defineProperty(AppViewManagerUtils.prototype.detachViewInContainer, "parameters", {get: function() {
          return [[viewModule.AppView], [assert.type.number], [assert.type.number]];
        }});
      Object.defineProperty(AppViewManagerUtils.prototype.hydrateViewInContainer, "parameters", {get: function() {
          return [[viewModule.AppView], [assert.type.number], [viewModule.AppView], [assert.type.number], [assert.type.number], [Injector]];
        }});
      Object.defineProperty(AppViewManagerUtils.prototype.hydrateDynamicComponentInElementInjector, "parameters", {get: function() {
          return [[viewModule.AppView], [assert.type.number], [Binding], [Injector]];
        }});
      Object.defineProperty(AppViewManagerUtils.prototype._hydrateView, "parameters", {get: function() {
          return [[viewModule.AppView], [Injector], [eli.ElementInjector], [Object], [Locals]];
        }});
      Object.defineProperty(AppViewManagerUtils.prototype._setUpEventEmitters, "parameters", {get: function() {
          return [[viewModule.AppView], [eli.ElementInjector], [assert.type.number]];
        }});
      Object.defineProperty(AppViewManagerUtils.prototype._setUpHostActions, "parameters", {get: function() {
          return [[viewModule.AppView], [eli.ElementInjector], [assert.type.number]];
        }});
      Object.defineProperty(AppViewManagerUtils.prototype.dehydrateView, "parameters", {get: function() {
          return [[viewModule.AppView]];
        }});
    }
  };
});
//# sourceMappingURL=view_manager_utils.js.map

//# sourceMappingURL=../../../src/core/compiler/view_manager_utils.js.map