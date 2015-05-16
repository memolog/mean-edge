import { PipeFactory } from './pipes/pipe';
import { PipeRegistry } from './pipes/pipe_registry';
import { BindingRecord } from './binding_record';
import { DirectiveRecord } from './directive_record';
import { ChangeDetection, ProtoChangeDetector } from './interfaces';
export declare var __esModule: boolean;
/**
 * Structural diffing for `Object`s and `Map`s.
 *
 * @exportedAs angular2/pipes
 */
export declare var keyValDiff: List<PipeFactory>;
/**
 * Structural diffing for `Iterable` types such as `Array`s.
 *
 * @exportedAs angular2/pipes
 */
export declare var iterableDiff: List<PipeFactory>;
/**
 * Async binding to such types as Observable.
 *
 * @exportedAs angular2/pipes
 */
export declare var async: List<PipeFactory>;
export declare var defaultPipes: {
    "iterableDiff": List<PipeFactory>;
    "keyValDiff": List<PipeFactory>;
    "async": List<PipeFactory>;
};
/**
 * Implements change detection that does not require `eval()`.
 *
 * This is slower than {@link JitChangeDetection}.
 *
 * @exportedAs angular2/change_detection
 */
export declare class DynamicChangeDetection extends ChangeDetection {
    registry: PipeRegistry;
    constructor(registry: PipeRegistry);
    createProtoChangeDetector(name: string, bindingRecords: List<BindingRecord>, variableBindings: List<string>, directiveRecords: List<DirectiveRecord>, changeControlStrategy?: string): ProtoChangeDetector;
}
/**
 * Implements faster change detection, by generating source code.
 *
 * This requires `eval()`. For change detection that does not require `eval()`, see {@link
 *DynamicChangeDetection}.
 *
 * @exportedAs angular2/change_detection
 */
export declare class JitChangeDetection extends ChangeDetection {
    registry: PipeRegistry;
    constructor(registry: PipeRegistry);
    createProtoChangeDetector(name: string, bindingRecords: List<BindingRecord>, variableBindings: List<string>, directiveRecords: List<DirectiveRecord>, changeControlStrategy?: string): ProtoChangeDetector;
}
export declare var defaultPipeRegistry: PipeRegistry;
