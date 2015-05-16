"use strict";
Object.defineProperties(module.exports, {
  RequiredValidatorDirective: {get: function() {
      return RequiredValidatorDirective;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_core_47_annotations_95_impl_47_annotations__,
    $__validators__,
    $__directives__;
var Directive = ($__angular2_47_src_47_core_47_annotations_95_impl_47_annotations__ = require("angular2/src/core/annotations_impl/annotations"), $__angular2_47_src_47_core_47_annotations_95_impl_47_annotations__ && $__angular2_47_src_47_core_47_annotations_95_impl_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_95_impl_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_95_impl_47_annotations__}).Directive;
var Validators = ($__validators__ = require("./validators"), $__validators__ && $__validators__.__esModule && $__validators__ || {default: $__validators__}).Validators;
var ControlDirective = ($__directives__ = require("./directives"), $__directives__ && $__directives__.__esModule && $__directives__ || {default: $__directives__}).ControlDirective;
var RequiredValidatorDirective = function RequiredValidatorDirective(c) {
  c.validator = Validators.compose([c.validator, Validators.required]);
};
($traceurRuntime.createClass)(RequiredValidatorDirective, {}, {});
Object.defineProperty(RequiredValidatorDirective, "annotations", {get: function() {
    return [new Directive({selector: '[required]'})];
  }});
Object.defineProperty(RequiredValidatorDirective, "parameters", {get: function() {
    return [[ControlDirective]];
  }});
//# sourceMappingURL=validator_directives.js.map

//# sourceMappingURL=./validator_directives.map