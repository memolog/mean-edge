import {List,
  ListWrapper,
  StringMapWrapper} from 'angular2/src/facade/collection';
import {normalizeBlank,
  isPresent,
  global} from 'angular2/src/facade/lang';
export class NgZone {
  constructor({enableLongStackTrace}) {
    this._onTurnStart = null;
    this._onTurnDone = null;
    this._onErrorHandler = null;
    this._pendingMicrotasks = 0;
    this._hasExecutedCodeInInnerZone = false;
    this._nestedRun = 0;
    this._mountZone = global.zone;
    this._innerZone = this._createInnerZone(this._mountZone, enableLongStackTrace);
  }
  initCallbacks({onTurnStart,
    onTurnDone,
    onErrorHandler} = {}) {
    this._onTurnStart = normalizeBlank(onTurnStart);
    this._onTurnDone = normalizeBlank(onTurnDone);
    this._onErrorHandler = normalizeBlank(onErrorHandler);
  }
  run(fn) {
    return this._innerZone.run(fn);
  }
  runOutsideAngular(fn) {
    return this._mountZone.run(fn);
  }
  _createInnerZone(zone, enableLongStackTrace) {
    var ngZone = this;
    var errorHandling;
    if (enableLongStackTrace) {
      errorHandling = StringMapWrapper.merge(Zone.longStackTraceZone, {onError: function(e) {
          ngZone._onError(this, e);
        }});
    } else {
      errorHandling = {onError: function(e) {
          ngZone._onError(this, e);
        }};
    }
    return zone.fork(errorHandling).fork({
      '$run': function(parentRun) {
        return function() {
          try {
            ngZone._nestedRun++;
            if (!ngZone._hasExecutedCodeInInnerZone) {
              ngZone._hasExecutedCodeInInnerZone = true;
              if (ngZone._onTurnStart) {
                parentRun.call(ngZone._innerZone, ngZone._onTurnStart);
              }
            }
            return parentRun.apply(this, arguments);
          } finally {
            ngZone._nestedRun--;
            if (ngZone._pendingMicrotasks == 0 && ngZone._nestedRun == 0) {
              if (ngZone._onTurnDone && ngZone._hasExecutedCodeInInnerZone) {
                try {
                  parentRun.call(ngZone._innerZone, ngZone._onTurnDone);
                } finally {
                  ngZone._hasExecutedCodeInInnerZone = false;
                }
              }
            }
          }
        };
      },
      '$scheduleMicrotask': function(parentScheduleMicrotask) {
        return function(fn) {
          ngZone._pendingMicrotasks++;
          var microtask = function() {
            try {
              fn();
            } finally {
              ngZone._pendingMicrotasks--;
            }
          };
          parentScheduleMicrotask.call(this, microtask);
        };
      },
      _innerZone: true
    });
  }
  _onError(zone, e) {
    if (isPresent(this._onErrorHandler)) {
      var trace = [normalizeBlank(e.stack)];
      while (zone && zone.constructedAtException) {
        trace.push(zone.constructedAtException.get());
        zone = zone.parent;
      }
      this._onErrorHandler(e, trace);
    } else {
      console.log('## _onError ##');
      console.log(e.stack);
      throw e;
    }
  }
}
//# sourceMappingURL=ng_zone.es6.map

//# sourceMappingURL=./ng_zone.map