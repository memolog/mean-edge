import {Promise,
  PromiseWrapper,
  EventEmitter,
  ObservableWrapper} from 'angular2/src/facade/async';
import {Map,
  MapWrapper,
  List,
  ListWrapper} from 'angular2/src/facade/collection';
import {isBlank,
  isPresent,
  Type} from 'angular2/src/facade/lang';
import {RouteRegistry} from './route_registry';
import {Pipeline} from './pipeline';
import {Instruction} from './instruction';
import {RouterOutlet} from './router_outlet';
import {Location} from './location';
export class Router {
  constructor(registry, pipeline, location, parent, hostComponent) {
    this.hostComponent = hostComponent;
    this.navigating = false;
    this.parent = parent;
    this.previousUrl = null;
    this._outlets = MapWrapper.create();
    this._children = MapWrapper.create();
    this._location = location;
    this._registry = registry;
    this._pipeline = pipeline;
    this._subject = new EventEmitter();
    this._currentInstruction = null;
  }
  childRouter(outletName = 'default') {
    if (!MapWrapper.contains(this._children, outletName)) {
      MapWrapper.set(this._children, outletName, new ChildRouter(this, outletName));
    }
    return MapWrapper.get(this._children, outletName);
  }
  registerOutlet(outlet, name = 'default') {
    MapWrapper.set(this._outlets, name, outlet);
    if (isPresent(this._currentInstruction)) {
      var childInstruction = this._currentInstruction.getChildInstruction(name);
      return outlet.activate(childInstruction);
    }
    return PromiseWrapper.resolve(true);
  }
  config(config) {
    if (config instanceof List) {
      config.forEach((configObject) => {
        this._registry.config(this.hostComponent, configObject);
      });
    } else {
      this._registry.config(this.hostComponent, config);
    }
    return this.renavigate();
  }
  navigate(url) {
    if (this.navigating) {
      return PromiseWrapper.resolve(true);
    }
    this.lastNavigationAttempt = url;
    var matchedInstruction = this.recognize(url);
    if (isBlank(matchedInstruction)) {
      return PromiseWrapper.resolve(false);
    }
    if (isPresent(this._currentInstruction)) {
      matchedInstruction.reuseComponentsFrom(this._currentInstruction);
    }
    matchedInstruction.router = this;
    this._startNavigating();
    var result = this._pipeline.process(matchedInstruction).then((_) => {
      this._location.go(matchedInstruction.matchedUrl);
      ObservableWrapper.callNext(this._subject, matchedInstruction.matchedUrl);
      this._finishNavigating();
      this._currentInstruction = matchedInstruction;
    });
    PromiseWrapper.catchError(result, (_) => this._finishNavigating());
    return result;
  }
  _startNavigating() {
    this.navigating = true;
  }
  _finishNavigating() {
    this.navigating = false;
  }
  subscribe(onNext) {
    ObservableWrapper.subscribe(this._subject, onNext);
  }
  activateOutlets(instruction) {
    return this._queryOutlets((outlet, name) => {
      var childInstruction = instruction.getChildInstruction(name);
      if (childInstruction.reuse) {
        return PromiseWrapper.resolve(true);
      }
      return outlet.activate(childInstruction);
    }).then((_) => instruction.mapChildrenAsync((instruction, _) => {
      return instruction.router.activateOutlets(instruction);
    }));
  }
  traverseOutlets(fn) {
    return this._queryOutlets(fn).then((_) => mapObjAsync(this._children, (child, _) => child.traverseOutlets(fn)));
  }
  _queryOutlets(fn) {
    return mapObjAsync(this._outlets, fn);
  }
  recognize(url) {
    return this._registry.recognize(url, this.hostComponent);
  }
  renavigate() {
    var destination = isBlank(this.previousUrl) ? this.lastNavigationAttempt : this.previousUrl;
    if (this.navigating || isBlank(destination)) {
      return PromiseWrapper.resolve(false);
    }
    return this.navigate(destination);
  }
  generate(name, params) {
    return this._registry.generate(name, params, this.hostComponent);
  }
}
Object.defineProperty(Router, "parameters", {get: function() {
    return [[RouteRegistry], [Pipeline], [Location], [Router], []];
  }});
Object.defineProperty(Router.prototype.registerOutlet, "parameters", {get: function() {
    return [[RouterOutlet], []];
  }});
Object.defineProperty(Router.prototype.config, "parameters", {get: function() {
    return [[assert.type.any]];
  }});
Object.defineProperty(Router.prototype.navigate, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(Router.prototype.activateOutlets, "parameters", {get: function() {
    return [[Instruction]];
  }});
Object.defineProperty(Router.prototype.recognize, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(Router.prototype.generate, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.any]];
  }});
export class RootRouter extends Router {
  constructor(registry, pipeline, location, hostComponent) {
    super(registry, pipeline, location, null, hostComponent);
    this._location.subscribe((change) => this.navigate(change['url']));
    this._registry.configFromComponent(hostComponent);
    this.navigate(location.path());
  }
}
Object.defineProperty(RootRouter, "parameters", {get: function() {
    return [[RouteRegistry], [Pipeline], [Location], [Type]];
  }});
class ChildRouter extends Router {
  constructor(parent, hostComponent) {
    super(parent._registry, parent._pipeline, parent._location, parent, hostComponent);
    this.parent = parent;
  }
}
Object.defineProperty(ChildRouter, "parameters", {get: function() {
    return [[Router], []];
  }});
function mapObjAsync(obj, fn) {
  return PromiseWrapper.all(mapObj(obj, fn));
}
Object.defineProperty(mapObjAsync, "parameters", {get: function() {
    return [[Map], []];
  }});
function mapObj(obj, fn) {
  var result = ListWrapper.create();
  MapWrapper.forEach(obj, (value, key) => ListWrapper.push(result, fn(value, key)));
  return result;
}
Object.defineProperty(mapObj, "parameters", {get: function() {
    return [[Map], []];
  }});
//# sourceMappingURL=router.js.map

//# sourceMappingURL=./router.map