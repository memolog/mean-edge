System.register(["angular2/src/core/annotations_impl/annotations", "./validators", "./directives"], function($__export) {
  "use strict";
  var Directive,
      Validators,
      ControlDirective,
      RequiredValidatorDirective;
  return {
    setters: [function($__m) {
      Directive = $__m.Directive;
    }, function($__m) {
      Validators = $__m.Validators;
    }, function($__m) {
      ControlDirective = $__m.ControlDirective;
    }],
    execute: function() {
      RequiredValidatorDirective = (function() {
        function RequiredValidatorDirective(c) {
          c.validator = Validators.compose([c.validator, Validators.required]);
        }
        return ($traceurRuntime.createClass)(RequiredValidatorDirective, {}, {});
      }());
      $__export("RequiredValidatorDirective", RequiredValidatorDirective);
      Object.defineProperty(RequiredValidatorDirective, "annotations", {get: function() {
          return [new Directive({selector: '[required]'})];
        }});
      Object.defineProperty(RequiredValidatorDirective, "parameters", {get: function() {
          return [[ControlDirective]];
        }});
    }
  };
});
//# sourceMappingURL=validator_directives.js.map

//# sourceMappingURL=../../src/forms/validator_directives.js.map