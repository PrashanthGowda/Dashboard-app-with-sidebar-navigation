import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninAlertComponent } from '../shared/components/signin-alert/signin-alert.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../angular-material/material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app.routing-module';

@NgModule({
  declarations: [
    HomeComponent,
    SignInComponent,
    DashboardComponent,
    SigninAlertComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ]
})
export class CoreModule { }
