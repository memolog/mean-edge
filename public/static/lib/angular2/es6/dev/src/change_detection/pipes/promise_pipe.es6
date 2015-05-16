import { PromiseWrapper } from 'angular2/src/facade/async';
import { isBlank } from 'angular2/src/facade/lang';
import { Pipe, WrappedValue } from './pipe';
// HACK: workaround for Traceur behavior.
// It expects all transpiled modules to contain this marker.
// TODO: remove this when we no longer use traceur
export var __esModule = true;
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
export class PromisePipe extends Pipe {
    constructor(ref) {
        super();
        this._ref = ref;
        this._latestValue = null;
        this._latestReturnedValue = null;
    }
    supports(promise) { return PromiseWrapper.isPromise(promise); }
    onDestroy() {
        // NO-OP
    }
    transform(promise) {
        if (isBlank(this._sourcePromise)) {
            this._sourcePromise = promise;
            promise.then((val) => {
                if (this._sourcePromise === promise) {
                    this._updateLatestValue(val);
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
            return WrappedValue.wrap(this._latestValue);
        }
    }
    _updateLatestValue(value) {
        this._latestValue = value;
        this._ref.requestCheck();
    }
}
/**
 * Provides a factory for [PromisePipe].
 *
 * @exportedAs angular2/pipes
 */
export class PromisePipeFactory {
    supports(promise) { return PromiseWrapper.isPromise(promise); }
    create(cdRef) { return new PromisePipe(cdRef); }
}
//# sourceMappingURL=promise_pipe.js.map