"use strict";
Object.defineProperties(module.exports, {
  ComponentRef: {get: function() {
      return ComponentRef;
    }},
  DynamicComponentLoader: {get: function() {
      return DynamicComponentLoader;
    }},
  __esModule: {value: true}
});
var $__angular2_47_di__,
    $__angular2_47_src_47_di_47_annotations_95_impl__,
    $__compiler__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_core_47_compiler_47_view_95_manager__,
    $__element_95_ref__;
var $__0 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    Key = $__0.Key,
    Injector = $__0.Injector,
    ResolvedBinding = $__0.ResolvedBinding,
    Binding = $__0.Binding,
    bind = $__0.bind;
var Injectable = ($__angular2_47_src_47_di_47_annotations_95_impl__ = require("angular2/src/di/annotations_impl"), $__angular2_47_src_47_di_47_annotations_95_impl__ && $__angular2_47_src_47_di_47_annotations_95_impl__.__esModule && $__angular2_47_src_47_di_47_annotations_95_impl__ || {default: $__angular2_47_src_47_di_47_annotations_95_impl__}).Injectable;
var Compiler = ($__compiler__ = require("./compiler"), $__compiler__ && $__compiler__.__esModule && $__compiler__ || {default: $__compiler__}).Compiler;
var $__3 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    Type = $__3.Type,
    BaseException = $__3.BaseException,
    stringify = $__3.stringify,
    isPresent = $__3.isPresent;
var Promise = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}).Promise;
var $__5 = ($__angular2_47_src_47_core_47_compiler_47_view_95_manager__ = require("angular2/src/core/compiler/view_manager"), $__angular2_47_src_47_core_47_compiler_47_view_95_manager__ && $__angular2_47_src_47_core_47_compiler_47_view_95_manager__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view_95_manager__ || {default: $__angular2_47_src_47_core_47_compiler_47_view_95_manager__}),
    AppViewManager = $__5.AppViewManager,
    ComponentCreateResult = $__5.ComponentCreateResult;
var ElementRef = ($__element_95_ref__ = require("./element_ref"), $__element_95_ref__ && $__element_95_ref__.__esModule && $__element_95_ref__ || {default: $__element_95_ref__}).ElementRef;
var ComponentRef = function ComponentRef(location, instance, dispose) {
  this.location = location;
  this.instance = instance;
  this._dispose = dispose;
};
($traceurRuntime.createClass)(ComponentRef, {
  get hostView() {
    return this.location.parentView;
  },
  dispose: function() {
    this._dispose();
  }
}, {});
Object.defineProperty(ComponentRef, "parameters", {get: function() {
    return [[ElementRef], [$traceurRuntime.type.any], [Function]];
  }});
var DynamicComponentLoader = function DynamicComponentLoader(compiler, viewManager) {
  this._compiler = compiler;
  this._viewManager = viewManager;
};
($traceurRuntime.createClass)(DynamicComponentLoader, {
  loadIntoExistingLocation: function(typeOrBinding, location) {
    var injector = arguments[2] !== (void 0) ? arguments[2] : null;
    var $__7 = this;
    var binding = this._getBinding(typeOrBinding);
    return this._compiler.compile(binding.token).then((function(componentProtoViewRef) {
      $__7._viewManager.createDynamicComponentView(location, componentProtoViewRef, binding, injector);
      var component = $__7._viewManager.getComponent(location);
      var dispose = (function() {
        throw new BaseException("Not implemented");
      });
      return new ComponentRef(location, component, dispose);
    }));
  },
  loadIntoNewLocation: function(typeOrBinding, parentComponentLocation, elementSelector) {
    var injector = arguments[3] !== (void 0) ? arguments[3] : null;
    var $__7 = this;
    return this._compiler.compileInHost(this._getBinding(typeOrBinding)).then((function(hostProtoViewRef) {
      var hostViewRef = $__7._viewManager.createInPlaceHostView(parentComponentLocation, elementSelector, hostProtoViewRef, injector);
      var newLocation = new ElementRef(hostViewRef, 0);
      var component = $__7._viewManager.getComponent(newLocation);
      var dispose = (function() {
        $__7._viewManager.destroyInPlaceHostView(parentComponentLocation, hostViewRef);
      });
      return new ComponentRef(newLocation, component, dispose);
    }));
  },
  loadNextToExistingLocation: function(typeOrBinding, location) {
    var injector = arguments[2] !== (void 0) ? arguments[2] : null;
    var $__7 = this;
    var binding = this._getBinding(typeOrBinding);
    return this._compiler.compileInHost(binding).then((function(hostProtoViewRef) {
      var viewContainer = $__7._viewManager.getViewContainer(location);
      var hostViewRef = viewContainer.create(hostProtoViewRef, viewContainer.length, null, injector);
      var newLocation = new ElementRef(hostViewRef, 0);
      var component = $__7._viewManager.getComponent(newLocation);
      var dispose = (function() {
        var index = viewContainer.indexOf(hostViewRef);
        viewContainer.remove(index);
      });
      return new ComponentRef(newLocation, component, dispose);
    }));
  },
  _getBinding: function(typeOrBinding) {
    var binding;
    if (typeOrBinding instanceof Binding) {
      binding = typeOrBinding;
    } else {
      binding = bind(typeOrBinding).toClass(typeOrBinding);
    }
    return binding;
  }
}, {});
Object.defineProperty(DynamicComponentLoader, "annotations", {get: function() {
    return [new Injectable()];
  }});
Object.defineProperty(DynamicComponentLoader, "parameters", {get: function() {
    return [[Compiler], [AppViewManager]];
  }});
Object.defineProperty(DynamicComponentLoader.prototype.loadIntoExistingLocation, "parameters", {get: function() {
    return [[], [ElementRef], [Injector]];
  }});
Object.defineProperty(DynamicComponentLoader.prototype.loadIntoNewLocation, "parameters", {get: function() {
    return [[], [ElementRef], [$traceurRuntime.type.string], [Injector]];
  }});
Object.defineProperty(DynamicComponentLoader.prototype.loadNextToExistingLocation, "parameters", {get: function() {
    return [[], [ElementRef], [Injector]];
  }});
//# sourceMappingURL=dynamic_component_loader.js.map

//# sourceMappingURL=./dynamic_component_loader.map