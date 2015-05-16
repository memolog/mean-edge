"use strict";
Object.defineProperties(module.exports, {
  NgZone: {get: function() {
      return NgZone;
    }},
  __esModule: {value: true}
});
var NgZone = function NgZone($__1) {
  var enableLongStackTrace = $__1.enableLongStackTrace;
};
($traceurRuntime.createClass)(NgZone, {
  initCallbacks: function() {
    var $__1 = arguments[0] !== (void 0) ? arguments[0] : {},
        onTurnStart = $__1.onTurnStart,
        onTurnDone = $__1.onTurnDone,
        onScheduleMicrotask = $__1.onScheduleMicrotask,
        onErrorHandler = $__1.onErrorHandler;
  },
  run: function(fn) {
    return fn();
  },
  runOutsideAngular: function(fn) {
    return fn();
  }
}, {});
//# sourceMappingURL=ng_zone.cjs.map

//# sourceMappingURL=./ng_zone.map