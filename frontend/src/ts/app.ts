import {Component} from '@angular/core'
import {LocationStrategy} from '@angular/common'
import {Routes, ROUTER_DIRECTIVES, Router} from '@angular/router'
import {HomeComponent} from './home'
import {SignupComponent} from './signup'

@Routes([
  {path: '', component: HomeComponent},
  {path: '/signup', component: SignupComponent}
])

@Component({
  selector: 'app',
  template:`<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {
  constructor(public router:Router, public location: LocationStrategy){}
}
