System.register(["angular2/src/di/annotations_impl", "angular2/src/facade/async", "angular2/src/facade/lang", "angular2/src/dom/dom_adapter", "../../api", "./compile_pipeline", "angular2/src/render/dom/compiler/template_loader", "./compile_step_factory", "angular2/change_detection", "../shadow_dom/shadow_dom_strategy"], function($__export) {
  "use strict";
  var Injectable,
      PromiseWrapper,
      Promise,
      BaseException,
      isPresent,
      DOM,
      ViewDefinition,
      ProtoViewDto,
      DirectiveMetadata,
      RenderCompiler,
      RenderProtoViewRef,
      CompilePipeline,
      TemplateLoader,
      CompileStepFactory,
      DefaultStepFactory,
      Parser,
      ShadowDomStrategy,
      DomCompiler,
      DefaultDomCompiler;
  return {
    setters: [function($__m) {
      Injectable = $__m.Injectable;
    }, function($__m) {
      PromiseWrapper = $__m.PromiseWrapper;
      Promise = $__m.Promise;
    }, function($__m) {
      BaseException = $__m.BaseException;
      isPresent = $__m.isPresent;
    }, function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      ViewDefinition = $__m.ViewDefinition;
      ProtoViewDto = $__m.ProtoViewDto;
      DirectiveMetadata = $__m.DirectiveMetadata;
      RenderCompiler = $__m.RenderCompiler;
      RenderProtoViewRef = $__m.RenderProtoViewRef;
    }, function($__m) {
      CompilePipeline = $__m.CompilePipeline;
    }, function($__m) {
      TemplateLoader = $__m.TemplateLoader;
    }, function($__m) {
      CompileStepFactory = $__m.CompileStepFactory;
      DefaultStepFactory = $__m.DefaultStepFactory;
    }, function($__m) {
      Parser = $__m.Parser;
    }, function($__m) {
      ShadowDomStrategy = $__m.ShadowDomStrategy;
    }],
    execute: function() {
      DomCompiler = (function($__super) {
        function DomCompiler(stepFactory, templateLoader) {
          $traceurRuntime.superConstructor(DomCompiler).call(this);
          this._templateLoader = templateLoader;
          this._stepFactory = stepFactory;
        }
        return ($traceurRuntime.createClass)(DomCompiler, {
          compile: function(template) {
            var $__0 = this;
            var tplPromise = this._templateLoader.load(template);
            return PromiseWrapper.then(tplPromise, (function(el) {
              return $__0._compileTemplate(template, el);
            }), (function(_) {
              throw new BaseException(("Failed to load the template \"" + template.componentId + "\""));
            }));
          },
          compileHost: function(directiveMetadata) {
            var hostViewDef = new ViewDefinition({
              componentId: directiveMetadata.id,
              absUrl: null,
              template: null,
              directives: [directiveMetadata]
            });
            var element = DOM.createElement(directiveMetadata.selector);
            return this._compileTemplate(hostViewDef, element);
          },
          _compileTemplate: function(viewDef, tplElement) {
            var subTaskPromises = [];
            var pipeline = new CompilePipeline(this._stepFactory.createSteps(viewDef, subTaskPromises));
            var compileElements = pipeline.process(tplElement, viewDef.componentId);
            var protoView = compileElements[0].inheritedProtoView.build();
            if (subTaskPromises.length > 0) {
              return PromiseWrapper.all(subTaskPromises).then((function(_) {
                return protoView;
              }));
            } else {
              return PromiseWrapper.resolve(protoView);
            }
          }
        }, {}, $__super);
      }(RenderCompiler));
      $__export("DomCompiler", DomCompiler);
      Object.defineProperty(DomCompiler, "parameters", {get: function() {
          return [[CompileStepFactory], [TemplateLoader]];
        }});
      Object.defineProperty(DomCompiler.prototype.compile, "parameters", {get: function() {
          return [[ViewDefinition]];
        }});
      Object.defineProperty(DomCompiler.prototype.compileHost, "parameters", {get: function() {
          return [[DirectiveMetadata]];
        }});
      Object.defineProperty(DomCompiler.prototype._compileTemplate, "parameters", {get: function() {
          return [[ViewDefinition], []];
        }});
      DefaultDomCompiler = (function($__super) {
        function DefaultDomCompiler(parser, shadowDomStrategy, templateLoader) {
          $traceurRuntime.superConstructor(DefaultDomCompiler).call(this, new DefaultStepFactory(parser, shadowDomStrategy), templateLoader);
        }
        return ($traceurRuntime.createClass)(DefaultDomCompiler, {}, {}, $__super);
      }(DomCompiler));
      $__export("DefaultDomCompiler", DefaultDomCompiler);
      Object.defineProperty(DefaultDomCompiler, "annotations", {get: function() {
          return [new Injectable()];
        }});
      Object.defineProperty(DefaultDomCompiler, "parameters", {get: function() {
          return [[Parser], [ShadowDomStrategy], [TemplateLoader]];
        }});
    }
  };
});
//# sourceMappingURL=compiler.js.map

//# sourceMappingURL=../../../../src/render/dom/compiler/compiler.js.map