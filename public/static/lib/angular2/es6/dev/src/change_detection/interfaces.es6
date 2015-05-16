import { DEFAULT } from './constants';
// HACK: workaround for Traceur behavior.
// It expects all transpiled modules to contain this marker.
// TODO: remove this when we no longer use traceur
export var __esModule = true;
export class ProtoChangeDetector {
    instantiate(dispatcher) { return null; }
}
/**
 * Interface used by Angular to control the change detection strategy for an application.
 *
 * Angular implements the following change detection strategies by default:
 *
 * - {@link DynamicChangeDetection}: slower, but does not require `eval()`.
 * - {@link JitChangeDetection}: faster, but requires `eval()`.
 *
 * In JavaScript, you should always use `JitChangeDetection`, unless you are in an environment that
 *has
 * [CSP](https://developer.mozilla.org/en-US/docs/Web/Security/CSP), such as a Chrome Extension.
 *
 * In Dart, use `DynamicChangeDetection` during development. The Angular transformer generates an
 *analog to the
 * `JitChangeDetection` strategy at compile time.
 *
 *
 * See: {@link DynamicChangeDetection}, {@link JitChangeDetection}
 *
 * # Example
 * ```javascript
 * bootstrap(MyApp, [bind(ChangeDetection).toClass(DynamicChangeDetection)]);
 * ```
 * @exportedAs angular2/change_detection
 */
export class ChangeDetection {
    createProtoChangeDetector(name, bindingRecords, variableBindings, directiveRecords, changeControlStrategy = DEFAULT) {
        return null;
    }
}
export class ChangeDispatcher {
    notifyOnBinding(bindingRecord, value) { }
}
export class ChangeDetector {
    addChild(cd) { }
    addShadowDomChild(cd) { }
    removeChild(cd) { }
    removeShadowDomChild(cd) { }
    remove() { }
    hydrate(context, locals, directives) { }
    dehydrate() { }
    markPathToRootAsCheckOnce() { }
    detectChanges() { }
    checkNoChanges() { }
}
//# sourceMappingURL=interfaces.js.map