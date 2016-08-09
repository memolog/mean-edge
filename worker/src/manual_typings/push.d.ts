/// 7. Extensions to the ServiceWorkerRegistration interface
interface ServiceWorkerRegistration {
  pushManager: PushManager; // readonly
}

declare type PushSubscriptionOrNull = PushSubscription | null;

/// 8. PushManager interface
interface PushManager {
  subscribe(options?:PushSubscriptionOptions): Promise<PushSubscription>;
  getSubscription(): Promise<PushSubscriptionOrNull>;
  permissionState(options?:PushSubscriptionOptions): Promise<PushPermissionState>;
}

/// 8.1 PushSubscriptionOptions dictionary
interface PushSubscriptionOptions {
  userVisibleOnly: boolean;
}

/// 9. PushSubscription interface
interface PushSubscription {
  endpoint: string; // readonly
  getKey(name: PushEncryptionKeyName): ArrayBuffer | null;
  unsubscribe(): Promise<boolean>;
}

/// 9.1 PushEncryptionKeyName enumeration
declare type PushEncryptionKeyName = "p256dh" | "auth";

/// 10. PushMessageData interface
interface PushMessageData {
  arrayBuffer(): ArrayBuffer;
  blob(): Blob;
  json(): JSON;
  text(): string;
}

declare type PushMessageDataInit = ArrayBufferView | ArrayBuffer | string

/// 11. Events
interface ServiceWorkerGlobalScope {
  onpush: (ev: PushEvent) => any;
  onpushsubscriptionchange: (ev: ExtendableEvent) => any;
}

/// 11.1 The push event
interface PushEventInit extends ExtendableEvent {
  data: PushMessageDataInit;
}

interface PushEvent extends ExtendableEvent {
  data: PushMessageData; // readonly
}

interface PushEventConstructor {
  prototype: PushEvent;
  new(type: string, eventInitDict?: PushEventInit): PushEvent;
}

declare const PushEvent: PushEventConstructor;

/// 12. Enumerations
declare type PushPermissionState = "granted" | "denied" | "prompt";

/// 13. Exceptions
interface DOMException {
  PermissionDeniedError: number; // readonly
}
