/**
 * @module
 * @public
 * @description
 * The `di` module provides dependency injection container services.
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./src/di/annotations'));
__export(require('./src/di/decorators'));
var injector_1 = require('./src/di/injector');
exports.Injector = injector_1.Injector;
var binding_1 = require('./src/di/binding');
exports.Binding = binding_1.Binding;
exports.ResolvedBinding = binding_1.ResolvedBinding;
exports.Dependency = binding_1.Dependency;
exports.bind = binding_1.bind;
var key_1 = require('./src/di/key');
exports.Key = key_1.Key;
exports.KeyRegistry = key_1.KeyRegistry;
exports.TypeLiteral = key_1.TypeLiteral;
var exceptions_1 = require('./src/di/exceptions');
exports.NoBindingError = exceptions_1.NoBindingError;
exports.AbstractBindingError = exceptions_1.AbstractBindingError;
exports.AsyncBindingError = exceptions_1.AsyncBindingError;
exports.CyclicDependencyError = exceptions_1.CyclicDependencyError;
exports.InstantiationError = exceptions_1.InstantiationError;
exports.InvalidBindingError = exceptions_1.InvalidBindingError;
exports.NoAnnotationError = exceptions_1.NoAnnotationError;
var opaque_token_1 = require('./src/di/opaque_token');
exports.OpaqueToken = opaque_token_1.OpaqueToken;
// HACK: workaround for Traceur behavior.
// It expects all transpiled modules to contain this marker.
// TODO: remove this when we no longer use traceur
exports.__esModule = true;
//# sourceMappingURL=di.js.map