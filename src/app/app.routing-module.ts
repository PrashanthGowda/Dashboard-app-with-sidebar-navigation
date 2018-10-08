import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/services/auth-guard.service';

const appRoutes: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    { path: 'dashboard', loadChildren: './core/core.module#CoreModule' },
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
