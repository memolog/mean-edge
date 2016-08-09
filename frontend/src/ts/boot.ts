import {enableProdMode, provide} from '@angular/core'
import {bootstrap} from '@angular/platform-browser-dynamic'
import {ROUTER_PROVIDERS} from '@angular/router'
import {Http, HTTP_PROVIDERS} from '@angular/http'
import {LocationStrategy, PathLocationStrategy} from '@angular/common'
import {disableDeprecatedForms, provideForms} from '@angular/forms'
import {AuthHttp, AuthConfig, AUTH_PROVIDERS} from 'angular2-jwt'
import {AppComponent} from './app'
import {openIDB} from './stores/indexeddb'
import {UserService} from './services/userService'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./worker.js', {
    scope: '/'
  })
  .catch(function(err){
    console.log(err);
  });
}

enableProdMode()
window.shimIndexedDB.__useShim()

openIDB()
  .then(()=>{
    return UserService.getStoredAuthenticatedUser()
  })
  .then(()=>{
    bootstrap(AppComponent, [
      ROUTER_PROVIDERS,
      HTTP_PROVIDERS,
      AUTH_PROVIDERS,
      provide(AuthHttp, {
        useFactory: (http) => {
          return new AuthHttp(new AuthConfig({
            globalHeaders: [{'Content-Type':'application/json'}],
          }), http)
        },
        deps: [Http]
      }),
      provide(LocationStrategy, {useClass: PathLocationStrategy}),
      disableDeprecatedForms(),
      provideForms()
    ]);
  })
  .catch((err)=>{
    console.log(err)
  })
