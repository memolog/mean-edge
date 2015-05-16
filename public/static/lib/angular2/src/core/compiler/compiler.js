"use strict";
Object.defineProperties(module.exports, {
  CompilerCache: {get: function() {
      return CompilerCache;
    }},
  Compiler: {get: function() {
      return Compiler;
    }},
  __esModule: {value: true}
});
var $__angular2_47_di__,
    $__angular2_47_src_47_di_47_annotations_95_impl__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_facade_47_collection__,
    $__directive_95_metadata_95_reader__,
    $___46__46__47_annotations_95_impl_47_annotations__,
    $__view__,
    $__view_95_ref__,
    $__element_95_injector__,
    $__template_95_resolver__,
    $___46__46__47_annotations_95_impl_47_view__,
    $__component_95_url_95_mapper__,
    $__proto_95_view_95_factory__,
    $__angular2_47_src_47_services_47_url_95_resolver__,
    $__angular2_47_src_47_render_47_api__;
var Binding = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).Binding;
var Injectable = ($__angular2_47_src_47_di_47_annotations_95_impl__ = require("angular2/src/di/annotations_impl"), $__angular2_47_src_47_di_47_annotations_95_impl__ && $__angular2_47_src_47_di_47_annotations_95_impl__.__esModule && $__angular2_47_src_47_di_47_annotations_95_impl__ || {default: $__angular2_47_src_47_di_47_annotations_95_impl__}).Injectable;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    Type = $__2.Type,
    isBlank = $__2.isBlank,
    isPresent = $__2.isPresent,
    BaseException = $__2.BaseException,
    normalizeBlank = $__2.normalizeBlank,
    stringify = $__2.stringify;
var $__3 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    Promise = $__3.Promise,
    PromiseWrapper = $__3.PromiseWrapper;
var $__4 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__4.List,
    ListWrapper = $__4.ListWrapper,
    Map = $__4.Map,
    MapWrapper = $__4.MapWrapper;
var DirectiveMetadataReader = ($__directive_95_metadata_95_reader__ = require("./directive_metadata_reader"), $__directive_95_metadata_95_reader__ && $__directive_95_metadata_95_reader__.__esModule && $__directive_95_metadata_95_reader__ || {default: $__directive_95_metadata_95_reader__}).DirectiveMetadataReader;
var $__6 = ($___46__46__47_annotations_95_impl_47_annotations__ = require("../annotations_impl/annotations"), $___46__46__47_annotations_95_impl_47_annotations__ && $___46__46__47_annotations_95_impl_47_annotations__.__esModule && $___46__46__47_annotations_95_impl_47_annotations__ || {default: $___46__46__47_annotations_95_impl_47_annotations__}),
    Component = $__6.Component,
    Directive = $__6.Directive;
var AppProtoView = ($__view__ = require("./view"), $__view__ && $__view__.__esModule && $__view__ || {default: $__view__}).AppProtoView;
var ProtoViewRef = ($__view_95_ref__ = require("./view_ref"), $__view_95_ref__ && $__view_95_ref__.__esModule && $__view_95_ref__ || {default: $__view_95_ref__}).ProtoViewRef;
var DirectiveBinding = ($__element_95_injector__ = require("./element_injector"), $__element_95_injector__ && $__element_95_injector__.__esModule && $__element_95_injector__ || {default: $__element_95_injector__}).DirectiveBinding;
var TemplateResolver = ($__template_95_resolver__ = require("./template_resolver"), $__template_95_resolver__ && $__template_95_resolver__.__esModule && $__template_95_resolver__ || {default: $__template_95_resolver__}).TemplateResolver;
var View = ($___46__46__47_annotations_95_impl_47_view__ = require("../annotations_impl/view"), $___46__46__47_annotations_95_impl_47_view__ && $___46__46__47_annotations_95_impl_47_view__.__esModule && $___46__46__47_annotations_95_impl_47_view__ || {default: $___46__46__47_annotations_95_impl_47_view__}).View;
var ComponentUrlMapper = ($__component_95_url_95_mapper__ = require("./component_url_mapper"), $__component_95_url_95_mapper__ && $__component_95_url_95_mapper__.__esModule && $__component_95_url_95_mapper__ || {default: $__component_95_url_95_mapper__}).ComponentUrlMapper;
var ProtoViewFactory = ($__proto_95_view_95_factory__ = require("./proto_view_factory"), $__proto_95_view_95_factory__ && $__proto_95_view_95_factory__.__esModule && $__proto_95_view_95_factory__ || {default: $__proto_95_view_95_factory__}).ProtoViewFactory;
var UrlResolver = ($__angular2_47_src_47_services_47_url_95_resolver__ = require("angular2/src/services/url_resolver"), $__angular2_47_src_47_services_47_url_95_resolver__ && $__angular2_47_src_47_services_47_url_95_resolver__.__esModule && $__angular2_47_src_47_services_47_url_95_resolver__ || {default: $__angular2_47_src_47_services_47_url_95_resolver__}).UrlResolver;
var renderApi = ($__angular2_47_src_47_render_47_api__ = require("angular2/src/render/api"), $__angular2_47_src_47_render_47_api__ && $__angular2_47_src_47_render_47_api__.__esModule && $__angular2_47_src_47_render_47_api__ || {default: $__angular2_47_src_47_render_47_api__});
var CompilerCache = function CompilerCache() {
  this._cache = MapWrapper.create();
};
($traceurRuntime.createClass)(CompilerCache, {
  set: function(component, protoView) {
    MapWrapper.set(this._cache, component, protoView);
  },
  get: function(component) {
    var result = MapWrapper.get(this._cache, component);
    return normalizeBlank(result);
  },
  clear: function() {
    MapWrapper.clear(this._cache);
  }
}, {});
Object.defineProperty(CompilerCache, "annotations", {get: function() {
    return [new Injectable()];
  }});
Object.defineProperty(CompilerCache.prototype.set, "parameters", {get: function() {
    return [[Type], [AppProtoView]];
  }});
Object.defineProperty(CompilerCache.prototype.get, "parameters", {get: function() {
    return [[Type]];
  }});
var Compiler = function Compiler(reader, cache, templateResolver, componentUrlMapper, urlResolver, render, protoViewFactory) {
  this._reader = reader;
  this._compilerCache = cache;
  this._compiling = MapWrapper.create();
  this._templateResolver = templateResolver;
  this._componentUrlMapper = componentUrlMapper;
  this._urlResolver = urlResolver;
  this._appUrl = urlResolver.resolve(null, './');
  this._render = render;
  this._protoViewFactory = protoViewFactory;
};
var $Compiler = Compiler;
($traceurRuntime.createClass)(Compiler, {
  _bindDirective: function(directiveTypeOrBinding) {
    if (directiveTypeOrBinding instanceof DirectiveBinding) {
      return directiveTypeOrBinding;
    } else if (directiveTypeOrBinding instanceof Binding) {
      var meta = this._reader.read(directiveTypeOrBinding.token);
      return DirectiveBinding.createFromBinding(directiveTypeOrBinding, meta.annotation);
    } else {
      var meta$__17 = this._reader.read(directiveTypeOrBinding);
      return DirectiveBinding.createFromType(meta$__17.type, meta$__17.annotation);
    }
  },
  compileInHost: function(componentTypeOrBinding) {
    var $__15 = this;
    var componentBinding = this._bindDirective(componentTypeOrBinding);
    this._assertTypeIsComponent(componentBinding);
    var directiveMetadata = $Compiler.buildRenderDirective(componentBinding);
    return this._render.compileHost(directiveMetadata).then((function(hostRenderPv) {
      return $__15._compileNestedProtoViews(null, null, hostRenderPv, [componentBinding], true);
    })).then((function(appProtoView) {
      return new ProtoViewRef(appProtoView);
    }));
  },
  compile: function(component) {
    var componentBinding = this._bindDirective(component);
    this._assertTypeIsComponent(componentBinding);
    var protoView = this._compile(componentBinding);
    var pvPromise = PromiseWrapper.isPromise(protoView) ? protoView : PromiseWrapper.resolve(protoView);
    return pvPromise.then((function(appProtoView) {
      return new ProtoViewRef(appProtoView);
    }));
  },
  _compile: function(componentBinding) {
    var $__15 = this;
    var component = componentBinding.key.token;
    var protoView = this._compilerCache.get(component);
    if (isPresent(protoView)) {
      return protoView;
    }
    var pvPromise = MapWrapper.get(this._compiling, component);
    if (isPresent(pvPromise)) {
      return pvPromise;
    }
    var template = this._templateResolver.resolve(component);
    if (isBlank(template)) {
      return null;
    }
    var directives = ListWrapper.map(this._flattenDirectives(template), (function(directive) {
      return $__15._bindDirective(directive);
    }));
    var renderTemplate = this._buildRenderTemplate(component, template, directives);
    pvPromise = this._render.compile(renderTemplate).then((function(renderPv) {
      return $__15._compileNestedProtoViews(null, componentBinding, renderPv, directives, true);
    }));
    MapWrapper.set(this._compiling, component, pvPromise);
    return pvPromise;
  },
  _compileNestedProtoViews: function(parentProtoView, componentBinding, renderPv, directives, isComponentRootView) {
    var $__15 = this;
    var nestedPVPromises = [];
    var protoView = this._protoViewFactory.createProtoView(parentProtoView, componentBinding, renderPv, directives);
    if (isComponentRootView && isPresent(componentBinding)) {
      var component = componentBinding.key.token;
      this._compilerCache.set(component, protoView);
      MapWrapper.delete(this._compiling, component);
    }
    var binderIndex = 0;
    ListWrapper.forEach(protoView.elementBinders, (function(elementBinder) {
      var nestedComponent = elementBinder.componentDirective;
      var nestedRenderProtoView = renderPv.elementBinders[binderIndex].nestedProtoView;
      var elementBinderDone = (function(nestedPv) {
        elementBinder.nestedProtoView = nestedPv;
      });
      var nestedCall = null;
      if (isPresent(nestedComponent)) {
        nestedCall = $__15._compile(nestedComponent);
      } else if (isPresent(nestedRenderProtoView)) {
        nestedCall = $__15._compileNestedProtoViews(protoView, componentBinding, nestedRenderProtoView, directives, false);
      }
      if (PromiseWrapper.isPromise(nestedCall)) {
        ListWrapper.push(nestedPVPromises, nestedCall.then(elementBinderDone));
      } else if (isPresent(nestedCall)) {
        elementBinderDone(nestedCall);
      }
      binderIndex++;
    }));
    var protoViewDone = (function(_) {
      return protoView;
    });
    if (nestedPVPromises.length > 0) {
      return PromiseWrapper.all(nestedPVPromises).then(protoViewDone);
    } else {
      return protoViewDone(null);
    }
  },
  _buildRenderTemplate: function(component, view, directives) {
    var componentUrl = this._urlResolver.resolve(this._appUrl, this._componentUrlMapper.getUrl(component));
    var templateAbsUrl = null;
    if (isPresent(view.templateUrl)) {
      templateAbsUrl = this._urlResolver.resolve(componentUrl, view.templateUrl);
    } else if (isPresent(view.template)) {
      templateAbsUrl = componentUrl;
    }
    return new renderApi.ViewDefinition({
      componentId: stringify(component),
      absUrl: templateAbsUrl,
      template: view.template,
      directives: ListWrapper.map(directives, $Compiler.buildRenderDirective)
    });
  },
  _flattenDirectives: function(template) {
    if (isBlank(template.directives))
      return [];
    var directives = [];
    this._flattenList(template.directives, directives);
    return directives;
  },
  _flattenList: function(tree, out) {
    for (var i = 0; i < tree.length; i++) {
      var item = tree[i];
      if (ListWrapper.isList(item)) {
        this._flattenList(item, out);
      } else {
        ListWrapper.push(out, item);
      }
    }
  },
  _assertTypeIsComponent: function(directiveBinding) {
    if (!(directiveBinding.annotation instanceof Component)) {
      throw new BaseException(("Could not load '" + stringify(directiveBinding.key.token) + "' because it is not a component."));
    }
  }
}, {buildRenderDirective: function(directiveBinding) {
    var ann = directiveBinding.annotation;
    var renderType;
    var compileChildren = ann.compileChildren;
    if (ann instanceof Component) {
      renderType = renderApi.DirectiveMetadata.COMPONENT_TYPE;
    } else {
      renderType = renderApi.DirectiveMetadata.DIRECTIVE_TYPE;
    }
    var readAttributes = [];
    ListWrapper.forEach(directiveBinding.dependencies, (function(dep) {
      if (isPresent(dep.attributeName)) {
        ListWrapper.push(readAttributes, dep.attributeName);
      }
    }));
    return new renderApi.DirectiveMetadata({
      id: stringify(directiveBinding.key.token),
      type: renderType,
      selector: ann.selector,
      compileChildren: compileChildren,
      hostListeners: isPresent(ann.hostListeners) ? MapWrapper.createFromStringMap(ann.hostListeners) : null,
      hostProperties: isPresent(ann.hostProperties) ? MapWrapper.createFromStringMap(ann.hostProperties) : null,
      hostAttributes: isPresent(ann.hostAttributes) ? MapWrapper.createFromStringMap(ann.hostAttributes) : null,
      hostActions: isPresent(ann.hostActions) ? MapWrapper.createFromStringMap(ann.hostActions) : null,
      properties: isPresent(ann.properties) ? MapWrapper.createFromStringMap(ann.properties) : null,
      readAttributes: readAttributes
    });
  }});
Object.defineProperty(Compiler, "annotations", {get: function() {
    return [new Injectable()];
  }});
Object.defineProperty(Compiler, "parameters", {get: function() {
    return [[DirectiveMetadataReader], [CompilerCache], [TemplateResolver], [ComponentUrlMapper], [UrlResolver], [renderApi.RenderCompiler], [ProtoViewFactory]];
  }});
Object.defineProperty(Compiler.prototype.compileInHost, "parameters", {get: function() {
    return [[$traceurRuntime.type.any]];
  }});
Object.defineProperty(Compiler.prototype.compile, "parameters", {get: function() {
    return [[Type]];
  }});
Object.defineProperty(Compiler.prototype._compile, "parameters", {get: function() {
    return [[DirectiveBinding]];
  }});
Object.defineProperty(Compiler.prototype._flattenDirectives, "parameters", {get: function() {
    return [[View]];
  }});
Object.defineProperty(Compiler.prototype._flattenList, "parameters", {get: function() {
    return [[$traceurRuntime.genericType(List, $traceurRuntime.type.any)], [$traceurRuntime.genericType(List, Type)]];
  }});
Object.defineProperty(Compiler.prototype._assertTypeIsComponent, "parameters", {get: function() {
    return [[DirectiveBinding]];
  }});
//# sourceMappingURL=compiler.js.map

//# sourceMappingURL=./compiler.map