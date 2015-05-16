System.register(["angular2/src/dom/dom_adapter"], function($__export) {
  "use strict";
  var DOM,
      BrowserLocation;
  return {
    setters: [function($__m) {
      DOM = $__m.DOM;
    }],
    execute: function() {
      BrowserLocation = (function() {
        function BrowserLocation() {
          this._location = DOM.getLocation();
          this._history = DOM.getHistory();
          this._baseHref = DOM.getBaseHref();
        }
        return ($traceurRuntime.createClass)(BrowserLocation, {
          onPopState: function(fn) {
            DOM.getGlobalEventTarget('window').addEventListener('popstate', fn, false);
          },
          getBaseHref: function() {
            return this._baseHref;
          },
          path: function() {
            return this._location.pathname;
          },
          pushState: function(state, title, url) {
            this._history.pushState(state, title, url);
          },
          forward: function() {
            this._history.forward();
          },
          back: function() {
            this._history.back();
          }
        }, {});
      }());
      $__export("BrowserLocation", BrowserLocation);
      Object.defineProperty(BrowserLocation.prototype.pushState, "parameters", {get: function() {
          return [[assert.type.any], [assert.type.string], [assert.type.string]];
        }});
    }
  };
});
//# sourceMappingURL=browser_location.js.map

//# sourceMappingURL=../../src/router/browser_location.js.map