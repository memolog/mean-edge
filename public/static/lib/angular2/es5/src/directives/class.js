System.register(["angular2/src/core/annotations_impl/annotations", "angular2/src/facade/lang", "angular2/src/dom/dom_adapter", "angular2/src/core/compiler/element_ref"], function($__export) {
  "use strict";
  var Directive,
      isPresent,
      DOM,
      ElementRef,
      CSSClass;
  return {
    setters: [function($__m) {
      Directive = $__m.Directive;
    }, function($__m) {
      isPresent = $__m.isPresent;
    }, function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      ElementRef = $__m.ElementRef;
    }],
    execute: function() {
      CSSClass = (function() {
        function CSSClass(ngEl) {
          this._domEl = ngEl.domElement;
        }
        return ($traceurRuntime.createClass)(CSSClass, {
          _toggleClass: function(className, enabled) {
            if (enabled) {
              DOM.addClass(this._domEl, className);
            } else {
              DOM.removeClass(this._domEl, className);
            }
          },
          set iterableChanges(changes) {
            var $__0 = this;
            if (isPresent(changes)) {
              changes.forEachAddedItem((function(record) {
                $__0._toggleClass(record.key, record.currentValue);
              }));
              changes.forEachChangedItem((function(record) {
                $__0._toggleClass(record.key, record.currentValue);
              }));
              changes.forEachRemovedItem((function(record) {
                if (record.previousValue) {
                  DOM.removeClass($__0._domEl, record.key);
                }
              }));
            }
          }
        }, {});
      }());
      $__export("CSSClass", CSSClass);
      Object.defineProperty(CSSClass, "annotations", {get: function() {
          return [new Directive({
            selector: '[class]',
            properties: {'iterableChanges': 'class | keyValDiff'}
          })];
        }});
      Object.defineProperty(CSSClass, "parameters", {get: function() {
          return [[ElementRef]];
        }});
    }
  };
});
//# sourceMappingURL=class.js.map

//# sourceMappingURL=../../src/directives/class.js.map