"use strict";
Object.defineProperties(module.exports, {
  Switch: {get: function() {
      return Switch;
    }},
  SwitchWhen: {get: function() {
      return SwitchWhen;
    }},
  SwitchDefault: {get: function() {
      return SwitchDefault;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_core_47_annotations_95_impl_47_annotations__,
    $__angular2_47_src_47_core_47_compiler_47_view_95_container_95_ref__,
    $__angular2_47_src_47_core_47_compiler_47_view_95_ref__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_core_47_annotations_95_impl_47_visibility__;
var Directive = ($__angular2_47_src_47_core_47_annotations_95_impl_47_annotations__ = require("angular2/src/core/annotations_impl/annotations"), $__angular2_47_src_47_core_47_annotations_95_impl_47_annotations__ && $__angular2_47_src_47_core_47_annotations_95_impl_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_95_impl_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_95_impl_47_annotations__}).Directive;
var ViewContainerRef = ($__angular2_47_src_47_core_47_compiler_47_view_95_container_95_ref__ = require("angular2/src/core/compiler/view_container_ref"), $__angular2_47_src_47_core_47_compiler_47_view_95_container_95_ref__ && $__angular2_47_src_47_core_47_compiler_47_view_95_container_95_ref__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view_95_container_95_ref__ || {default: $__angular2_47_src_47_core_47_compiler_47_view_95_container_95_ref__}).ViewContainerRef;
var ProtoViewRef = ($__angular2_47_src_47_core_47_compiler_47_view_95_ref__ = require("angular2/src/core/compiler/view_ref"), $__angular2_47_src_47_core_47_compiler_47_view_95_ref__ && $__angular2_47_src_47_core_47_compiler_47_view_95_ref__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view_95_ref__ || {default: $__angular2_47_src_47_core_47_compiler_47_view_95_ref__}).ProtoViewRef;
var $__3 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__3.isPresent,
    isBlank = $__3.isBlank,
    normalizeBlank = $__3.normalizeBlank;
var $__4 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__4.ListWrapper,
    List = $__4.List,
    MapWrapper = $__4.MapWrapper,
    Map = $__4.Map;
var Parent = ($__angular2_47_src_47_core_47_annotations_95_impl_47_visibility__ = require("angular2/src/core/annotations_impl/visibility"), $__angular2_47_src_47_core_47_annotations_95_impl_47_visibility__ && $__angular2_47_src_47_core_47_annotations_95_impl_47_visibility__.__esModule && $__angular2_47_src_47_core_47_annotations_95_impl_47_visibility__ || {default: $__angular2_47_src_47_core_47_annotations_95_impl_47_visibility__}).Parent;
var SwitchView = function SwitchView(viewContainerRef, protoViewRef) {
  this._protoViewRef = protoViewRef;
  this._viewContainerRef = viewContainerRef;
};
($traceurRuntime.createClass)(SwitchView, {
  create: function() {
    this._viewContainerRef.create(this._protoViewRef);
  },
  destroy: function() {
    this._viewContainerRef.clear();
  }
}, {});
Object.defineProperty(SwitchView, "parameters", {get: function() {
    return [[ViewContainerRef], [ProtoViewRef]];
  }});
var Switch = function Switch() {
  this._valueViews = MapWrapper.create();
  this._activeViews = ListWrapper.create();
  this._useDefault = false;
};
($traceurRuntime.createClass)(Switch, {
  set value(value) {
    this._emptyAllActiveViews();
    this._useDefault = false;
    var views = MapWrapper.get(this._valueViews, value);
    if (isBlank(views)) {
      this._useDefault = true;
      views = normalizeBlank(MapWrapper.get(this._valueViews, _whenDefault));
    }
    this._activateViews(views);
    this._switchValue = value;
  },
  _onWhenValueChanged: function(oldWhen, newWhen, view) {
    this._deregisterView(oldWhen, view);
    this._registerView(newWhen, view);
    if (oldWhen === this._switchValue) {
      view.destroy();
      ListWrapper.remove(this._activeViews, view);
    } else if (newWhen === this._switchValue) {
      if (this._useDefault) {
        this._useDefault = false;
        this._emptyAllActiveViews();
      }
      view.create();
      ListWrapper.push(this._activeViews, view);
    }
    if (this._activeViews.length === 0 && !this._useDefault) {
      this._useDefault = true;
      this._activateViews(MapWrapper.get(this._valueViews, _whenDefault));
    }
  },
  _emptyAllActiveViews: function() {
    var activeContainers = this._activeViews;
    for (var i = 0; i < activeContainers.length; i++) {
      activeContainers[i].destroy();
    }
    this._activeViews = ListWrapper.create();
  },
  _activateViews: function(views) {
    if (isPresent(views)) {
      for (var i = 0; i < views.length; i++) {
        views[i].create();
      }
      this._activeViews = views;
    }
  },
  _registerView: function(value, view) {
    var views = MapWrapper.get(this._valueViews, value);
    if (isBlank(views)) {
      views = ListWrapper.create();
      MapWrapper.set(this._valueViews, value, views);
    }
    ListWrapper.push(views, view);
  },
  _deregisterView: function(value, view) {
    if (value == _whenDefault)
      return ;
    var views = MapWrapper.get(this._valueViews, value);
    if (views.length == 1) {
      MapWrapper.delete(this._valueViews, value);
    } else {
      ListWrapper.remove(views, view);
    }
  }
}, {});
Object.defineProperty(Switch, "annotations", {get: function() {
    return [new Directive({
      selector: '[switch]',
      properties: {'value': 'switch'}
    })];
  }});
Object.defineProperty(Switch.prototype._onWhenValueChanged, "parameters", {get: function() {
    return [[], [], [SwitchView]];
  }});
Object.defineProperty(Switch.prototype._activateViews, "parameters", {get: function() {
    return [[$traceurRuntime.genericType(List, SwitchView)]];
  }});
Object.defineProperty(Switch.prototype._registerView, "parameters", {get: function() {
    return [[], [SwitchView]];
  }});
Object.defineProperty(Switch.prototype._deregisterView, "parameters", {get: function() {
    return [[], [SwitchView]];
  }});
var SwitchWhen = function SwitchWhen(viewContainer, protoViewRef, sswitch) {
  this._value = _whenDefault;
  this._switch = sswitch;
  this._view = new SwitchView(viewContainer, protoViewRef);
};
($traceurRuntime.createClass)(SwitchWhen, {
  onDestroy: function() {
    this._switch;
  },
  set when(value) {
    this._switch._onWhenValueChanged(this._value, value, this._view);
    this._value = value;
  }
}, {});
Object.defineProperty(SwitchWhen, "annotations", {get: function() {
    return [new Directive({
      selector: '[switch-when]',
      properties: {'when': 'switch-when'}
    })];
  }});
Object.defineProperty(SwitchWhen, "parameters", {get: function() {
    return [[ViewContainerRef], [ProtoViewRef], [Switch, new Parent()]];
  }});
var SwitchDefault = function SwitchDefault(viewContainer, protoViewRef, sswitch) {
  sswitch._registerView(_whenDefault, new SwitchView(viewContainer, protoViewRef));
};
($traceurRuntime.createClass)(SwitchDefault, {}, {});
Object.defineProperty(SwitchDefault, "annotations", {get: function() {
    return [new Directive({selector: '[switch-default]'})];
  }});
Object.defineProperty(SwitchDefault, "parameters", {get: function() {
    return [[ViewContainerRef], [ProtoViewRef], [Switch, new Parent()]];
  }});
var _whenDefault = new Object();
//# sourceMappingURL=switch.js.map

//# sourceMappingURL=./switch.map