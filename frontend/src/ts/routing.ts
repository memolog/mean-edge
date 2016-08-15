import {Routes, RouterModule} from '@angular/router'
import {HomeComponent} from './home'
import {SignupComponent} from './signup'
import {AccountComponent} from './account'

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'account', component: AccountComponent}
]

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);
