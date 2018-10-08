import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { SignInComponent } from './sign-in/sign-in.component';

const authRoutes: Routes = [
  {
    path: 'auth', component:  SignInComponent, children: [
      { path: '', redirectTo: 'signin', pathMatch: 'full' },
      { path: 'signin', component: SignInComponent},
      { path: 'signup', component: SignupComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
