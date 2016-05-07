import {provide} from '@angular/core'
import {bootstrap} from '@angular/platform-browser-dynamic'
import {ROUTER_PROVIDERS} from '@angular/router'
import {LocationStrategy, PathLocationStrategy} from '@angular/common'
import {AppComponent} from './app'

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: PathLocationStrategy}),
]);