import {AST} from 'angular2/change_detection';
import {SetterFn} from 'angular2/src/reflection/types';
import {List,
  ListWrapper} from 'angular2/src/facade/collection';
import * as protoViewModule from './proto_view';
export class ElementBinder {
  constructor({textNodeIndices,
    contentTagSelector,
    nestedProtoView,
    componentId,
    eventLocals,
    localEvents,
    globalEvents,
    hostActions,
    parentIndex,
    distanceToParent,
    propertySetters} = {}) {
    this.textNodeIndices = textNodeIndices;
    this.contentTagSelector = contentTagSelector;
    this.nestedProtoView = nestedProtoView;
    this.componentId = componentId;
    this.eventLocals = eventLocals;
    this.localEvents = localEvents;
    this.globalEvents = globalEvents;
    this.hostActions = hostActions;
    this.parentIndex = parentIndex;
    this.distanceToParent = distanceToParent;
    this.propertySetters = propertySetters;
  }
}
export class Event {
  constructor(name, target, fullName) {
    this.name = name;
    this.target = target;
    this.fullName = fullName;
  }
}
Object.defineProperty(Event, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string], [assert.type.string]];
  }});
export class HostAction {
  constructor(actionName, actionExpression, expression) {
    this.actionName = actionName;
    this.actionExpression = actionExpression;
    this.expression = expression;
  }
}
Object.defineProperty(HostAction, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string], [AST]];
  }});
//# sourceMappingURL=element_binder.js.map

//# sourceMappingURL=./element_binder.map