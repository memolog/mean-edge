// HACK: workaround for Traceur behavior.
// It expects all transpiled modules to contain this marker.
// TODO: remove this when we no longer use traceur
export var __esModule = true;
export const RECORD_TYPE_SELF = 0;
export const RECORD_TYPE_CONST = 1;
export const RECORD_TYPE_PRIMITIVE_OP = 2;
export const RECORD_TYPE_PROPERTY = 3;
export const RECORD_TYPE_LOCAL = 4;
export const RECORD_TYPE_INVOKE_METHOD = 5;
export const RECORD_TYPE_INVOKE_CLOSURE = 6;
export const RECORD_TYPE_KEYED_ACCESS = 7;
export const RECORD_TYPE_PIPE = 8;
export const RECORD_TYPE_BINDING_PIPE = 9;
export const RECORD_TYPE_INTERPOLATE = 10;
export class ProtoRecord {
    constructor(mode, name, funcOrValue, args, fixedArgs, contextIndex, directiveIndex, selfIndex, bindingRecord, expressionAsString, lastInBinding, lastInDirective) {
        this.mode = mode;
        this.name = name;
        this.funcOrValue = funcOrValue;
        this.args = args;
        this.fixedArgs = fixedArgs;
        this.contextIndex = contextIndex;
        this.directiveIndex = directiveIndex;
        this.selfIndex = selfIndex;
        this.bindingRecord = bindingRecord;
        this.expressionAsString = expressionAsString;
        this.lastInBinding = lastInBinding;
        this.lastInDirective = lastInDirective;
    }
    isPureFunction() {
        return this.mode === RECORD_TYPE_INTERPOLATE || this.mode === RECORD_TYPE_PRIMITIVE_OP;
    }
}
//# sourceMappingURL=proto_record.js.map