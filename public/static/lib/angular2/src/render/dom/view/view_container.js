"use strict";
Object.defineProperties(module.exports, {
  DomViewContainer: {get: function() {
      return DomViewContainer;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_collection__,
    $__view__;
var $__0 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__0.ListWrapper,
    MapWrapper = $__0.MapWrapper,
    List = $__0.List;
var viewModule = ($__view__ = require("./view"), $__view__ && $__view__.__esModule && $__view__ || {default: $__view__});
var DomViewContainer = function DomViewContainer() {
  this.views = [];
};
($traceurRuntime.createClass)(DomViewContainer, {
  contentTagContainers: function() {
    return this.views;
  },
  nodes: function() {
    var r = [];
    for (var i = 0; i < this.views.length; ++i) {
      r = ListWrapper.concat(r, this.views[i].rootNodes);
    }
    return r;
  }
}, {});
//# sourceMappingURL=view_container.js.map

//# sourceMappingURL=./view_container.map