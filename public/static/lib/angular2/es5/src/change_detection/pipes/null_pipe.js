System.register(["angular2/src/facade/lang", "./pipe"], function($__export) {
  "use strict";
  var __decorate,
      __metadata,
      isBlank,
      CONST,
      Pipe,
      WrappedValue,
      PipeFactory,
      __esModule,
      NullPipeFactory,
      NullPipe;
  return {
    setters: [function($__m) {
      isBlank = $__m.isBlank;
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
      NullPipeFactory = (function($__super) {
        function $__0() {
          $traceurRuntime.superConstructor($__0).call(this);
        }
        return ($traceurRuntime.createClass)($__0, {
          supports: function(obj) {
            return NullPipe.supportsObj(obj);
          },
          create: function(cdRef) {
            return new NullPipe();
          }
        }, {}, $__super);
      }(PipeFactory));
      $__export("NullPipeFactory", NullPipeFactory);
      $__export("NullPipeFactory", NullPipeFactory = __decorate([CONST(), __metadata('design:paramtypes', [])], NullPipeFactory));
      NullPipe = (function($__super) {
        function NullPipe() {
          $traceurRuntime.superConstructor(NullPipe).call(this);
          this.called = false;
        }
        return ($traceurRuntime.createClass)(NullPipe, {
          supports: function(obj) {
            return NullPipe.supportsObj(obj);
          },
          transform: function(value) {
            if (!this.called) {
              this.called = true;
              return WrappedValue.wrap(null);
            } else {
              return null;
            }
          }
        }, {supportsObj: function(obj) {
            return isBlank(obj);
          }}, $__super);
      }(Pipe));
      $__export("NullPipe", NullPipe);
    }
  };
});
//# sourceMappingURL=null_pipe.js.map

//# sourceMappingURL=../../../src/change_detection/pipes/null_pipe.js.map