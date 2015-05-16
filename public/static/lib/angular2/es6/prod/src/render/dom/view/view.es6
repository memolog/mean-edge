import {DOM} from 'angular2/src/dom/dom_adapter';
import {ListWrapper,
  MapWrapper,
  Map,
  StringMapWrapper,
  List} from 'angular2/src/facade/collection';
import {Locals} from 'angular2/change_detection';
import {int,
  isPresent,
  isBlank,
  BaseException} from 'angular2/src/facade/lang';
import {DomViewContainer} from './view_container';
import {DomProtoView} from './proto_view';
import {LightDom} from '../shadow_dom/light_dom';
import {Content} from '../shadow_dom/content_tag';
import {RenderViewRef} from '../../api';
export function resolveInternalDomView(viewRef) {
  var domViewRef = viewRef;
  return domViewRef._view;
}
Object.defineProperty(resolveInternalDomView, "parameters", {get: function() {
    return [[RenderViewRef]];
  }});
export class DomViewRef extends RenderViewRef {
  constructor(view) {
    super();
    this._view = view;
  }
}
Object.defineProperty(DomViewRef, "parameters", {get: function() {
    return [[DomView]];
  }});
const NG_BINDING_CLASS = 'ng-binding';
export class DomView {
  constructor(proto, rootNodes, boundTextNodes, boundElements, contentTags) {
    this.proto = proto;
    this.rootNodes = rootNodes;
    this.boundTextNodes = boundTextNodes;
    this.boundElements = boundElements;
    this.viewContainers = ListWrapper.createFixedSize(boundElements.length);
    this.contentTags = contentTags;
    this.lightDoms = ListWrapper.createFixedSize(boundElements.length);
    this.hostLightDom = null;
    this.hydrated = false;
    this.eventHandlerRemovers = [];
    this.eventDispatcher = null;
    this.shadowRoot = null;
  }
  getDirectParentLightDom(boundElementIndex) {
    var binder = this.proto.elementBinders[boundElementIndex];
    var destLightDom = null;
    if (binder.parentIndex !== -1 && binder.distanceToParent === 1) {
      destLightDom = this.lightDoms[binder.parentIndex];
    }
    return destLightDom;
  }
  setElementProperty(elementIndex, propertyName, value) {
    var setter = MapWrapper.get(this.proto.elementBinders[elementIndex].propertySetters, propertyName);
    setter(this.boundElements[elementIndex], value);
  }
  callAction(elementIndex, actionExpression, actionArgs) {
    var binder = this.proto.elementBinders[elementIndex];
    var hostAction = MapWrapper.get(binder.hostActions, actionExpression);
    hostAction.eval(this.boundElements[elementIndex], this._localsWithAction(actionArgs));
  }
  _localsWithAction(action) {
    var map = MapWrapper.create();
    MapWrapper.set(map, '$action', action);
    return new Locals(null, map);
  }
  setText(textIndex, value) {
    DOM.setText(this.boundTextNodes[textIndex], value);
  }
  dispatchEvent(elementIndex, eventName, event) {
    var allowDefaultBehavior = true;
    if (isPresent(this.eventDispatcher)) {
      var evalLocals = MapWrapper.create();
      MapWrapper.set(evalLocals, '$event', event);
      allowDefaultBehavior = this.eventDispatcher.dispatchEvent(elementIndex, eventName, evalLocals);
      if (!allowDefaultBehavior) {
        event.preventDefault();
      }
    }
    return allowDefaultBehavior;
  }
}
Object.defineProperty(DomView, "parameters", {get: function() {
    return [[DomProtoView], [List], [List], [List], [List]];
  }});
Object.defineProperty(DomView.prototype.getDirectParentLightDom, "parameters", {get: function() {
    return [[assert.type.number]];
  }});
Object.defineProperty(DomView.prototype.setElementProperty, "parameters", {get: function() {
    return [[assert.type.number], [assert.type.string], [assert.type.any]];
  }});
Object.defineProperty(DomView.prototype.callAction, "parameters", {get: function() {
    return [[assert.type.number], [assert.type.string], [assert.type.any]];
  }});
Object.defineProperty(DomView.prototype._localsWithAction, "parameters", {get: function() {
    return [[Object]];
  }});
Object.defineProperty(DomView.prototype.setText, "parameters", {get: function() {
    return [[assert.type.number], [assert.type.string]];
  }});
//# sourceMappingURL=view.js.map

//# sourceMappingURL=./view.map