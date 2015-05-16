// HACK: workaround for Traceur behavior.
// It expects all transpiled modules to contain this marker.
// TODO: remove this when we no longer use traceur
exports.__esModule = true;
exports.RECORD_TYPE_SELF = 0;
exports.RECORD_TYPE_CONST = 1;
exports.RECORD_TYPE_PRIMITIVE_OP = 2;
exports.RECORD_TYPE_PROPERTY = 3;
exports.RECORD_TYPE_LOCAL = 4;
exports.RECORD_TYPE_INVOKE_METHOD = 5;
exports.RECORD_TYPE_INVOKE_CLOSURE = 6;
exports.RECORD_TYPE_KEYED_ACCESS = 7;
exports.RECORD_TYPE_PIPE = 8;
exports.RECORD_TYPE_BINDING_PIPE = 9;
exports.RECORD_TYPE_INTERPOLATE = 10;
var ProtoRecord = (function () {
    function ProtoRecord(mode, name, funcOrValue, args, fixedArgs, contextIndex, directiveIndex, selfIndex, bindingRecord, expressionAsString, lastInBinding, lastInDirective) {
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
    ProtoRecord.prototype.isPureFunction = function () {
        return this.mode === exports.RECORD_TYPE_INTERPOLATE || this.mode === exports.RECORD_TYPE_PRIMITIVE_OP;
    };
    return ProtoRecord;
})();
exports.ProtoRecord = ProtoRecord;
//# sourceMappingURL=proto_record.js.map