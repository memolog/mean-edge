System.register(["angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/src/dom/dom_adapter", "angular2/change_detection", "./proto_view", "./element_binder", "./property_setter_factory", "../../api", "../util"], function($__export) {
  "use strict";
  var isPresent,
      isBlank,
      BaseException,
      ListWrapper,
      MapWrapper,
      Set,
      SetWrapper,
      List,
      DOM,
      ASTWithSource,
      AST,
      AstTransformer,
      AccessMember,
      LiteralArray,
      ImplicitReceiver,
      DomProtoView,
      DomProtoViewRef,
      resolveInternalDomProtoView,
      ElementBinder,
      Event,
      HostAction,
      setterFactory,
      api,
      NG_BINDING_CLASS,
      EVENT_TARGET_SEPARATOR,
      ProtoViewBuilder,
      ElementBinderBuilder,
      DirectiveBuilder,
      EventBuilder;
  return {
    setters: [function($__m) {
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
      BaseException = $__m.BaseException;
    }, function($__m) {
      ListWrapper = $__m.ListWrapper;
      MapWrapper = $__m.MapWrapper;
      Set = $__m.Set;
      SetWrapper = $__m.SetWrapper;
      List = $__m.List;
    }, function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      ASTWithSource = $__m.ASTWithSource;
      AST = $__m.AST;
      AstTransformer = $__m.AstTransformer;
      AccessMember = $__m.AccessMember;
      LiteralArray = $__m.LiteralArray;
      ImplicitReceiver = $__m.ImplicitReceiver;
    }, function($__m) {
      DomProtoView = $__m.DomProtoView;
      DomProtoViewRef = $__m.DomProtoViewRef;
      resolveInternalDomProtoView = $__m.resolveInternalDomProtoView;
    }, function($__m) {
      ElementBinder = $__m.ElementBinder;
      Event = $__m.Event;
      HostAction = $__m.HostAction;
    }, function($__m) {
      setterFactory = $__m.setterFactory;
    }, function($__m) {
      api = $__m;
    }, function($__m) {
      NG_BINDING_CLASS = $__m.NG_BINDING_CLASS;
      EVENT_TARGET_SEPARATOR = $__m.EVENT_TARGET_SEPARATOR;
    }],
    execute: function() {
      ProtoViewBuilder = (function() {
        function ProtoViewBuilder(rootElement) {
          this.rootElement = rootElement;
          this.elements = [];
          this.variableBindings = MapWrapper.create();
        }
        return ($traceurRuntime.createClass)(ProtoViewBuilder, {
          bindElement: function(element) {
            var description = arguments[1] !== (void 0) ? arguments[1] : null;
            var builder = new ElementBinderBuilder(this.elements.length, element, description);
            ListWrapper.push(this.elements, builder);
            DOM.addClass(element, NG_BINDING_CLASS);
            return builder;
          },
          bindVariable: function(name, value) {
            MapWrapper.set(this.variableBindings, value, name);
          },
          build: function() {
            var renderElementBinders = [];
            var apiElementBinders = [];
            ListWrapper.forEach(this.elements, (function(ebb) {
              var propertySetters = MapWrapper.create();
              var hostActions = MapWrapper.create();
              var apiDirectiveBinders = ListWrapper.map(ebb.directives, (function(dbb) {
                ebb.eventBuilder.merge(dbb.eventBuilder);
                MapWrapper.forEach(dbb.hostPropertyBindings, (function(_, hostPropertyName) {
                  MapWrapper.set(propertySetters, hostPropertyName, setterFactory(hostPropertyName));
                }));
                ListWrapper.forEach(dbb.hostActions, (function(hostAction) {
                  MapWrapper.set(hostActions, hostAction.actionExpression, hostAction.expression);
                }));
                return new api.DirectiveBinder({
                  directiveIndex: dbb.directiveIndex,
                  propertyBindings: dbb.propertyBindings,
                  eventBindings: dbb.eventBindings,
                  hostPropertyBindings: dbb.hostPropertyBindings
                });
              }));
              MapWrapper.forEach(ebb.propertyBindings, (function(_, propertyName) {
                MapWrapper.set(propertySetters, propertyName, setterFactory(propertyName));
              }));
              var nestedProtoView = isPresent(ebb.nestedProtoView) ? ebb.nestedProtoView.build() : null;
              var parentIndex = isPresent(ebb.parent) ? ebb.parent.index : -1;
              ListWrapper.push(apiElementBinders, new api.ElementBinder({
                index: ebb.index,
                parentIndex: parentIndex,
                distanceToParent: ebb.distanceToParent,
                directives: apiDirectiveBinders,
                nestedProtoView: nestedProtoView,
                propertyBindings: ebb.propertyBindings,
                variableBindings: ebb.variableBindings,
                eventBindings: ebb.eventBindings,
                textBindings: ebb.textBindings,
                readAttributes: ebb.readAttributes
              }));
              ListWrapper.push(renderElementBinders, new ElementBinder({
                textNodeIndices: ebb.textBindingIndices,
                contentTagSelector: ebb.contentTagSelector,
                parentIndex: parentIndex,
                distanceToParent: ebb.distanceToParent,
                nestedProtoView: isPresent(nestedProtoView) ? resolveInternalDomProtoView(nestedProtoView.render) : null,
                componentId: ebb.componentId,
                eventLocals: new LiteralArray(ebb.eventBuilder.buildEventLocals()),
                localEvents: ebb.eventBuilder.buildLocalEvents(),
                globalEvents: ebb.eventBuilder.buildGlobalEvents(),
                hostActions: hostActions,
                propertySetters: propertySetters
              }));
            }));
            return new api.ProtoViewDto({
              render: new DomProtoViewRef(new DomProtoView({
                element: this.rootElement,
                elementBinders: renderElementBinders
              })),
              elementBinders: apiElementBinders,
              variableBindings: this.variableBindings
            });
          }
        }, {});
      }());
      $__export("ProtoViewBuilder", ProtoViewBuilder);
      ElementBinderBuilder = (function() {
        function ElementBinderBuilder(index, element, description) {
          this.element = element;
          this.index = index;
          this.parent = null;
          this.distanceToParent = 0;
          this.directives = [];
          this.nestedProtoView = null;
          this.propertyBindings = MapWrapper.create();
          this.variableBindings = MapWrapper.create();
          this.eventBindings = ListWrapper.create();
          this.eventBuilder = new EventBuilder();
          this.textBindings = [];
          this.textBindingIndices = [];
          this.contentTagSelector = null;
          this.componentId = null;
          this.readAttributes = MapWrapper.create();
        }
        return ($traceurRuntime.createClass)(ElementBinderBuilder, {
          setParent: function(parent, distanceToParent) {
            this.parent = parent;
            if (isPresent(parent)) {
              this.distanceToParent = distanceToParent;
            }
            return this;
          },
          readAttribute: function(attrName) {
            if (isBlank(MapWrapper.get(this.readAttributes, attrName))) {
              MapWrapper.set(this.readAttributes, attrName, DOM.getAttribute(this.element, attrName));
            }
          },
          bindDirective: function(directiveIndex) {
            var directive = new DirectiveBuilder(directiveIndex);
            ListWrapper.push(this.directives, directive);
            return directive;
          },
          bindNestedProtoView: function(rootElement) {
            if (isPresent(this.nestedProtoView)) {
              throw new BaseException('Only one nested view per element is allowed');
            }
            this.nestedProtoView = new ProtoViewBuilder(rootElement);
            return this.nestedProtoView;
          },
          bindProperty: function(name, expression) {
            MapWrapper.set(this.propertyBindings, name, expression);
            setterFactory(name);
          },
          bindVariable: function(name, value) {
            if (isPresent(this.nestedProtoView)) {
              this.nestedProtoView.bindVariable(name, value);
            } else {
              MapWrapper.set(this.variableBindings, value, name);
            }
          },
          bindEvent: function(name, expression) {
            var target = arguments[2] !== (void 0) ? arguments[2] : null;
            ListWrapper.push(this.eventBindings, this.eventBuilder.add(name, expression, target));
          },
          bindText: function(index, expression) {
            ListWrapper.push(this.textBindingIndices, index);
            ListWrapper.push(this.textBindings, expression);
          },
          setContentTagSelector: function(value) {
            this.contentTagSelector = value;
          },
          setComponentId: function(componentId) {
            this.componentId = componentId;
          }
        }, {});
      }());
      $__export("ElementBinderBuilder", ElementBinderBuilder);
      Object.defineProperty(ElementBinderBuilder.prototype.setParent, "parameters", {get: function() {
          return [[ElementBinderBuilder], []];
        }});
      Object.defineProperty(ElementBinderBuilder.prototype.readAttribute, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(ElementBinderBuilder.prototype.bindDirective, "parameters", {get: function() {
          return [[assert.type.number]];
        }});
      Object.defineProperty(ElementBinderBuilder.prototype.setContentTagSelector, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(ElementBinderBuilder.prototype.setComponentId, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      DirectiveBuilder = (function() {
        function DirectiveBuilder(directiveIndex) {
          this.directiveIndex = directiveIndex;
          this.propertyBindings = MapWrapper.create();
          this.hostPropertyBindings = MapWrapper.create();
          this.hostActions = ListWrapper.create();
          this.eventBindings = ListWrapper.create();
          this.eventBuilder = new EventBuilder();
        }
        return ($traceurRuntime.createClass)(DirectiveBuilder, {
          bindProperty: function(name, expression) {
            MapWrapper.set(this.propertyBindings, name, expression);
          },
          bindHostProperty: function(name, expression) {
            MapWrapper.set(this.hostPropertyBindings, name, expression);
          },
          bindHostAction: function(actionName, actionExpression, expression) {
            ListWrapper.push(this.hostActions, new HostAction(actionName, actionExpression, expression));
          },
          bindEvent: function(name, expression) {
            var target = arguments[2] !== (void 0) ? arguments[2] : null;
            ListWrapper.push(this.eventBindings, this.eventBuilder.add(name, expression, target));
          }
        }, {});
      }());
      $__export("DirectiveBuilder", DirectiveBuilder);
      Object.defineProperty(DirectiveBuilder.prototype.bindHostAction, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string], [ASTWithSource]];
        }});
      EventBuilder = (function($__super) {
        function EventBuilder() {
          $traceurRuntime.superConstructor(EventBuilder).call(this);
          this.locals = [];
          this.localEvents = [];
          this.globalEvents = [];
          this._implicitReceiver = new ImplicitReceiver();
        }
        return ($traceurRuntime.createClass)(EventBuilder, {
          add: function(name, source, target) {
            var adjustedAst = source.ast;
            var fullName = isPresent(target) ? target + EVENT_TARGET_SEPARATOR + name : name;
            var result = new api.EventBinding(fullName, new ASTWithSource(adjustedAst, source.source, source.location));
            var event = new Event(name, target, fullName);
            if (isBlank(target)) {
              ListWrapper.push(this.localEvents, event);
            } else {
              ListWrapper.push(this.globalEvents, event);
            }
            return result;
          },
          visitAccessMember: function(ast) {
            var isEventAccess = false;
            var current = ast;
            while (!isEventAccess && (current instanceof AccessMember)) {
              if (current.name == '$event') {
                isEventAccess = true;
              }
              current = current.receiver;
            }
            if (isEventAccess) {
              ListWrapper.push(this.locals, ast);
              var index = this.locals.length - 1;
              return new AccessMember(this._implicitReceiver, ("" + index), (function(arr) {
                return arr[index];
              }), null);
            } else {
              return ast;
            }
          },
          buildEventLocals: function() {
            return this.locals;
          },
          buildLocalEvents: function() {
            return this.localEvents;
          },
          buildGlobalEvents: function() {
            return this.globalEvents;
          },
          merge: function(eventBuilder) {
            this._merge(this.localEvents, eventBuilder.localEvents);
            this._merge(this.globalEvents, eventBuilder.globalEvents);
            ListWrapper.concat(this.locals, eventBuilder.locals);
          },
          _merge: function(host, tobeAdded) {
            var names = ListWrapper.create();
            for (var i = 0; i < host.length; i++) {
              ListWrapper.push(names, host[i].fullName);
            }
            for (var j = 0; j < tobeAdded.length; j++) {
              if (!ListWrapper.contains(names, tobeAdded[j].fullName)) {
                ListWrapper.push(host, tobeAdded[j]);
              }
            }
          }
        }, {}, $__super);
      }(AstTransformer));
      $__export("EventBuilder", EventBuilder);
      Object.defineProperty(EventBuilder.prototype.add, "parameters", {get: function() {
          return [[assert.type.string], [ASTWithSource], [assert.type.string]];
        }});
      Object.defineProperty(EventBuilder.prototype.visitAccessMember, "parameters", {get: function() {
          return [[AccessMember]];
        }});
      Object.defineProperty(EventBuilder.prototype.merge, "parameters", {get: function() {
          return [[EventBuilder]];
        }});
      Object.defineProperty(EventBuilder.prototype._merge, "parameters", {get: function() {
          return [[assert.genericType(List, Event)], [assert.genericType(List, Event)]];
        }});
    }
  };
});
//# sourceMappingURL=proto_view_builder.js.map

//# sourceMappingURL=../../../../src/render/dom/view/proto_view_builder.js.map