import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RegistrationComponent } from './registration/registration.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { UserRegComponent } from './user-reg/user-reg.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login', component:LoginComponent },
  { path: 'logout', component: MenuComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },
  { path: 'user_reg', component: UserRegComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
