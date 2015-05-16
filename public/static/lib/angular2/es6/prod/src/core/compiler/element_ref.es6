import {DOM} from 'angular2/src/dom/dom_adapter';
import {normalizeBlank} from 'angular2/src/facade/lang';
import {ViewRef} from './view_ref';
import {resolveInternalDomView} from 'angular2/src/render/dom/view/view';
export class ElementRef {
  constructor(parentView, boundElementIndex) {
    this.parentView = parentView;
    this.boundElementIndex = boundElementIndex;
  }
  get domElement() {
    return resolveInternalDomView(this.parentView.render).boundElements[this.boundElementIndex];
  }
  getAttribute(name) {
    return normalizeBlank(DOM.getAttribute(this.domElement, name));
  }
}
Object.defineProperty(ElementRef, "parameters", {get: function() {
    return [[ViewRef], [assert.type.number]];
  }});
Object.defineProperty(ElementRef.prototype.getAttribute, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
//# sourceMappingURL=element_ref.js.map

//# sourceMappingURL=./element_ref.map