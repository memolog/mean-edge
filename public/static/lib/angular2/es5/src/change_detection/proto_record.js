System.register([], function($__export) {
  "use strict";
  var __esModule,
      RECORD_TYPE_SELF,
      RECORD_TYPE_CONST,
      RECORD_TYPE_PRIMITIVE_OP,
      RECORD_TYPE_PROPERTY,
      RECORD_TYPE_LOCAL,
      RECORD_TYPE_INVOKE_METHOD,
      RECORD_TYPE_INVOKE_CLOSURE,
      RECORD_TYPE_KEYED_ACCESS,
      RECORD_TYPE_PIPE,
      RECORD_TYPE_BINDING_PIPE,
      RECORD_TYPE_INTERPOLATE,
      ProtoRecord;
  return {
    setters: [],
    execute: function() {
      __esModule = true;
      $__export("__esModule", __esModule);
      RECORD_TYPE_SELF = 0;
      $__export("RECORD_TYPE_SELF", RECORD_TYPE_SELF);
      RECORD_TYPE_CONST = 1;
      $__export("RECORD_TYPE_CONST", RECORD_TYPE_CONST);
      RECORD_TYPE_PRIMITIVE_OP = 2;
      $__export("RECORD_TYPE_PRIMITIVE_OP", RECORD_TYPE_PRIMITIVE_OP);
      RECORD_TYPE_PROPERTY = 3;
      $__export("RECORD_TYPE_PROPERTY", RECORD_TYPE_PROPERTY);
      RECORD_TYPE_LOCAL = 4;
      $__export("RECORD_TYPE_LOCAL", RECORD_TYPE_LOCAL);
      RECORD_TYPE_INVOKE_METHOD = 5;
      $__export("RECORD_TYPE_INVOKE_METHOD", RECORD_TYPE_INVOKE_METHOD);
      RECORD_TYPE_INVOKE_CLOSURE = 6;
      $__export("RECORD_TYPE_INVOKE_CLOSURE", RECORD_TYPE_INVOKE_CLOSURE);
      RECORD_TYPE_KEYED_ACCESS = 7;
      $__export("RECORD_TYPE_KEYED_ACCESS", RECORD_TYPE_KEYED_ACCESS);
      RECORD_TYPE_PIPE = 8;
      $__export("RECORD_TYPE_PIPE", RECORD_TYPE_PIPE);
      RECORD_TYPE_BINDING_PIPE = 9;
      $__export("RECORD_TYPE_BINDING_PIPE", RECORD_TYPE_BINDING_PIPE);
      RECORD_TYPE_INTERPOLATE = 10;
      $__export("RECORD_TYPE_INTERPOLATE", RECORD_TYPE_INTERPOLATE);
      ProtoRecord = (function() {
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
        return ($traceurRuntime.createClass)(ProtoRecord, {isPureFunction: function() {
            return this.mode === RECORD_TYPE_INTERPOLATE || this.mode === RECORD_TYPE_PRIMITIVE_OP;
          }}, {});
      }());
      $__export("ProtoRecord", ProtoRecord);
    }
  };
});
//# sourceMappingURL=proto_record.js.map

//# sourceMappingURL=../../src/change_detection/proto_record.js.map