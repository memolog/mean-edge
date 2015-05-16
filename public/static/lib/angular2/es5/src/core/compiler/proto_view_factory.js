System.register(["angular2/src/di/annotations_impl", "angular2/src/facade/collection", "angular2/src/facade/lang", "angular2/src/reflection/reflection", "angular2/change_detection", "../annotations_impl/annotations", "angular2/src/render/api", "./view", "./element_injector"], function($__export) {
  "use strict";
  var Injectable,
      List,
      ListWrapper,
      MapWrapper,
      isPresent,
      isBlank,
      reflector,
      ChangeDetection,
      DirectiveIndex,
      BindingRecord,
      DirectiveRecord,
      ProtoChangeDetector,
      Component,
      renderApi,
      AppProtoView,
      ProtoElementInjector,
      DirectiveBinding,
      BindingRecordsCreator,
      ProtoViewFactory,
      SortedDirectives,
      ParentProtoElementInjectorWithDistance;
  return {
    setters: [function($__m) {
      Injectable = $__m.Injectable;
    }, function($__m) {
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
      MapWrapper = $__m.MapWrapper;
    }, function($__m) {
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
    }, function($__m) {
      reflector = $__m.reflector;
    }, function($__m) {
      ChangeDetection = $__m.ChangeDetection;
      DirectiveIndex = $__m.DirectiveIndex;
      BindingRecord = $__m.BindingRecord;
      DirectiveRecord = $__m.DirectiveRecord;
      ProtoChangeDetector = $__m.ProtoChangeDetector;
    }, function($__m) {
      Component = $__m.Component;
    }, function($__m) {
      renderApi = $__m;
    }, function($__m) {
      AppProtoView = $__m.AppProtoView;
    }, function($__m) {
      ProtoElementInjector = $__m.ProtoElementInjector;
      DirectiveBinding = $__m.DirectiveBinding;
    }],
    execute: function() {
      BindingRecordsCreator = (function() {
        function BindingRecordsCreator() {
          this._directiveRecordsMap = MapWrapper.create();
          this._textNodeIndex = 0;
        }
        return ($traceurRuntime.createClass)(BindingRecordsCreator, {
          getBindingRecords: function(elementBinders, sortedDirectives) {
            var bindings = [];
            for (var boundElementIndex = 0; boundElementIndex < elementBinders.length; boundElementIndex++) {
              var renderElementBinder = elementBinders[boundElementIndex];
              bindings = ListWrapper.concat(bindings, this._createTextNodeRecords(renderElementBinder));
              bindings = ListWrapper.concat(bindings, this._createElementPropertyRecords(boundElementIndex, renderElementBinder));
              bindings = ListWrapper.concat(bindings, this._createDirectiveRecords(boundElementIndex, sortedDirectives[boundElementIndex]));
            }
            return bindings;
          },
          getDirectiveRecords: function(sortedDirectives) {
            var directiveRecords = [];
            for (var elementIndex = 0; elementIndex < sortedDirectives.length; ++elementIndex) {
              var dirs = sortedDirectives[elementIndex].directives;
              for (var dirIndex = 0; dirIndex < dirs.length; ++dirIndex) {
                ListWrapper.push(directiveRecords, this._getDirectiveRecord(elementIndex, dirIndex, dirs[dirIndex]));
              }
            }
            return directiveRecords;
          },
          _createTextNodeRecords: function(renderElementBinder) {
            var $__0 = this;
            if (isBlank(renderElementBinder.textBindings))
              return [];
            return ListWrapper.map(renderElementBinder.textBindings, (function(b) {
              return BindingRecord.createForTextNode(b, $__0._textNodeIndex++);
            }));
          },
          _createElementPropertyRecords: function(boundElementIndex, renderElementBinder) {
            var res = [];
            MapWrapper.forEach(renderElementBinder.propertyBindings, (function(astWithSource, propertyName) {
              ListWrapper.push(res, BindingRecord.createForElement(astWithSource, boundElementIndex, propertyName));
            }));
            return res;
          },
          _createDirectiveRecords: function(boundElementIndex, sortedDirectives) {
            var $__0 = this;
            var res = [];
            for (var i = 0; i < sortedDirectives.renderDirectives.length; i++) {
              var directiveBinder = sortedDirectives.renderDirectives[i];
              MapWrapper.forEach(directiveBinder.propertyBindings, (function(astWithSource, propertyName) {
                var setter = reflector.setter(propertyName);
                var directiveRecord = $__0._getDirectiveRecord(boundElementIndex, i, sortedDirectives.directives[i]);
                var b = BindingRecord.createForDirective(astWithSource, propertyName, setter, directiveRecord);
                ListWrapper.push(res, b);
              }));
              MapWrapper.forEach(directiveBinder.hostPropertyBindings, (function(astWithSource, propertyName) {
                var dirIndex = new DirectiveIndex(boundElementIndex, i);
                var b = BindingRecord.createForHostProperty(dirIndex, astWithSource, propertyName);
                ListWrapper.push(res, b);
              }));
            }
            return res;
          },
          _getDirectiveRecord: function(boundElementIndex, directiveIndex, binding) {
            var id = boundElementIndex * 100 + directiveIndex;
            if (!MapWrapper.contains(this._directiveRecordsMap, id)) {
              var changeDetection = binding.changeDetection;
              MapWrapper.set(this._directiveRecordsMap, id, new DirectiveRecord(new DirectiveIndex(boundElementIndex, directiveIndex), binding.callOnAllChangesDone, binding.callOnChange, changeDetection));
            }
            return MapWrapper.get(this._directiveRecordsMap, id);
          }
        }, {});
      }());
      Object.defineProperty(BindingRecordsCreator.prototype.getBindingRecords, "parameters", {get: function() {
          return [[assert.genericType(List, renderApi.ElementBinder)], [assert.genericType(List, SortedDirectives)]];
        }});
      Object.defineProperty(BindingRecordsCreator.prototype.getDirectiveRecords, "parameters", {get: function() {
          return [[assert.genericType(List, SortedDirectives)]];
        }});
      Object.defineProperty(BindingRecordsCreator.prototype._createTextNodeRecords, "parameters", {get: function() {
          return [[renderApi.ElementBinder]];
        }});
      Object.defineProperty(BindingRecordsCreator.prototype._createElementPropertyRecords, "parameters", {get: function() {
          return [[assert.type.number], [renderApi.ElementBinder]];
        }});
      Object.defineProperty(BindingRecordsCreator.prototype._createDirectiveRecords, "parameters", {get: function() {
          return [[assert.type.number], [SortedDirectives]];
        }});
      Object.defineProperty(BindingRecordsCreator.prototype._getDirectiveRecord, "parameters", {get: function() {
          return [[assert.type.number], [assert.type.number], [DirectiveBinding]];
        }});
      ProtoViewFactory = (function() {
        function ProtoViewFactory(changeDetection) {
          this._changeDetection = changeDetection;
        }
        return ($traceurRuntime.createClass)(ProtoViewFactory, {
          createProtoView: function(parentProtoView, componentBinding, renderProtoView, directives) {
            var elementBinders = renderProtoView.elementBinders;
            var sortedDirectives = ListWrapper.map(elementBinders, (function(b) {
              return new SortedDirectives(b.directives, directives);
            }));
            var variableBindings = this._createVariableBindings(renderProtoView);
            var protoLocals = this._createProtoLocals(variableBindings);
            var variableNames = this._createVariableNames(parentProtoView, protoLocals);
            var protoChangeDetector = this._createProtoChangeDetector(elementBinders, sortedDirectives, componentBinding, variableNames);
            var protoView = new AppProtoView(renderProtoView.render, protoChangeDetector, variableBindings, protoLocals, variableNames);
            this._createElementBinders(protoView, elementBinders, sortedDirectives);
            this._bindDirectiveEvents(protoView, sortedDirectives);
            return protoView;
          },
          _createProtoLocals: function(varBindings) {
            var protoLocals = MapWrapper.create();
            MapWrapper.forEach(varBindings, (function(mappedName, varName) {
              MapWrapper.set(protoLocals, mappedName, null);
            }));
            return protoLocals;
          },
          _createVariableBindings: function(renderProtoView) {
            var variableBindings = MapWrapper.create();
            MapWrapper.forEach(renderProtoView.variableBindings, (function(mappedName, varName) {
              MapWrapper.set(variableBindings, varName, mappedName);
            }));
            ListWrapper.forEach(renderProtoView.elementBinders, (function(binder) {
              MapWrapper.forEach(binder.variableBindings, (function(mappedName, varName) {
                MapWrapper.set(variableBindings, varName, mappedName);
              }));
            }));
            return variableBindings;
          },
          _createVariableNames: function(parentProtoView, protoLocals) {
            var variableNames = isPresent(parentProtoView) ? ListWrapper.clone(parentProtoView.variableNames) : [];
            MapWrapper.forEach(protoLocals, (function(v, local) {
              ListWrapper.push(variableNames, local);
            }));
            return variableNames;
          },
          _createProtoChangeDetector: function(elementBinders, sortedDirectives, componentBinding, variableNames) {
            var bindingRecordsCreator = new BindingRecordsCreator();
            var bindingRecords = bindingRecordsCreator.getBindingRecords(elementBinders, sortedDirectives);
            var directiveRecords = bindingRecordsCreator.getDirectiveRecords(sortedDirectives);
            var changeDetection = null;
            var name = 'root';
            if (isPresent(componentBinding)) {
              var componentAnnotation = componentBinding.annotation;
              changeDetection = componentAnnotation.changeDetection;
              name = 'dummy';
            }
            return this._changeDetection.createProtoChangeDetector(name, bindingRecords, variableNames, directiveRecords, changeDetection);
          },
          _createElementBinders: function(protoView, elementBinders, sortedDirectives) {
            for (var i = 0; i < elementBinders.length; i++) {
              var renderElementBinder = elementBinders[i];
              var dirs = sortedDirectives[i];
              var parentPeiWithDistance = this._findParentProtoElementInjectorWithDistance(i, protoView.elementBinders, elementBinders);
              var protoElementInjector = this._createProtoElementInjector(i, parentPeiWithDistance, dirs, renderElementBinder);
              this._createElementBinder(protoView, i, renderElementBinder, protoElementInjector, dirs);
            }
          },
          _findParentProtoElementInjectorWithDistance: function(binderIndex, elementBinders, renderElementBinders) {
            var distance = 0;
            do {
              var renderElementBinder = renderElementBinders[binderIndex];
              binderIndex = renderElementBinder.parentIndex;
              if (binderIndex !== -1) {
                distance += renderElementBinder.distanceToParent;
                var elementBinder = elementBinders[binderIndex];
                if (isPresent(elementBinder.protoElementInjector)) {
                  return new ParentProtoElementInjectorWithDistance(elementBinder.protoElementInjector, distance);
                }
              }
            } while (binderIndex !== -1);
            return new ParentProtoElementInjectorWithDistance(null, -1);
          },
          _createProtoElementInjector: function(binderIndex, parentPeiWithDistance, sortedDirectives, renderElementBinder) {
            var protoElementInjector = null;
            var hasVariables = MapWrapper.size(renderElementBinder.variableBindings) > 0;
            if (sortedDirectives.directives.length > 0 || hasVariables) {
              protoElementInjector = new ProtoElementInjector(parentPeiWithDistance.protoElementInjector, binderIndex, sortedDirectives.directives, isPresent(sortedDirectives.componentDirective), parentPeiWithDistance.distance);
              protoElementInjector.attributes = renderElementBinder.readAttributes;
              if (hasVariables) {
                protoElementInjector.exportComponent = isPresent(sortedDirectives.componentDirective);
                protoElementInjector.exportElement = isBlank(sortedDirectives.componentDirective);
                var exportImplicitName = MapWrapper.get(renderElementBinder.variableBindings, '\$implicit');
                if (isPresent(exportImplicitName)) {
                  protoElementInjector.exportImplicitName = exportImplicitName;
                }
              }
            }
            return protoElementInjector;
          },
          _createElementBinder: function(protoView, boundElementIndex, renderElementBinder, protoElementInjector, sortedDirectives) {
            var parent = null;
            if (renderElementBinder.parentIndex !== -1) {
              parent = protoView.elementBinders[renderElementBinder.parentIndex];
            }
            var elBinder = protoView.bindElement(parent, renderElementBinder.distanceToParent, protoElementInjector, sortedDirectives.componentDirective);
            protoView.bindEvent(renderElementBinder.eventBindings, boundElementIndex, -1);
            MapWrapper.forEach(renderElementBinder.variableBindings, (function(mappedName, varName) {
              MapWrapper.set(protoView.protoLocals, mappedName, null);
            }));
            return elBinder;
          },
          _bindDirectiveEvents: function(protoView, sortedDirectives) {
            for (var boundElementIndex = 0; boundElementIndex < sortedDirectives.length; ++boundElementIndex) {
              var dirs = sortedDirectives[boundElementIndex].renderDirectives;
              for (var i = 0; i < dirs.length; i++) {
                var directiveBinder = dirs[i];
                protoView.bindEvent(directiveBinder.eventBindings, boundElementIndex, i);
              }
            }
          }
        }, {});
      }());
      $__export("ProtoViewFactory", ProtoViewFactory);
      Object.defineProperty(ProtoViewFactory, "annotations", {get: function() {
          return [new Injectable()];
        }});
      Object.defineProperty(ProtoViewFactory, "parameters", {get: function() {
          return [[ChangeDetection]];
        }});
      Object.defineProperty(ProtoViewFactory.prototype.createProtoView, "parameters", {get: function() {
          return [[AppProtoView], [DirectiveBinding], [renderApi.ProtoViewDto], [assert.genericType(List, DirectiveBinding)]];
        }});
      Object.defineProperty(ProtoViewFactory.prototype._createProtoLocals, "parameters", {get: function() {
          return [[Map]];
        }});
      Object.defineProperty(ProtoViewFactory.prototype._bindDirectiveEvents, "parameters", {get: function() {
          return [[], [assert.genericType(List, SortedDirectives)]];
        }});
      SortedDirectives = (function() {
        function SortedDirectives(renderDirectives, allDirectives) {
          var $__0 = this;
          this.renderDirectives = [];
          this.directives = [];
          this.componentDirective = null;
          ListWrapper.forEach(renderDirectives, (function(renderDirectiveBinder) {
            var directiveBinding = allDirectives[renderDirectiveBinder.directiveIndex];
            if (directiveBinding.annotation instanceof Component) {
              $__0.componentDirective = directiveBinding;
              ListWrapper.insert($__0.renderDirectives, 0, renderDirectiveBinder);
              ListWrapper.insert($__0.directives, 0, directiveBinding);
            } else {
              ListWrapper.push($__0.renderDirectives, renderDirectiveBinder);
              ListWrapper.push($__0.directives, directiveBinding);
            }
          }));
        }
        return ($traceurRuntime.createClass)(SortedDirectives, {}, {});
      }());
      ParentProtoElementInjectorWithDistance = (function() {
        function ParentProtoElementInjectorWithDistance(protoElementInjector, distance) {
          this.protoElementInjector = protoElementInjector;
          this.distance = distance;
        }
        return ($traceurRuntime.createClass)(ParentProtoElementInjectorWithDistance, {}, {});
      }());
      Object.defineProperty(ParentProtoElementInjectorWithDistance, "parameters", {get: function() {
          return [[ProtoElementInjector], [assert.type.number]];
        }});
    }
  };
});
//# sourceMappingURL=proto_view_factory.js.map

//# sourceMappingURL=../../../src/core/compiler/proto_view_factory.js.map