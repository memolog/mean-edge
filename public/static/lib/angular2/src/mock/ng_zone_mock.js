"use strict";
Object.defineProperties(module.exports, {
  MockNgZone: {get: function() {
      return MockNgZone;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_core_47_zone_47_ng_95_zone__;
var NgZone = ($__angular2_47_src_47_core_47_zone_47_ng_95_zone__ = require("angular2/src/core/zone/ng_zone"), $__angular2_47_src_47_core_47_zone_47_ng_95_zone__ && $__angular2_47_src_47_core_47_zone_47_ng_95_zone__.__esModule && $__angular2_47_src_47_core_47_zone_47_ng_95_zone__ || {default: $__angular2_47_src_47_core_47_zone_47_ng_95_zone__}).NgZone;
var MockNgZone = function MockNgZone() {
  $traceurRuntime.superConstructor($MockNgZone).call(this, {enableLongStackTrace: false});
};
var $MockNgZone = MockNgZone;
($traceurRuntime.createClass)(MockNgZone, {
  run: function(fn) {
    return fn();
  },
  runOutsideAngular: function(fn) {
    return fn();
  }
}, {}, NgZone);
//# sourceMappingURL=ng_zone_mock.js.map

//# sourceMappingURL=./ng_zone_mock.map