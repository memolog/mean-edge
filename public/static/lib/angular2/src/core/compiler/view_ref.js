"use strict";
Object.defineProperties(module.exports, {
  internalView: {get: function() {
      return internalView;
    }},
  internalProtoView: {get: function() {
      return internalProtoView;
    }},
  ViewRef: {get: function() {
      return ViewRef;
    }},
  ProtoViewRef: {get: function() {
      return ProtoViewRef;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__view__,
    $__angular2_47_src_47_render_47_api__;
var isPresent = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isPresent;
var viewModule = ($__view__ = require("./view"), $__view__ && $__view__.__esModule && $__view__ || {default: $__view__});
var RenderViewRef = ($__angular2_47_src_47_render_47_api__ = require("angular2/src/render/api"), $__angular2_47_src_47_render_47_api__ && $__angular2_47_src_47_render_47_api__.__esModule && $__angular2_47_src_47_render_47_api__ || {default: $__angular2_47_src_47_render_47_api__}).RenderViewRef;
function internalView(viewRef) {
  return viewRef._view;
}
Object.defineProperty(internalView, "parameters", {get: function() {
    return [[ViewRef]];
  }});
function internalProtoView(protoViewRef) {
  return isPresent(protoViewRef) ? protoViewRef._protoView : null;
}
Object.defineProperty(internalProtoView, "parameters", {get: function() {
    return [[ProtoViewRef]];
  }});
var ViewRef = function ViewRef(view) {
  this._view = view;
};
($traceurRuntime.createClass)(ViewRef, {
  get render() {
    return this._view.render;
  },
  setLocal: function(contextName, value) {
    this._view.setLocal(contextName, value);
  }
}, {});
Object.defineProperty(ViewRef, "parameters", {get: function() {
    return [[viewModule.AppView]];
  }});
Object.defineProperty(ViewRef.prototype.setLocal, "parameters", {get: function() {
    return [[$traceurRuntime.type.string], [$traceurRuntime.type.any]];
  }});
var ProtoViewRef = function ProtoViewRef(protoView) {
  this._protoView = protoView;
};
($traceurRuntime.createClass)(ProtoViewRef, {}, {});
//# sourceMappingURL=view_ref.js.map

//# sourceMappingURL=./view_ref.map