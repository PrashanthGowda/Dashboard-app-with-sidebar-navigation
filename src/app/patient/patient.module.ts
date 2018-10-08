import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientListComponent } from './patient-list/patient-list.component';
import { LayoutComponent } from '../shared/components/layout/layout.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PatientRoutingModule
  ],
  declarations: [
    PatientListComponent
  ]
})
export class PatientModule { }
