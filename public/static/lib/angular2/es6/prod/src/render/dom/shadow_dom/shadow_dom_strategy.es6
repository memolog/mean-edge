import {isBlank,
  isPresent} from 'angular2/src/facade/lang';
import {Promise} from 'angular2/src/facade/async';
import * as viewModule from '../view/view';
import {LightDom} from './light_dom';
export class ShadowDomStrategy {
  hasNativeContentElement() {
    return true;
  }
  prepareShadowRoot(el) {
    return null;
  }
  constructLightDom(lightDomView, el) {
    return null;
  }
  processStyleElement(hostComponentId, templateUrl, styleElement) {
    return null;
  }
  processElement(hostComponentId, elementComponentId, element) {}
}
Object.defineProperty(ShadowDomStrategy.prototype.constructLightDom, "parameters", {get: function() {
    return [[viewModule.DomView], []];
  }});
Object.defineProperty(ShadowDomStrategy.prototype.processStyleElement, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string], []];
  }});
Object.defineProperty(ShadowDomStrategy.prototype.processElement, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string], []];
  }});
//# sourceMappingURL=shadow_dom_strategy.js.map

//# sourceMappingURL=./shadow_dom_strategy.map