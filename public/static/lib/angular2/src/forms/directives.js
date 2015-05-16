"use strict";
Object.defineProperties(module.exports, {
  DefaultValueAccessor: {get: function() {
      return DefaultValueAccessor;
    }},
  CheckboxControlValueAccessor: {get: function() {
      return CheckboxControlValueAccessor;
    }},
  ControlDirective: {get: function() {
      return ControlDirective;
    }},
  ControlGroupDirective: {get: function() {
      return ControlGroupDirective;
    }},
  formDirectives: {get: function() {
      return formDirectives;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_core_47_annotations_95_impl_47_annotations__,
    $__angular2_47_src_47_core_47_annotations_95_impl_47_visibility__,
    $__angular2_47_src_47_core_47_compiler_47_element_95_ref__,
    $__angular2_47_src_47_di_47_annotations_95_impl__,
    $__angular2_47_src_47_render_47_api__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__model__,
    $__validators__;
var $__0 = ($__angular2_47_src_47_core_47_annotations_95_impl_47_annotations__ = require("angular2/src/core/annotations_impl/annotations"), $__angular2_47_src_47_core_47_annotations_95_impl_47_annotations__ && $__angular2_47_src_47_core_47_annotations_95_impl_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_95_impl_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_95_impl_47_annotations__}),
    Directive = $__0.Directive,
    onChange = $__0.onChange;
var Ancestor = ($__angular2_47_src_47_core_47_annotations_95_impl_47_visibility__ = require("angular2/src/core/annotations_impl/visibility"), $__angular2_47_src_47_core_47_annotations_95_impl_47_visibility__ && $__angular2_47_src_47_core_47_annotations_95_impl_47_visibility__.__esModule && $__angular2_47_src_47_core_47_annotations_95_impl_47_visibility__ || {default: $__angular2_47_src_47_core_47_annotations_95_impl_47_visibility__}).Ancestor;
var ElementRef = ($__angular2_47_src_47_core_47_compiler_47_element_95_ref__ = require("angular2/src/core/compiler/element_ref"), $__angular2_47_src_47_core_47_compiler_47_element_95_ref__ && $__angular2_47_src_47_core_47_compiler_47_element_95_ref__.__esModule && $__angular2_47_src_47_core_47_compiler_47_element_95_ref__ || {default: $__angular2_47_src_47_core_47_compiler_47_element_95_ref__}).ElementRef;
var Optional = ($__angular2_47_src_47_di_47_annotations_95_impl__ = require("angular2/src/di/annotations_impl"), $__angular2_47_src_47_di_47_annotations_95_impl__ && $__angular2_47_src_47_di_47_annotations_95_impl__.__esModule && $__angular2_47_src_47_di_47_annotations_95_impl__ || {default: $__angular2_47_src_47_di_47_annotations_95_impl__}).Optional;
var Renderer = ($__angular2_47_src_47_render_47_api__ = require("angular2/src/render/api"), $__angular2_47_src_47_render_47_api__ && $__angular2_47_src_47_render_47_api__.__esModule && $__angular2_47_src_47_render_47_api__ || {default: $__angular2_47_src_47_render_47_api__}).Renderer;
var $__5 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__5.isPresent,
    isString = $__5.isString,
    CONST_EXPR = $__5.CONST_EXPR;
var ListWrapper = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).ListWrapper;
var ControlGroup = ($__model__ = require("./model"), $__model__ && $__model__.__esModule && $__model__ || {default: $__model__}).ControlGroup;
var Validators = ($__validators__ = require("./validators"), $__validators__ && $__validators__.__esModule && $__validators__ || {default: $__validators__}).Validators;
var DefaultValueAccessor = function DefaultValueAccessor() {
  this.onChange = (function(_) {});
};
($traceurRuntime.createClass)(DefaultValueAccessor, {writeValue: function(value) {
    this.value = value;
  }}, {});
Object.defineProperty(DefaultValueAccessor, "annotations", {get: function() {
    return [new Directive({
      selector: '[control]',
      hostListeners: {
        'change': 'onChange($event.target.value)',
        'input': 'onChange($event.target.value)'
      },
      hostProperties: {'value': 'value'}
    })];
  }});
var CheckboxControlValueAccessor = function CheckboxControlValueAccessor(cd, elementRef, renderer) {
  this.onChange = (function(_) {});
  this._elementRef = elementRef;
  this._renderer = renderer;
  cd.valueAccessor = this;
};
($traceurRuntime.createClass)(CheckboxControlValueAccessor, {writeValue: function(value) {
    this._renderer.setElementProperty(this._elementRef.parentView.render, this._elementRef.boundElementIndex, 'checked', value);
  }}, {});
Object.defineProperty(CheckboxControlValueAccessor, "annotations", {get: function() {
    return [new Directive({
      selector: 'input[type=checkbox][control]',
      hostListeners: {'change': 'onChange($event.target.checked)'},
      hostProperties: {'checked': 'checked'}
    })];
  }});
Object.defineProperty(CheckboxControlValueAccessor, "parameters", {get: function() {
    return [[ControlDirective], [ElementRef], [Renderer]];
  }});
var ControlDirective = function ControlDirective(groupDirective, valueAccessor) {
  this._groupDirective = groupDirective;
  this.controlOrName = null;
  this.valueAccessor = valueAccessor;
  this.validator = Validators.nullValidator;
};
($traceurRuntime.createClass)(ControlDirective, {
  onChange: function(_) {
    this._initialize();
  },
  _initialize: function() {
    if (isPresent(this._groupDirective)) {
      this._groupDirective.addDirective(this);
    }
    var c = this._control();
    c.validator = Validators.compose([c.validator, this.validator]);
    this._updateDomValue();
    this._setUpUpdateControlValue();
  },
  _updateDomValue: function() {
    this.valueAccessor.writeValue(this._control().value);
  },
  _setUpUpdateControlValue: function() {
    var $__9 = this;
    this.valueAccessor.onChange = (function(newValue) {
      return $__9._control().updateValue(newValue);
    });
  },
  _control: function() {
    if (isString(this.controlOrName)) {
      return this._groupDirective.findControl(this.controlOrName);
    } else {
      return this.controlOrName;
    }
  }
}, {});
Object.defineProperty(ControlDirective, "annotations", {get: function() {
    return [new Directive({
      lifecycle: [onChange],
      selector: '[control]',
      properties: {'controlOrName': 'control'}
    })];
  }});
Object.defineProperty(ControlDirective, "parameters", {get: function() {
    return [[ControlGroupDirective, new Optional(), new Ancestor()], [DefaultValueAccessor]];
  }});
var ControlGroupDirective = function ControlGroupDirective(groupDirective) {
  this._groupDirective = groupDirective;
  this._directives = ListWrapper.create();
};
var $ControlGroupDirective = ControlGroupDirective;
($traceurRuntime.createClass)(ControlGroupDirective, {
  set controlGroup(controlGroup) {
    if (isString(controlGroup)) {
      this._controlGroupName = controlGroup;
    } else {
      this._controlGroup = controlGroup;
    }
    this._updateDomValue();
  },
  _updateDomValue: function() {
    ListWrapper.forEach(this._directives, (function(cd) {
      return cd._updateDomValue();
    }));
  },
  addDirective: function(c) {
    ListWrapper.push(this._directives, c);
  },
  findControl: function(name) {
    return this._getControlGroup().controls[name];
  },
  _getControlGroup: function() {
    if (isPresent(this._controlGroupName)) {
      return this._groupDirective.findControl(this._controlGroupName);
    } else {
      return this._controlGroup;
    }
  }
}, {});
Object.defineProperty(ControlGroupDirective, "annotations", {get: function() {
    return [new Directive({
      selector: '[control-group]',
      properties: {'controlGroup': 'control-group'}
    })];
  }});
Object.defineProperty(ControlGroupDirective, "parameters", {get: function() {
    return [[ControlGroupDirective, new Optional(), new Ancestor()]];
  }});
Object.defineProperty(ControlGroupDirective.prototype.addDirective, "parameters", {get: function() {
    return [[ControlDirective]];
  }});
Object.defineProperty(ControlGroupDirective.prototype.findControl, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
var formDirectives = CONST_EXPR([ControlGroupDirective, ControlDirective, CheckboxControlValueAccessor, DefaultValueAccessor]);
//# sourceMappingURL=directives.js.map

//# sourceMappingURL=./directives.map