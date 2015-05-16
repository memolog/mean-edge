import {DOM} from 'angular2/src/dom/dom_adapter';
export class BrowserLocation {
  constructor() {
    this._location = DOM.getLocation();
    this._history = DOM.getHistory();
    this._baseHref = DOM.getBaseHref();
  }
  onPopState(fn) {
    DOM.getGlobalEventTarget('window').addEventListener('popstate', fn, false);
  }
  getBaseHref() {
    return this._baseHref;
  }
  path() {
    return this._location.pathname;
  }
  pushState(state, title, url) {
    this._history.pushState(state, title, url);
  }
  forward() {
    this._history.forward();
  }
  back() {
    this._history.back();
  }
}
Object.defineProperty(BrowserLocation.prototype.pushState, "parameters", {get: function() {
    return [[assert.type.any], [assert.type.string], [assert.type.string]];
  }});
//# sourceMappingURL=browser_location.js.map

//# sourceMappingURL=./browser_location.map