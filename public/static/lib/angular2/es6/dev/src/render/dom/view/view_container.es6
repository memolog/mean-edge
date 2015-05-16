import {ListWrapper,
  MapWrapper,
  List} from 'angular2/src/facade/collection';
import * as viewModule from './view';
export class DomViewContainer {
  constructor() {
    this.views = [];
  }
  contentTagContainers() {
    return this.views;
  }
  nodes() {
    var r = [];
    for (var i = 0; i < this.views.length; ++i) {
      r = ListWrapper.concat(r, this.views[i].rootNodes);
    }
    return r;
  }
}
//# sourceMappingURL=view_container.js.map

//# sourceMappingURL=./view_container.map