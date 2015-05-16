System.register(["./browser_location", "angular2/src/facade/lang", "angular2/src/facade/async"], function($__export) {
  "use strict";
  var BrowserLocation,
      StringWrapper,
      EventEmitter,
      ObservableWrapper,
      Location;
  function stripIndexHtml(url) {
    if (url.length > 10 && StringWrapper.substring(url, url.length - 11) == '/index.html') {
      return StringWrapper.substring(url, 0, url.length - 11);
    }
    return url;
  }
  return {
    setters: [function($__m) {
      BrowserLocation = $__m.BrowserLocation;
    }, function($__m) {
      StringWrapper = $__m.StringWrapper;
    }, function($__m) {
      EventEmitter = $__m.EventEmitter;
      ObservableWrapper = $__m.ObservableWrapper;
    }],
    execute: function() {
      Location = (function() {
        function Location(browserLocation) {
          var $__0 = this;
          this._subject = new EventEmitter();
          this._browserLocation = browserLocation;
          this._baseHref = stripIndexHtml(this._browserLocation.getBaseHref());
          this._browserLocation.onPopState((function(_) {
            return $__0._onPopState(_);
          }));
        }
        return ($traceurRuntime.createClass)(Location, {
          _onPopState: function(_) {
            ObservableWrapper.callNext(this._subject, {'url': this.path()});
          },
          path: function() {
            return this.normalize(this._browserLocation.path());
          },
          normalize: function(url) {
            return this._stripBaseHref(stripIndexHtml(url));
          },
          _stripBaseHref: function(url) {
            if (this._baseHref.length > 0 && StringWrapper.startsWith(url, this._baseHref)) {
              return StringWrapper.substring(url, this._baseHref.length);
            }
            return url;
          },
          go: function(url) {
            var finalUrl = url[0] == '/' ? url : this._baseHref + '/' + url;
            this._browserLocation.pushState(null, '', finalUrl);
          },
          forward: function() {
            this._browserLocation.forward();
          },
          back: function() {
            this._browserLocation.back();
          },
          subscribe: function(onNext) {
            var onThrow = arguments[1] !== (void 0) ? arguments[1] : null;
            var onReturn = arguments[2] !== (void 0) ? arguments[2] : null;
            ObservableWrapper.subscribe(this._subject, onNext, onThrow, onReturn);
          }
        }, {});
      }());
      $__export("Location", Location);
      Object.defineProperty(Location, "parameters", {get: function() {
          return [[BrowserLocation]];
        }});
      Object.defineProperty(Location.prototype.go, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
    }
  };
});
//# sourceMappingURL=location.js.map

//# sourceMappingURL=../../src/router/location.js.map