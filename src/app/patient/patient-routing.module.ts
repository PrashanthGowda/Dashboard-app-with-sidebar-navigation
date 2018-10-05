import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../core/home/home.component';
import { PatientListComponent } from './patient-list/patient-list.component';

const routes: Routes = [
  {
    path: 'patient', component:  PatientListComponent, children: [
      { path: '', redirectTo: 'patient-list', pathMatch: 'full' },
      { path: 'patient-list', component: PatientListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
