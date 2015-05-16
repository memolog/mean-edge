var constants_1 = require('./constants');
// HACK: workaround for Traceur behavior.
// It expects all transpiled modules to contain this marker.
// TODO: remove this when we no longer use traceur
exports.__esModule = true;
var ProtoChangeDetector = (function () {
    function ProtoChangeDetector() {
    }
    ProtoChangeDetector.prototype.instantiate = function (dispatcher) { return null; };
    return ProtoChangeDetector;
})();
exports.ProtoChangeDetector = ProtoChangeDetector;
/**
 * Interface used by Angular to control the change detection strategy for an application.
 *
 * Angular implements the following change detection strategies by default:
 *
 * - {@link DynamicChangeDetection}: slower, but does not require `eval()`.
 * - {@link JitChangeDetection}: faster, but requires `eval()`.
 *
 * In JavaScript, you should always use `JitChangeDetection`, unless you are in an environment that
 *has
 * [CSP](https://developer.mozilla.org/en-US/docs/Web/Security/CSP), such as a Chrome Extension.
 *
 * In Dart, use `DynamicChangeDetection` during development. The Angular transformer generates an
 *analog to the
 * `JitChangeDetection` strategy at compile time.
 *
 *
 * See: {@link DynamicChangeDetection}, {@link JitChangeDetection}
 *
 * # Example
 * ```javascript
 * bootstrap(MyApp, [bind(ChangeDetection).toClass(DynamicChangeDetection)]);
 * ```
 * @exportedAs angular2/change_detection
 */
var ChangeDetection = (function () {
    function ChangeDetection() {
    }
    ChangeDetection.prototype.createProtoChangeDetector = function (name, bindingRecords, variableBindings, directiveRecords, changeControlStrategy) {
        if (changeControlStrategy === void 0) { changeControlStrategy = constants_1.DEFAULT; }
        return null;
    };
    return ChangeDetection;
})();
exports.ChangeDetection = ChangeDetection;
var ChangeDispatcher = (function () {
    function ChangeDispatcher() {
    }
    ChangeDispatcher.prototype.notifyOnBinding = function (bindingRecord, value) { };
    return ChangeDispatcher;
})();
exports.ChangeDispatcher = ChangeDispatcher;
var ChangeDetector = (function () {
    function ChangeDetector() {
    }
    ChangeDetector.prototype.addChild = function (cd) { };
    ChangeDetector.prototype.addShadowDomChild = function (cd) { };
    ChangeDetector.prototype.removeChild = function (cd) { };
    ChangeDetector.prototype.removeShadowDomChild = function (cd) { };
    ChangeDetector.prototype.remove = function () { };
    ChangeDetector.prototype.hydrate = function (context, locals, directives) { };
    ChangeDetector.prototype.dehydrate = function () { };
    ChangeDetector.prototype.markPathToRootAsCheckOnce = function () { };
    ChangeDetector.prototype.detectChanges = function () { };
    ChangeDetector.prototype.checkNoChanges = function () { };
    return ChangeDetector;
})();
exports.ChangeDetector = ChangeDetector;
//# sourceMappingURL=interfaces.js.map