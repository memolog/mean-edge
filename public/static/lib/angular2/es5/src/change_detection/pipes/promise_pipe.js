System.register(["angular2/src/facade/async", "angular2/src/facade/lang", "./pipe"], function($__export) {
  "use strict";
  var PromiseWrapper,
      isBlank,
      Pipe,
      WrappedValue,
      __esModule,
      PromisePipe,
      PromisePipeFactory;
  return {
    setters: [function($__m) {
      PromiseWrapper = $__m.PromiseWrapper;
    }, function($__m) {
      isBlank = $__m.isBlank;
    }, function($__m) {
      Pipe = $__m.Pipe;
      WrappedValue = $__m.WrappedValue;
    }],
    execute: function() {
      __esModule = true;
      $__export("__esModule", __esModule);
      PromisePipe = (function($__super) {
        function PromisePipe(ref) {
          $traceurRuntime.superConstructor(PromisePipe).call(this);
          this._ref = ref;
          this._latestValue = null;
          this._latestReturnedValue = null;
        }
        return ($traceurRuntime.createClass)(PromisePipe, {
          supports: function(promise) {
            return PromiseWrapper.isPromise(promise);
          },
          onDestroy: function() {},
          transform: function(promise) {
            var $__0 = this;
            if (isBlank(this._sourcePromise)) {
              this._sourcePromise = promise;
              promise.then((function(val) {
                if ($__0._sourcePromise === promise) {
                  $__0._updateLatestValue(val);
                }
              }));
              return null;
            }
            if (promise !== this._sourcePromise) {
              this._sourcePromise = null;
              return this.transform(promise);
            }
            if (this._latestValue === this._latestReturnedValue) {
              return this._latestReturnedValue;
            } else {
              this._latestReturnedValue = this._latestValue;
              return WrappedValue.wrap(this._latestValue);
            }
          },
          _updateLatestValue: function(value) {
            this._latestValue = value;
            this._ref.requestCheck();
          }
        }, {}, $__super);
      }(Pipe));
      $__export("PromisePipe", PromisePipe);
      PromisePipeFactory = (function() {
        function PromisePipeFactory() {}
        return ($traceurRuntime.createClass)(PromisePipeFactory, {
          supports: function(promise) {
            return PromiseWrapper.isPromise(promise);
          },
          create: function(cdRef) {
            return new PromisePipe(cdRef);
          }
        }, {});
      }());
      $__export("PromisePipeFactory", PromisePipeFactory);
    }
  };
});
//# sourceMappingURL=promise_pipe.js.map

//# sourceMappingURL=../../../src/change_detection/pipes/promise_pipe.js.map