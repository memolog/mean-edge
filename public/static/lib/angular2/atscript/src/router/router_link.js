import {Directive, onAllChangesDone} from 'angular2/src/core/annotations_impl/annotations';
import {ElementRef} from 'angular2/core';
import {StringMap, StringMapWrapper} from 'angular2/src/facade/collection';

import {isPresent} from 'angular2/src/facade/lang';
import {DOM} from 'angular2/src/dom/dom_adapter';

import {Router} from './router';

/**
 * The RouterLink directive lets you link to specific parts of your app.
 *
 *
 * Consider the following route configuration:

 * ```
 * @RouteConfig({
 *   path: '/user', component: UserCmp, alias: 'user'
 * });
 * class MyComp {}
 * ```
 *
 * When linking to a route, you can write:
 *
 * ```
 * <a router-link="user">link to user component</a>
 * ```
 *
 * @exportedAs angular2/router
 */
@Directive({
  selector: '[router-link]',
  properties: {
    'route': 'routerLink',
    'params': 'routerParams'
  },
  lifecycle: [onAllChangesDone]
})
export class RouterLink {
  _domEl;
  _route:string;
  _params:any;
  _router:Router;
  _href:string;

  constructor(elementRef:ElementRef, router:Router) {
    this._domEl = elementRef.domElement;
    this._router = router;
    this._params = StringMapWrapper.create();
    DOM.on(this._domEl, 'click', (evt) => {
      evt.preventDefault();
      this._router.navigate(this._href);
    });
  }

  set route(changes) {
    this._route = changes;
  }

  set params(changes) {
    this._params = changes;
  }

  onAllChangesDone() {
    if (isPresent(this._route) && isPresent(this._params)) {
      var newHref = this._router.generate(this._route, this._params);
      this._href = newHref;
      // Keeping the link on the element to support contextual menu `copy link`
      // and other in-browser affordances.
      DOM.setAttribute(this._domEl, 'href', newHref);
    }
  }
}
