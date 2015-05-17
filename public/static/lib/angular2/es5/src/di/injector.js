System.register(["angular2/src/facade/collection", "./binding", "./exceptions", "angular2/src/facade/lang", "angular2/src/facade/async", "./key"], function($__export) {
  "use strict";
  var List,
      MapWrapper,
      ListWrapper,
      ResolvedBinding,
      Binding,
      BindingBuilder,
      bind,
      AbstractBindingError,
      NoBindingError,
      AsyncBindingError,
      CyclicDependencyError,
      InstantiationError,
      InvalidBindingError,
      FunctionWrapper,
      Type,
      isPresent,
      isBlank,
      PromiseWrapper,
      Key,
      _constructing,
      _notFound,
      _Waiting,
      Injector,
      _SyncInjectorStrategy,
      _AsyncInjectorStrategy;
  function _isWaiting(obj) {
    return obj instanceof _Waiting;
  }
  function _resolveBindings(bindings) {
    var resolvedList = ListWrapper.createFixedSize(bindings.length);
    for (var i = 0; i < bindings.length; i++) {
      var unresolved = bindings[i];
      var resolved = void 0;
      if (unresolved instanceof ResolvedBinding) {
        resolved = unresolved;
      } else if (unresolved instanceof Type) {
        resolved = bind(unresolved).toClass(unresolved).resolve();
      } else if (unresolved instanceof Binding) {
        resolved = unresolved.resolve();
      } else if (unresolved instanceof List) {
        resolved = _resolveBindings(unresolved);
      } else if (unresolved instanceof BindingBuilder) {
        throw new InvalidBindingError(unresolved.token);
      } else {
        throw new InvalidBindingError(unresolved);
      }
      resolvedList[i] = resolved;
    }
    return resolvedList;
  }
  function _createListOfBindings(flattenedBindings) {
    var bindings = ListWrapper.createFixedSize(Key.numberOfKeys + 1);
    MapWrapper.forEach(flattenedBindings, (function(v, keyId) {
      return bindings[keyId] = v;
    }));
    return bindings;
  }
  function _flattenBindings(bindings, res) {
    ListWrapper.forEach(bindings, function(b) {
      if (b instanceof ResolvedBinding) {
        MapWrapper.set(res, b.key.id, b);
      } else if (b instanceof List) {
        _flattenBindings(b, res);
      }
    });
    return res;
  }
  return {
    setters: [function($__m) {
      List = $__m.List;
      MapWrapper = $__m.MapWrapper;
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      ResolvedBinding = $__m.ResolvedBinding;
      Binding = $__m.Binding;
      BindingBuilder = $__m.BindingBuilder;
      bind = $__m.bind;
    }, function($__m) {
      AbstractBindingError = $__m.AbstractBindingError;
      NoBindingError = $__m.NoBindingError;
      AsyncBindingError = $__m.AsyncBindingError;
      CyclicDependencyError = $__m.CyclicDependencyError;
      InstantiationError = $__m.InstantiationError;
      InvalidBindingError = $__m.InvalidBindingError;
    }, function($__m) {
      FunctionWrapper = $__m.FunctionWrapper;
      Type = $__m.Type;
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
    }, function($__m) {
      PromiseWrapper = $__m.PromiseWrapper;
    }, function($__m) {
      Key = $__m.Key;
    }],
    execute: function() {
      _constructing = new Object();
      _notFound = new Object();
      _Waiting = (function() {
        function _Waiting(promise) {
          this.promise = promise;
        }
        return ($traceurRuntime.createClass)(_Waiting, {}, {});
      }());
      Injector = (function() {
        function Injector(bindings, parent, defaultBindings) {
          this._bindings = bindings;
          this._instances = this._createInstances();
          this._parent = parent;
          this._defaultBindings = defaultBindings;
          this._asyncStrategy = new _AsyncInjectorStrategy(this);
          this._syncStrategy = new _SyncInjectorStrategy(this);
        }
        return ($traceurRuntime.createClass)(Injector, {
          get parent() {
            return this._parent;
          },
          get: function(token) {
            return this._getByKey(Key.get(token), false, false, false);
          },
          getOptional: function(token) {
            return this._getByKey(Key.get(token), false, false, true);
          },
          asyncGet: function(token) {
            return this._getByKey(Key.get(token), true, false, false);
          },
          resolveAndCreateChild: function(bindings) {
            return new Injector(Injector.resolve(bindings), this, false);
          },
          createChildFromResolved: function(bindings) {
            return new Injector(bindings, this, false);
          },
          _createInstances: function() {
            return ListWrapper.createFixedSize(Key.numberOfKeys + 1);
          },
          _getByKey: function(key, returnPromise, returnLazy, optional) {
            var $__0 = this;
            if (returnLazy) {
              return (function() {
                return $__0._getByKey(key, returnPromise, false, optional);
              });
            }
            var strategy = returnPromise ? this._asyncStrategy : this._syncStrategy;
            var instance = strategy.readFromCache(key);
            if (instance !== _notFound)
              return instance;
            instance = strategy.instantiate(key);
            if (instance !== _notFound)
              return instance;
            if (isPresent(this._parent)) {
              return this._parent._getByKey(key, returnPromise, returnLazy, optional);
            }
            if (optional) {
              return null;
            } else {
              throw new NoBindingError(key);
            }
          },
          _resolveDependencies: function(key, binding, forceAsync) {
            var $__0 = this;
            try {
              var getDependency = (function(d) {
                return $__0._getByKey(d.key, forceAsync || d.asPromise, d.lazy, d.optional);
              });
              return ListWrapper.map(binding.dependencies, getDependency);
            } catch (e) {
              this._clear(key);
              if (e instanceof AbstractBindingError)
                e.addKey(key);
              throw e;
            }
          },
          _getInstance: function(key) {
            if (this._instances.length <= key.id)
              return null;
            return ListWrapper.get(this._instances, key.id);
          },
          _setInstance: function(key, obj) {
            ListWrapper.set(this._instances, key.id, obj);
          },
          _getBinding: function(key) {
            var binding = this._bindings.length <= key.id ? null : ListWrapper.get(this._bindings, key.id);
            if (isBlank(binding) && this._defaultBindings) {
              var token = key.token;
              return bind(key.token).toClass(token).resolve();
            } else {
              return binding;
            }
          },
          _markAsConstructing: function(key) {
            this._setInstance(key, _constructing);
          },
          _clear: function(key) {
            this._setInstance(key, null);
          }
        }, {
          resolve: function(bindings) {
            var resolvedBindings = _resolveBindings(bindings);
            var flatten = _flattenBindings(resolvedBindings, MapWrapper.create());
            return _createListOfBindings(flatten);
          },
          resolveAndCreate: function(bindings) {
            var $__3;
            var $__2 = arguments[1] !== (void 0) ? arguments[1] : {},
                defaultBindings = ($__3 = $__2.defaultBindings) === void 0 ? false : $__3;
            return new Injector(Injector.resolve(bindings), null, defaultBindings);
          },
          fromResolvedBindings: function(bindings) {
            var $__3;
            var $__2 = arguments[1] !== (void 0) ? arguments[1] : {},
                defaultBindings = ($__3 = $__2.defaultBindings) === void 0 ? false : $__3;
            return new Injector(bindings, null, defaultBindings);
          }
        });
      }());
      $__export("Injector", Injector);
      _SyncInjectorStrategy = (function() {
        function _SyncInjectorStrategy(injector) {
          this.injector = injector;
        }
        return ($traceurRuntime.createClass)(_SyncInjectorStrategy, {
          readFromCache: function(key) {
            if (key.token === Injector) {
              return this.injector;
            }
            var instance = this.injector._getInstance(key);
            if (instance === _constructing) {
              throw new CyclicDependencyError(key);
            } else if (isPresent(instance) && !_isWaiting(instance)) {
              return instance;
            } else {
              return _notFound;
            }
          },
          instantiate: function(key) {
            var binding = this.injector._getBinding(key);
            if (isBlank(binding))
              return _notFound;
            if (binding.providedAsPromise)
              throw new AsyncBindingError(key);
            this.injector._markAsConstructing(key);
            var deps = this.injector._resolveDependencies(key, binding, false);
            return this._createInstance(key, binding, deps);
          },
          _createInstance: function(key, binding, deps) {
            try {
              var instance = FunctionWrapper.apply(binding.factory, deps);
              this.injector._setInstance(key, instance);
              return instance;
            } catch (e) {
              this.injector._clear(key);
              throw new InstantiationError(e, key);
            }
          }
        }, {});
      }());
      _AsyncInjectorStrategy = (function() {
        function _AsyncInjectorStrategy(injector) {
          this.injector = injector;
        }
        return ($traceurRuntime.createClass)(_AsyncInjectorStrategy, {
          readFromCache: function(key) {
            if (key.token === Injector) {
              return PromiseWrapper.resolve(this.injector);
            }
            var instance = this.injector._getInstance(key);
            if (instance === _constructing) {
              throw new CyclicDependencyError(key);
            } else if (_isWaiting(instance)) {
              return instance.promise;
            } else if (isPresent(instance)) {
              return PromiseWrapper.resolve(instance);
            } else {
              return _notFound;
            }
          },
          instantiate: function(key) {
            var $__0 = this;
            var binding = this.injector._getBinding(key);
            if (isBlank(binding))
              return _notFound;
            this.injector._markAsConstructing(key);
            var deps = this.injector._resolveDependencies(key, binding, true);
            var depsPromise = PromiseWrapper.all(deps);
            var promise = PromiseWrapper.then(depsPromise, null, (function(e) {
              return $__0._errorHandler(key, e);
            })).then((function(deps) {
              return $__0._findOrCreate(key, binding, deps);
            })).then((function(instance) {
              return $__0._cacheInstance(key, instance);
            }));
            this.injector._setInstance(key, new _Waiting(promise));
            return promise;
          },
          _errorHandler: function(key, e) {
            if (e instanceof AbstractBindingError)
              e.addKey(key);
            return PromiseWrapper.reject(e);
          },
          _findOrCreate: function(key, binding, deps) {
            try {
              var instance = this.injector._getInstance(key);
              if (!_isWaiting(instance))
                return instance;
              return FunctionWrapper.apply(binding.factory, deps);
            } catch (e) {
              this.injector._clear(key);
              throw new InstantiationError(e, key);
            }
          },
          _cacheInstance: function(key, instance) {
            this.injector._setInstance(key, instance);
            return instance;
          }
        }, {});
      }());
    }
  };
});
//# sourceMappingURL=injector.js.map

//# sourceMappingURL=../../src/di/injector.js.map