import {Component} from '@angular/core'
import {REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl} from '@angular/forms'
import {Http, Response, Headers} from '@angular/http'
import {API_URL} from './env'
import {UserService} from './services/userService'

@Component({
  selector: 'div',
  directives: [],
  template: `    <header class="main-header">
      <h1 class="main-header__title">Your Account</h1>
    </header>
    `,
  providers: [UserService]
})

export class AccountComponent {
  constructor(private http: Http, private userService: UserService){
  }
}
