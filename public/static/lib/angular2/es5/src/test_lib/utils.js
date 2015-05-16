System.register(["angular2/src/facade/collection", "angular2/src/dom/dom_adapter", "angular2/src/facade/lang", "angular2/src/render/dom/view/view"], function($__export) {
  "use strict";
  var List,
      ListWrapper,
      DOM,
      isPresent,
      resolveInternalDomView,
      Log;
  function viewRootNodes(view) {
    return resolveInternalDomView(view.render).rootNodes;
  }
  function queryView(view, selector) {
    var rootNodes = viewRootNodes(view);
    for (var i = 0; i < rootNodes.length; ++i) {
      var res = DOM.querySelector(rootNodes[i], selector);
      if (isPresent(res)) {
        return res;
      }
    }
    return null;
  }
  function dispatchEvent(element, eventType) {
    DOM.dispatchEvent(element, DOM.createEvent(eventType));
  }
  function el(html) {
    return DOM.firstChild(DOM.content(DOM.createTemplate(html)));
  }
  $__export("viewRootNodes", viewRootNodes);
  $__export("queryView", queryView);
  $__export("dispatchEvent", dispatchEvent);
  $__export("el", el);
  return {
    setters: [function($__m) {
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      isPresent = $__m.isPresent;
    }, function($__m) {
      resolveInternalDomView = $__m.resolveInternalDomView;
    }],
    execute: function() {
      Log = (function() {
        function Log() {
          this._result = [];
        }
        return ($traceurRuntime.createClass)(Log, {
          add: function(value) {
            ListWrapper.push(this._result, value);
          },
          fn: function(value) {
            var $__0 = this;
            return (function() {
              var a1 = arguments[0] !== (void 0) ? arguments[0] : null;
              var a2 = arguments[1] !== (void 0) ? arguments[1] : null;
              var a3 = arguments[2] !== (void 0) ? arguments[2] : null;
              var a4 = arguments[3] !== (void 0) ? arguments[3] : null;
              var a5 = arguments[4] !== (void 0) ? arguments[4] : null;
              ListWrapper.push($__0._result, value);
            });
          },
          result: function() {
            return ListWrapper.join(this._result, "; ");
          }
        }, {});
      }());
      $__export("Log", Log);
      Object.defineProperty(queryView, "parameters", {get: function() {
          return [[], [assert.type.string]];
        }});
      Object.defineProperty(el, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
    }
  };
});
//# sourceMappingURL=utils.js.map

//# sourceMappingURL=../../src/test_lib/utils.js.map