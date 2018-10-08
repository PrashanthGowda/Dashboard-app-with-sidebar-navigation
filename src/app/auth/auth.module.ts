import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SignupComponent } from './signup/signup.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { MaterialModule } from '../angular-material/material.module';
import { SigninAlertComponent } from '../shared/components/signin-alert/signin-alert.component';

@NgModule({
  declarations: [
    SignInComponent,
    SignupComponent,
    SigninAlertComponent
  ],
  imports: [
    FormsModule,
    MaterialModule,
    AuthRoutingModule
  ]
})
export class AuthModule {}
