System.register(["./annotations", "./view", "./visibility", "./di", "../../util/decorators"], function($__export) {
  "use strict";
  var ComponentAnnotation,
      DirectiveAnnotation,
      ViewAnnotation,
      AncestorAnnotation,
      ParentAnnotation,
      AttributeAnnotation,
      QueryAnnotation,
      makeDecorator,
      makeParamDecorator,
      Component,
      Directive,
      View,
      Ancestor,
      Parent,
      Attribute,
      Query;
  return {
    setters: [function($__m) {
      ComponentAnnotation = $__m.ComponentAnnotation;
      DirectiveAnnotation = $__m.DirectiveAnnotation;
    }, function($__m) {
      ViewAnnotation = $__m.ViewAnnotation;
    }, function($__m) {
      AncestorAnnotation = $__m.AncestorAnnotation;
      ParentAnnotation = $__m.ParentAnnotation;
    }, function($__m) {
      AttributeAnnotation = $__m.AttributeAnnotation;
      QueryAnnotation = $__m.QueryAnnotation;
    }, function($__m) {
      makeDecorator = $__m.makeDecorator;
      makeParamDecorator = $__m.makeParamDecorator;
    }],
    execute: function() {
      Component = makeDecorator(ComponentAnnotation);
      $__export("Component", Component);
      Directive = makeDecorator(DirectiveAnnotation);
      $__export("Directive", Directive);
      View = makeDecorator(ViewAnnotation);
      $__export("View", View);
      Ancestor = makeParamDecorator(AncestorAnnotation);
      $__export("Ancestor", Ancestor);
      Parent = makeParamDecorator(ParentAnnotation);
      $__export("Parent", Parent);
      Attribute = makeParamDecorator(AttributeAnnotation);
      $__export("Attribute", Attribute);
      Query = makeParamDecorator(QueryAnnotation);
      $__export("Query", Query);
    }
  };
});
//# sourceMappingURL=decorators.js.map

//# sourceMappingURL=../../../src/core/annotations/decorators.js.map