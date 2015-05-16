System.register(["angular2/src/facade/async", "angular2/src/facade/lang", "./pipe"], function($__export) {
  "use strict";
  var __decorate,
      __metadata,
      ObservableWrapper,
      isBlank,
      isPresent,
      CONST,
      Pipe,
      WrappedValue,
      PipeFactory,
      __esModule,
      ObservablePipe,
      ObservablePipeFactory;
  return {
    setters: [function($__m) {
      ObservableWrapper = $__m.ObservableWrapper;
    }, function($__m) {
      isBlank = $__m.isBlank;
      isPresent = $__m.isPresent;
      CONST = $__m.CONST;
    }, function($__m) {
      Pipe = $__m.Pipe;
      WrappedValue = $__m.WrappedValue;
      PipeFactory = $__m.PipeFactory;
    }],
    execute: function() {
      __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
          case 2:
            return decorators.reduceRight(function(o, d) {
              return (d && d(o)) || o;
            }, target);
          case 3:
            return decorators.reduceRight(function(o, d) {
              return (d && d(target, key)), void 0;
            }, void 0);
          case 4:
            return decorators.reduceRight(function(o, d) {
              return (d && d(target, key, o)) || o;
            }, desc);
        }
      };
      __metadata = (this && this.__metadata) || function(k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(k, v);
      };
      __esModule = true;
      $__export("__esModule", __esModule);
      ObservablePipe = (function($__super) {
        function ObservablePipe(ref) {
          $traceurRuntime.superConstructor(ObservablePipe).call(this);
          this._ref = ref;
          this._latestValue = null;
          this._latestReturnedValue = null;
          this._subscription = null;
          this._observable = null;
        }
        return ($traceurRuntime.createClass)(ObservablePipe, {
          supports: function(obs) {
            return ObservableWrapper.isObservable(obs);
          },
          onDestroy: function() {
            if (isPresent(this._subscription)) {
              this._dispose();
            }
          },
          transform: function(obs) {
            if (isBlank(this._subscription)) {
              this._subscribe(obs);
              return null;
            }
            if (obs !== this._observable) {
              this._dispose();
              return this.transform(obs);
            }
            if (this._latestValue === this._latestReturnedValue) {
              return this._latestReturnedValue;
            } else {
              this._latestReturnedValue = this._latestValue;
              return WrappedValue.wrap(this._latestValue);
            }
          },
          _subscribe: function(obs) {
            var $__0 = this;
            this._observable = obs;
            this._subscription = ObservableWrapper.subscribe(obs, (function(value) {
              $__0._updateLatestValue(value);
            }), (function(e) {
              throw e;
            }));
          },
          _dispose: function() {
            ObservableWrapper.dispose(this._subscription);
            this._latestValue = null;
            this._latestReturnedValue = null;
            this._subscription = null;
            this._observable = null;
          },
          _updateLatestValue: function(value) {
            this._latestValue = value;
            this._ref.requestCheck();
          }
        }, {}, $__super);
      }(Pipe));
      $__export("ObservablePipe", ObservablePipe);
      ObservablePipeFactory = (function($__super) {
        function $__1() {
          $traceurRuntime.superConstructor($__1).call(this);
        }
        return ($traceurRuntime.createClass)($__1, {
          supports: function(obs) {
            return ObservableWrapper.isObservable(obs);
          },
          create: function(cdRef) {
            return new ObservablePipe(cdRef);
          }
        }, {}, $__super);
      }(PipeFactory));
      $__export("ObservablePipeFactory", ObservablePipeFactory);
      $__export("ObservablePipeFactory", ObservablePipeFactory = __decorate([CONST(), __metadata('design:paramtypes', [])], ObservablePipeFactory));
    }
  };
});
//# sourceMappingURL=observable_pipe.js.map

//# sourceMappingURL=../../../src/change_detection/pipes/observable_pipe.js.map