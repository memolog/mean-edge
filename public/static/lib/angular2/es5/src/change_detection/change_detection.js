System.register(["./proto_change_detector", "./pipes/pipe_registry", "./pipes/iterable_changes", "./pipes/keyvalue_changes", "./pipes/observable_pipe", "./pipes/promise_pipe", "./pipes/null_pipe", "./constants", "./interfaces", "angular2/src/di/decorators"], function($__export) {
  "use strict";
  var __decorate,
      __metadata,
      DynamicProtoChangeDetector,
      JitProtoChangeDetector,
      PipeRegistry,
      IterableChangesFactory,
      KeyValueChangesFactory,
      ObservablePipeFactory,
      PromisePipeFactory,
      NullPipeFactory,
      DEFAULT,
      ChangeDetection,
      Injectable,
      __esModule,
      keyValDiff,
      iterableDiff,
      async,
      defaultPipes,
      DynamicChangeDetection,
      JitChangeDetection,
      defaultPipeRegistry;
  return {
    setters: [function($__m) {
      DynamicProtoChangeDetector = $__m.DynamicProtoChangeDetector;
      JitProtoChangeDetector = $__m.JitProtoChangeDetector;
    }, function($__m) {
      PipeRegistry = $__m.PipeRegistry;
    }, function($__m) {
      IterableChangesFactory = $__m.IterableChangesFactory;
    }, function($__m) {
      KeyValueChangesFactory = $__m.KeyValueChangesFactory;
    }, function($__m) {
      ObservablePipeFactory = $__m.ObservablePipeFactory;
    }, function($__m) {
      PromisePipeFactory = $__m.PromisePipeFactory;
    }, function($__m) {
      NullPipeFactory = $__m.NullPipeFactory;
    }, function($__m) {
      DEFAULT = $__m.DEFAULT;
    }, function($__m) {
      ChangeDetection = $__m.ChangeDetection;
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
      keyValDiff = [new KeyValueChangesFactory(), new NullPipeFactory()];
      $__export("keyValDiff", keyValDiff);
      iterableDiff = [new IterableChangesFactory(), new NullPipeFactory()];
      $__export("iterableDiff", iterableDiff);
      async = [new ObservablePipeFactory(), new PromisePipeFactory(), new NullPipeFactory()];
      $__export("async", async);
      defaultPipes = {
        "iterableDiff": iterableDiff,
        "keyValDiff": keyValDiff,
        "async": async
      };
      $__export("defaultPipes", defaultPipes);
      DynamicChangeDetection = (function($__super) {
        function $__0(registry) {
          $traceurRuntime.superConstructor($__0).call(this);
          this.registry = registry;
        }
        return ($traceurRuntime.createClass)($__0, {createProtoChangeDetector: function(name, bindingRecords, variableBindings, directiveRecords) {
            var changeControlStrategy = arguments[4] !== (void 0) ? arguments[4] : DEFAULT;
            return new DynamicProtoChangeDetector(this.registry, bindingRecords, variableBindings, directiveRecords, changeControlStrategy);
          }}, {}, $__super);
      }(ChangeDetection));
      $__export("DynamicChangeDetection", DynamicChangeDetection);
      $__export("DynamicChangeDetection", DynamicChangeDetection = __decorate([Injectable(), __metadata('design:paramtypes', [PipeRegistry])], DynamicChangeDetection));
      JitChangeDetection = (function($__super) {
        function $__0(registry) {
          $traceurRuntime.superConstructor($__0).call(this);
          this.registry = registry;
        }
        return ($traceurRuntime.createClass)($__0, {createProtoChangeDetector: function(name, bindingRecords, variableBindings, directiveRecords) {
            var changeControlStrategy = arguments[4] !== (void 0) ? arguments[4] : DEFAULT;
            return new JitProtoChangeDetector(this.registry, bindingRecords, variableBindings, directiveRecords, changeControlStrategy);
          }}, {}, $__super);
      }(ChangeDetection));
      $__export("JitChangeDetection", JitChangeDetection);
      $__export("JitChangeDetection", JitChangeDetection = __decorate([Injectable(), __metadata('design:paramtypes', [PipeRegistry])], JitChangeDetection));
      defaultPipeRegistry = new PipeRegistry(defaultPipes);
      $__export("defaultPipeRegistry", defaultPipeRegistry);
    }
  };
});
//# sourceMappingURL=change_detection.js.map

//# sourceMappingURL=../../src/change_detection/change_detection.js.map