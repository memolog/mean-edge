import {Inject,
  Injectable} from 'angular2/src/di/annotations_impl';
import {int,
  isPresent,
  isBlank,
  BaseException,
  RegExpWrapper} from 'angular2/src/facade/lang';
import {ListWrapper,
  MapWrapper,
  Map,
  StringMapWrapper,
  List} from 'angular2/src/facade/collection';
import {DOM} from 'angular2/src/dom/dom_adapter';
import {Content} from './shadow_dom/content_tag';
import {ShadowDomStrategy} from './shadow_dom/shadow_dom_strategy';
import {EventManager} from './events/event_manager';
import {DomProtoView,
  DomProtoViewRef,
  resolveInternalDomProtoView} from './view/proto_view';
import {DomView,
  DomViewRef,
  resolveInternalDomView} from './view/view';
import {DomViewContainer} from './view/view_container';
import {NG_BINDING_CLASS_SELECTOR,
  NG_BINDING_CLASS} from './util';
import {Renderer,
  RenderProtoViewRef,
  RenderViewRef} from '../api';
export const DOCUMENT_TOKEN = 'DocumentToken';
var _DOCUMENT_SELECTOR_REGEX = RegExpWrapper.create('\\:document(.+)');
export class DomRenderer extends Renderer {
  constructor(eventManager, shadowDomStrategy, document) {
    super();
    this._eventManager = eventManager;
    this._shadowDomStrategy = shadowDomStrategy;
    this._document = document;
  }
  createInPlaceHostView(parentHostViewRef, hostElementSelector, hostProtoViewRef) {
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
      throw new BaseException(`The selector "${hostElementSelector}" did not match any elements`);
    }
    var hostProtoView = resolveInternalDomProtoView(hostProtoViewRef);
    return new DomViewRef(this._createView(hostProtoView, element));
  }
  destroyInPlaceHostView(parentHostViewRef, hostViewRef) {
    var hostView = resolveInternalDomView(hostViewRef);
    this._removeViewNodes(hostView);
  }
  createView(protoViewRef) {
    var protoView = resolveInternalDomProtoView(protoViewRef);
    return new DomViewRef(this._createView(protoView, null));
  }
  destroyView(view) {}
  attachComponentView(hostViewRef, elementIndex, componentViewRef) {
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
  }
  setComponentViewRootNodes(componentViewRef, rootNodes) {
    var componentView = resolveInternalDomView(componentViewRef);
    this._removeViewNodes(componentView);
    componentView.rootNodes = rootNodes;
    this._moveViewNodesIntoParent(componentView.shadowRoot, componentView);
  }
  detachComponentView(hostViewRef, boundElementIndex, componentViewRef) {
    var hostView = resolveInternalDomView(hostViewRef);
    var componentView = resolveInternalDomView(componentViewRef);
    this._removeViewNodes(componentView);
    var lightDom = hostView.lightDoms[boundElementIndex];
    if (isPresent(lightDom)) {
      lightDom.detachShadowDomView();
    }
    componentView.hostLightDom = null;
    componentView.shadowRoot = null;
  }
  attachViewInContainer(parentViewRef, boundElementIndex, atIndex, viewRef) {
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
  }
  detachViewInContainer(parentViewRef, boundElementIndex, atIndex, viewRef) {
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
  }
  hydrateView(viewRef) {
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
  }
  dehydrateView(viewRef) {
    var view = resolveInternalDomView(viewRef);
    for (var i = 0; i < view.eventHandlerRemovers.length; i++) {
      view.eventHandlerRemovers[i]();
    }
    view.eventHandlerRemovers = null;
    view.hydrated = false;
  }
  setElementProperty(viewRef, elementIndex, propertyName, propertyValue) {
    var view = resolveInternalDomView(viewRef);
    view.setElementProperty(elementIndex, propertyName, propertyValue);
  }
  callAction(viewRef, elementIndex, actionExpression, actionArgs) {
    var view = resolveInternalDomView(viewRef);
    view.callAction(elementIndex, actionExpression, actionArgs);
  }
  setText(viewRef, textNodeIndex, text) {
    var view = resolveInternalDomView(viewRef);
    DOM.setText(view.boundTextNodes[textNodeIndex], text);
  }
  setEventDispatcher(viewRef, dispatcher) {
    var view = resolveInternalDomView(viewRef);
    view.eventDispatcher = dispatcher;
  }
  _createView(protoView, inplaceElement) {
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
      var element;
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
  }
  _createEventListener(view, element, elementIndex, eventName, eventLocals) {
    this._eventManager.addEventListener(element, eventName, (event) => {
      view.dispatchEvent(elementIndex, eventName, event);
    });
  }
  _moveViewNodesAfterSibling(sibling, view) {
    for (var i = view.rootNodes.length - 1; i >= 0; --i) {
      DOM.insertAfter(sibling, view.rootNodes[i]);
    }
  }
  _moveViewNodesIntoParent(parent, view) {
    for (var i = 0; i < view.rootNodes.length; ++i) {
      DOM.appendChild(parent, view.rootNodes[i]);
    }
  }
  _removeViewNodes(view) {
    var len = view.rootNodes.length;
    if (len == 0)
      return ;
    var parent = view.rootNodes[0].parentNode;
    for (var i = len - 1; i >= 0; --i) {
      DOM.removeChild(parent, view.rootNodes[i]);
    }
  }
  _getOrCreateViewContainer(parentView, boundElementIndex) {
    var vc = parentView.viewContainers[boundElementIndex];
    if (isBlank(vc)) {
      vc = new DomViewContainer();
      parentView.viewContainers[boundElementIndex] = vc;
    }
    return vc;
  }
  _createGlobalEventListener(view, elementIndex, eventName, eventTarget, fullName) {
    return this._eventManager.addGlobalEventListener(eventTarget, eventName, (event) => {
      view.dispatchEvent(elementIndex, fullName, event);
    });
  }
}
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
//# sourceMappingURL=dom_renderer.js.map

//# sourceMappingURL=./dom_renderer.map