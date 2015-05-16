import {Injectable} from 'angular2/src/di/annotations_impl';
import {PromiseWrapper,
  Promise} from 'angular2/src/facade/async';
import {BaseException,
  isPresent} from 'angular2/src/facade/lang';
import {DOM} from 'angular2/src/dom/dom_adapter';
import {ViewDefinition,
  ProtoViewDto,
  DirectiveMetadata,
  RenderCompiler,
  RenderProtoViewRef} from '../../api';
import {CompilePipeline} from './compile_pipeline';
import {TemplateLoader} from 'angular2/src/render/dom/compiler/template_loader';
import {CompileStepFactory,
  DefaultStepFactory} from './compile_step_factory';
import {Parser} from 'angular2/change_detection';
import {ShadowDomStrategy} from '../shadow_dom/shadow_dom_strategy';
export class DomCompiler extends RenderCompiler {
  constructor(stepFactory, templateLoader) {
    super();
    this._templateLoader = templateLoader;
    this._stepFactory = stepFactory;
  }
  compile(template) {
    var tplPromise = this._templateLoader.load(template);
    return PromiseWrapper.then(tplPromise, (el) => this._compileTemplate(template, el), (_) => {
      throw new BaseException(`Failed to load the template "${template.componentId}"`);
    });
  }
  compileHost(directiveMetadata) {
    var hostViewDef = new ViewDefinition({
      componentId: directiveMetadata.id,
      absUrl: null,
      template: null,
      directives: [directiveMetadata]
    });
    var element = DOM.createElement(directiveMetadata.selector);
    return this._compileTemplate(hostViewDef, element);
  }
  _compileTemplate(viewDef, tplElement) {
    var subTaskPromises = [];
    var pipeline = new CompilePipeline(this._stepFactory.createSteps(viewDef, subTaskPromises));
    var compileElements = pipeline.process(tplElement, viewDef.componentId);
    var protoView = compileElements[0].inheritedProtoView.build();
    if (subTaskPromises.length > 0) {
      return PromiseWrapper.all(subTaskPromises).then((_) => protoView);
    } else {
      return PromiseWrapper.resolve(protoView);
    }
  }
}
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
export class DefaultDomCompiler extends DomCompiler {
  constructor(parser, shadowDomStrategy, templateLoader) {
    super(new DefaultStepFactory(parser, shadowDomStrategy), templateLoader);
  }
}
Object.defineProperty(DefaultDomCompiler, "annotations", {get: function() {
    return [new Injectable()];
  }});
Object.defineProperty(DefaultDomCompiler, "parameters", {get: function() {
    return [[Parser], [ShadowDomStrategy], [TemplateLoader]];
  }});
//# sourceMappingURL=compiler.js.map

//# sourceMappingURL=./compiler.map