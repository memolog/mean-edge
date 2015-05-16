"use strict";
Object.defineProperties(module.exports, {
  DestinationLightDom: {get: function() {
      return DestinationLightDom;
    }},
  LightDom: {get: function() {
      return LightDom;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__,
    $___46__46__47_view_47_view__,
    $__content_95_tag__;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__1.List,
    ListWrapper = $__1.ListWrapper;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isBlank = $__2.isBlank,
    isPresent = $__2.isPresent;
var viewModule = ($___46__46__47_view_47_view__ = require("../view/view"), $___46__46__47_view_47_view__ && $___46__46__47_view_47_view__.__esModule && $___46__46__47_view_47_view__ || {default: $___46__46__47_view_47_view__});
var Content = ($__content_95_tag__ = require("./content_tag"), $__content_95_tag__ && $__content_95_tag__.__esModule && $__content_95_tag__ || {default: $__content_95_tag__}).Content;
var DestinationLightDom = function DestinationLightDom() {
  ;
};
($traceurRuntime.createClass)(DestinationLightDom, {}, {});
var _Root = function _Root(node, boundElementIndex) {
  this.node = node;
  this.boundElementIndex = boundElementIndex;
};
($traceurRuntime.createClass)(_Root, {}, {});
var LightDom = function LightDom(lightDomView, element) {
  this.lightDomView = lightDomView;
  this.nodes = DOM.childNodesAsList(element);
  this.roots = null;
  this.shadowDomView = null;
};
($traceurRuntime.createClass)(LightDom, {
  attachShadowDomView: function(shadowDomView) {
    this.shadowDomView = shadowDomView;
  },
  detachShadowDomView: function() {
    this.shadowDomView = null;
  },
  redistribute: function() {
    redistributeNodes(this.contentTags(), this.expandedDomNodes());
  },
  contentTags: function() {
    if (isPresent(this.shadowDomView)) {
      return this._collectAllContentTags(this.shadowDomView, []);
    } else {
      return [];
    }
  },
  _collectAllContentTags: function(view, acc) {
    var $__4 = this;
    var contentTags = view.contentTags;
    var vcs = view.viewContainers;
    for (var i = 0; i < vcs.length; i++) {
      var vc = vcs[i];
      var contentTag = contentTags[i];
      if (isPresent(contentTag)) {
        ListWrapper.push(acc, contentTag);
      }
      if (isPresent(vc)) {
        ListWrapper.forEach(vc.contentTagContainers(), (function(view) {
          $__4._collectAllContentTags(view, acc);
        }));
      }
    }
    return acc;
  },
  expandedDomNodes: function() {
    var res = [];
    var roots = this._roots();
    for (var i = 0; i < roots.length; ++i) {
      var root = roots[i];
      if (isPresent(root.boundElementIndex)) {
        var vc = this.lightDomView.viewContainers[root.boundElementIndex];
        var content = this.lightDomView.contentTags[root.boundElementIndex];
        if (isPresent(vc)) {
          res = ListWrapper.concat(res, vc.nodes());
        } else if (isPresent(content)) {
          res = ListWrapper.concat(res, content.nodes());
        } else {
          ListWrapper.push(res, root.node);
        }
      } else {
        ListWrapper.push(res, root.node);
      }
    }
    return res;
  },
  _roots: function() {
    if (isPresent(this.roots))
      return this.roots;
    var boundElements = this.lightDomView.boundElements;
    this.roots = ListWrapper.map(this.nodes, (function(n) {
      var boundElementIndex = null;
      for (var i = 0; i < boundElements.length; i++) {
        var boundEl = boundElements[i];
        if (isPresent(boundEl) && boundEl === n) {
          boundElementIndex = i;
          break;
        }
      }
      return new _Root(n, boundElementIndex);
    }));
    return this.roots;
  }
}, {});
Object.defineProperty(LightDom, "parameters", {get: function() {
    return [[viewModule.DomView], []];
  }});
Object.defineProperty(LightDom.prototype.attachShadowDomView, "parameters", {get: function() {
    return [[viewModule.DomView]];
  }});
Object.defineProperty(LightDom.prototype._collectAllContentTags, "parameters", {get: function() {
    return [[viewModule.DomView], [$traceurRuntime.genericType(List, Content)]];
  }});
function redistributeNodes(contents, nodes) {
  for (var i = 0; i < contents.length; ++i) {
    var content = contents[i];
    var select = content.select;
    if (select.length === 0) {
      content.insert(ListWrapper.clone(nodes));
      ListWrapper.clear(nodes);
    } else {
      var matchSelector = (function(n) {
        return DOM.elementMatches(n, select);
      });
      var matchingNodes = ListWrapper.filter(nodes, matchSelector);
      content.insert(matchingNodes);
      ListWrapper.removeAll(nodes, matchingNodes);
    }
  }
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    if (isPresent(node.parentNode)) {
      DOM.remove(nodes[i]);
    }
  }
}
Object.defineProperty(redistributeNodes, "parameters", {get: function() {
    return [[$traceurRuntime.genericType(List, Content)], [List]];
  }});
//# sourceMappingURL=light_dom.js.map

//# sourceMappingURL=./light_dom.map