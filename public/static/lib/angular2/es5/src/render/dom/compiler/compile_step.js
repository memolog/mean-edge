System.register(["./compile_element", "./compile_control"], function($__export) {
  "use strict";
  var CompileElement,
      compileControlModule,
      CompileStep;
  return {
    setters: [function($__m) {
      CompileElement = $__m.CompileElement;
    }, function($__m) {
      compileControlModule = $__m;
    }],
    execute: function() {
      CompileStep = (function() {
        function CompileStep() {}
        return ($traceurRuntime.createClass)(CompileStep, {process: function(parent, current, control) {}}, {});
      }());
      $__export("CompileStep", CompileStep);
      Object.defineProperty(CompileStep.prototype.process, "parameters", {get: function() {
          return [[CompileElement], [CompileElement], [compileControlModule.CompileControl]];
        }});
    }
  };
});
//# sourceMappingURL=compile_step.js.map

//# sourceMappingURL=../../../../src/render/dom/compiler/compile_step.js.map