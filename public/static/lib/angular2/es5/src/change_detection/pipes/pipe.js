System.register(["angular2/src/facade/lang"], function($__export) {
  "use strict";
  var __decorate,
      __metadata,
      BaseException,
      CONST,
      __esModule,
      WrappedValue,
      _wrappedValues,
      _wrappedIndex,
      Pipe,
      PipeFactory;
  function _abstract() {
    throw new BaseException('This method is abstract');
  }
  return {
    setters: [function($__m) {
      BaseException = $__m.BaseException;
      CONST = $__m.CONST;
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
      WrappedValue = (function() {
        function WrappedValue(wrapped) {
          this.wrapped = wrapped;
        }
        return ($traceurRuntime.createClass)(WrappedValue, {}, {wrap: function(value) {
            var w = _wrappedValues[_wrappedIndex++ % 5];
            w.wrapped = value;
            return w;
          }});
      }());
      $__export("WrappedValue", WrappedValue);
      _wrappedValues = [new WrappedValue(null), new WrappedValue(null), new WrappedValue(null), new WrappedValue(null), new WrappedValue(null)];
      _wrappedIndex = 0;
      Pipe = (function() {
        function Pipe() {}
        return ($traceurRuntime.createClass)(Pipe, {
          supports: function(obj) {
            return false;
          },
          onDestroy: function() {},
          transform: function(value) {
            return null;
          }
        }, {});
      }());
      $__export("Pipe", Pipe);
      PipeFactory = (($traceurRuntime.createClass)(function() {}, {
        supports: function(obs) {
          _abstract();
          return false;
        },
        create: function(cdRef) {
          _abstract();
          return null;
        }
      }, {}));
      $__export("PipeFactory", PipeFactory);
      $__export("PipeFactory", PipeFactory = __decorate([CONST(), __metadata('design:paramtypes', [])], PipeFactory));
    }
  };
});
//# sourceMappingURL=pipe.js.map

//# sourceMappingURL=../../../src/change_detection/pipes/pipe.js.map