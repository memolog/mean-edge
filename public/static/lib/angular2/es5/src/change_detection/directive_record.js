System.register(["./constants", "angular2/src/facade/lang"], function($__export) {
  "use strict";
  var ON_PUSH,
      StringWrapper,
      __esModule,
      DirectiveIndex,
      DirectiveRecord;
  return {
    setters: [function($__m) {
      ON_PUSH = $__m.ON_PUSH;
    }, function($__m) {
      StringWrapper = $__m.StringWrapper;
    }],
    execute: function() {
      __esModule = true;
      $__export("__esModule", __esModule);
      DirectiveIndex = (function() {
        function DirectiveIndex(elementIndex, directiveIndex) {
          this.elementIndex = elementIndex;
          this.directiveIndex = directiveIndex;
        }
        return ($traceurRuntime.createClass)(DirectiveIndex, {get name() {
            return (this.elementIndex + "_" + this.directiveIndex);
          }}, {});
      }());
      $__export("DirectiveIndex", DirectiveIndex);
      DirectiveRecord = (function() {
        function DirectiveRecord(directiveIndex, callOnAllChangesDone, callOnChange, changeDetection) {
          this.directiveIndex = directiveIndex;
          this.callOnAllChangesDone = callOnAllChangesDone;
          this.callOnChange = callOnChange;
          this.changeDetection = changeDetection;
        }
        return ($traceurRuntime.createClass)(DirectiveRecord, {isOnPushChangeDetection: function() {
            return StringWrapper.equals(this.changeDetection, ON_PUSH);
          }}, {});
      }());
      $__export("DirectiveRecord", DirectiveRecord);
    }
  };
});
//# sourceMappingURL=directive_record.js.map

//# sourceMappingURL=../../src/change_detection/directive_record.js.map