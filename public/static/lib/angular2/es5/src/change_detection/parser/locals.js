System.register(["angular2/src/facade/lang", "angular2/src/facade/collection"], function($__export) {
  "use strict";
  var isPresent,
      BaseException,
      MapWrapper,
      __esModule,
      Locals;
  return {
    setters: [function($__m) {
      isPresent = $__m.isPresent;
      BaseException = $__m.BaseException;
    }, function($__m) {
      MapWrapper = $__m.MapWrapper;
    }],
    execute: function() {
      __esModule = true;
      $__export("__esModule", __esModule);
      Locals = (function() {
        function Locals(parent, current) {
          this.parent = parent;
          this.current = current;
        }
        return ($traceurRuntime.createClass)(Locals, {
          contains: function(name) {
            if (MapWrapper.contains(this.current, name)) {
              return true;
            }
            if (isPresent(this.parent)) {
              return this.parent.contains(name);
            }
            return false;
          },
          get: function(name) {
            if (MapWrapper.contains(this.current, name)) {
              return MapWrapper.get(this.current, name);
            }
            if (isPresent(this.parent)) {
              return this.parent.get(name);
            }
            throw new BaseException(("Cannot find '" + name + "'"));
          },
          set: function(name, value) {
            if (MapWrapper.contains(this.current, name)) {
              MapWrapper.set(this.current, name, value);
            } else {
              throw new BaseException('Setting of new keys post-construction is not supported.');
            }
          },
          clearValues: function() {
            MapWrapper.clearValues(this.current);
          }
        }, {});
      }());
      $__export("Locals", Locals);
    }
  };
});
//# sourceMappingURL=locals.js.map

//# sourceMappingURL=../../../src/change_detection/parser/locals.js.map