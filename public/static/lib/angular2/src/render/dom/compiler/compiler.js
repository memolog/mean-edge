"use strict";
Object.defineProperties(module.exports, {
  DomCompiler: {get: function() {
      return DomCompiler;
    }},
  DefaultDomCompiler: {get: function() {
      return DefaultDomCompiler;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_di_47_annotations_95_impl__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $___46__46__47__46__46__47_api__,
    $__compile_95_pipeline__,
    $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__,
    $__compile_95_step_95_factory__,
    $__angular2_47_change_95_detection__,
    $___46__46__47_shadow_95_dom_47_shadow_95_dom_95_strategy__;
var Injectable = ($__angular2_47_src_47_di_47_annotations_95_impl__ = require("angular2/src/di/annotations_impl"), $__angular2_47_src_47_di_47_annotations_95_impl__ && $__angular2_47_src_47_di_47_annotations_95_impl__.__esModule && $__angular2_47_src_47_di_47_annotations_95_impl__ || {default: $__angular2_47_src_47_di_47_annotations_95_impl__}).Injectable;
var $__1 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    PromiseWrapper = $__1.PromiseWrapper,
    Promise = $__1.Promise;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    BaseException = $__2.BaseException,
    isPresent = $__2.isPresent;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var $__4 = ($___46__46__47__46__46__47_api__ = require("../../api"), $___46__46__47__46__46__47_api__ && $___46__46__47__46__46__47_api__.__esModule && $___46__46__47__46__46__47_api__ || {default: $___46__46__47__46__46__47_api__}),
    ViewDefinition = $__4.ViewDefinition,
    ProtoViewDto = $__4.ProtoViewDto,
    DirectiveMetadata = $__4.DirectiveMetadata,
    RenderCompiler = $__4.RenderCompiler,
    RenderProtoViewRef = $__4.RenderProtoViewRef;
var CompilePipeline = ($__compile_95_pipeline__ = require("./compile_pipeline"), $__compile_95_pipeline__ && $__compile_95_pipeline__.__esModule && $__compile_95_pipeline__ || {default: $__compile_95_pipeline__}).CompilePipeline;
var TemplateLoader = ($__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__ = require("angular2/src/render/dom/compiler/template_loader"), $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__ && $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__.__esModule && $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__ || {default: $__angular2_47_src_47_render_47_dom_47_compiler_47_template_95_loader__}).TemplateLoader;
var $__7 = ($__compile_95_step_95_factory__ = require("./compile_step_factory"), $__compile_95_step_95_factory__ && $__compile_95_step_95_factory__.__esModule && $__compile_95_step_95_factory__ || {default: $__compile_95_step_95_factory__}),
    CompileStepFactory = $__7.CompileStepFactory,
    DefaultStepFactory = $__7.DefaultStepFactory;
var Parser = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}).Parser;
var ShadowDomStrategy = ($___46__46__47_shadow_95_dom_47_shadow_95_dom_95_strategy__ = require("../shadow_dom/shadow_dom_strategy"), $___46__46__47_shadow_95_dom_47_shadow_95_dom_95_strategy__ && $___46__46__47_shadow_95_dom_47_shadow_95_dom_95_strategy__.__esModule && $___46__46__47_shadow_95_dom_47_shadow_95_dom_95_strategy__ || {default: $___46__46__47_shadow_95_dom_47_shadow_95_dom_95_strategy__}).ShadowDomStrategy;
var DomCompiler = function DomCompiler(stepFactory, templateLoader) {
  $traceurRuntime.superConstructor($DomCompiler).call(this);
  this._templateLoader = templateLoader;
  this._stepFactory = stepFactory;
};
var $DomCompiler = DomCompiler;
($traceurRuntime.createClass)(DomCompiler, {
  compile: function(template) {
    var $__10 = this;
    var tplPromise = this._templateLoader.load(template);
    return PromiseWrapper.then(tplPromise, (function(el) {
      return $__10._compileTemplate(template, el);
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
}, {}, RenderCompiler);
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
var DefaultDomCompiler = function DefaultDomCompiler(parser, shadowDomStrategy, templateLoader) {
  $traceurRuntime.superConstructor($DefaultDomCompiler).call(this, new DefaultStepFactory(parser, shadowDomStrategy), templateLoader);
};
var $DefaultDomCompiler = DefaultDomCompiler;
($traceurRuntime.createClass)(DefaultDomCompiler, {}, {}, DomCompiler);
Object.defineProperty(DefaultDomCompiler, "annotations", {get: function() {
    return [new Injectable()];
  }});
Object.defineProperty(DefaultDomCompiler, "parameters", {get: function() {
    return [[Parser], [ShadowDomStrategy], [TemplateLoader]];
  }});
//# sourceMappingURL=compiler.js.map

//# sourceMappingURL=./compiler.map