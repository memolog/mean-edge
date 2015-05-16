"use strict";
Object.defineProperties(module.exports, {
  ProtoViewFactory: {get: function() {
      return ProtoViewFactory;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_di_47_annotations_95_impl__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_reflection_47_reflection__,
    $__angular2_47_change_95_detection__,
    $___46__46__47_annotations_95_impl_47_annotations__,
    $__angular2_47_src_47_render_47_api__,
    $__view__,
    $__element_95_injector__;
var Injectable = ($__angular2_47_src_47_di_47_annotations_95_impl__ = require("angular2/src/di/annotations_impl"), $__angular2_47_src_47_di_47_annotations_95_impl__ && $__angular2_47_src_47_di_47_annotations_95_impl__.__esModule && $__angular2_47_src_47_di_47_annotations_95_impl__ || {default: $__angular2_47_src_47_di_47_annotations_95_impl__}).Injectable;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__1.List,
    ListWrapper = $__1.ListWrapper,
    MapWrapper = $__1.MapWrapper;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__2.isPresent,
    isBlank = $__2.isBlank;
var reflector = ($__angular2_47_src_47_reflection_47_reflection__ = require("angular2/src/reflection/reflection"), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}).reflector;
var $__4 = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
    ChangeDetection = $__4.ChangeDetection,
    DirectiveIndex = $__4.DirectiveIndex,
    BindingRecord = $__4.BindingRecord,
    DirectiveRecord = $__4.DirectiveRecord,
    ProtoChangeDetector = $__4.ProtoChangeDetector;
var Component = ($___46__46__47_annotations_95_impl_47_annotations__ = require("../annotations_impl/annotations"), $___46__46__47_annotations_95_impl_47_annotations__ && $___46__46__47_annotations_95_impl_47_annotations__.__esModule && $___46__46__47_annotations_95_impl_47_annotations__ || {default: $___46__46__47_annotations_95_impl_47_annotations__}).Component;
var renderApi = ($__angular2_47_src_47_render_47_api__ = require("angular2/src/render/api"), $__angular2_47_src_47_render_47_api__ && $__angular2_47_src_47_render_47_api__.__esModule && $__angular2_47_src_47_render_47_api__ || {default: $__angular2_47_src_47_render_47_api__});
var AppProtoView = ($__view__ = require("./view"), $__view__ && $__view__.__esModule && $__view__ || {default: $__view__}).AppProtoView;
var $__7 = ($__element_95_injector__ = require("./element_injector"), $__element_95_injector__ && $__element_95_injector__.__esModule && $__element_95_injector__ || {default: $__element_95_injector__}),
    ProtoElementInjector = $__7.ProtoElementInjector,
    DirectiveBinding = $__7.DirectiveBinding;
var BindingRecordsCreator = function BindingRecordsCreator() {
  this._directiveRecordsMap = MapWrapper.create();
  this._textNodeIndex = 0;
};
($traceurRuntime.createClass)(BindingRecordsCreator, {
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
    var $__8 = this;
    if (isBlank(renderElementBinder.textBindings))
      return [];
    return ListWrapper.map(renderElementBinder.textBindings, (function(b) {
      return BindingRecord.createForTextNode(b, $__8._textNodeIndex++);
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
    var $__8 = this;
    var res = [];
    for (var i = 0; i < sortedDirectives.renderDirectives.length; i++) {
      var directiveBinder = sortedDirectives.renderDirectives[i];
      MapWrapper.forEach(directiveBinder.propertyBindings, (function(astWithSource, propertyName) {
        var setter = reflector.setter(propertyName);
        var directiveRecord = $__8._getDirectiveRecord(boundElementIndex, i, sortedDirectives.directives[i]);
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
Object.defineProperty(BindingRecordsCreator.prototype.getBindingRecords, "parameters", {get: function() {
    return [[$traceurRuntime.genericType(List, renderApi.ElementBinder)], [$traceurRuntime.genericType(List, SortedDirectives)]];
  }});
Object.defineProperty(BindingRecordsCreator.prototype.getDirectiveRecords, "parameters", {get: function() {
    return [[$traceurRuntime.genericType(List, SortedDirectives)]];
  }});
Object.defineProperty(BindingRecordsCreator.prototype._createTextNodeRecords, "parameters", {get: function() {
    return [[renderApi.ElementBinder]];
  }});
Object.defineProperty(BindingRecordsCreator.prototype._createElementPropertyRecords, "parameters", {get: function() {
    return [[$traceurRuntime.type.number], [renderApi.ElementBinder]];
  }});
Object.defineProperty(BindingRecordsCreator.prototype._createDirectiveRecords, "parameters", {get: function() {
    return [[$traceurRuntime.type.number], [SortedDirectives]];
  }});
Object.defineProperty(BindingRecordsCreator.prototype._getDirectiveRecord, "parameters", {get: function() {
    return [[$traceurRuntime.type.number], [$traceurRuntime.type.number], [DirectiveBinding]];
  }});
var ProtoViewFactory = function ProtoViewFactory(changeDetection) {
  this._changeDetection = changeDetection;
};
($traceurRuntime.createClass)(ProtoViewFactory, {
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
Object.defineProperty(ProtoViewFactory, "annotations", {get: function() {
    return [new Injectable()];
  }});
Object.defineProperty(ProtoViewFactory, "parameters", {get: function() {
    return [[ChangeDetection]];
  }});
Object.defineProperty(ProtoViewFactory.prototype.createProtoView, "parameters", {get: function() {
    return [[AppProtoView], [DirectiveBinding], [renderApi.ProtoViewDto], [$traceurRuntime.genericType(List, DirectiveBinding)]];
  }});
Object.defineProperty(ProtoViewFactory.prototype._createProtoLocals, "parameters", {get: function() {
    return [[Map]];
  }});
Object.defineProperty(ProtoViewFactory.prototype._bindDirectiveEvents, "parameters", {get: function() {
    return [[], [$traceurRuntime.genericType(List, SortedDirectives)]];
  }});
var SortedDirectives = function SortedDirectives(renderDirectives, allDirectives) {
  var $__8 = this;
  this.renderDirectives = [];
  this.directives = [];
  this.componentDirective = null;
  ListWrapper.forEach(renderDirectives, (function(renderDirectiveBinder) {
    var directiveBinding = allDirectives[renderDirectiveBinder.directiveIndex];
    if (directiveBinding.annotation instanceof Component) {
      $__8.componentDirective = directiveBinding;
      ListWrapper.insert($__8.renderDirectives, 0, renderDirectiveBinder);
      ListWrapper.insert($__8.directives, 0, directiveBinding);
    } else {
      ListWrapper.push($__8.renderDirectives, renderDirectiveBinder);
      ListWrapper.push($__8.directives, directiveBinding);
    }
  }));
};
($traceurRuntime.createClass)(SortedDirectives, {}, {});
var ParentProtoElementInjectorWithDistance = function ParentProtoElementInjectorWithDistance(protoElementInjector, distance) {
  this.protoElementInjector = protoElementInjector;
  this.distance = distance;
};
($traceurRuntime.createClass)(ParentProtoElementInjectorWithDistance, {}, {});
Object.defineProperty(ParentProtoElementInjectorWithDistance, "parameters", {get: function() {
    return [[ProtoElementInjector], [$traceurRuntime.type.number]];
  }});
//# sourceMappingURL=proto_view_factory.js.map

//# sourceMappingURL=./proto_view_factory.map