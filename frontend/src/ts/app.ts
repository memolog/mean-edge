import {Component, OnInit} from '@angular/core'
import {LocationStrategy} from '@angular/common'
import {Routes, ROUTER_DIRECTIVES, Router} from '@angular/router'
import {HomeComponent} from './home'
import {SignupComponent} from './signup'

@Routes([
  {path: '/home', component: HomeComponent},
  {path: '/signup', component: SignupComponent}
])

@Component({
  selector: 'app',
  template:`
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link" [class.active]="isActive('/home')" [routerLink]="['/home']">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" [class.active]="isActive('/signup')" [routerLink]="['/signup']">Sign in / Sign up</a>
    </li>
  </ul>
  <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})

export class AppComponent implements OnInit {
  url:string = '/home'
  
  constructor(public router:Router, public location: LocationStrategy){    
    this.router.changes.subscribe(()=>{
      this.url = this.router.serializeUrl(this.router.urlTree)
    })
  }
  
  isActive(url:string):boolean {
    return this.url === url
  }
  
  ngOnInit(){
    this.router.navigate(['/home'])
  }
}
