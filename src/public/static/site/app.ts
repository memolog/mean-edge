/// <reference path="../../../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'app'
})
@View({
  template: '<h1>Hello {{name}}</h1>'
})
class AppComponent {
  constructor(){
    this.name = 'Yutaka'
  }
}

bootstrap(AppComponent);
