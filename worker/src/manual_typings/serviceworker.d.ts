/// Service Worker
/// https://www.w3.org/TR/service-workers

/// 3.1 ServiceWorker

interface ServiceWorker extends EventTarget {
  scriptURL: string; // readonly
  state: ServiceWorkerState; // readonly
  id: string; // readonly
  postMessage(message:any, transfer?:[any]): void;
  onstatechange: (ev: Event) => any;
  onerror: (ev: Event) => any;
}

declare type ServiceWorkerState = "parsed" | "installing" | "installed" | "activating" | "activated" | "redundant";

/// 3.2 ServiceWorkerRegistration
interface ServiceWorkerRegistration extends EventTarget {
  installing: ServiceWorker; // readonly
  waiting: ServiceWorker; // readonly
  active: ServiceWorker; // readonly
  scope: string;
  update(): void;
  unregister(): Promise<boolean>;
  onupdatefound: (ev: Event) => any;
}

/// 3.3 navigator.serviceWorker
interface Navigator {
  serviceWorker: ServiceWorkerContainer; // readonly
}

interface WorkerNavigator {
  serviceWorker: ServiceWorkerContainer; // readonly
}

/// 3.4 ServiceWorkerContainer
interface ServiceWorkerContainer extends EventTarget {
  controller: ServiceWorker | null; // readonly
  ready: Promise<ServiceWorkerRegistration>; // readonly
  register(scriptURL: string, options?: RegistrationOptions): Promise<ServiceWorkerRegistration>;
  getRegistration(clientURL?:string): Promise<ServiceWorkerRegistration>;
  getRegistrations(): Promise<Array<ServiceWorkerRegistration>>;
  oncontrollerchange: (ev: Event) => any;
  onerror: (ev: Event) => any;
  onmessage: (ev: Event) => any;
}

interface RegistrationOptions {
  scope: string;
}

/// 3.5 ServiceWorkerMessageEvent
interface ServiceWorkerMessageEvent extends Event {
  data: any; // readonly
  origin: string; // readonly
  lastEventId: string; // readonly
  source: ServiceWorker | MessagePort | null; // readonly
  ports: Array<MessagePort> | null; // readonly
}

interface ServiceWorkerMessageEventConstructor {
  prototype: ServiceWorkerMessageEvent;
  new(type:string, eventInitDict?:ServiceWorkerMessageEventInit): ServiceWorkerMessageEvent;
}

declare const ServiceWorkerMessageEvent: ServiceWorkerMessageEventConstructor;

interface ServiceWorkerMessageEventInit extends EventInit {
  data: any;
  origin: string;
  lastEventId: string;
  source: ServiceWorker | MessagePort | null;
  ports: Array<MessagePort>;
}

/// 4.1 ServiceWorkerGlobalScope
interface ServiceWorkerGlobalScope extends WorkerGlobalScope {
  clients: Clients; // readonly
  registration: ServiceWorkerRegistration; // readonly
  skipWaiting(): Promise<void>;
  oninstall: (ev: Event) => any;
  onactivate: (ev: Event) => any;
  onfetch: (ev: Event) => any;
  onmessage: (ev: Event) => any;
}

/// The spec says caches property is 'readonly' but I don't define it
/// because it's could not be reffered from self by TypeScript
interface WorkerGlobalScope {
  clients: Clients; // readonly
  registration: ServiceWorkerRegistration; // readonly
  skipWaiting(): Promise<void>;
  oninstall: (ev: InstallEvent) => any;
  onactivate: (ev: ActivateEvent) => any;
  onfetch: (ev: FetchEvent) => any;
  onmessage: (ev: MessageEvent) => any;
}

declare const clients: Clients;
declare const registration: ServiceWorkerRegistration;
declare function skipWaiting(): Promise<void>;
declare const oninstall: (ev: InstallEvent) => any;
declare const onactivate: (ev: ActivateEvent) => any;
declare const onfetch: (ev: FetchEvent) => any;

/// 4.2 Client
interface Client {
  url: string; // readonly
  frameType: FrameType; // readonly
  id: string; // readonly
  postMessage(message:any, transfer?:[any]): void;
}

interface WindowClient extends Client {
  visibilityState: VisibilityState; // readonly
  focused: boolean; // readonly
  focus(): Promise<WindowClient>;
  navigate(string): Promise<WindowClient>;
}

declare type FrameType = "auxiliary" | "top-level" | "nested" | "none"

/// https://www.w3.org/TR/page-visibility/#VisibilityState
declare type VisibilityState = "hidden" | "visible" | "prerender" | "unloaded"

/// 4.3 Clients
interface Clients {
  matchAll(options?:ClientQueryOptions): Promise<Array<Client>>;
  openWindow(url:string): Promise<WindowClient | null>;
  claim(): Promise<void>;
}

declare type ClientQueryOptions = "window" | "worker" | "sharedworker" | "all";

/// 4.4 ExtendableEvent
interface ExtendableEvent extends Event {
  waitUntil(f:Promise<any>):void;
}

interface ExtendableEventInit extends EventInit {}

interface ExtendableEventConstructor {
  prototype: ExtendableEvent
  new(type:string, eventInitDict?:ExtendableEvent): ExtendableEvent
}

declare const ExtendableEvent: ExtendableEventConstructor

/// 4.5 FetchEvent
interface FetchEvent extends ExtendableEvent {
  request: Request; // readonly
  client: Client; // readonly
  isReload: boolean; // readonly
  respondWith(r: Response | Promise<Response>):void;
}

interface FetchEventInit extends ExtendableEventInit {
  request: Request;
  client: Client;
  isReload: boolean;
}

interface FetchEventConstructor {
  prototype: FetchEvent;
  new(type: string, eventInitDict?: FetchEventInit): FetchEvent;
}

declare const FetchEvent: FetchEventConstructor;

/// 4.6 ExtendableMessageEvent
interface ExtendableMessageEvent extends ExtendableEvent {
  data: any; // readonly
  origin: string; // readonly
  lastEventId: string; // readonly
  source: Client | ServiceWorker | MessagePort | null; // readonly
  ports: Array<MessagePort> | null; // readonly
}

interface ExtendableMessageEventInit extends ExtendableEventInit {
  data: any;
  origin: string;
  lastEventId: string;
  source: Client | ServiceWorker | MessagePort | null;
  ports: Array<MessagePort>;
}

interface ExtendableMessageEventConstructor {
  prototype: ExtendableMessageEvent;
  new(type: string, eventInitDict?: ExtendableMessageEventInit): ExtendableMessageEvent;
}

/// 4.7 Events
interface InstallEvent extends ExtendableEvent {}
interface InstallEventConstructor extends ExtendableEventConstructor {}
declare const InstallEvent: InstallEventConstructor;

interface ActivateEvent extends ExtendableEvent {}
interface ActivateEventConstructor extends ExtendableEventConstructor {}
declare const ActivateEvent: ExtendableEventConstructor;

/// 5.3 self.caches
/// The spec says caches property is 'readonly' but I don't define it
/// because it's could not be reffered from self by TypeScript

interface Window {
  caches: CacheStorage;
}

interface WorkerGlobalScope {
  caches: CacheStorage;
}

declare const caches: CacheStorage;

/// 5.4 Cache
interface Cache {
  match(request: RequestInfo, options?: CacheQueryOptions): Promise<Response>;
  matchAll(request?: RequestInfo, options?: CacheQueryOptions): Promise<Array<Response>>;
  add(request: RequestInfo): Promise<void>;
  addAll(requests: Array<RequestInfo>): Promise<void>;
  put(request: RequestInfo, response: Response): Promise<void>;
  delete(request: RequestInfo, options?: CacheQueryOptions): Promise<boolean>;
  keys(request?: RequestInfo, options?: CacheQueryOptions): Promise<Array<Request>>;
}

interface CacheQueryOptions {
  ignoreSearch: boolean;
  ignoreMethod: boolean;
  ignoreVary: boolean;
  cacheName: string;
}

interface CacheBatchOperation {
  type: string;
  request: Request;
  response: Response;
  options: CacheQueryOptions;
}

/// 5.5 CacheStorage
interface CacheStorage {
  match(request: RequestInfo, options?: CacheQueryOptions): Promise<Response>;
  has(cacheName: string): Promise<boolean>;
  open(cacheName: string): Promise<Cache>;
  delete(cacheName: string): Promise<boolean>;
  keys(): Promise<Array<string>>;
}

interface Request {
  clone(): Request;
}
