import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/services/auth-guard.service';
import { SignInComponent } from './core/sign-in/sign-in.component';
import { HomeComponent } from './core/home/home.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: SignInComponent },
    { path: 'dashboard', component: HomeComponent },
    { path: 'patient', loadChildren: './patient/patient.module#PatientModule' }
    /* {
        path: 'app', component: HomeComponent, canActivateChild: [AuthGuard], children: [
            { path: '', redirectTo: 'dashboards', pathMatch: 'full' },
            { path: 'dashboards', component: DashboardComponent },
            { path: 'patient-list', component: DashboardComponent }
        ]
    }, */
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule { }
