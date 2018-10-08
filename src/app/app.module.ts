import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninAlertComponent } from './shared/components/signin-alert/signin-alert.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app.routing-module';
import { PatientModule } from './patient/patient.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    CoreModule,
    SharedModule,
    PatientModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [
    SigninAlertComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
