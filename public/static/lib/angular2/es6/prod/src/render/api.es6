import {isPresent} from 'angular2/src/facade/lang';
import {Promise} from 'angular2/src/facade/async';
import {List,
  Map} from 'angular2/src/facade/collection';
import {ASTWithSource} from 'angular2/change_detection';
export class EventBinding {
  constructor(fullName, source) {
    this.fullName = fullName;
    this.source = source;
  }
}
Object.defineProperty(EventBinding, "parameters", {get: function() {
    return [[assert.type.string], [ASTWithSource]];
  }});
export class ElementBinder {
  constructor({index,
    parentIndex,
    distanceToParent,
    directives,
    nestedProtoView,
    propertyBindings,
    variableBindings,
    eventBindings,
    textBindings,
    readAttributes}) {
    this.index = index;
    this.parentIndex = parentIndex;
    this.distanceToParent = distanceToParent;
    this.directives = directives;
    this.nestedProtoView = nestedProtoView;
    this.propertyBindings = propertyBindings;
    this.variableBindings = variableBindings;
    this.eventBindings = eventBindings;
    this.textBindings = textBindings;
    this.readAttributes = readAttributes;
  }
}
export class DirectiveBinder {
  constructor({directiveIndex,
    propertyBindings,
    eventBindings,
    hostPropertyBindings}) {
    this.directiveIndex = directiveIndex;
    this.propertyBindings = propertyBindings;
    this.eventBindings = eventBindings;
    this.hostPropertyBindings = hostPropertyBindings;
  }
}
export class ProtoViewDto {
  static get HOST_VIEW_TYPE() {
    return 0;
  }
  static get COMPONENT_VIEW_TYPE() {
    return 1;
  }
  static get EMBEDDED_VIEW_TYPE() {
    return 1;
  }
  constructor({render,
    elementBinders,
    variableBindings,
    type} = {}) {
    this.render = render;
    this.elementBinders = elementBinders;
    this.variableBindings = variableBindings;
    this.type = type;
  }
}
export class DirectiveMetadata {
  static get DIRECTIVE_TYPE() {
    return 0;
  }
  static get COMPONENT_TYPE() {
    return 1;
  }
  constructor({id,
    selector,
    compileChildren,
    hostListeners,
    hostProperties,
    hostAttributes,
    hostActions,
    properties,
    readAttributes,
    type}) {
    this.id = id;
    this.selector = selector;
    this.compileChildren = isPresent(compileChildren) ? compileChildren : true;
    this.hostListeners = hostListeners;
    this.hostProperties = hostProperties;
    this.hostAttributes = hostAttributes;
    this.hostActions = hostActions;
    this.properties = properties;
    this.readAttributes = readAttributes;
    this.type = type;
  }
}
export class RenderProtoViewRef {}
export class RenderViewRef {}
export class ViewDefinition {
  constructor({componentId,
    absUrl,
    template,
    directives}) {
    this.componentId = componentId;
    this.absUrl = absUrl;
    this.template = template;
    this.directives = directives;
  }
}
export class RenderCompiler {
  compileHost(componentId) {
    return null;
  }
  compile(template) {
    return null;
  }
}
Object.defineProperty(RenderCompiler.prototype.compile, "parameters", {get: function() {
    return [[ViewDefinition]];
  }});
export class Renderer {
  createInPlaceHostView(parentHostViewRef, hostElementSelector, hostProtoViewRef) {
    return null;
  }
  destroyInPlaceHostView(parentHostViewRef, hostViewRef) {}
  createView(protoViewRef) {
    return null;
  }
  destroyView(viewRef) {}
  attachComponentView(hostViewRef, elementIndex, componentViewRef) {}
  detachComponentView(hostViewRef, boundElementIndex, componentViewRef) {}
  attachViewInContainer(parentViewRef, boundElementIndex, atIndex, viewRef) {}
  detachViewInContainer(parentViewRef, boundElementIndex, atIndex, viewRef) {}
  hydrateView(viewRef) {}
  dehydrateView(viewRef) {}
  setElementProperty(viewRef, elementIndex, propertyName, propertyValue) {}
  callAction(viewRef, elementIndex, actionExpression, actionArgs) {}
  setText(viewRef, textNodeIndex, text) {}
  setEventDispatcher(viewRef, dispatcher) {}
}
Object.defineProperty(Renderer.prototype.createInPlaceHostView, "parameters", {get: function() {
    return [[RenderViewRef], [assert.type.string], [RenderProtoViewRef]];
  }});
Object.defineProperty(Renderer.prototype.destroyInPlaceHostView, "parameters", {get: function() {
    return [[RenderViewRef], [RenderViewRef]];
  }});
Object.defineProperty(Renderer.prototype.createView, "parameters", {get: function() {
    return [[RenderProtoViewRef]];
  }});
Object.defineProperty(Renderer.prototype.destroyView, "parameters", {get: function() {
    return [[RenderViewRef]];
  }});
Object.defineProperty(Renderer.prototype.attachComponentView, "parameters", {get: function() {
    return [[RenderViewRef], [assert.type.number], [RenderViewRef]];
  }});
Object.defineProperty(Renderer.prototype.detachComponentView, "parameters", {get: function() {
    return [[RenderViewRef], [assert.type.number], [RenderViewRef]];
  }});
Object.defineProperty(Renderer.prototype.attachViewInContainer, "parameters", {get: function() {
    return [[RenderViewRef], [assert.type.number], [assert.type.number], [RenderViewRef]];
  }});
Object.defineProperty(Renderer.prototype.detachViewInContainer, "parameters", {get: function() {
    return [[RenderViewRef], [assert.type.number], [assert.type.number], [RenderViewRef]];
  }});
Object.defineProperty(Renderer.prototype.hydrateView, "parameters", {get: function() {
    return [[RenderViewRef]];
  }});
Object.defineProperty(Renderer.prototype.dehydrateView, "parameters", {get: function() {
    return [[RenderViewRef]];
  }});
Object.defineProperty(Renderer.prototype.setElementProperty, "parameters", {get: function() {
    return [[RenderViewRef], [assert.type.number], [assert.type.string], [assert.type.any]];
  }});
Object.defineProperty(Renderer.prototype.callAction, "parameters", {get: function() {
    return [[RenderViewRef], [assert.type.number], [assert.type.string], [assert.type.any]];
  }});
Object.defineProperty(Renderer.prototype.setText, "parameters", {get: function() {
    return [[RenderViewRef], [assert.type.number], [assert.type.string]];
  }});
Object.defineProperty(Renderer.prototype.setEventDispatcher, "parameters", {get: function() {
    return [[RenderViewRef], [assert.type.any]];
  }});
export class EventDispatcher {
  dispatchEvent(elementIndex, eventName, locals) {}
}
Object.defineProperty(EventDispatcher.prototype.dispatchEvent, "parameters", {get: function() {
    return [[assert.type.number], [assert.type.string], [assert.genericType(Map, assert.type.string, assert.type.any)]];
  }});
//# sourceMappingURL=api.js.map

//# sourceMappingURL=./api.map