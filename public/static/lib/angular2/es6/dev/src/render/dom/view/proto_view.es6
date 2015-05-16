import {isPresent} from 'angular2/src/facade/lang';
import {DOM} from 'angular2/src/dom/dom_adapter';
import {List} from 'angular2/src/facade/collection';
import {ElementBinder} from './element_binder';
import {NG_BINDING_CLASS} from '../util';
import {RenderProtoViewRef} from '../../api';
export function resolveInternalDomProtoView(protoViewRef) {
  var domProtoViewRef = protoViewRef;
  return domProtoViewRef._protoView;
}
Object.defineProperty(resolveInternalDomProtoView, "parameters", {get: function() {
    return [[RenderProtoViewRef]];
  }});
export class DomProtoViewRef extends RenderProtoViewRef {
  constructor(protoView) {
    super();
    this._protoView = protoView;
  }
}
Object.defineProperty(DomProtoViewRef, "parameters", {get: function() {
    return [[DomProtoView]];
  }});
export class DomProtoView {
  constructor({elementBinders,
    element}) {
    this.element = element;
    this.elementBinders = elementBinders;
    this.isTemplateElement = DOM.isTemplateElement(this.element);
    this.rootBindingOffset = (isPresent(this.element) && DOM.hasClass(this.element, NG_BINDING_CLASS)) ? 1 : 0;
  }
}
//# sourceMappingURL=proto_view.js.map

//# sourceMappingURL=./proto_view.map