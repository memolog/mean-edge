"use strict";
Object.defineProperties(module.exports, {
  ViewContainerRef: {get: function() {
      return ViewContainerRef;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_di__,
    $__angular2_47_src_47_facade_47_lang__,
    $__view_95_manager__,
    $__element_95_ref__,
    $__view_95_ref__;
var $__0 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__0.ListWrapper,
    List = $__0.List;
var Injector = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).Injector;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__2.isPresent,
    isBlank = $__2.isBlank;
var avmModule = ($__view_95_manager__ = require("./view_manager"), $__view_95_manager__ && $__view_95_manager__.__esModule && $__view_95_manager__ || {default: $__view_95_manager__});
var ElementRef = ($__element_95_ref__ = require("./element_ref"), $__element_95_ref__ && $__element_95_ref__.__esModule && $__element_95_ref__ || {default: $__element_95_ref__}).ElementRef;
var $__4 = ($__view_95_ref__ = require("./view_ref"), $__view_95_ref__ && $__view_95_ref__.__esModule && $__view_95_ref__ || {default: $__view_95_ref__}),
    ViewRef = $__4.ViewRef,
    ProtoViewRef = $__4.ProtoViewRef,
    internalView = $__4.internalView;
var ViewContainerRef = function ViewContainerRef(viewManager, element) {
  this._viewManager = viewManager;
  this._element = element;
};
($traceurRuntime.createClass)(ViewContainerRef, {
  _getViews: function() {
    var vc = internalView(this._element.parentView).viewContainers[this._element.boundElementIndex];
    return isPresent(vc) ? vc.views : [];
  },
  clear: function() {
    for (var i = this.length - 1; i >= 0; i--) {
      this.remove(i);
    }
  },
  get: function(index) {
    return new ViewRef(this._getViews()[index]);
  },
  get length() {
    return this._getViews().length;
  },
  create: function() {
    var protoViewRef = arguments[0] !== (void 0) ? arguments[0] : null;
    var atIndex = arguments[1] !== (void 0) ? arguments[1] : -1;
    var context = arguments[2];
    var injector = arguments[3] !== (void 0) ? arguments[3] : null;
    if (atIndex == -1)
      atIndex = this.length;
    return this._viewManager.createViewInContainer(this._element, atIndex, protoViewRef, context, injector);
  },
  insert: function(viewRef) {
    var atIndex = arguments[1] !== (void 0) ? arguments[1] : -1;
    if (atIndex == -1)
      atIndex = this.length;
    return this._viewManager.attachViewInContainer(this._element, atIndex, viewRef);
  },
  indexOf: function(viewRef) {
    return ListWrapper.indexOf(this._getViews(), internalView(viewRef));
  },
  remove: function() {
    var atIndex = arguments[0] !== (void 0) ? arguments[0] : -1;
    if (atIndex == -1)
      atIndex = this.length - 1;
    this._viewManager.destroyViewInContainer(this._element, atIndex);
  },
  detach: function() {
    var atIndex = arguments[0] !== (void 0) ? arguments[0] : -1;
    if (atIndex == -1)
      atIndex = this.length - 1;
    return this._viewManager.detachViewInContainer(this._element, atIndex);
  }
}, {});
Object.defineProperty(ViewContainerRef, "parameters", {get: function() {
    return [[avmModule.AppViewManager], [ElementRef]];
  }});
Object.defineProperty(ViewContainerRef.prototype.get, "parameters", {get: function() {
    return [[$traceurRuntime.type.number]];
  }});
Object.defineProperty(ViewContainerRef.prototype.create, "parameters", {get: function() {
    return [[ProtoViewRef], [$traceurRuntime.type.number], [ElementRef], [Injector]];
  }});
Object.defineProperty(ViewContainerRef.prototype.insert, "parameters", {get: function() {
    return [[ViewRef], [$traceurRuntime.type.number]];
  }});
Object.defineProperty(ViewContainerRef.prototype.indexOf, "parameters", {get: function() {
    return [[ViewRef]];
  }});
Object.defineProperty(ViewContainerRef.prototype.remove, "parameters", {get: function() {
    return [[$traceurRuntime.type.number]];
  }});
Object.defineProperty(ViewContainerRef.prototype.detach, "parameters", {get: function() {
    return [[$traceurRuntime.type.number]];
  }});
//# sourceMappingURL=view_container_ref.js.map

//# sourceMappingURL=./view_container_ref.map