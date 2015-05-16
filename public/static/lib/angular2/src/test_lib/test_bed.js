"use strict";
Object.defineProperties(module.exports, {
  TestBed: {get: function() {
      return TestBed;
    }},
  ViewProxy: {get: function() {
      return ViewProxy;
    }},
  __esModule: {value: true}
});
var $__angular2_47_di__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_core_47_annotations_95_impl_47_view__,
    $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__,
    $__angular2_47_src_47_core_47_compiler_47_view__,
    $__angular2_47_src_47_core_47_compiler_47_view_95_ref__,
    $__angular2_47_src_47_core_47_compiler_47_dynamic_95_component_95_loader__,
    $__utils__,
    $__lang_95_utils__,
    $__angular2_47_src_47_render_47_dom_47_dom_95_renderer__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__;
var $__0 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    Injector = $__0.Injector,
    bind = $__0.bind;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    Type = $__1.Type,
    isPresent = $__1.isPresent,
    BaseException = $__1.BaseException;
var Promise = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}).Promise;
var isBlank = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isBlank;
var List = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).List;
var View = ($__angular2_47_src_47_core_47_annotations_95_impl_47_view__ = require("angular2/src/core/annotations_impl/view"), $__angular2_47_src_47_core_47_annotations_95_impl_47_view__ && $__angular2_47_src_47_core_47_annotations_95_impl_47_view__.__esModule && $__angular2_47_src_47_core_47_annotations_95_impl_47_view__ || {default: $__angular2_47_src_47_core_47_annotations_95_impl_47_view__}).View;
var TemplateResolver = ($__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ = require("angular2/src/core/compiler/template_resolver"), $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__}).TemplateResolver;
var AppView = ($__angular2_47_src_47_core_47_compiler_47_view__ = require("angular2/src/core/compiler/view"), $__angular2_47_src_47_core_47_compiler_47_view__ && $__angular2_47_src_47_core_47_compiler_47_view__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view__ || {default: $__angular2_47_src_47_core_47_compiler_47_view__}).AppView;
var internalView = ($__angular2_47_src_47_core_47_compiler_47_view_95_ref__ = require("angular2/src/core/compiler/view_ref"), $__angular2_47_src_47_core_47_compiler_47_view_95_ref__ && $__angular2_47_src_47_core_47_compiler_47_view_95_ref__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view_95_ref__ || {default: $__angular2_47_src_47_core_47_compiler_47_view_95_ref__}).internalView;
var $__9 = ($__angular2_47_src_47_core_47_compiler_47_dynamic_95_component_95_loader__ = require("angular2/src/core/compiler/dynamic_component_loader"), $__angular2_47_src_47_core_47_compiler_47_dynamic_95_component_95_loader__ && $__angular2_47_src_47_core_47_compiler_47_dynamic_95_component_95_loader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_dynamic_95_component_95_loader__ || {default: $__angular2_47_src_47_core_47_compiler_47_dynamic_95_component_95_loader__}),
    DynamicComponentLoader = $__9.DynamicComponentLoader,
    ComponentRef = $__9.ComponentRef;
var $__10 = ($__utils__ = require("./utils"), $__utils__ && $__utils__.__esModule && $__utils__ || {default: $__utils__}),
    queryView = $__10.queryView,
    viewRootNodes = $__10.viewRootNodes,
    el = $__10.el;
var $__11 = ($__lang_95_utils__ = require("./lang_utils"), $__lang_95_utils__ && $__lang_95_utils__.__esModule && $__lang_95_utils__ || {default: $__lang_95_utils__}),
    instantiateType = $__11.instantiateType,
    getTypeOf = $__11.getTypeOf;
var DOCUMENT_TOKEN = ($__angular2_47_src_47_render_47_dom_47_dom_95_renderer__ = require("angular2/src/render/dom/dom_renderer"), $__angular2_47_src_47_render_47_dom_47_dom_95_renderer__ && $__angular2_47_src_47_render_47_dom_47_dom_95_renderer__.__esModule && $__angular2_47_src_47_render_47_dom_47_dom_95_renderer__ || {default: $__angular2_47_src_47_render_47_dom_47_dom_95_renderer__}).DOCUMENT_TOKEN;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var TestBed = function TestBed(injector) {
  this._injector = injector;
};
($traceurRuntime.createClass)(TestBed, {
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
    var $__16,
        $__17;
    var $__15 = arguments[1] !== (void 0) ? arguments[1] : {},
        context = ($__16 = $__15.context) === void 0 ? null : $__16,
        html = ($__17 = $__15.html) === void 0 ? null : $__17;
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
Object.defineProperty(TestBed, "parameters", {get: function() {
    return [[Injector]];
  }});
Object.defineProperty(TestBed.prototype.overrideView, "parameters", {get: function() {
    return [[Type], [View]];
  }});
Object.defineProperty(TestBed.prototype.setInlineTemplate, "parameters", {get: function() {
    return [[Type], [$traceurRuntime.type.string]];
  }});
Object.defineProperty(TestBed.prototype.overrideDirective, "parameters", {get: function() {
    return [[Type], [Type], [Type]];
  }});
Object.defineProperty(TestBed.prototype.createView, "parameters", {get: function() {
    return [[Type], []];
  }});
var ViewProxy = function ViewProxy(componentRef) {
  this._componentRef = componentRef;
  this._view = internalView(componentRef.hostView).componentChildViews[0];
};
($traceurRuntime.createClass)(ViewProxy, {
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
Object.defineProperty(ViewProxy, "parameters", {get: function() {
    return [[ComponentRef]];
  }});
//# sourceMappingURL=test_bed.js.map

//# sourceMappingURL=./test_bed.map