System.register(["angular2/src/core/annotations_impl/annotations", "angular2/src/core/annotations_impl/visibility", "angular2/src/core/compiler/element_ref", "angular2/src/di/annotations_impl", "angular2/src/render/api", "angular2/src/facade/lang", "angular2/src/facade/collection", "./model", "./validators"], function($__export) {
  "use strict";
  var Directive,
      onChange,
      Ancestor,
      ElementRef,
      Optional,
      Renderer,
      isPresent,
      isString,
      CONST_EXPR,
      ListWrapper,
      ControlGroup,
      Validators,
      DefaultValueAccessor,
      CheckboxControlValueAccessor,
      ControlDirective,
      ControlGroupDirective,
      formDirectives;
  return {
    setters: [function($__m) {
      Directive = $__m.Directive;
      onChange = $__m.onChange;
    }, function($__m) {
      Ancestor = $__m.Ancestor;
    }, function($__m) {
      ElementRef = $__m.ElementRef;
    }, function($__m) {
      Optional = $__m.Optional;
    }, function($__m) {
      Renderer = $__m.Renderer;
    }, function($__m) {
      isPresent = $__m.isPresent;
      isString = $__m.isString;
      CONST_EXPR = $__m.CONST_EXPR;
    }, function($__m) {
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      ControlGroup = $__m.ControlGroup;
    }, function($__m) {
      Validators = $__m.Validators;
    }],
    execute: function() {
      DefaultValueAccessor = (function() {
        function DefaultValueAccessor() {
          this.onChange = (function(_) {});
        }
        return ($traceurRuntime.createClass)(DefaultValueAccessor, {writeValue: function(value) {
            this.value = value;
          }}, {});
      }());
      $__export("DefaultValueAccessor", DefaultValueAccessor);
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
      CheckboxControlValueAccessor = (function() {
        function CheckboxControlValueAccessor(cd, elementRef, renderer) {
          this.onChange = (function(_) {});
          this._elementRef = elementRef;
          this._renderer = renderer;
          cd.valueAccessor = this;
        }
        return ($traceurRuntime.createClass)(CheckboxControlValueAccessor, {writeValue: function(value) {
            this._renderer.setElementProperty(this._elementRef.parentView.render, this._elementRef.boundElementIndex, 'checked', value);
          }}, {});
      }());
      $__export("CheckboxControlValueAccessor", CheckboxControlValueAccessor);
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
      ControlDirective = (function() {
        function ControlDirective(groupDirective, valueAccessor) {
          this._groupDirective = groupDirective;
          this.controlOrName = null;
          this.valueAccessor = valueAccessor;
          this.validator = Validators.nullValidator;
        }
        return ($traceurRuntime.createClass)(ControlDirective, {
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
            var $__0 = this;
            this.valueAccessor.onChange = (function(newValue) {
              return $__0._control().updateValue(newValue);
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
      }());
      $__export("ControlDirective", ControlDirective);
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
      ControlGroupDirective = (function() {
        function ControlGroupDirective(groupDirective) {
          this._groupDirective = groupDirective;
          this._directives = ListWrapper.create();
        }
        return ($traceurRuntime.createClass)(ControlGroupDirective, {
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
      }());
      $__export("ControlGroupDirective", ControlGroupDirective);
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
          return [[assert.type.string]];
        }});
      formDirectives = CONST_EXPR([ControlGroupDirective, ControlDirective, CheckboxControlValueAccessor, DefaultValueAccessor]);
      $__export("formDirectives", formDirectives);
    }
  };
});
//# sourceMappingURL=directives.js.map

//# sourceMappingURL=../../src/forms/directives.js.map