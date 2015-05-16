System.register(["./constants"], function($__export) {
  "use strict";
  var DEFAULT,
      __esModule,
      ProtoChangeDetector,
      ChangeDetection,
      ChangeDispatcher,
      ChangeDetector;
  return {
    setters: [function($__m) {
      DEFAULT = $__m.DEFAULT;
    }],
    execute: function() {
      __esModule = true;
      $__export("__esModule", __esModule);
      ProtoChangeDetector = (function() {
        function ProtoChangeDetector() {}
        return ($traceurRuntime.createClass)(ProtoChangeDetector, {instantiate: function(dispatcher) {
            return null;
          }}, {});
      }());
      $__export("ProtoChangeDetector", ProtoChangeDetector);
      ChangeDetection = (function() {
        function ChangeDetection() {}
        return ($traceurRuntime.createClass)(ChangeDetection, {createProtoChangeDetector: function(name, bindingRecords, variableBindings, directiveRecords) {
            var changeControlStrategy = arguments[4] !== (void 0) ? arguments[4] : DEFAULT;
            return null;
          }}, {});
      }());
      $__export("ChangeDetection", ChangeDetection);
      ChangeDispatcher = (function() {
        function ChangeDispatcher() {}
        return ($traceurRuntime.createClass)(ChangeDispatcher, {notifyOnBinding: function(bindingRecord, value) {}}, {});
      }());
      $__export("ChangeDispatcher", ChangeDispatcher);
      ChangeDetector = (function() {
        function ChangeDetector() {}
        return ($traceurRuntime.createClass)(ChangeDetector, {
          addChild: function(cd) {},
          addShadowDomChild: function(cd) {},
          removeChild: function(cd) {},
          removeShadowDomChild: function(cd) {},
          remove: function() {},
          hydrate: function(context, locals, directives) {},
          dehydrate: function() {},
          markPathToRootAsCheckOnce: function() {},
          detectChanges: function() {},
          checkNoChanges: function() {}
        }, {});
      }());
      $__export("ChangeDetector", ChangeDetector);
    }
  };
});
//# sourceMappingURL=interfaces.js.map

//# sourceMappingURL=../../src/change_detection/interfaces.js.map