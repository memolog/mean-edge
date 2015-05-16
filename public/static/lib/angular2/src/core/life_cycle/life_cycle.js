"use strict";
Object.defineProperties(module.exports, {
  LifeCycle: {get: function() {
      return LifeCycle;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_di_47_annotations_95_impl__,
    $__angular2_47_change_95_detection__,
    $__angular2_47_src_47_core_47_zone_47_ng_95_zone__,
    $__angular2_47_src_47_core_47_exception_95_handler__,
    $__angular2_47_src_47_facade_47_lang__;
var Injectable = ($__angular2_47_src_47_di_47_annotations_95_impl__ = require("angular2/src/di/annotations_impl"), $__angular2_47_src_47_di_47_annotations_95_impl__ && $__angular2_47_src_47_di_47_annotations_95_impl__.__esModule && $__angular2_47_src_47_di_47_annotations_95_impl__ || {default: $__angular2_47_src_47_di_47_annotations_95_impl__}).Injectable;
var ChangeDetector = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}).ChangeDetector;
var NgZone = ($__angular2_47_src_47_core_47_zone_47_ng_95_zone__ = require("angular2/src/core/zone/ng_zone"), $__angular2_47_src_47_core_47_zone_47_ng_95_zone__ && $__angular2_47_src_47_core_47_zone_47_ng_95_zone__.__esModule && $__angular2_47_src_47_core_47_zone_47_ng_95_zone__ || {default: $__angular2_47_src_47_core_47_zone_47_ng_95_zone__}).NgZone;
var ExceptionHandler = ($__angular2_47_src_47_core_47_exception_95_handler__ = require("angular2/src/core/exception_handler"), $__angular2_47_src_47_core_47_exception_95_handler__ && $__angular2_47_src_47_core_47_exception_95_handler__.__esModule && $__angular2_47_src_47_core_47_exception_95_handler__ || {default: $__angular2_47_src_47_core_47_exception_95_handler__}).ExceptionHandler;
var isPresent = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isPresent;
var LifeCycle = function LifeCycle(exceptionHandler) {
  var changeDetector = arguments[1] !== (void 0) ? arguments[1] : null;
  var enforceNoNewChanges = arguments[2] !== (void 0) ? arguments[2] : false;
  this._errorHandler = (function(exception, stackTrace) {
    exceptionHandler.call(exception, stackTrace);
    throw exception;
  });
  this._changeDetector = changeDetector;
  this._enforceNoNewChanges = enforceNoNewChanges;
};
($traceurRuntime.createClass)(LifeCycle, {
  registerWith: function(zone) {
    var changeDetector = arguments[1] !== (void 0) ? arguments[1] : null;
    var $__5 = this;
    if (isPresent(changeDetector)) {
      this._changeDetector = changeDetector;
    }
    zone.initCallbacks({
      onErrorHandler: this._errorHandler,
      onTurnDone: (function() {
        return $__5.tick();
      })
    });
  },
  tick: function() {
    this._changeDetector.detectChanges();
    if (this._enforceNoNewChanges) {
      this._changeDetector.checkNoChanges();
    }
  }
}, {});
Object.defineProperty(LifeCycle, "annotations", {get: function() {
    return [new Injectable()];
  }});
Object.defineProperty(LifeCycle, "parameters", {get: function() {
    return [[ExceptionHandler], [ChangeDetector], [$traceurRuntime.type.boolean]];
  }});
Object.defineProperty(LifeCycle.prototype.registerWith, "parameters", {get: function() {
    return [[NgZone], [ChangeDetector]];
  }});
//# sourceMappingURL=life_cycle.js.map

//# sourceMappingURL=./life_cycle.map