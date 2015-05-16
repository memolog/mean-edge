"use strict";
Object.defineProperties(module.exports, {
  DirectiveParser: {get: function() {
      return DirectiveParser;
    }},
  __esModule: {value: true}
});
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_change_95_detection__,
    $__angular2_47_src_47_render_47_dom_47_compiler_47_selector__,
    $__compile_95_step__,
    $__compile_95_element__,
    $__compile_95_control__,
    $___46__46__47__46__46__47_api__,
    $___46__46__47_util__;
var $__0 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__0.isPresent,
    isBlank = $__0.isBlank,
    BaseException = $__0.BaseException,
    assertionsEnabled = $__0.assertionsEnabled,
    RegExpWrapper = $__0.RegExpWrapper,
    StringWrapper = $__0.StringWrapper;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__1.List,
    MapWrapper = $__1.MapWrapper,
    ListWrapper = $__1.ListWrapper;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var Parser = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}).Parser;
var $__4 = ($__angular2_47_src_47_render_47_dom_47_compiler_47_selector__ = require("angular2/src/render/dom/compiler/selector"), $__angular2_47_src_47_render_47_dom_47_compiler_47_selector__ && $__angular2_47_src_47_render_47_dom_47_compiler_47_selector__.__esModule && $__angular2_47_src_47_render_47_dom_47_compiler_47_selector__ || {default: $__angular2_47_src_47_render_47_dom_47_compiler_47_selector__}),
    SelectorMatcher = $__4.SelectorMatcher,
    CssSelector = $__4.CssSelector;
var CompileStep = ($__compile_95_step__ = require("./compile_step"), $__compile_95_step__ && $__compile_95_step__.__esModule && $__compile_95_step__ || {default: $__compile_95_step__}).CompileStep;
var CompileElement = ($__compile_95_element__ = require("./compile_element"), $__compile_95_element__ && $__compile_95_element__.__esModule && $__compile_95_element__ || {default: $__compile_95_element__}).CompileElement;
var CompileControl = ($__compile_95_control__ = require("./compile_control"), $__compile_95_control__ && $__compile_95_control__.__esModule && $__compile_95_control__ || {default: $__compile_95_control__}).CompileControl;
var DirectiveMetadata = ($___46__46__47__46__46__47_api__ = require("../../api"), $___46__46__47__46__46__47_api__ && $___46__46__47__46__46__47_api__.__esModule && $___46__46__47__46__46__47_api__ || {default: $___46__46__47__46__46__47_api__}).DirectiveMetadata;
var $__9 = ($___46__46__47_util__ = require("../util"), $___46__46__47_util__ && $___46__46__47_util__.__esModule && $___46__46__47_util__ || {default: $___46__46__47_util__}),
    dashCaseToCamelCase = $__9.dashCaseToCamelCase,
    camelCaseToDashCase = $__9.camelCaseToDashCase,
    EVENT_TARGET_SEPARATOR = $__9.EVENT_TARGET_SEPARATOR;
var DirectiveParser = function DirectiveParser(parser, directives) {
  $traceurRuntime.superConstructor($DirectiveParser).call(this);
  this._parser = parser;
  this._selectorMatcher = new SelectorMatcher();
  this._directives = directives;
  for (var i = 0; i < directives.length; i++) {
    var directive = directives[i];
    var selector = CssSelector.parse(directive.selector);
    this._ensureComponentOnlyHasElementSelector(selector, directive);
    this._selectorMatcher.addSelectables(selector, i);
  }
};
var $DirectiveParser = DirectiveParser;
($traceurRuntime.createClass)(DirectiveParser, {
  _ensureComponentOnlyHasElementSelector: function(selector, directive) {
    var isElementSelector = selector.length === 1 && selector[0].isElementSelector();
    if (!isElementSelector && directive.type === DirectiveMetadata.COMPONENT_TYPE) {
      throw new BaseException(("Component '" + directive.id + "' can only have an element selector, but had '" + directive.selector + "'"));
    }
  },
  process: function(parent, current, control) {
    var $__10 = this;
    var attrs = current.attrs();
    var classList = current.classList();
    var cssSelector = new CssSelector();
    var nodeName = DOM.nodeName(current.element);
    cssSelector.setElement(nodeName);
    for (var i = 0; i < classList.length; i++) {
      cssSelector.addClassName(classList[i]);
    }
    MapWrapper.forEach(attrs, (function(attrValue, attrName) {
      cssSelector.addAttribute(attrName, attrValue);
    }));
    var componentDirective;
    this._selectorMatcher.match(cssSelector, (function(selector, directiveIndex) {
      var elementBinder = current.bindElement();
      var directive = $__10._directives[directiveIndex];
      var directiveBinderBuilder = elementBinder.bindDirective(directiveIndex);
      current.compileChildren = current.compileChildren && directive.compileChildren;
      if (isPresent(directive.properties)) {
        MapWrapper.forEach(directive.properties, (function(bindConfig, dirProperty) {
          $__10._bindDirectiveProperty(dirProperty, bindConfig, current, directiveBinderBuilder);
        }));
      }
      if (isPresent(directive.hostListeners)) {
        MapWrapper.forEach(directive.hostListeners, (function(action, eventName) {
          $__10._bindDirectiveEvent(eventName, action, current, directiveBinderBuilder);
        }));
      }
      if (isPresent(directive.hostActions)) {
        MapWrapper.forEach(directive.hostActions, (function(action, actionName) {
          $__10._bindHostAction(actionName, action, current, directiveBinderBuilder);
        }));
      }
      if (isPresent(directive.hostProperties)) {
        MapWrapper.forEach(directive.hostProperties, (function(hostPropertyName, directivePropertyName) {
          $__10._bindHostProperty(hostPropertyName, directivePropertyName, current, directiveBinderBuilder);
        }));
      }
      if (isPresent(directive.hostAttributes)) {
        MapWrapper.forEach(directive.hostAttributes, (function(hostAttrValue, hostAttrName) {
          if (!DOM.hasAttribute(current.element, hostAttrName)) {
            DOM.setAttribute(current.element, hostAttrName, hostAttrValue);
          }
        }));
      }
      if (isPresent(directive.readAttributes)) {
        ListWrapper.forEach(directive.readAttributes, (function(attrName) {
          elementBinder.readAttribute(attrName);
        }));
      }
      if (directive.type === DirectiveMetadata.COMPONENT_TYPE) {
        if (isPresent(componentDirective)) {
          throw new BaseException(("Only one component directive is allowed per element - check " + current.elementDescription));
        }
        componentDirective = directive;
        elementBinder.setComponentId(directive.id);
      }
    }));
  },
  _bindDirectiveProperty: function(dirProperty, bindConfig, compileElement, directiveBinderBuilder) {
    var pipes = this._splitBindConfig(bindConfig);
    var elProp = ListWrapper.removeAt(pipes, 0);
    var bindingAst = MapWrapper.get(compileElement.bindElement().propertyBindings, dashCaseToCamelCase(elProp));
    if (isBlank(bindingAst)) {
      var attributeValue = MapWrapper.get(compileElement.attrs(), camelCaseToDashCase(elProp));
      if (isPresent(attributeValue)) {
        bindingAst = this._parser.wrapLiteralPrimitive(attributeValue, compileElement.elementDescription);
      }
    }
    if (isPresent(bindingAst)) {
      var fullExpAstWithBindPipes = this._parser.addPipes(bindingAst, pipes);
      directiveBinderBuilder.bindProperty(dirProperty, fullExpAstWithBindPipes);
    }
  },
  _bindDirectiveEvent: function(eventName, action, compileElement, directiveBinderBuilder) {
    var ast = this._parser.parseAction(action, compileElement.elementDescription);
    if (StringWrapper.contains(eventName, EVENT_TARGET_SEPARATOR)) {
      var parts = eventName.split(EVENT_TARGET_SEPARATOR);
      directiveBinderBuilder.bindEvent(parts[1], ast, parts[0]);
    } else {
      directiveBinderBuilder.bindEvent(eventName, ast);
    }
  },
  _bindHostAction: function(actionName, actionExpression, compileElement, directiveBinderBuilder) {
    var ast = this._parser.parseAction(actionExpression, compileElement.elementDescription);
    directiveBinderBuilder.bindHostAction(actionName, actionExpression, ast);
  },
  _bindHostProperty: function(hostPropertyName, directivePropertyName, compileElement, directiveBinderBuilder) {
    var ast = this._parser.parseBinding(directivePropertyName, ("hostProperties of " + compileElement.elementDescription));
    directiveBinderBuilder.bindHostProperty(hostPropertyName, ast);
  },
  _splitBindConfig: function(bindConfig) {
    return ListWrapper.map(bindConfig.split('|'), (function(s) {
      return s.trim();
    }));
  }
}, {}, CompileStep);
Object.defineProperty(DirectiveParser, "parameters", {get: function() {
    return [[Parser], [$traceurRuntime.genericType(List, DirectiveMetadata)]];
  }});
Object.defineProperty(DirectiveParser.prototype.process, "parameters", {get: function() {
    return [[CompileElement], [CompileElement], [CompileControl]];
  }});
Object.defineProperty(DirectiveParser.prototype._splitBindConfig, "parameters", {get: function() {
    return [[$traceurRuntime.type.string]];
  }});
//# sourceMappingURL=directive_parser.js.map

//# sourceMappingURL=./directive_parser.map