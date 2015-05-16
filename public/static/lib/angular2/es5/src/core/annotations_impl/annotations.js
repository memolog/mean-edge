System.register(["angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/src/di/annotations_impl", "angular2/change_detection"], function($__export) {
  "use strict";
  var CONST,
      normalizeBlank,
      isPresent,
      ListWrapper,
      List,
      Injectable,
      DEFAULT,
      Directive,
      Component,
      onDestroy,
      onChange,
      onAllChangesDone;
  return {
    setters: [function($__m) {
      CONST = $__m.CONST;
      normalizeBlank = $__m.normalizeBlank;
      isPresent = $__m.isPresent;
    }, function($__m) {
      ListWrapper = $__m.ListWrapper;
      List = $__m.List;
    }, function($__m) {
      Injectable = $__m.Injectable;
    }, function($__m) {
      DEFAULT = $__m.DEFAULT;
    }],
    execute: function() {
      Directive = (function($__super) {
        function Directive() {
          var $__2;
          var $__1 = arguments[0] !== (void 0) ? arguments[0] : {},
              selector = $__1.selector,
              properties = $__1.properties,
              events = $__1.events,
              hostListeners = $__1.hostListeners,
              hostProperties = $__1.hostProperties,
              hostAttributes = $__1.hostAttributes,
              hostActions = $__1.hostActions,
              lifecycle = $__1.lifecycle,
              compileChildren = ($__2 = $__1.compileChildren) === void 0 ? true : $__2;
          $traceurRuntime.superConstructor(Directive).call(this);
          this.selector = selector;
          this.properties = properties;
          this.events = events;
          this.hostListeners = hostListeners;
          this.hostProperties = hostProperties;
          this.hostAttributes = hostAttributes;
          this.hostActions = hostActions;
          this.lifecycle = lifecycle;
          this.compileChildren = compileChildren;
        }
        return ($traceurRuntime.createClass)(Directive, {hasLifecycleHook: function(hook) {
            return isPresent(this.lifecycle) ? ListWrapper.contains(this.lifecycle, hook) : false;
          }}, {}, $__super);
      }(Injectable));
      $__export("Directive", Directive);
      Object.defineProperty(Directive, "annotations", {get: function() {
          return [new CONST()];
        }});
      Object.defineProperty(Directive.prototype.hasLifecycleHook, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Component = (function($__super) {
        function Component() {
          var $__2,
              $__3;
          var $__1 = arguments[0] !== (void 0) ? arguments[0] : {},
              selector = $__1.selector,
              properties = $__1.properties,
              events = $__1.events,
              hostListeners = $__1.hostListeners,
              hostProperties = $__1.hostProperties,
              hostAttributes = $__1.hostAttributes,
              hostActions = $__1.hostActions,
              injectables = $__1.injectables,
              lifecycle = $__1.lifecycle,
              changeDetection = ($__2 = $__1.changeDetection) === void 0 ? DEFAULT : $__2,
              compileChildren = ($__3 = $__1.compileChildren) === void 0 ? true : $__3,
              publishAs = $__1.publishAs;
          $traceurRuntime.superConstructor(Component).call(this, {
            selector: selector,
            properties: properties,
            events: events,
            hostListeners: hostListeners,
            hostProperties: hostProperties,
            hostAttributes: hostAttributes,
            hostActions: hostActions,
            lifecycle: lifecycle,
            compileChildren: compileChildren
          });
          this.changeDetection = changeDetection;
          this.injectables = injectables;
          this.publishAs = publishAs;
        }
        return ($traceurRuntime.createClass)(Component, {}, {}, $__super);
      }(Directive));
      $__export("Component", Component);
      Object.defineProperty(Component, "annotations", {get: function() {
          return [new CONST()];
        }});
      onDestroy = "onDestroy";
      $__export("onDestroy", onDestroy);
      onChange = "onChange";
      $__export("onChange", onChange);
      onAllChangesDone = "onAllChangesDone";
      $__export("onAllChangesDone", onAllChangesDone);
    }
  };
});
//# sourceMappingURL=annotations.js.map

//# sourceMappingURL=../../../src/core/annotations_impl/annotations.js.map