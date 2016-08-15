import {NgModule, provide} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AppComponent} from './app'
import {Http, HTTP_PROVIDERS} from '@angular/http'
import {LocationStrategy, PathLocationStrategy} from '@angular/common'
import {FormsModule, disableDeprecatedForms, provideForms} from '@angular/forms'
import {AuthHttp, AuthConfig, AUTH_PROVIDERS} from 'angular2-jwt'
import {routing, appRoutingProviders} from './routing'
import {HomeComponent} from './home'
import {SignupComponent} from './signup'
import {AccountComponent} from './account'

@NgModule({
  imports: [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent, HomeComponent, SignupComponent, AccountComponent ],
  providers: [
    appRoutingProviders,
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
    provideForms
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
