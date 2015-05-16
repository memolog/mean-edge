System.register(["angular2/src/facade/lang"], function($__export) {
  "use strict";
  var __esModule,
      global;
  function makeDecorator(annotationCls) {
    return function() {
      var args = arguments;
      var Reflect = global.Reflect;
      if (!(Reflect && Reflect.getMetadata)) {
        throw 'reflect-metadata shim is required when using class decorators';
      }
      var annotationInstance = Object.create(annotationCls.prototype);
      annotationCls.apply(annotationInstance, args);
      return function(cls) {
        var annotations = Reflect.getMetadata('annotations', cls);
        annotations = annotations || [];
        annotations.push(annotationInstance);
        Reflect.defineMetadata('annotations', annotations, cls);
        return cls;
      };
    };
  }
  function makeParamDecorator(annotationCls) {
    return function() {
      var args = arguments;
      var Reflect = global.Reflect;
      if (!(Reflect && Reflect.getMetadata)) {
        throw 'reflect-metadata shim is required when using parameter decorators';
      }
      var annotationInstance = Object.create(annotationCls.prototype);
      annotationCls.apply(annotationInstance, args);
      return function(cls, unusedKey, index) {
        var parameters = Reflect.getMetadata('parameters', cls);
        parameters = parameters || [];
        while (parameters.length <= index) {
          parameters.push(null);
        }
        parameters[index] = annotationInstance;
        Reflect.defineMetadata('parameters', parameters, cls);
        return cls;
      };
    };
  }
  $__export("makeDecorator", makeDecorator);
  $__export("makeParamDecorator", makeParamDecorator);
  return {
    setters: [function($__m) {
      global = $__m.global;
    }],
    execute: function() {
      __esModule = true;
      $__export("__esModule", __esModule);
    }
  };
});
//# sourceMappingURL=decorators.js.map

//# sourceMappingURL=../../src/util/decorators.js.map