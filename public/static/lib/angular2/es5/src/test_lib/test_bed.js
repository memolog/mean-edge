System.register(["angular2/di", "angular2/src/facade/lang", "angular2/src/facade/async", "angular2/src/facade/collection", "angular2/src/core/annotations_impl/view", "angular2/src/core/compiler/template_resolver", "angular2/src/core/compiler/view", "angular2/src/core/compiler/view_ref", "angular2/src/core/compiler/dynamic_component_loader", "./utils", "./lang_utils", "angular2/src/render/dom/dom_renderer", "angular2/src/dom/dom_adapter"], function($__export) {
  "use strict";
  var Injector,
      bind,
      Type,
      isPresent,
      BaseException,
      Promise,
      isBlank,
      List,
      View,
      TemplateResolver,
      AppView,
      internalView,
      DynamicComponentLoader,
      ComponentRef,
      queryView,
      viewRootNodes,
      el,
      instantiateType,
      getTypeOf,
      DOCUMENT_TOKEN,
      DOM,
      TestBed,
      ViewProxy;
  return {
    setters: [function($__m) {
      Injector = $__m.Injector;
      bind = $__m.bind;
    }, function($__m) {
      Type = $__m.Type;
      isPresent = $__m.isPresent;
      BaseException = $__m.BaseException;
      isBlank = $__m.isBlank;
    }, function($__m) {
      Promise = $__m.Promise;
    }, function($__m) {
      List = $__m.List;
    }, function($__m) {
      View = $__m.View;
    }, function($__m) {
      TemplateResolver = $__m.TemplateResolver;
    }, function($__m) {
      AppView = $__m.AppView;
    }, function($__m) {
      internalView = $__m.internalView;
    }, function($__m) {
      DynamicComponentLoader = $__m.DynamicComponentLoader;
      ComponentRef = $__m.ComponentRef;
    }, function($__m) {
      queryView = $__m.queryView;
      viewRootNodes = $__m.viewRootNodes;
      el = $__m.el;
    }, function($__m) {
      instantiateType = $__m.instantiateType;
      getTypeOf = $__m.getTypeOf;
    }, function($__m) {
      DOCUMENT_TOKEN = $__m.DOCUMENT_TOKEN;
    }, function($__m) {
      DOM = $__m.DOM;
    }],
    execute: function() {
      TestBed = (function() {
        function TestBed(injector) {
          this._injector = injector;
        }
        return ($traceurRuntime.createClass)(TestBed, {
          overrideView: function(component, template) {
            this._injector.get(TemplateResolver).setView(component, template);
          },
          setInlineTemplate: function(component, html) {
            this._injector.get(TemplateResolver).setInlineTemplate(component, html);
          },
          overrideDirective: function(component, from, to) {
            this._injector.get(TemplateResolver).overrideTemplateDirective(component, from, to);
          },
          createView: function(component) {
            var $__2,
                $__3;
            var $__1 = arguments[1] !== (void 0) ? arguments[1] : {},
                context = ($__2 = $__1.context) === void 0 ? null : $__2,
                html = ($__3 = $__1.html) === void 0 ? null : $__3;
            if (isBlank(component) && isBlank(context)) {
              throw new BaseException('You must specified at least a component or a context');
            }
            if (isBlank(component)) {
              component = getTypeOf(context);
            } else if (isBlank(context)) {
              context = instantiateType(component);
            }
            if (isPresent(html)) {
              this.setInlineTemplate(component, html);
            }
            var doc = this._injector.get(DOCUMENT_TOKEN);
            var rootEl = el('<div id="root"></div>');
            DOM.appendChild(doc.body, rootEl);
            var componentBinding = bind(component).toValue(context);
            return this._injector.get(DynamicComponentLoader).loadIntoNewLocation(componentBinding, null, '#root', this._injector).then((function(hostComponentRef) {
              return new ViewProxy(hostComponentRef);
            }));
          }
        }, {});
      }());
      $__export("TestBed", TestBed);
      Object.defineProperty(TestBed, "parameters", {get: function() {
          return [[Injector]];
        }});
      Object.defineProperty(TestBed.prototype.overrideView, "parameters", {get: function() {
          return [[Type], [View]];
        }});
      Object.defineProperty(TestBed.prototype.setInlineTemplate, "parameters", {get: function() {
          return [[Type], [assert.type.string]];
        }});
      Object.defineProperty(TestBed.prototype.overrideDirective, "parameters", {get: function() {
          return [[Type], [Type], [Type]];
        }});
      Object.defineProperty(TestBed.prototype.createView, "parameters", {get: function() {
          return [[Type], []];
        }});
      ViewProxy = (function() {
        function ViewProxy(componentRef) {
          this._componentRef = componentRef;
          this._view = internalView(componentRef.hostView).componentChildViews[0];
        }
        return ($traceurRuntime.createClass)(ViewProxy, {
          get context() {
            return this._view.context;
          },
          get rootNodes() {
            return viewRootNodes(this._view);
          },
          detectChanges: function() {
            this._view.changeDetector.detectChanges();
            this._view.changeDetector.checkNoChanges();
          },
          querySelector: function(selector) {
            return queryView(this._view, selector);
          },
          destroy: function() {
            this._componentRef.dispose();
          },
          get rawView() {
            return this._view;
          }
        }, {});
      }());
      $__export("ViewProxy", ViewProxy);
      Object.defineProperty(ViewProxy, "parameters", {get: function() {
          return [[ComponentRef]];
        }});
    }
  };
});
//# sourceMappingURL=test_bed.js.map

//# sourceMappingURL=../../src/test_lib/test_bed.js.map