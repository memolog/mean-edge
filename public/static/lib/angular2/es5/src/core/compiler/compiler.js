System.register(["angular2/di", "angular2/src/di/annotations_impl", "angular2/src/facade/lang", "angular2/src/facade/async", "angular2/src/facade/collection", "./directive_metadata_reader", "../annotations_impl/annotations", "./view", "./view_ref", "./element_injector", "./template_resolver", "../annotations_impl/view", "./component_url_mapper", "./proto_view_factory", "angular2/src/services/url_resolver", "angular2/src/render/api"], function($__export) {
  "use strict";
  var Binding,
      Injectable,
      Type,
      isBlank,
      isPresent,
      BaseException,
      normalizeBlank,
      stringify,
      Promise,
      PromiseWrapper,
      List,
      ListWrapper,
      Map,
      MapWrapper,
      DirectiveMetadataReader,
      Component,
      Directive,
      AppProtoView,
      ProtoViewRef,
      DirectiveBinding,
      TemplateResolver,
      View,
      ComponentUrlMapper,
      ProtoViewFactory,
      UrlResolver,
      renderApi,
      CompilerCache,
      Compiler;
  return {
    setters: [function($__m) {
      Binding = $__m.Binding;
    }, function($__m) {
      Injectable = $__m.Injectable;
    }, function($__m) {
      Type = $__m.Type;
      isBlank = $__m.isBlank;
      isPresent = $__m.isPresent;
      BaseException = $__m.BaseException;
      normalizeBlank = $__m.normalizeBlank;
      stringify = $__m.stringify;
    }, function($__m) {
      Promise = $__m.Promise;
      PromiseWrapper = $__m.PromiseWrapper;
    }, function($__m) {
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
      Map = $__m.Map;
      MapWrapper = $__m.MapWrapper;
    }, function($__m) {
      DirectiveMetadataReader = $__m.DirectiveMetadataReader;
    }, function($__m) {
      Component = $__m.Component;
      Directive = $__m.Directive;
    }, function($__m) {
      AppProtoView = $__m.AppProtoView;
    }, function($__m) {
      ProtoViewRef = $__m.ProtoViewRef;
    }, function($__m) {
      DirectiveBinding = $__m.DirectiveBinding;
    }, function($__m) {
      TemplateResolver = $__m.TemplateResolver;
    }, function($__m) {
      View = $__m.View;
    }, function($__m) {
      ComponentUrlMapper = $__m.ComponentUrlMapper;
    }, function($__m) {
      ProtoViewFactory = $__m.ProtoViewFactory;
    }, function($__m) {
      UrlResolver = $__m.UrlResolver;
    }, function($__m) {
      renderApi = $__m;
    }],
    execute: function() {
      CompilerCache = (function() {
        function CompilerCache() {
          this._cache = MapWrapper.create();
        }
        return ($traceurRuntime.createClass)(CompilerCache, {
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
      }());
      $__export("CompilerCache", CompilerCache);
      Object.defineProperty(CompilerCache, "annotations", {get: function() {
          return [new Injectable()];
        }});
      Object.defineProperty(CompilerCache.prototype.set, "parameters", {get: function() {
          return [[Type], [AppProtoView]];
        }});
      Object.defineProperty(CompilerCache.prototype.get, "parameters", {get: function() {
          return [[Type]];
        }});
      Compiler = (function() {
        function Compiler(reader, cache, templateResolver, componentUrlMapper, urlResolver, render, protoViewFactory) {
          this._reader = reader;
          this._compilerCache = cache;
          this._compiling = MapWrapper.create();
          this._templateResolver = templateResolver;
          this._componentUrlMapper = componentUrlMapper;
          this._urlResolver = urlResolver;
          this._appUrl = urlResolver.resolve(null, './');
          this._render = render;
          this._protoViewFactory = protoViewFactory;
        }
        return ($traceurRuntime.createClass)(Compiler, {
          _bindDirective: function(directiveTypeOrBinding) {
            if (directiveTypeOrBinding instanceof DirectiveBinding) {
              return directiveTypeOrBinding;
            } else if (directiveTypeOrBinding instanceof Binding) {
              var meta = this._reader.read(directiveTypeOrBinding.token);
              return DirectiveBinding.createFromBinding(directiveTypeOrBinding, meta.annotation);
            } else {
              var meta$__2 = this._reader.read(directiveTypeOrBinding);
              return DirectiveBinding.createFromType(meta$__2.type, meta$__2.annotation);
            }
          },
          compileInHost: function(componentTypeOrBinding) {
            var $__0 = this;
            var componentBinding = this._bindDirective(componentTypeOrBinding);
            this._assertTypeIsComponent(componentBinding);
            var directiveMetadata = Compiler.buildRenderDirective(componentBinding);
            return this._render.compileHost(directiveMetadata).then((function(hostRenderPv) {
              return $__0._compileNestedProtoViews(null, null, hostRenderPv, [componentBinding], true);
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
            var $__0 = this;
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
              return $__0._bindDirective(directive);
            }));
            var renderTemplate = this._buildRenderTemplate(component, template, directives);
            pvPromise = this._render.compile(renderTemplate).then((function(renderPv) {
              return $__0._compileNestedProtoViews(null, componentBinding, renderPv, directives, true);
            }));
            MapWrapper.set(this._compiling, component, pvPromise);
            return pvPromise;
          },
          _compileNestedProtoViews: function(parentProtoView, componentBinding, renderPv, directives, isComponentRootView) {
            var $__0 = this;
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
                nestedCall = $__0._compile(nestedComponent);
              } else if (isPresent(nestedRenderProtoView)) {
                nestedCall = $__0._compileNestedProtoViews(protoView, componentBinding, nestedRenderProtoView, directives, false);
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
              directives: ListWrapper.map(directives, Compiler.buildRenderDirective)
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
      }());
      $__export("Compiler", Compiler);
      Object.defineProperty(Compiler, "annotations", {get: function() {
          return [new Injectable()];
        }});
      Object.defineProperty(Compiler, "parameters", {get: function() {
          return [[DirectiveMetadataReader], [CompilerCache], [TemplateResolver], [ComponentUrlMapper], [UrlResolver], [renderApi.RenderCompiler], [ProtoViewFactory]];
        }});
      Object.defineProperty(Compiler.prototype.compileInHost, "parameters", {get: function() {
          return [[assert.type.any]];
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
          return [[assert.genericType(List, assert.type.any)], [assert.genericType(List, Type)]];
        }});
      Object.defineProperty(Compiler.prototype._assertTypeIsComponent, "parameters", {get: function() {
          return [[DirectiveBinding]];
        }});
    }
  };
});
//# sourceMappingURL=compiler.js.map

//# sourceMappingURL=../../../src/core/compiler/compiler.js.map