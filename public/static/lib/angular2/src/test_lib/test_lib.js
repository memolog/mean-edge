"use strict";
Object.defineProperties(module.exports, {
  inject: {get: function() {
      return $__test_95_injector__.inject;
    }},
  proxy: {get: function() {
      return $__rtts_95_assert_47_rtts_95_assert__.proxy;
    }},
  afterEach: {get: function() {
      return afterEach;
    }},
  expect: {get: function() {
      return expect;
    }},
  IS_DARTIUM: {get: function() {
      return IS_DARTIUM;
    }},
  AsyncTestCompleter: {get: function() {
      return AsyncTestCompleter;
    }},
  describe: {get: function() {
      return describe;
    }},
  ddescribe: {get: function() {
      return ddescribe;
    }},
  xdescribe: {get: function() {
      return xdescribe;
    }},
  beforeEach: {get: function() {
      return beforeEach;
    }},
  beforeEachBindings: {get: function() {
      return beforeEachBindings;
    }},
  it: {get: function() {
      return it;
    }},
  xit: {get: function() {
      return xit;
    }},
  iit: {get: function() {
      return iit;
    }},
  SpyObject: {get: function() {
      return SpyObject;
    }},
  isInInnerZone: {get: function() {
      return isInInnerZone;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_di__,
    $__test_95_injector__,
    $__test_95_injector__,
    $__rtts_95_assert_47_rtts_95_assert__;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var StringMapWrapper = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).StringMapWrapper;
var global = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).global;
var bind = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).bind;
var $__4 = ($__test_95_injector__ = require("./test_injector"), $__test_95_injector__ && $__test_95_injector__.__esModule && $__test_95_injector__ || {default: $__test_95_injector__}),
    createTestInjector = $__4.createTestInjector,
    FunctionWithParamTokens = $__4.FunctionWithParamTokens,
    inject = $__4.inject;
var $__test_95_injector__ = ($__test_95_injector__ = require("./test_injector"), $__test_95_injector__ && $__test_95_injector__.__esModule && $__test_95_injector__ || {default: $__test_95_injector__});
var $__rtts_95_assert_47_rtts_95_assert__ = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__});
var _global = typeof window === 'undefined' ? global : window;
var afterEach = _global.afterEach;
var expect = _global.expect;
var IS_DARTIUM = false;
var AsyncTestCompleter = function AsyncTestCompleter(done) {
  this._done = done;
};
($traceurRuntime.createClass)(AsyncTestCompleter, {done: function() {
    this._done();
  }}, {});
Object.defineProperty(AsyncTestCompleter, "parameters", {get: function() {
    return [[Function]];
  }});
var jsmBeforeEach = _global.beforeEach;
var jsmDescribe = _global.describe;
var jsmDDescribe = _global.ddescribe;
var jsmXDescribe = _global.xdescribe;
var jsmIt = _global.it;
var jsmIIt = _global.iit;
var jsmXIt = _global.xit;
var runnerStack = [];
var inIt = false;
var testBindings;
var BeforeEachRunner = function BeforeEachRunner(parent) {
  this._fns = [];
  this._parent = parent;
};
var $BeforeEachRunner = BeforeEachRunner;
($traceurRuntime.createClass)(BeforeEachRunner, {
  beforeEach: function(fn) {
    this._fns.push(fn);
  },
  run: function(injector) {
    if (this._parent)
      this._parent.run();
    this._fns.forEach((function(fn) {
      return fn.execute(injector);
    }));
  }
}, {});
Object.defineProperty(BeforeEachRunner, "parameters", {get: function() {
    return [[BeforeEachRunner]];
  }});
Object.defineProperty(BeforeEachRunner.prototype.beforeEach, "parameters", {get: function() {
    return [[FunctionWithParamTokens]];
  }});
jsmBeforeEach((function() {
  testBindings = [];
}));
function _describe(jsmFn) {
  for (var args = [],
      $__6 = 1; $__6 < arguments.length; $__6++)
    args[$__6 - 1] = arguments[$__6];
  var parentRunner = runnerStack.length === 0 ? null : runnerStack[runnerStack.length - 1];
  var runner = new BeforeEachRunner(parentRunner);
  runnerStack.push(runner);
  var suite = jsmFn.apply((void 0), $traceurRuntime.spread(args));
  runnerStack.pop();
  return suite;
}
function describe() {
  for (var args = [],
      $__7 = 0; $__7 < arguments.length; $__7++)
    args[$__7] = arguments[$__7];
  return _describe.apply((void 0), $traceurRuntime.spread([jsmDescribe], args));
}
function ddescribe() {
  for (var args = [],
      $__8 = 0; $__8 < arguments.length; $__8++)
    args[$__8] = arguments[$__8];
  return _describe.apply((void 0), $traceurRuntime.spread([jsmDDescribe], args));
}
function xdescribe() {
  for (var args = [],
      $__9 = 0; $__9 < arguments.length; $__9++)
    args[$__9] = arguments[$__9];
  return _describe.apply((void 0), $traceurRuntime.spread([jsmXDescribe], args));
}
function beforeEach(fn) {
  if (runnerStack.length > 0) {
    var runner = runnerStack[runnerStack.length - 1];
    if (!(fn instanceof FunctionWithParamTokens)) {
      fn = inject([], fn);
    }
    runner.beforeEach(fn);
  } else {
    jsmBeforeEach(fn);
  }
}
function beforeEachBindings(fn) {
  jsmBeforeEach((function() {
    var bindings = fn();
    if (!bindings)
      return ;
    testBindings = $traceurRuntime.spread(testBindings, bindings);
  }));
}
function _it(jsmFn, name, fn) {
  var runner = runnerStack[runnerStack.length - 1];
  jsmFn(name, function(done) {
    var async = false;
    var completerBinding = bind(AsyncTestCompleter).toFactory((function() {
      if (!inIt)
        throw new Error('AsyncTestCompleter can only be injected in an "it()"');
      async = true;
      return new AsyncTestCompleter(done);
    }));
    var injector = createTestInjector($traceurRuntime.spread(testBindings, [completerBinding]));
    runner.run(injector);
    if (!(fn instanceof FunctionWithParamTokens)) {
      fn = inject([], fn);
    }
    inIt = true;
    fn.execute(injector);
    inIt = false;
    if (!async)
      done();
  });
}
function it(name, fn) {
  return _it(jsmIt, name, fn);
}
function xit(name, fn) {
  return _it(jsmXIt, name, fn);
}
function iit(name, fn) {
  return _it(jsmIIt, name, fn);
}
_global.print = function(msg) {
  if (_global.dump) {
    _global.dump(msg);
  } else {
    _global.console.log(msg);
  }
};
_global.Map.prototype.jasmineToString = function() {
  var m = this;
  if (!m) {
    return '' + m;
  }
  var res = [];
  m.forEach((function(v, k) {
    res.push((k + ":" + v));
  }));
  return ("{ " + res.join(',') + " }");
};
_global.beforeEach(function() {
  jasmine.addMatchers({
    toEqual: function(util, customEqualityTesters) {
      return {compare: function(actual, expected) {
          return {pass: util.equals(actual, expected, [compareMap])};
        }};
      function compareMap(actual, expected) {
        if (actual instanceof Map) {
          var pass = actual.size === expected.size;
          if (pass) {
            actual.forEach((function(v, k) {
              pass = pass && util.equals(v, expected.get(k));
            }));
          }
          return pass;
        } else {
          return undefined;
        }
      }
    },
    toBePromise: function() {
      return {compare: function(actual, expectedClass) {
          var pass = typeof actual === 'object' && typeof actual.then === 'function';
          return {
            pass: pass,
            get message() {
              return 'Expected ' + actual + ' to be a promise';
            }
          };
        }};
    },
    toBeAnInstanceOf: function() {
      return {compare: function(actual, expectedClass) {
          var pass = typeof actual === 'object' && actual instanceof expectedClass;
          return {
            pass: pass,
            get message() {
              return 'Expected ' + actual + ' to be an instance of ' + expectedClass;
            }
          };
        }};
    },
    toHaveText: function() {
      return {compare: function(actual, expectedText) {
          var actualText = elementText(actual);
          return {
            pass: actualText == expectedText,
            get message() {
              return 'Expected ' + actualText + ' to be equal to ' + expectedText;
            }
          };
        }};
    },
    toImplement: function() {
      return {compare: function(actualObject, expectedInterface) {
          var objProps = Object.keys(actualObject.constructor.prototype);
          var intProps = Object.keys(expectedInterface.prototype);
          var missedMethods = [];
          intProps.forEach((function(k) {
            if (!actualObject.constructor.prototype[k])
              missedMethods.push(k);
          }));
          return {
            pass: missedMethods.length == 0,
            get message() {
              return 'Expected ' + actualObject + ' to have the following methods: ' + missedMethods.join(", ");
            }
          };
        }};
    }
  });
});
var SpyObject = function SpyObject() {
  var type = arguments[0] !== (void 0) ? arguments[0] : null;
  if (type) {
    for (var prop in type.prototype) {
      var m = null;
      try {
        m = type.prototype[prop];
      } catch (e) {}
      if (typeof m === 'function') {
        this.spy(prop);
      }
    }
  }
};
var $SpyObject = SpyObject;
($traceurRuntime.createClass)(SpyObject, {
  spy: function(name) {
    if (!this[name]) {
      this[name] = this._createGuinnessCompatibleSpy();
    }
    return this[name];
  },
  rttsAssert: function(value) {
    return true;
  },
  _createGuinnessCompatibleSpy: function() {
    var newSpy = jasmine.createSpy();
    newSpy.andCallFake = newSpy.and.callFake;
    newSpy.andReturn = newSpy.and.returnValue;
    newSpy.and.returnValue(null);
    return newSpy;
  }
}, {stub: function() {
    var object = arguments[0] !== (void 0) ? arguments[0] : null;
    var config = arguments[1] !== (void 0) ? arguments[1] : null;
    var overrides = arguments[2] !== (void 0) ? arguments[2] : null;
    if (!(object instanceof $SpyObject)) {
      overrides = config;
      config = object;
      object = new $SpyObject();
    }
    var m = StringMapWrapper.merge(config, overrides);
    StringMapWrapper.forEach(m, (function(value, key) {
      object.spy(key).andReturn(value);
    }));
    return object;
  }});
function elementText(n) {
  var hasNodes = (function(n) {
    var children = DOM.childNodes(n);
    return children && children.length > 0;
  });
  if (n instanceof Array) {
    return n.map((function(nn) {
      return elementText(nn);
    })).join("");
  }
  if (DOM.isCommentNode(n)) {
    return '';
  }
  if (DOM.isElementNode(n) && DOM.tagName(n) == 'CONTENT') {
    return elementText(Array.prototype.slice.apply(DOM.getDistributedNodes(n)));
  }
  if (DOM.hasShadowRoot(n)) {
    return elementText(DOM.childNodesAsList(DOM.getShadowRoot(n)));
  }
  if (hasNodes(n)) {
    return elementText(DOM.childNodesAsList(n));
  }
  return DOM.getText(n);
}
function isInInnerZone() {
  return global.zone._innerZone === true;
}
//# sourceMappingURL=test_lib.es6.map

//# sourceMappingURL=./test_lib.map