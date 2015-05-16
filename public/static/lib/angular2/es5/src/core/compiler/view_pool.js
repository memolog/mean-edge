System.register(["angular2/src/di/annotations_impl", "angular2/src/facade/collection", "angular2/src/facade/lang", "./view"], function($__export) {
  "use strict";
  var Inject,
      ListWrapper,
      MapWrapper,
      Map,
      List,
      isPresent,
      isBlank,
      viewModule,
      APP_VIEW_POOL_CAPACITY,
      AppViewPool;
  return {
    setters: [function($__m) {
      Inject = $__m.Inject;
    }, function($__m) {
      ListWrapper = $__m.ListWrapper;
      MapWrapper = $__m.MapWrapper;
      Map = $__m.Map;
      List = $__m.List;
    }, function($__m) {
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
    }, function($__m) {
      viewModule = $__m;
    }],
    execute: function() {
      APP_VIEW_POOL_CAPACITY = 'AppViewPool.viewPoolCapacity';
      $__export("APP_VIEW_POOL_CAPACITY", APP_VIEW_POOL_CAPACITY);
      AppViewPool = (function() {
        function AppViewPool(poolCapacityPerProtoView) {
          this._poolCapacityPerProtoView = poolCapacityPerProtoView;
          this._pooledViewsPerProtoView = MapWrapper.create();
        }
        return ($traceurRuntime.createClass)(AppViewPool, {
          getView: function(protoView) {
            var pooledViews = MapWrapper.get(this._pooledViewsPerProtoView, protoView);
            if (isPresent(pooledViews) && pooledViews.length > 0) {
              return ListWrapper.removeLast(pooledViews);
            }
            return null;
          },
          returnView: function(view) {
            var protoView = view.proto;
            var pooledViews = MapWrapper.get(this._pooledViewsPerProtoView, protoView);
            if (isBlank(pooledViews)) {
              pooledViews = [];
              MapWrapper.set(this._pooledViewsPerProtoView, protoView, pooledViews);
            }
            if (pooledViews.length < this._poolCapacityPerProtoView) {
              ListWrapper.push(pooledViews, view);
            }
          }
        }, {});
      }());
      $__export("AppViewPool", AppViewPool);
      Object.defineProperty(AppViewPool, "parameters", {get: function() {
          return [[new Inject(APP_VIEW_POOL_CAPACITY)]];
        }});
      Object.defineProperty(AppViewPool.prototype.getView, "parameters", {get: function() {
          return [[viewModule.AppProtoView]];
        }});
      Object.defineProperty(AppViewPool.prototype.returnView, "parameters", {get: function() {
          return [[viewModule.AppView]];
        }});
    }
  };
});
//# sourceMappingURL=view_pool.js.map

//# sourceMappingURL=../../../src/core/compiler/view_pool.js.map