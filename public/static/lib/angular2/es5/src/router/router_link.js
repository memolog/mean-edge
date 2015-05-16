System.register(["angular2/src/core/annotations_impl/annotations", "angular2/core", "angular2/src/facade/collection", "angular2/src/facade/lang", "angular2/src/dom/dom_adapter", "./router"], function($__export) {
  "use strict";
  var Directive,
      onAllChangesDone,
      ElementRef,
      StringMap,
      StringMapWrapper,
      isPresent,
      DOM,
      Router,
      RouterLink;
  return {
    setters: [function($__m) {
      Directive = $__m.Directive;
      onAllChangesDone = $__m.onAllChangesDone;
    }, function($__m) {
      ElementRef = $__m.ElementRef;
    }, function($__m) {
      StringMap = $__m.StringMap;
      StringMapWrapper = $__m.StringMapWrapper;
    }, function($__m) {
      isPresent = $__m.isPresent;
    }, function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      Router = $__m.Router;
    }],
    execute: function() {
      RouterLink = (function() {
        function RouterLink(elementRef, router) {
          var $__0 = this;
          this._domEl = elementRef.domElement;
          this._router = router;
          this._params = StringMapWrapper.create();
          DOM.on(this._domEl, 'click', (function(evt) {
            evt.preventDefault();
            $__0._router.navigate($__0._href);
          }));
        }
        return ($traceurRuntime.createClass)(RouterLink, {
          set route(changes) {
            this._route = changes;
          },
          set params(changes) {
            this._params = changes;
          },
          onAllChangesDone: function() {
            if (isPresent(this._route) && isPresent(this._params)) {
              var newHref = this._router.generate(this._route, this._params);
              this._href = newHref;
              DOM.setAttribute(this._domEl, 'href', newHref);
            }
          }
        }, {});
      }());
      $__export("RouterLink", RouterLink);
      Object.defineProperty(RouterLink, "annotations", {get: function() {
          return [new Directive({
            selector: '[router-link]',
            properties: {
              'route': 'routerLink',
              'params': 'routerParams'
            },
            lifecycle: [onAllChangesDone]
          })];
        }});
      Object.defineProperty(RouterLink, "parameters", {get: function() {
          return [[ElementRef], [Router]];
        }});
    }
  };
});
//# sourceMappingURL=router_link.js.map

//# sourceMappingURL=../../src/router/router_link.js.map