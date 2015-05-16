System.register(["angular2/test_lib", "angular2/src/facade/lang", "angular2/src/facade/async", "angular2/src/facade/collection", "angular2/src/router/location"], function($__export) {
  "use strict";
  var SpyObject,
      proxy,
      IMPLEMENTS,
      EventEmitter,
      ObservableWrapper,
      List,
      ListWrapper,
      Location,
      SpyLocation;
  return {
    setters: [function($__m) {
      SpyObject = $__m.SpyObject;
      proxy = $__m.proxy;
    }, function($__m) {
      IMPLEMENTS = $__m.IMPLEMENTS;
    }, function($__m) {
      EventEmitter = $__m.EventEmitter;
      ObservableWrapper = $__m.ObservableWrapper;
    }, function($__m) {
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      Location = $__m.Location;
    }],
    execute: function() {
      SpyLocation = (function($__super) {
        function SpyLocation() {
          $traceurRuntime.superConstructor(SpyLocation).call(this);
          this._path = '/';
          this.urlChanges = ListWrapper.create();
          this._subject = new EventEmitter();
        }
        return ($traceurRuntime.createClass)(SpyLocation, {
          setInitialPath: function(url) {
            this._path = url;
          },
          path: function() {
            return this._path;
          },
          simulateUrlPop: function(pathname) {
            ObservableWrapper.callNext(this._subject, {'url': pathname});
          },
          go: function(url) {
            if (this._path === url) {
              return ;
            }
            this._path = url;
            ListWrapper.push(this.urlChanges, url);
          },
          forward: function() {},
          back: function() {},
          subscribe: function(onNext) {
            var onThrow = arguments[1] !== (void 0) ? arguments[1] : null;
            var onReturn = arguments[2] !== (void 0) ? arguments[2] : null;
            ObservableWrapper.subscribe(this._subject, onNext, onThrow, onReturn);
          },
          noSuchMethod: function(m) {
            return $traceurRuntime.superGet(this, SpyLocation.prototype, "noSuchMethod").call(this, m);
          }
        }, {}, $__super);
      }(SpyObject));
      $__export("SpyLocation", SpyLocation);
      Object.defineProperty(SpyLocation, "annotations", {get: function() {
          return [new proxy, new IMPLEMENTS(Location)];
        }});
      Object.defineProperty(SpyLocation.prototype.setInitialPath, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(SpyLocation.prototype.simulateUrlPop, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(SpyLocation.prototype.go, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
    }
  };
});
//# sourceMappingURL=location_mock.js.map

//# sourceMappingURL=../../src/mock/location_mock.js.map