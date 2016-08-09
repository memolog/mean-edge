/// <reference no-default-lib="true"/>
/// <reference path="../../node_modules/typescript/lib/lib.webworker.d.ts" />
/// <reference path="../../node_modules/typescript/lib/lib.es2015.core.d.ts" />
/// <reference path="../../node_modules/typescript/lib/lib.es2015.promise.d.ts" />
/// <reference path="../../node_modules/typescript/lib/lib.es5.d.ts" />
/// <reference path="../manual_typings/serviceworker.d.ts" />
/// <reference path="../manual_typings/push.d.ts" />
/// <reference path="../manual_typings/notification.d.ts" />

/// Avoid error for whatwg-fetch defenitions
/// FormData depends on a lot of other HTML definition actually
/// However it might not be used on service woker environment, so just set any for it

interface FormData {}
declare var FormData: any
declare var window: Window

interface PromiseConstructor {
  all(values: [any]): Promise<any>
}
