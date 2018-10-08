import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { ISignin } from './sign-in.model';
import { environment } from '../../../environments/environment.prod';
import { SigninAlertComponent } from '../../shared/components/signin-alert/signin-alert.component';

@Injectable({
  providedIn: 'root'
})
export class SiginInService {

  token: string;
  alertResponse: string;

  private API_URL = environment.API_URL;

  constructor(private router: Router, private http: HttpClient, public dialog: MatDialog) { }

  signinUser(email: string, password: string) {
    return this.http.post<ISignin>(this.API_URL + 'login.php',
      { emailid: email, password: password }).subscribe(
        res => {
          if (res['response'] === 'success') {
            this.router.navigate(['/app']);
            localStorage.setItem('currentUser', res['user'].username);
            if (true) {
              localStorage.setItem('isAdmin', 'true'); // replace true with  (res['user'].isAdmin === 'true');
            } else {
              // localStorage.setItem('isAdmin', 'false');
            }
            localStorage.setItem('lat', '54.5260');
            localStorage.setItem('long', '105.2551');
            this.token = localStorage.getItem('currentUser');
          }

          if (res['response'] === 'error') {
            this.dialog.open(SigninAlertComponent, {
              width: '300px'
            });
          }
        }
      );
  }

 /*  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('formdata');
    this.token = null;
    this.router.navigate(['/login']);
  } */

  getToken() {
    this.token = localStorage.getItem('currentUser');
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
