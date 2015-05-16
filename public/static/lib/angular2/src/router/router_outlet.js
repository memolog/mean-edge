"use strict";
Object.defineProperties(module.exports, {
  RouterOutlet: {get: function() {
      return RouterOutlet;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_core_47_annotations_95_impl_47_annotations__,
    $__angular2_47_src_47_core_47_annotations_95_impl_47_di__,
    $__angular2_47_core__,
    $__angular2_47_di__,
    $__router__,
    $__instruction__;
var $__0 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    Promise = $__0.Promise,
    PromiseWrapper = $__0.PromiseWrapper;
var isBlank = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isBlank;
var Directive = ($__angular2_47_src_47_core_47_annotations_95_impl_47_annotations__ = require("angular2/src/core/annotations_impl/annotations"), $__angular2_47_src_47_core_47_annotations_95_impl_47_annotations__ && $__angular2_47_src_47_core_47_annotations_95_impl_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_95_impl_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_95_impl_47_annotations__}).Directive;
var Attribute = ($__angular2_47_src_47_core_47_annotations_95_impl_47_di__ = require("angular2/src/core/annotations_impl/di"), $__angular2_47_src_47_core_47_annotations_95_impl_47_di__ && $__angular2_47_src_47_core_47_annotations_95_impl_47_di__.__esModule && $__angular2_47_src_47_core_47_annotations_95_impl_47_di__ || {default: $__angular2_47_src_47_core_47_annotations_95_impl_47_di__}).Attribute;
var $__4 = ($__angular2_47_core__ = require("angular2/core"), $__angular2_47_core__ && $__angular2_47_core__.__esModule && $__angular2_47_core__ || {default: $__angular2_47_core__}),
    Compiler = $__4.Compiler,
    ViewContainerRef = $__4.ViewContainerRef;
var $__5 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    Injector = $__5.Injector,
    bind = $__5.bind;
var routerMod = ($__router__ = require("./router"), $__router__ && $__router__.__esModule && $__router__ || {default: $__router__});
var $__6 = ($__instruction__ = require("./instruction"), $__instruction__ && $__instruction__.__esModule && $__instruction__ || {default: $__instruction__}),
    Instruction = $__6.Instruction,
    RouteParams = $__6.RouteParams;
var RouterOutlet = function RouterOutlet(viewContainer, compiler, router, injector, nameAttr) {
  if (isBlank(nameAttr)) {
    nameAttr = 'default';
  }
  this._router = router;
  this._viewContainer = viewContainer;
  this._compiler = compiler;
  this._injector = injector;
  this._router.registerOutlet(this, nameAttr);
};
($traceurRuntime.createClass)(RouterOutlet, {
  activate: function(instruction) {
    var $__7 = this;
    return this._compiler.compileInHost(instruction.component).then((function(pv) {
      var outletInjector = $__7._injector.resolveAndCreateChild([bind(RouteParams).toValue(new RouteParams(instruction.params)), bind(routerMod.Router).toValue(instruction.router)]);
      $__7._viewContainer.clear();
      $__7._viewContainer.create(pv, 0, null, outletInjector);
    }));
  },
  canActivate: function(instruction) {
    return PromiseWrapper.resolve(true);
  },
  canDeactivate: function(instruction) {
    return PromiseWrapper.resolve(true);
  }
}, {});
Object.defineProperty(RouterOutlet, "annotations", {get: function() {
    return [new Directive({selector: 'router-outlet'})];
  }});
Object.defineProperty(RouterOutlet, "parameters", {get: function() {
    return [[ViewContainerRef], [Compiler], [routerMod.Router], [Injector], [String, new Attribute('name')]];
  }});
Object.defineProperty(RouterOutlet.prototype.activate, "parameters", {get: function() {
    return [[Instruction]];
  }});
Object.defineProperty(RouterOutlet.prototype.canActivate, "parameters", {get: function() {
    return [[$traceurRuntime.type.any]];
  }});
Object.defineProperty(RouterOutlet.prototype.canDeactivate, "parameters", {get: function() {
    return [[$traceurRuntime.type.any]];
  }});
//# sourceMappingURL=router_outlet.js.map

//# sourceMappingURL=./router_outlet.map