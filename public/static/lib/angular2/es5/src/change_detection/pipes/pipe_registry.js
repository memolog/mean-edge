System.register(["angular2/src/facade/collection", "angular2/src/facade/lang", "angular2/src/di/decorators"], function($__export) {
  "use strict";
  var __decorate,
      __metadata,
      ListWrapper,
      isBlank,
      BaseException,
      Injectable,
      __esModule,
      PipeRegistry;
  return {
    setters: [function($__m) {
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      isBlank = $__m.isBlank;
      BaseException = $__m.BaseException;
    }, function($__m) {
      Injectable = $__m.Injectable;
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
      PipeRegistry = (($traceurRuntime.createClass)(function(config) {
        this.config = config;
      }, {get: function(type, obj, cdRef) {
          var listOfConfigs = this.config[type];
          if (isBlank(listOfConfigs)) {
            throw new BaseException(("Cannot find '" + type + "' pipe supporting object '" + obj + "'"));
          }
          var matchingConfig = ListWrapper.find(listOfConfigs, (function(pipeConfig) {
            return pipeConfig.supports(obj);
          }));
          if (isBlank(matchingConfig)) {
            throw new BaseException(("Cannot find '" + type + "' pipe supporting object '" + obj + "'"));
          }
          return matchingConfig.create(cdRef);
        }}, {}));
      $__export("PipeRegistry", PipeRegistry);
      $__export("PipeRegistry", PipeRegistry = __decorate([Injectable(), __metadata('design:paramtypes', [Object])], PipeRegistry));
    }
  };
});
//# sourceMappingURL=pipe_registry.js.map

//# sourceMappingURL=../../../src/change_detection/pipes/pipe_registry.js.map