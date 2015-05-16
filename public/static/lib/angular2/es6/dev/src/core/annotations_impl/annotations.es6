import {CONST,
  normalizeBlank,
  isPresent} from 'angular2/src/facade/lang';
import {ListWrapper,
  List} from 'angular2/src/facade/collection';
import {Injectable} from 'angular2/src/di/annotations_impl';
import {DEFAULT} from 'angular2/change_detection';
export class Directive extends Injectable {
  constructor({selector,
    properties,
    events,
    hostListeners,
    hostProperties,
    hostAttributes,
    hostActions,
    lifecycle,
    compileChildren = true} = {}) {
    super();
    this.selector = selector;
    this.properties = properties;
    this.events = events;
    this.hostListeners = hostListeners;
    this.hostProperties = hostProperties;
    this.hostAttributes = hostAttributes;
    this.hostActions = hostActions;
    this.lifecycle = lifecycle;
    this.compileChildren = compileChildren;
  }
  hasLifecycleHook(hook) {
    return isPresent(this.lifecycle) ? ListWrapper.contains(this.lifecycle, hook) : false;
  }
}
Object.defineProperty(Directive, "annotations", {get: function() {
    return [new CONST()];
  }});
Object.defineProperty(Directive.prototype.hasLifecycleHook, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
export class Component extends Directive {
  constructor({selector,
    properties,
    events,
    hostListeners,
    hostProperties,
    hostAttributes,
    hostActions,
    injectables,
    lifecycle,
    changeDetection = DEFAULT,
    compileChildren = true,
    publishAs} = {}) {
    super({
      selector: selector,
      properties: properties,
      events: events,
      hostListeners: hostListeners,
      hostProperties: hostProperties,
      hostAttributes: hostAttributes,
      hostActions: hostActions,
      lifecycle: lifecycle,
      compileChildren: compileChildren
    });
    this.changeDetection = changeDetection;
    this.injectables = injectables;
    this.publishAs = publishAs;
  }
}
Object.defineProperty(Component, "annotations", {get: function() {
    return [new CONST()];
  }});
export const onDestroy = "onDestroy";
export const onChange = "onChange";
export const onAllChangesDone = "onAllChangesDone";
//# sourceMappingURL=annotations.js.map

//# sourceMappingURL=./annotations.map