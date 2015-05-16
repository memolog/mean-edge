var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var proto_change_detector_1 = require('./proto_change_detector');
var pipe_registry_1 = require('./pipes/pipe_registry');
var iterable_changes_1 = require('./pipes/iterable_changes');
var keyvalue_changes_1 = require('./pipes/keyvalue_changes');
var observable_pipe_1 = require('./pipes/observable_pipe');
var promise_pipe_1 = require('./pipes/promise_pipe');
var null_pipe_1 = require('./pipes/null_pipe');
var constants_1 = require('./constants');
var interfaces_1 = require('./interfaces');
var decorators_1 = require('angular2/src/di/decorators');
// HACK: workaround for Traceur behavior.
// It expects all transpiled modules to contain this marker.
// TODO: remove this when we no longer use traceur
exports.__esModule = true;
/**
 * Structural diffing for `Object`s and `Map`s.
 *
 * @exportedAs angular2/pipes
 */
exports.keyValDiff = [new keyvalue_changes_1.KeyValueChangesFactory(), new null_pipe_1.NullPipeFactory()];
/**
 * Structural diffing for `Iterable` types such as `Array`s.
 *
 * @exportedAs angular2/pipes
 */
exports.iterableDiff = [new iterable_changes_1.IterableChangesFactory(), new null_pipe_1.NullPipeFactory()];
/**
 * Async binding to such types as Observable.
 *
 * @exportedAs angular2/pipes
 */
exports.async = [new observable_pipe_1.ObservablePipeFactory(), new promise_pipe_1.PromisePipeFactory(), new null_pipe_1.NullPipeFactory()];
exports.defaultPipes = {
    "iterableDiff": exports.iterableDiff,
    "keyValDiff": exports.keyValDiff,
    "async": exports.async
};
/**
 * Implements change detection that does not require `eval()`.
 *
 * This is slower than {@link JitChangeDetection}.
 *
 * @exportedAs angular2/change_detection
 */
var DynamicChangeDetection = (function (_super) {
    __extends(DynamicChangeDetection, _super);
    function DynamicChangeDetection(registry) {
        _super.call(this);
        this.registry = registry;
    }
    DynamicChangeDetection.prototype.createProtoChangeDetector = function (name, bindingRecords, variableBindings, directiveRecords, changeControlStrategy) {
        if (changeControlStrategy === void 0) { changeControlStrategy = constants_1.DEFAULT; }
        return new proto_change_detector_1.DynamicProtoChangeDetector(this.registry, bindingRecords, variableBindings, directiveRecords, changeControlStrategy);
    };
    DynamicChangeDetection = __decorate([
        decorators_1.Injectable(), 
        __metadata('design:paramtypes', [pipe_registry_1.PipeRegistry])
    ], DynamicChangeDetection);
    return DynamicChangeDetection;
})(interfaces_1.ChangeDetection);
exports.DynamicChangeDetection = DynamicChangeDetection;
/**
 * Implements faster change detection, by generating source code.
 *
 * This requires `eval()`. For change detection that does not require `eval()`, see {@link
 *DynamicChangeDetection}.
 *
 * @exportedAs angular2/change_detection
 */
var JitChangeDetection = (function (_super) {
    __extends(JitChangeDetection, _super);
    function JitChangeDetection(registry) {
        _super.call(this);
        this.registry = registry;
    }
    JitChangeDetection.prototype.createProtoChangeDetector = function (name, bindingRecords, variableBindings, directiveRecords, changeControlStrategy) {
        if (changeControlStrategy === void 0) { changeControlStrategy = constants_1.DEFAULT; }
        return new proto_change_detector_1.JitProtoChangeDetector(this.registry, bindingRecords, variableBindings, directiveRecords, changeControlStrategy);
    };
    JitChangeDetection = __decorate([
        decorators_1.Injectable(), 
        __metadata('design:paramtypes', [pipe_registry_1.PipeRegistry])
    ], JitChangeDetection);
    return JitChangeDetection;
})(interfaces_1.ChangeDetection);
exports.JitChangeDetection = JitChangeDetection;
exports.defaultPipeRegistry = new pipe_registry_1.PipeRegistry(exports.defaultPipes);
//# sourceMappingURL=change_detection.js.map