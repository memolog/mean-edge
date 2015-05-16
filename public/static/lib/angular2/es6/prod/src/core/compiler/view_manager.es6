import {Injector,
  Binding} from 'angular2/di';
import {Injectable} from 'angular2/src/di/annotations_impl';
import {isPresent,
  isBlank,
  BaseException} from 'angular2/src/facade/lang';
import * as viewModule from './view';
import {ElementRef} from './element_ref';
import {ProtoViewRef,
  ViewRef,
  internalView,
  internalProtoView} from './view_ref';
import {ViewContainerRef} from './view_container_ref';
import {Renderer,
  RenderViewRef} from 'angular2/src/render/api';
import {AppViewManagerUtils} from './view_manager_utils';
import {AppViewPool} from './view_pool';
export class AppViewManager {
  constructor(viewPool, utils, renderer) {
    this._renderer = renderer;
    this._viewPool = viewPool;
    this._utils = utils;
  }
  getComponentView(hostLocation) {
    var hostView = internalView(hostLocation.parentView);
    var boundElementIndex = hostLocation.boundElementIndex;
    return new ViewRef(hostView.componentChildViews[boundElementIndex]);
  }
  getViewContainer(location) {
    var hostView = internalView(location.parentView);
    return hostView.elementInjectors[location.boundElementIndex].getViewContainerRef();
  }
  getComponent(hostLocation) {
    var hostView = internalView(hostLocation.parentView);
    var boundElementIndex = hostLocation.boundElementIndex;
    return this._utils.getComponentInstance(hostView, boundElementIndex);
  }
  createDynamicComponentView(hostLocation, componentProtoViewRef, componentBinding, injector) {
    var componentProtoView = internalProtoView(componentProtoViewRef);
    var hostView = internalView(hostLocation.parentView);
    var boundElementIndex = hostLocation.boundElementIndex;
    var binder = hostView.proto.elementBinders[boundElementIndex];
    if (!binder.hasDynamicComponent()) {
      throw new BaseException(`There is no dynamic component directive at element ${boundElementIndex}`);
    }
    var componentView = this._createPooledView(componentProtoView);
    this._renderer.attachComponentView(hostView.render, boundElementIndex, componentView.render);
    this._utils.attachComponentView(hostView, boundElementIndex, componentView);
    this._utils.hydrateDynamicComponentInElementInjector(hostView, boundElementIndex, componentBinding, injector);
    this._utils.hydrateComponentView(hostView, boundElementIndex);
    this._viewHydrateRecurse(componentView);
    return new ViewRef(componentView);
  }
  createInPlaceHostView(parentComponentLocation, hostElementSelector, hostProtoViewRef, injector) {
    var hostProtoView = internalProtoView(hostProtoViewRef);
    var parentComponentHostView = null;
    var parentComponentBoundElementIndex = null;
    var parentRenderViewRef = null;
    if (isPresent(parentComponentLocation)) {
      parentComponentHostView = internalView(parentComponentLocation.parentView);
      parentComponentBoundElementIndex = parentComponentLocation.boundElementIndex;
      parentRenderViewRef = parentComponentHostView.componentChildViews[parentComponentBoundElementIndex].render;
    }
    var hostRenderView = this._renderer.createInPlaceHostView(parentRenderViewRef, hostElementSelector, hostProtoView.render);
    var hostView = this._utils.createView(hostProtoView, hostRenderView, this, this._renderer);
    this._renderer.setEventDispatcher(hostView.render, hostView);
    this._createViewRecurse(hostView);
    this._utils.attachAndHydrateInPlaceHostView(parentComponentHostView, parentComponentBoundElementIndex, hostView, injector);
    this._viewHydrateRecurse(hostView);
    return new ViewRef(hostView);
  }
  destroyInPlaceHostView(parentComponentLocation, hostViewRef) {
    var hostView = internalView(hostViewRef);
    var parentView = null;
    if (isPresent(parentComponentLocation)) {
      parentView = internalView(parentComponentLocation.parentView).componentChildViews[parentComponentLocation.boundElementIndex];
    }
    this._destroyInPlaceHostView(parentView, hostView);
  }
  createViewInContainer(viewContainerLocation, atIndex, protoViewRef, context = null, injector = null) {
    var protoView = internalProtoView(protoViewRef);
    var parentView = internalView(viewContainerLocation.parentView);
    var boundElementIndex = viewContainerLocation.boundElementIndex;
    var contextView = null;
    var contextBoundElementIndex = null;
    if (isPresent(context)) {
      contextView = internalView(context.parentView);
      contextBoundElementIndex = context.boundElementIndex;
    }
    var view = this._createPooledView(protoView);
    this._renderer.attachViewInContainer(parentView.render, boundElementIndex, atIndex, view.render);
    this._utils.attachViewInContainer(parentView, boundElementIndex, contextView, contextBoundElementIndex, atIndex, view);
    this._utils.hydrateViewInContainer(parentView, boundElementIndex, contextView, contextBoundElementIndex, atIndex, injector);
    this._viewHydrateRecurse(view);
    return new ViewRef(view);
  }
  destroyViewInContainer(viewContainerLocation, atIndex) {
    var parentView = internalView(viewContainerLocation.parentView);
    var boundElementIndex = viewContainerLocation.boundElementIndex;
    this._destroyViewInContainer(parentView, boundElementIndex, atIndex);
  }
  attachViewInContainer(viewContainerLocation, atIndex, viewRef) {
    var view = internalView(viewRef);
    var parentView = internalView(viewContainerLocation.parentView);
    var boundElementIndex = viewContainerLocation.boundElementIndex;
    this._utils.attachViewInContainer(parentView, boundElementIndex, null, null, atIndex, view);
    this._renderer.attachViewInContainer(parentView.render, boundElementIndex, atIndex, view.render);
    return viewRef;
  }
  detachViewInContainer(viewContainerLocation, atIndex) {
    var parentView = internalView(viewContainerLocation.parentView);
    var boundElementIndex = viewContainerLocation.boundElementIndex;
    var viewContainer = parentView.viewContainers[boundElementIndex];
    var view = viewContainer.views[atIndex];
    this._utils.detachViewInContainer(parentView, boundElementIndex, atIndex);
    this._renderer.detachViewInContainer(parentView.render, boundElementIndex, atIndex, view.render);
    return new ViewRef(view);
  }
  _createPooledView(protoView) {
    var view = this._viewPool.getView(protoView);
    if (isBlank(view)) {
      view = this._utils.createView(protoView, this._renderer.createView(protoView.render), this, this._renderer);
      this._renderer.setEventDispatcher(view.render, view);
      this._createViewRecurse(view);
    }
    return view;
  }
  _createViewRecurse(view) {
    var binders = view.proto.elementBinders;
    for (var binderIdx = 0; binderIdx < binders.length; binderIdx++) {
      var binder = binders[binderIdx];
      if (binder.hasStaticComponent()) {
        var childView = this._createPooledView(binder.nestedProtoView);
        this._renderer.attachComponentView(view.render, binderIdx, childView.render);
        this._utils.attachComponentView(view, binderIdx, childView);
      }
    }
  }
  _destroyPooledView(view) {
    this._viewPool.returnView(view);
  }
  _destroyViewInContainer(parentView, boundElementIndex, atIndex) {
    var viewContainer = parentView.viewContainers[boundElementIndex];
    var view = viewContainer.views[atIndex];
    this._viewDehydrateRecurse(view, false);
    this._utils.detachViewInContainer(parentView, boundElementIndex, atIndex);
    this._renderer.detachViewInContainer(parentView.render, boundElementIndex, atIndex, view.render);
    this._destroyPooledView(view);
  }
  _destroyComponentView(hostView, boundElementIndex, componentView) {
    this._viewDehydrateRecurse(componentView, false);
    this._renderer.detachComponentView(hostView.render, boundElementIndex, componentView.render);
    this._utils.detachComponentView(hostView, boundElementIndex);
    this._destroyPooledView(componentView);
  }
  _destroyInPlaceHostView(parentView, hostView) {
    var parentRenderViewRef = null;
    if (isPresent(parentView)) {
      parentRenderViewRef = parentView.render;
    }
    this._viewDehydrateRecurse(hostView, true);
    this._utils.detachInPlaceHostView(parentView, hostView);
    this._renderer.destroyInPlaceHostView(parentRenderViewRef, hostView.render);
  }
  _viewHydrateRecurse(view) {
    this._renderer.hydrateView(view.render);
    var binders = view.proto.elementBinders;
    for (var i = 0; i < binders.length; ++i) {
      if (binders[i].hasStaticComponent()) {
        this._utils.hydrateComponentView(view, i);
        this._viewHydrateRecurse(view.componentChildViews[i]);
      }
    }
  }
  _viewDehydrateRecurse(view, forceDestroyComponents) {
    this._utils.dehydrateView(view);
    this._renderer.dehydrateView(view.render);
    var binders = view.proto.elementBinders;
    for (var i = 0; i < binders.length; i++) {
      var componentView = view.componentChildViews[i];
      if (isPresent(componentView)) {
        if (binders[i].hasDynamicComponent() || forceDestroyComponents) {
          this._destroyComponentView(view, i, componentView);
        } else {
          this._viewDehydrateRecurse(componentView, false);
        }
      }
      var vc = view.viewContainers[i];
      if (isPresent(vc)) {
        for (var j = vc.views.length - 1; j >= 0; j--) {
          this._destroyViewInContainer(view, i, j);
        }
      }
    }
    for (var i = view.inPlaceHostViews.length - 1; i >= 0; i--) {
      var hostView = view.inPlaceHostViews[i];
      this._destroyInPlaceHostView(view, hostView);
    }
  }
}
Object.defineProperty(AppViewManager, "annotations", {get: function() {
    return [new Injectable()];
  }});
Object.defineProperty(AppViewManager, "parameters", {get: function() {
    return [[AppViewPool], [AppViewManagerUtils], [Renderer]];
  }});
Object.defineProperty(AppViewManager.prototype.getComponentView, "parameters", {get: function() {
    return [[ElementRef]];
  }});
Object.defineProperty(AppViewManager.prototype.getViewContainer, "parameters", {get: function() {
    return [[ElementRef]];
  }});
Object.defineProperty(AppViewManager.prototype.getComponent, "parameters", {get: function() {
    return [[ElementRef]];
  }});
Object.defineProperty(AppViewManager.prototype.createDynamicComponentView, "parameters", {get: function() {
    return [[ElementRef], [ProtoViewRef], [Binding], [Injector]];
  }});
Object.defineProperty(AppViewManager.prototype.createInPlaceHostView, "parameters", {get: function() {
    return [[ElementRef], [assert.type.string], [ProtoViewRef], [Injector]];
  }});
Object.defineProperty(AppViewManager.prototype.destroyInPlaceHostView, "parameters", {get: function() {
    return [[ElementRef], [ViewRef]];
  }});
Object.defineProperty(AppViewManager.prototype.createViewInContainer, "parameters", {get: function() {
    return [[ElementRef], [assert.type.number], [ProtoViewRef], [ElementRef], [Injector]];
  }});
Object.defineProperty(AppViewManager.prototype.destroyViewInContainer, "parameters", {get: function() {
    return [[ElementRef], [assert.type.number]];
  }});
Object.defineProperty(AppViewManager.prototype.attachViewInContainer, "parameters", {get: function() {
    return [[ElementRef], [assert.type.number], [ViewRef]];
  }});
Object.defineProperty(AppViewManager.prototype.detachViewInContainer, "parameters", {get: function() {
    return [[ElementRef], [assert.type.number]];
  }});
Object.defineProperty(AppViewManager.prototype._createPooledView, "parameters", {get: function() {
    return [[viewModule.AppProtoView]];
  }});
Object.defineProperty(AppViewManager.prototype._createViewRecurse, "parameters", {get: function() {
    return [[viewModule.AppView]];
  }});
Object.defineProperty(AppViewManager.prototype._destroyPooledView, "parameters", {get: function() {
    return [[viewModule.AppView]];
  }});
Object.defineProperty(AppViewManager.prototype._destroyViewInContainer, "parameters", {get: function() {
    return [[], [], [assert.type.number]];
  }});
Object.defineProperty(AppViewManager.prototype._viewHydrateRecurse, "parameters", {get: function() {
    return [[viewModule.AppView]];
  }});
Object.defineProperty(AppViewManager.prototype._viewDehydrateRecurse, "parameters", {get: function() {
    return [[viewModule.AppView], []];
  }});
//# sourceMappingURL=view_manager.js.map

//# sourceMappingURL=./view_manager.map