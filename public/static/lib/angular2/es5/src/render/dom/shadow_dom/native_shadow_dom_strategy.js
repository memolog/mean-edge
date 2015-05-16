System.register(["angular2/src/facade/async", "angular2/src/dom/dom_adapter", "./style_url_resolver", "./shadow_dom_strategy"], function($__export) {
  "use strict";
  var Promise,
      DOM,
      StyleUrlResolver,
      ShadowDomStrategy,
      NativeShadowDomStrategy;
  return {
    setters: [function($__m) {
      Promise = $__m.Promise;
    }, function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      StyleUrlResolver = $__m.StyleUrlResolver;
    }, function($__m) {
      ShadowDomStrategy = $__m.ShadowDomStrategy;
    }],
    execute: function() {
      NativeShadowDomStrategy = (function($__super) {
        function NativeShadowDomStrategy(styleUrlResolver) {
          $traceurRuntime.superConstructor(NativeShadowDomStrategy).call(this);
          this.styleUrlResolver = styleUrlResolver;
        }
        return ($traceurRuntime.createClass)(NativeShadowDomStrategy, {
          prepareShadowRoot: function(el) {
            return DOM.createShadowRoot(el);
          },
          processStyleElement: function(hostComponentId, templateUrl, styleEl) {
            var cssText = DOM.getText(styleEl);
            cssText = this.styleUrlResolver.resolveUrls(cssText, templateUrl);
            DOM.setText(styleEl, cssText);
            return null;
          }
        }, {}, $__super);
      }(ShadowDomStrategy));
      $__export("NativeShadowDomStrategy", NativeShadowDomStrategy);
      Object.defineProperty(NativeShadowDomStrategy, "parameters", {get: function() {
          return [[StyleUrlResolver]];
        }});
      Object.defineProperty(NativeShadowDomStrategy.prototype.processStyleElement, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string], []];
        }});
    }
  };
});
//# sourceMappingURL=native_shadow_dom_strategy.js.map

//# sourceMappingURL=../../../../src/render/dom/shadow_dom/native_shadow_dom_strategy.js.map