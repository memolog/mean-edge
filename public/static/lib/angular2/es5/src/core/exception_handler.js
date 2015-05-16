System.register(["angular2/src/di/annotations_impl", "angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/src/dom/dom_adapter"], function($__export) {
  "use strict";
  var Injectable,
      isPresent,
      print,
      ListWrapper,
      isListLikeIterable,
      DOM,
      ExceptionHandler;
  return {
    setters: [function($__m) {
      Injectable = $__m.Injectable;
    }, function($__m) {
      isPresent = $__m.isPresent;
      print = $__m.print;
    }, function($__m) {
      ListWrapper = $__m.ListWrapper;
      isListLikeIterable = $__m.isListLikeIterable;
    }, function($__m) {
      DOM = $__m.DOM;
    }],
    execute: function() {
      ExceptionHandler = (function() {
        function ExceptionHandler() {}
        return ($traceurRuntime.createClass)(ExceptionHandler, {call: function(error) {
            var stackTrace = arguments[1] !== (void 0) ? arguments[1] : null;
            var reason = arguments[2] !== (void 0) ? arguments[2] : null;
            var longStackTrace = isListLikeIterable(stackTrace) ? ListWrapper.join(stackTrace, "\n\n") : stackTrace;
            var reasonStr = isPresent(reason) ? ("\n" + reason) : '';
            DOM.logError(("" + error + reasonStr + "\nSTACKTRACE:\n" + longStackTrace));
          }}, {});
      }());
      $__export("ExceptionHandler", ExceptionHandler);
      Object.defineProperty(ExceptionHandler, "annotations", {get: function() {
          return [new Injectable()];
        }});
    }
  };
});
//# sourceMappingURL=exception_handler.js.map

//# sourceMappingURL=../../src/core/exception_handler.js.map