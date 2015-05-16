var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var async_1 = require('angular2/src/facade/async');
var lang_1 = require('angular2/src/facade/lang');
var pipe_1 = require('./pipe');
// HACK: workaround for Traceur behavior.
// It expects all transpiled modules to contain this marker.
// TODO: remove this when we no longer use traceur
exports.__esModule = true;
/**
 * Implements async bindings to Promise.
 *
 * # Example
 *
 * In this example we bind the description promise to the DOM.
 * The async pipe will convert a promise to the value with which it is resolved. It will also
 * request a change detection check when the promise is resolved.
 *
 *  ```
 * @Component({
 *   selector: "task-cmp",
 *   changeDetection: ON_PUSH
 * })
 * @View({
 *  inline: "Task Description {{description|promise}}"
 * })
 * class Task {
 *  description:Promise<string>;
 * }
 *
 * ```
 *
 * @exportedAs angular2/pipes
 */
var PromisePipe = (function (_super) {
    __extends(PromisePipe, _super);
    function PromisePipe(ref) {
        _super.call(this);
        this._ref = ref;
        this._latestValue = null;
        this._latestReturnedValue = null;
    }
    PromisePipe.prototype.supports = function (promise) { return async_1.PromiseWrapper.isPromise(promise); };
    PromisePipe.prototype.onDestroy = function () {
        // NO-OP
    };
    PromisePipe.prototype.transform = function (promise) {
        var _this = this;
        if (lang_1.isBlank(this._sourcePromise)) {
            this._sourcePromise = promise;
            promise.then(function (val) {
                if (_this._sourcePromise === promise) {
                    _this._updateLatestValue(val);
                }
            });
            return null;
        }
        if (promise !== this._sourcePromise) {
            this._sourcePromise = null;
            return this.transform(promise);
        }
        if (this._latestValue === this._latestReturnedValue) {
            return this._latestReturnedValue;
        }
        else {
            this._latestReturnedValue = this._latestValue;
            return pipe_1.WrappedValue.wrap(this._latestValue);
        }
    };
    PromisePipe.prototype._updateLatestValue = function (value) {
        this._latestValue = value;
        this._ref.requestCheck();
    };
    return PromisePipe;
})(pipe_1.Pipe);
exports.PromisePipe = PromisePipe;
/**
 * Provides a factory for [PromisePipe].
 *
 * @exportedAs angular2/pipes
 */
var PromisePipeFactory = (function () {
    function PromisePipeFactory() {
    }
    PromisePipeFactory.prototype.supports = function (promise) { return async_1.PromiseWrapper.isPromise(promise); };
    PromisePipeFactory.prototype.create = function (cdRef) { return new PromisePipe(cdRef); };
    return PromisePipeFactory;
})();
exports.PromisePipeFactory = PromisePipeFactory;
//# sourceMappingURL=promise_pipe.js.map