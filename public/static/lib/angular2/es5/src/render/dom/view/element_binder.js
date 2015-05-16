System.register(["angular2/change_detection", "angular2/src/reflection/types", "angular2/src/facade/collection", "./proto_view"], function($__export) {
  "use strict";
  var AST,
      SetterFn,
      List,
      ListWrapper,
      protoViewModule,
      ElementBinder,
      Event,
      HostAction;
  return {
    setters: [function($__m) {
      AST = $__m.AST;
    }, function($__m) {
      SetterFn = $__m.SetterFn;
    }, function($__m) {
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      protoViewModule = $__m;
    }],
    execute: function() {
      ElementBinder = (function() {
        function ElementBinder() {
          var $__1 = arguments[0] !== (void 0) ? arguments[0] : {},
              textNodeIndices = $__1.textNodeIndices,
              contentTagSelector = $__1.contentTagSelector,
              nestedProtoView = $__1.nestedProtoView,
              componentId = $__1.componentId,
              eventLocals = $__1.eventLocals,
              localEvents = $__1.localEvents,
              globalEvents = $__1.globalEvents,
              hostActions = $__1.hostActions,
              parentIndex = $__1.parentIndex,
              distanceToParent = $__1.distanceToParent,
              propertySetters = $__1.propertySetters;
          this.textNodeIndices = textNodeIndices;
          this.contentTagSelector = contentTagSelector;
          this.nestedProtoView = nestedProtoView;
          this.componentId = componentId;
          this.eventLocals = eventLocals;
          this.localEvents = localEvents;
          this.globalEvents = globalEvents;
          this.hostActions = hostActions;
          this.parentIndex = parentIndex;
          this.distanceToParent = distanceToParent;
          this.propertySetters = propertySetters;
        }
        return ($traceurRuntime.createClass)(ElementBinder, {}, {});
      }());
      $__export("ElementBinder", ElementBinder);
      Event = (function() {
        function Event(name, target, fullName) {
          this.name = name;
          this.target = target;
          this.fullName = fullName;
        }
        return ($traceurRuntime.createClass)(Event, {}, {});
      }());
      $__export("Event", Event);
      Object.defineProperty(Event, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string], [assert.type.string]];
        }});
      HostAction = (function() {
        function HostAction(actionName, actionExpression, expression) {
          this.actionName = actionName;
          this.actionExpression = actionExpression;
          this.expression = expression;
        }
        return ($traceurRuntime.createClass)(HostAction, {}, {});
      }());
      $__export("HostAction", HostAction);
      Object.defineProperty(HostAction, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string], [AST]];
        }});
    }
  };
});
//# sourceMappingURL=element_binder.js.map

//# sourceMappingURL=../../../../src/render/dom/view/element_binder.js.map