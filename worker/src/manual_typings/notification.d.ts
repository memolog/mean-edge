/// https://notifications.spec.whatwg.org/

/// 3. API
interface Notification extends EventTarget {
  permission: NotificationPermission; // readonly
  requestPermission(deprecatedCallback?: (permission: NotificationPermission)=>void): Promise<NotificationPermission>
  maxActions: number // readonly
  onclick: (ev: Event) => void
  onerror: (ev: Event) => void
  title: string // readonly
  dir: NotificationDirection // readonly
  lang: string // readonly
  body: string // readonly
  tag: string // readonly
  icon: string // readonly
  badge: string // readonly
  sound: string // readonly
  vibrate: Array<number> // readonly
  timestamp: number // readonly
  renotify: boolean // readonly
  silent: boolean // readonly
  noscreen: boolean // readonly
  requireInteraction: boolean // readonly
  sticky: boolean // readonly
  data: any // readonly
  actions: Array<NotificationAction> // readonly
  close():void
}

interface NotificationConstructor {
  prototype: Notification;
  new(title: string, options?:NotificationOptions): Notification;
}

declare const Notification: NotificationConstructor;

interface NotificationOptions {
  dir: NotificationDirection;
  lang: string;
  tag: string;
  icon: string;
  badge: string;
  sound: string;
  vibrate: number;
  timestamp: number;
  renotify: boolean;
  silent: boolean;
  noscreen: boolean;
  requireInteraction: boolean;
  sticky: boolean;
  data: any;
  actions: Array<NotificationAction>;
}

/// https://w3c.github.io/vibration/#idl-def-vibratepattern
/// typedef (unsigned long or sequence<unsigned long>) VibratePattern;

declare type NotificationPermission = "default" | "denied" | "granted";
declare type NotificationDirection = "auto" | "ltr" | "rtl";

interface NotificationAction {
  action: string;
  title: string;
  icon: string;
}

declare function NotificationPermissionCallback(permission: NotificationPermission):void

/// 4. Service worker API
interface GetNotificationOptions {
  tag:string
}

interface ServiceWorkerRegistration {
  showNotification(title:string, options?:NotificationOptions):Promise<void>
  getNotifications(filter?:GetNotificationOptions):Promise<Array<Notification>>
}

interface NotificationEvent extends ExtendableEvent {
  notification: Notification;
  action: string;
}

interface NotificationEventConstructor {
  prototype: NotificationEvent;
  new(type:string, eventInitDict: NotificationEventInit)
}

declare const NotificationEvent: NotificationEventConstructor

interface NotificationEventInit extends ExtendableEventInit {
  notification: Notification;
  action: string
}

interface ServiceWorkerGlobalScope {
  onnotificationclick: (ev:Event) => void;
  onnotificationclose: (ev: Event) => void;
}
