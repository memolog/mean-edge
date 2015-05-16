"use strict";
Object.defineProperties(module.exports, {
  NativeShadowDomStrategy: {get: function() {
      return NativeShadowDomStrategy;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__style_95_url_95_resolver__,
    $__shadow_95_dom_95_strategy__;
var Promise = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}).Promise;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var StyleUrlResolver = ($__style_95_url_95_resolver__ = require("./style_url_resolver"), $__style_95_url_95_resolver__ && $__style_95_url_95_resolver__.__esModule && $__style_95_url_95_resolver__ || {default: $__style_95_url_95_resolver__}).StyleUrlResolver;
var ShadowDomStrategy = ($__shadow_95_dom_95_strategy__ = require("./shadow_dom_strategy"), $__shadow_95_dom_95_strategy__ && $__shadow_95_dom_95_strategy__.__esModule && $__shadow_95_dom_95_strategy__ || {default: $__shadow_95_dom_95_strategy__}).ShadowDomStrategy;
var NativeShadowDomStrategy = function NativeShadowDomStrategy(styleUrlResolver) {
  $traceurRuntime.superConstructor($NativeShadowDomStrategy).call(this);
  this.styleUrlResolver = styleUrlResolver;
};
var $NativeShadowDomStrategy = NativeShadowDomStrategy;
($traceurRuntime.createClass)(NativeShadowDomStrategy, {
  prepareShadowRoot: function(el) {
    return DOM.createShadowRoot(el);
  },
  processStyleElement: function(hostComponentId, templateUrl, styleEl) {
    var cssText = DOM.getText(styleEl);
    cssText = this.styleUrlResolver.resolveUrls(cssText, templateUrl);
    DOM.setText(styleEl, cssText);
    return null;
  }
}, {}, ShadowDomStrategy);
Object.defineProperty(NativeShadowDomStrategy, "parameters", {get: function() {
    return [[StyleUrlResolver]];
  }});
Object.defineProperty(NativeShadowDomStrategy.prototype.processStyleElement, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.string], []];
  }});
//# sourceMappingURL=native_shadow_dom_strategy.js.map

//# sourceMappingURL=./native_shadow_dom_strategy.map