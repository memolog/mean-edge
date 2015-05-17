import {List,
  ListWrapper} from 'angular2/src/facade/collection';
import {DOM} from 'angular2/src/dom/dom_adapter';
import {isPresent} from 'angular2/src/facade/lang';
import {resolveInternalDomView} from 'angular2/src/render/dom/view/view';
export class Log {
  constructor() {
    this._result = [];
  }
  add(value) {
    ListWrapper.push(this._result, value);
  }
  fn(value) {
    return (a1 = null, a2 = null, a3 = null, a4 = null, a5 = null) => {
      ListWrapper.push(this._result, value);
    };
  }
  result() {
    return ListWrapper.join(this._result, "; ");
  }
}
export function viewRootNodes(view) {
  return resolveInternalDomView(view.render).rootNodes;
}
export function queryView(view, selector) {
  var rootNodes = viewRootNodes(view);
  for (var i = 0; i < rootNodes.length; ++i) {
    var res = DOM.querySelector(rootNodes[i], selector);
    if (isPresent(res)) {
      return res;
    }
  }
  return null;
}
Object.defineProperty(queryView, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
export function dispatchEvent(element, eventType) {
  DOM.dispatchEvent(element, DOM.createEvent(eventType));
}
export function el(html) {
  return DOM.firstChild(DOM.content(DOM.createTemplate(html)));
}
Object.defineProperty(el, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
//# sourceMappingURL=utils.js.map

//# sourceMappingURL=./utils.map