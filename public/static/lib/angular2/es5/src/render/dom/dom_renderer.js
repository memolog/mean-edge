System.register(["angular2/src/di/annotations_impl", "angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/src/dom/dom_adapter", "./shadow_dom/content_tag", "./shadow_dom/shadow_dom_strategy", "./events/event_manager", "./view/proto_view", "./view/view", "./view/view_container", "./util", "../api"], function($__export) {
  "use strict";
  var Inject,
      Injectable,
      int,
      isPresent,
      isBlank,
      BaseException,
      RegExpWrapper,
      ListWrapper,
      MapWrapper,
      Map,
      StringMapWrapper,
      List,
      DOM,
      Content,
      ShadowDomStrategy,
      EventManager,
      DomProtoView,
      DomProtoViewRef,
      resolveInternalDomProtoView,
      DomView,
      DomViewRef,
      resolveInternalDomView,
      DomViewContainer,
      NG_BINDING_CLASS_SELECTOR,
      NG_BINDING_CLASS,
      Renderer,
      RenderProtoViewRef,
      RenderViewRef,
      DOCUMENT_TOKEN,
      _DOCUMENT_SELECTOR_REGEX,
      DomRenderer;
  return {
    setters: [function($__m) {
      Inject = $__m.Inject;
      Injectable = $__m.Injectable;
    }, function($__m) {
      int = $__m.int;
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
      BaseException = $__m.BaseException;
      RegExpWrapper = $__m.RegExpWrapper;
    }, function($__m) {
      ListWrapper = $__m.ListWrapper;
      MapWrapper = $__m.MapWrapper;
      Map = $__m.Map;
      StringMapWrapper = $__m.StringMapWrapper;
      List = $__m.List;
    }, function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      Content = $__m.Content;
    }, function($__m) {
      ShadowDomStrategy = $__m.ShadowDomStrategy;
    }, function($__m) {
      EventManager = $__m.EventManager;
    }, function($__m) {
      DomProtoView = $__m.DomProtoView;
      DomProtoViewRef = $__m.DomProtoViewRef;
      resolveInternalDomProtoView = $__m.resolveInternalDomProtoView;
    }, function($__m) {
      DomView = $__m.DomView;
      DomViewRef = $__m.DomViewRef;
      resolveInternalDomView = $__m.resolveInternalDomView;
    }, function($__m) {
      DomViewContainer = $__m.DomViewContainer;
    }, function($__m) {
      NG_BINDING_CLASS_SELECTOR = $__m.NG_BINDING_CLASS_SELECTOR;
      NG_BINDING_CLASS = $__m.NG_BINDING_CLASS;
    }, function($__m) {
      Renderer = $__m.Renderer;
      RenderProtoViewRef = $__m.RenderProtoViewRef;
      RenderViewRef = $__m.RenderViewRef;
    }],
    execute: function() {
      DOCUMENT_TOKEN = 'DocumentToken';
      $__export("DOCUMENT_TOKEN", DOCUMENT_TOKEN);
      _DOCUMENT_SELECTOR_REGEX = RegExpWrapper.create('\\:document(.+)');
      DomRenderer = (function($__super) {
        function DomRenderer(eventManager, shadowDomStrategy, document) {
          $traceurRuntime.superConstructor(DomRenderer).call(this);
          this._eventManager = eventManager;
          this._shadowDomStrategy = shadowDomStrategy;
          this._document = document;
        }
        return ($traceurRuntime.createClass)(DomRenderer, {
          createInPlaceHostView: function(parentHostViewRef, hostElementSelector, hostProtoViewRef) {
            var containerNode;
            var documentSelectorMatch = RegExpWrapper.firstMatch(_DOCUMENT_SELECTOR_REGEX, hostElementSelector);
            if (isPresent(documentSelectorMatch)) {
              containerNode = this._document;
              hostElementSelector = documentSelectorMatch[1];
            } else if (isPresent(parentHostViewRef)) {
              var parentHostView = resolveInternalDomView(parentHostViewRef);
              containerNode = parentHostView.shadowRoot;
            } else {
              containerNode = this._document;
            }
            var element = DOM.querySelector(containerNode, hostElementSelector);
            if (isBlank(element)) {
              throw new BaseException(("The selector \"" + hostElementSelector + "\" did not match any elements"));
            }
            var hostProtoView = resolveInternalDomProtoView(hostProtoViewRef);
            return new DomViewRef(this._createView(hostProtoView, element));
          },
          destroyInPlaceHostView: function(parentHostViewRef, hostViewRef) {
            var hostView = resolveInternalDomView(hostViewRef);
            this._removeViewNodes(hostView);
          },
          createView: function(protoViewRef) {
            var protoView = resolveInternalDomProtoView(protoViewRef);
            return new DomViewRef(this._createView(protoView, null));
          },
          destroyView: function(view) {},
          attachComponentView: function(hostViewRef, elementIndex, componentViewRef) {
            var hostView = resolveInternalDomView(hostViewRef);
            var componentView = resolveInternalDomView(componentViewRef);
            var element = hostView.boundElements[elementIndex];
            var lightDom = hostView.lightDoms[elementIndex];
            if (isPresent(lightDom)) {
              lightDom.attachShadowDomView(componentView);
            }
            var shadowRoot = this._shadowDomStrategy.prepareShadowRoot(element);
            this._moveViewNodesIntoParent(shadowRoot, componentView);
            componentView.hostLightDom = lightDom;
            componentView.shadowRoot = shadowRoot;
          },
          setComponentViewRootNodes: function(componentViewRef, rootNodes) {
            var componentView = resolveInternalDomView(componentViewRef);
            this._removeViewNodes(componentView);
            componentView.rootNodes = rootNodes;
            this._moveViewNodesIntoParent(componentView.shadowRoot, componentView);
          },
          detachComponentView: function(hostViewRef, boundElementIndex, componentViewRef) {
            var hostView = resolveInternalDomView(hostViewRef);
            var componentView = resolveInternalDomView(componentViewRef);
            this._removeViewNodes(componentView);
            var lightDom = hostView.lightDoms[boundElementIndex];
            if (isPresent(lightDom)) {
              lightDom.detachShadowDomView();
            }
            componentView.hostLightDom = null;
            componentView.shadowRoot = null;
          },
          attachViewInContainer: function(parentViewRef, boundElementIndex, atIndex, viewRef) {
            var parentView = resolveInternalDomView(parentViewRef);
            var view = resolveInternalDomView(viewRef);
            var viewContainer = this._getOrCreateViewContainer(parentView, boundElementIndex);
            ListWrapper.insert(viewContainer.views, atIndex, view);
            view.hostLightDom = parentView.hostLightDom;
            var directParentLightDom = parentView.getDirectParentLightDom(boundElementIndex);
            if (isBlank(directParentLightDom)) {
              var siblingToInsertAfter;
              if (atIndex == 0) {
                siblingToInsertAfter = parentView.boundElements[boundElementIndex];
              } else {
                siblingToInsertAfter = ListWrapper.last(viewContainer.views[atIndex - 1].rootNodes);
              }
              this._moveViewNodesAfterSibling(siblingToInsertAfter, view);
            } else {
              directParentLightDom.redistribute();
            }
            if (isPresent(parentView.hostLightDom)) {
              parentView.hostLightDom.redistribute();
            }
          },
          detachViewInContainer: function(parentViewRef, boundElementIndex, atIndex, viewRef) {
            var parentView = resolveInternalDomView(parentViewRef);
            var view = resolveInternalDomView(viewRef);
            var viewContainer = parentView.viewContainers[boundElementIndex];
            var detachedView = viewContainer.views[atIndex];
            ListWrapper.removeAt(viewContainer.views, atIndex);
            var directParentLightDom = parentView.getDirectParentLightDom(boundElementIndex);
            if (isBlank(directParentLightDom)) {
              this._removeViewNodes(detachedView);
            } else {
              directParentLightDom.redistribute();
            }
            view.hostLightDom = null;
            if (isPresent(parentView.hostLightDom)) {
              parentView.hostLightDom.redistribute();
            }
          },
          hydrateView: function(viewRef) {
            var view = resolveInternalDomView(viewRef);
            if (view.hydrated)
              throw new BaseException('The view is already hydrated.');
            view.hydrated = true;
            for (var i = 0; i < view.lightDoms.length; ++i) {
              var lightDom = view.lightDoms[i];
              if (isPresent(lightDom)) {
                lightDom.redistribute();
              }
            }
            view.eventHandlerRemovers = ListWrapper.create();
            var binders = view.proto.elementBinders;
            for (var binderIdx = 0; binderIdx < binders.length; binderIdx++) {
              var binder = binders[binderIdx];
              if (isPresent(binder.globalEvents)) {
                for (var i = 0; i < binder.globalEvents.length; i++) {
                  var globalEvent = binder.globalEvents[i];
                  var remover = this._createGlobalEventListener(view, binderIdx, globalEvent.name, globalEvent.target, globalEvent.fullName);
                  ListWrapper.push(view.eventHandlerRemovers, remover);
                }
              }
            }
            if (isPresent(view.hostLightDom)) {
              view.hostLightDom.redistribute();
            }
          },
          dehydrateView: function(viewRef) {
            var view = resolveInternalDomView(viewRef);
            for (var i = 0; i < view.eventHandlerRemovers.length; i++) {
              view.eventHandlerRemovers[i]();
            }
            view.eventHandlerRemovers = null;
            view.hydrated = false;
          },
          setElementProperty: function(viewRef, elementIndex, propertyName, propertyValue) {
            var view = resolveInternalDomView(viewRef);
            view.setElementProperty(elementIndex, propertyName, propertyValue);
          },
          callAction: function(viewRef, elementIndex, actionExpression, actionArgs) {
            var view = resolveInternalDomView(viewRef);
            view.callAction(elementIndex, actionExpression, actionArgs);
          },
          setText: function(viewRef, textNodeIndex, text) {
            var view = resolveInternalDomView(viewRef);
            DOM.setText(view.boundTextNodes[textNodeIndex], text);
          },
          setEventDispatcher: function(viewRef, dispatcher) {
            var view = resolveInternalDomView(viewRef);
            view.eventDispatcher = dispatcher;
          },
          _createView: function(protoView, inplaceElement) {
            var rootElementClone = isPresent(inplaceElement) ? inplaceElement : DOM.importIntoDoc(protoView.element);
            var elementsWithBindingsDynamic;
            if (protoView.isTemplateElement) {
              elementsWithBindingsDynamic = DOM.querySelectorAll(DOM.content(rootElementClone), NG_BINDING_CLASS_SELECTOR);
            } else {
              elementsWithBindingsDynamic = DOM.getElementsByClassName(rootElementClone, NG_BINDING_CLASS);
            }
            var elementsWithBindings = ListWrapper.createFixedSize(elementsWithBindingsDynamic.length);
            for (var binderIdx = 0; binderIdx < elementsWithBindingsDynamic.length; ++binderIdx) {
              elementsWithBindings[binderIdx] = elementsWithBindingsDynamic[binderIdx];
            }
            var viewRootNodes;
            if (protoView.isTemplateElement) {
              var childNode = DOM.firstChild(DOM.content(rootElementClone));
              viewRootNodes = [];
              while (childNode != null) {
                ListWrapper.push(viewRootNodes, childNode);
                childNode = DOM.nextSibling(childNode);
              }
            } else {
              viewRootNodes = [rootElementClone];
            }
            var binders = protoView.elementBinders;
            var boundTextNodes = [];
            var boundElements = ListWrapper.createFixedSize(binders.length);
            var contentTags = ListWrapper.createFixedSize(binders.length);
            for (var binderIdx = 0; binderIdx < binders.length; binderIdx++) {
              var binder = binders[binderIdx];
              var element = void 0;
              if (binderIdx === 0 && protoView.rootBindingOffset === 1) {
                element = rootElementClone;
              } else {
                element = elementsWithBindings[binderIdx - protoView.rootBindingOffset];
              }
              boundElements[binderIdx] = element;
              var childNodes = DOM.childNodes(DOM.templateAwareRoot(element));
              var textNodeIndices = binder.textNodeIndices;
              for (var i = 0; i < textNodeIndices.length; i++) {
                ListWrapper.push(boundTextNodes, childNodes[textNodeIndices[i]]);
              }
              var contentTag = null;
              if (isPresent(binder.contentTagSelector)) {
                contentTag = new Content(element, binder.contentTagSelector);
              }
              contentTags[binderIdx] = contentTag;
            }
            var view = new DomView(protoView, viewRootNodes, boundTextNodes, boundElements, contentTags);
            for (var binderIdx = 0; binderIdx < binders.length; binderIdx++) {
              var binder = binders[binderIdx];
              var element = boundElements[binderIdx];
              var lightDom = null;
              if (isPresent(binder.componentId)) {
                lightDom = this._shadowDomStrategy.constructLightDom(view, boundElements[binderIdx]);
              }
              view.lightDoms[binderIdx] = lightDom;
              var contentTag = contentTags[binderIdx];
              if (isPresent(contentTag)) {
                var destLightDom = view.getDirectParentLightDom(binderIdx);
                contentTag.init(destLightDom);
              }
              if (isPresent(binder.eventLocals) && isPresent(binder.localEvents)) {
                for (var i = 0; i < binder.localEvents.length; i++) {
                  this._createEventListener(view, element, binderIdx, binder.localEvents[i].name, binder.eventLocals);
                }
              }
            }
            return view;
          },
          _createEventListener: function(view, element, elementIndex, eventName, eventLocals) {
            this._eventManager.addEventListener(element, eventName, (function(event) {
              view.dispatchEvent(elementIndex, eventName, event);
            }));
          },
          _moveViewNodesAfterSibling: function(sibling, view) {
            for (var i = view.rootNodes.length - 1; i >= 0; --i) {
              DOM.insertAfter(sibling, view.rootNodes[i]);
            }
          },
          _moveViewNodesIntoParent: function(parent, view) {
            for (var i = 0; i < view.rootNodes.length; ++i) {
              DOM.appendChild(parent, view.rootNodes[i]);
            }
          },
          _removeViewNodes: function(view) {
            var len = view.rootNodes.length;
            if (len == 0)
              return ;
            var parent = view.rootNodes[0].parentNode;
            for (var i = len - 1; i >= 0; --i) {
              DOM.removeChild(parent, view.rootNodes[i]);
            }
          },
          _getOrCreateViewContainer: function(parentView, boundElementIndex) {
            var vc = parentView.viewContainers[boundElementIndex];
            if (isBlank(vc)) {
              vc = new DomViewContainer();
              parentView.viewContainers[boundElementIndex] = vc;
            }
            return vc;
          },
          _createGlobalEventListener: function(view, elementIndex, eventName, eventTarget, fullName) {
            return this._eventManager.addGlobalEventListener(eventTarget, eventName, (function(event) {
              view.dispatchEvent(elementIndex, fullName, event);
            }));
          }
        }, {}, $__super);
      }(Renderer));
      $__export("DomRenderer", DomRenderer);
      Object.defineProperty(DomRenderer, "annotations", {get: function() {
          return [new Injectable()];
        }});
      Object.defineProperty(DomRenderer, "parameters", {get: function() {
          return [[EventManager], [ShadowDomStrategy], [new Inject(DOCUMENT_TOKEN)]];
        }});
      Object.defineProperty(DomRenderer.prototype.createInPlaceHostView, "parameters", {get: function() {
          return [[RenderViewRef], [assert.type.string], [RenderProtoViewRef]];
        }});
      Object.defineProperty(DomRenderer.prototype.destroyInPlaceHostView, "parameters", {get: function() {
          return [[RenderViewRef], [RenderViewRef]];
        }});
      Object.defineProperty(DomRenderer.prototype.createView, "parameters", {get: function() {
          return [[RenderProtoViewRef]];
        }});
      Object.defineProperty(DomRenderer.prototype.destroyView, "parameters", {get: function() {
          return [[RenderViewRef]];
        }});
      Object.defineProperty(DomRenderer.prototype.attachComponentView, "parameters", {get: function() {
          return [[RenderViewRef], [assert.type.number], [RenderViewRef]];
        }});
      Object.defineProperty(DomRenderer.prototype.setComponentViewRootNodes, "parameters", {get: function() {
          return [[RenderViewRef], [List]];
        }});
      Object.defineProperty(DomRenderer.prototype.detachComponentView, "parameters", {get: function() {
          return [[RenderViewRef], [assert.type.number], [RenderViewRef]];
        }});
      Object.defineProperty(DomRenderer.prototype.attachViewInContainer, "parameters", {get: function() {
          return [[RenderViewRef], [assert.type.number], [assert.type.number], [RenderViewRef]];
        }});
      Object.defineProperty(DomRenderer.prototype.detachViewInContainer, "parameters", {get: function() {
          return [[RenderViewRef], [assert.type.number], [assert.type.number], [RenderViewRef]];
        }});
      Object.defineProperty(DomRenderer.prototype.hydrateView, "parameters", {get: function() {
          return [[RenderViewRef]];
        }});
      Object.defineProperty(DomRenderer.prototype.dehydrateView, "parameters", {get: function() {
          return [[RenderViewRef]];
        }});
      Object.defineProperty(DomRenderer.prototype.setElementProperty, "parameters", {get: function() {
          return [[RenderViewRef], [assert.type.number], [assert.type.string], [assert.type.any]];
        }});
      Object.defineProperty(DomRenderer.prototype.callAction, "parameters", {get: function() {
          return [[RenderViewRef], [assert.type.number], [assert.type.string], [assert.type.any]];
        }});
      Object.defineProperty(DomRenderer.prototype.setText, "parameters", {get: function() {
          return [[RenderViewRef], [assert.type.number], [assert.type.string]];
        }});
      Object.defineProperty(DomRenderer.prototype.setEventDispatcher, "parameters", {get: function() {
          return [[RenderViewRef], [assert.type.any]];
        }});
      Object.defineProperty(DomRenderer.prototype._createView, "parameters", {get: function() {
          return [[DomProtoView], []];
        }});
      Object.defineProperty(DomRenderer.prototype._getOrCreateViewContainer, "parameters", {get: function() {
          return [[DomView], []];
        }});
    }
  };
});
//# sourceMappingURL=dom_renderer.js.map

//# sourceMappingURL=../../../src/render/dom/dom_renderer.js.map