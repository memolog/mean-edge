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
import { DynamicProtoChangeDetector, JitProtoChangeDetector } from './proto_change_detector';
import { PipeRegistry } from './pipes/pipe_registry';
import { IterableChangesFactory } from './pipes/iterable_changes';
import { KeyValueChangesFactory } from './pipes/keyvalue_changes';
import { ObservablePipeFactory } from './pipes/observable_pipe';
import { PromisePipeFactory } from './pipes/promise_pipe';
import { NullPipeFactory } from './pipes/null_pipe';
import { DEFAULT } from './constants';
import { ChangeDetection } from './interfaces';
import { Injectable } from 'angular2/src/di/decorators';
// HACK: workaround for Traceur behavior.
// It expects all transpiled modules to contain this marker.
// TODO: remove this when we no longer use traceur
export var __esModule = true;
/**
 * Structural diffing for `Object`s and `Map`s.
 *
 * @exportedAs angular2/pipes
 */
export var keyValDiff = [new KeyValueChangesFactory(), new NullPipeFactory()];
/**
 * Structural diffing for `Iterable` types such as `Array`s.
 *
 * @exportedAs angular2/pipes
 */
export var iterableDiff = [new IterableChangesFactory(), new NullPipeFactory()];
/**
 * Async binding to such types as Observable.
 *
 * @exportedAs angular2/pipes
 */
export var async = [new ObservablePipeFactory(), new PromisePipeFactory(), new NullPipeFactory()];
export var defaultPipes = {
    "iterableDiff": iterableDiff,
    "keyValDiff": keyValDiff,
    "async": async
};
/**
 * Implements change detection that does not require `eval()`.
 *
 * This is slower than {@link JitChangeDetection}.
 *
 * @exportedAs angular2/change_detection
 */
export let DynamicChangeDetection = class extends ChangeDetection {
    constructor(registry) {
        super();
        this.registry = registry;
    }
    createProtoChangeDetector(name, bindingRecords, variableBindings, directiveRecords, changeControlStrategy = DEFAULT) {
        return new DynamicProtoChangeDetector(this.registry, bindingRecords, variableBindings, directiveRecords, changeControlStrategy);
    }
};
DynamicChangeDetection = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [PipeRegistry])
], DynamicChangeDetection);
/**
 * Implements faster change detection, by generating source code.
 *
 * This requires `eval()`. For change detection that does not require `eval()`, see {@link
 *DynamicChangeDetection}.
 *
 * @exportedAs angular2/change_detection
 */
export let JitChangeDetection = class extends ChangeDetection {
    constructor(registry) {
        super();
        this.registry = registry;
    }
    createProtoChangeDetector(name, bindingRecords, variableBindings, directiveRecords, changeControlStrategy = DEFAULT) {
        return new JitProtoChangeDetector(this.registry, bindingRecords, variableBindings, directiveRecords, changeControlStrategy);
    }
};
JitChangeDetection = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [PipeRegistry])
], JitChangeDetection);
export var defaultPipeRegistry = new PipeRegistry(defaultPipes);
//# sourceMappingURL=change_detection.js.map