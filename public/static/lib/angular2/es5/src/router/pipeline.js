System.register(["angular2/src/facade/async", "angular2/src/facade/collection", "./instruction"], function($__export) {
  "use strict";
  var Promise,
      PromiseWrapper,
      List,
      ListWrapper,
      Instruction,
      Pipeline;
  return {
    setters: [function($__m) {
      Promise = $__m.Promise;
      PromiseWrapper = $__m.PromiseWrapper;
    }, function($__m) {
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      Instruction = $__m.Instruction;
    }],
    execute: function() {
      Pipeline = (function() {
        function Pipeline() {
          this.steps = [(function(instruction) {
            return instruction.traverseSync((function(parentInstruction, childInstruction) {
              childInstruction.router = parentInstruction.router.childRouter(childInstruction.component);
            }));
          }), (function(instruction) {
            return instruction.router.traverseOutlets((function(outlet, name) {
              return outlet.canDeactivate(instruction.getChildInstruction(name));
            }));
          }), (function(instruction) {
            return instruction.router.traverseOutlets((function(outlet, name) {
              return outlet.canActivate(instruction.getChildInstruction(name));
            }));
          }), (function(instruction) {
            return instruction.router.activateOutlets(instruction);
          })];
        }
        return ($traceurRuntime.createClass)(Pipeline, {process: function(instruction) {
            var steps = this.steps,
                currentStep = 0;
            function processOne() {
              var result = arguments[0] !== (void 0) ? arguments[0] : true;
              if (currentStep >= steps.length) {
                return PromiseWrapper.resolve(result);
              }
              var step = steps[currentStep];
              currentStep += 1;
              return PromiseWrapper.resolve(step(instruction)).then(processOne);
            }
            Object.defineProperty(processOne, "parameters", {get: function() {
                return [[assert.type.any]];
              }});
            return processOne();
          }}, {});
      }());
      $__export("Pipeline", Pipeline);
      Object.defineProperty(Pipeline.prototype.process, "parameters", {get: function() {
          return [[Instruction]];
        }});
    }
  };
});
//# sourceMappingURL=pipeline.js.map

//# sourceMappingURL=../../src/router/pipeline.js.map