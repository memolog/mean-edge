System.register(["./src/facade/lang", "./src/directives/for", "./src/directives/if", "./src/directives/non_bindable", "./src/directives/switch", "./src/directives/class"], function($__export) {
  "use strict";
  var CONST_EXPR,
      For,
      If,
      NonBindable,
      Switch,
      SwitchWhen,
      SwitchDefault,
      coreDirectives;
  var $__exportNames = {coreDirectives: true};
  var $__exportNames = {coreDirectives: true};
  var $__exportNames = {coreDirectives: true};
  var $__exportNames = {coreDirectives: true};
  var $__exportNames = {coreDirectives: true};
  return {
    setters: [function($__m) {
      CONST_EXPR = $__m.CONST_EXPR;
    }, function($__m) {
      For = $__m.For;
      Object.keys($__m).forEach(function(p) {
        if (!$__exportNames[p])
          $__export(p, $__m[p]);
      });
    }, function($__m) {
      If = $__m.If;
      Object.keys($__m).forEach(function(p) {
        if (!$__exportNames[p])
          $__export(p, $__m[p]);
      });
    }, function($__m) {
      NonBindable = $__m.NonBindable;
      Object.keys($__m).forEach(function(p) {
        if (!$__exportNames[p])
          $__export(p, $__m[p]);
      });
    }, function($__m) {
      Switch = $__m.Switch;
      SwitchWhen = $__m.SwitchWhen;
      SwitchDefault = $__m.SwitchDefault;
      Object.keys($__m).forEach(function(p) {
        if (!$__exportNames[p])
          $__export(p, $__m[p]);
      });
    }, function($__m) {
      Object.keys($__m).forEach(function(p) {
        if (!$__exportNames[p])
          $__export(p, $__m[p]);
      });
    }],
    execute: function() {
      coreDirectives = CONST_EXPR([For, If, NonBindable, Switch, SwitchWhen, SwitchDefault]);
      $__export("coreDirectives", coreDirectives);
    }
  };
});
//# sourceMappingURL=directives.js.map

//# sourceMappingURL=directives.js.map