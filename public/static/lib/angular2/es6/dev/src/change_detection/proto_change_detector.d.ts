import { ProtoChangeDetector } from './interfaces';
import { DynamicChangeDetector } from './dynamic_change_detector';
import { PipeRegistry } from './pipes/pipe_registry';
import { ProtoRecord } from './proto_record';
export declare var __esModule: boolean;
export declare class DynamicProtoChangeDetector extends ProtoChangeDetector {
    private _pipeRegistry;
    private _bindingRecords;
    private _variableBindings;
    private _directiveRecords;
    private _changeControlStrategy;
    _records: List<ProtoRecord>;
    constructor(_pipeRegistry: PipeRegistry, _bindingRecords: List<any>, _variableBindings: List<any>, _directiveRecords: List<any>, _changeControlStrategy: string);
    instantiate(dispatcher: any): DynamicChangeDetector;
    _createRecordsIfNecessary(): void;
}
export declare class JitProtoChangeDetector extends ProtoChangeDetector {
    private _pipeRegistry;
    private _bindingRecords;
    private _variableBindings;
    private _directiveRecords;
    private _changeControlStrategy;
    _factory: Function;
    constructor(_pipeRegistry: any, _bindingRecords: List<any>, _variableBindings: List<any>, _directiveRecords: List<any>, _changeControlStrategy: string);
    instantiate(dispatcher: any): any;
    _createFactoryIfNecessary(): void;
}
