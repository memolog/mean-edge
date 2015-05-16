System.register(["angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/src/dom/dom_adapter", "angular2/change_detection", "angular2/src/render/dom/compiler/selector", "./compile_step", "./compile_element", "./compile_control", "../../api", "../util"], function($__export) {
  "use strict";
  var isPresent,
      isBlank,
      BaseException,
      assertionsEnabled,
      RegExpWrapper,
      StringWrapper,
      List,
      MapWrapper,
      ListWrapper,
      DOM,
      Parser,
      SelectorMatcher,
      CssSelector,
      CompileStep,
      CompileElement,
      CompileControl,
      DirectiveMetadata,
      dashCaseToCamelCase,
      camelCaseToDashCase,
      EVENT_TARGET_SEPARATOR,
      DirectiveParser;
  return {
    setters: [function($__m) {
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
      BaseException = $__m.BaseException;
      assertionsEnabled = $__m.assertionsEnabled;
      RegExpWrapper = $__m.RegExpWrapper;
      StringWrapper = $__m.StringWrapper;
    }, function($__m) {
      List = $__m.List;
      MapWrapper = $__m.MapWrapper;
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      Parser = $__m.Parser;
    }, function($__m) {
      SelectorMatcher = $__m.SelectorMatcher;
      CssSelector = $__m.CssSelector;
    }, function($__m) {
      CompileStep = $__m.CompileStep;
    }, function($__m) {
      CompileElement = $__m.CompileElement;
    }, function($__m) {
      CompileControl = $__m.CompileControl;
    }, function($__m) {
      DirectiveMetadata = $__m.DirectiveMetadata;
    }, function($__m) {
      dashCaseToCamelCase = $__m.dashCaseToCamelCase;
      camelCaseToDashCase = $__m.camelCaseToDashCase;
      EVENT_TARGET_SEPARATOR = $__m.EVENT_TARGET_SEPARATOR;
    }],
    execute: function() {
      DirectiveParser = (function($__super) {
        function DirectiveParser(parser, directives) {
          $traceurRuntime.superConstructor(DirectiveParser).call(this);
          this._parser = parser;
          this._selectorMatcher = new SelectorMatcher();
          this._directives = directives;
          for (var i = 0; i < directives.length; i++) {
            var directive = directives[i];
            var selector = CssSelector.parse(directive.selector);
            this._ensureComponentOnlyHasElementSelector(selector, directive);
            this._selectorMatcher.addSelectables(selector, i);
          }
        }
        return ($traceurRuntime.createClass)(DirectiveParser, {
          _ensureComponentOnlyHasElementSelector: function(selector, directive) {
            var isElementSelector = selector.length === 1 && selector[0].isElementSelector();
            if (!isElementSelector && directive.type === DirectiveMetadata.COMPONENT_TYPE) {
              throw new BaseException(("Component '" + directive.id + "' can only have an element selector, but had '" + directive.selector + "'"));
            }
          },
          process: function(parent, current, control) {
            var $__0 = this;
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
              var directive = $__0._directives[directiveIndex];
              var directiveBinderBuilder = elementBinder.bindDirective(directiveIndex);
              current.compileChildren = current.compileChildren && directive.compileChildren;
              if (isPresent(directive.properties)) {
                MapWrapper.forEach(directive.properties, (function(bindConfig, dirProperty) {
                  $__0._bindDirectiveProperty(dirProperty, bindConfig, current, directiveBinderBuilder);
                }));
              }
              if (isPresent(directive.hostListeners)) {
                MapWrapper.forEach(directive.hostListeners, (function(action, eventName) {
                  $__0._bindDirectiveEvent(eventName, action, current, directiveBinderBuilder);
                }));
              }
              if (isPresent(directive.hostActions)) {
                MapWrapper.forEach(directive.hostActions, (function(action, actionName) {
                  $__0._bindHostAction(actionName, action, current, directiveBinderBuilder);
                }));
              }
              if (isPresent(directive.hostProperties)) {
                MapWrapper.forEach(directive.hostProperties, (function(hostPropertyName, directivePropertyName) {
                  $__0._bindHostProperty(hostPropertyName, directivePropertyName, current, directiveBinderBuilder);
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
        }, {}, $__super);
      }(CompileStep));
      $__export("DirectiveParser", DirectiveParser);
      Object.defineProperty(DirectiveParser, "parameters", {get: function() {
          return [[Parser], [assert.genericType(List, DirectiveMetadata)]];
        }});
      Object.defineProperty(DirectiveParser.prototype.process, "parameters", {get: function() {
          return [[CompileElement], [CompileElement], [CompileControl]];
        }});
      Object.defineProperty(DirectiveParser.prototype._splitBindConfig, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
    }
  };
});
//# sourceMappingURL=directive_parser.js.map

//# sourceMappingURL=../../../../src/render/dom/compiler/directive_parser.js.map