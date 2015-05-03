/// <reference path="../../../typings/angular2/angular2.d.ts" />
var __decorate = this.__decorate || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
import { Component, View, bootstrap } from 'angular2/angular2';
let AppComponent = class {
    constructor() {
        this.name = 'Yutaka';
    }
};
Object.defineProperty(AppComponent, "name", { value: "AppComponent", configurable: true });
AppComponent = __decorate([
    Component({
        selector: 'app'
    }),
    View({
        template: '<h1>Hello {{name}}</h1>'
    })
], AppComponent);
bootstrap(AppComponent);
