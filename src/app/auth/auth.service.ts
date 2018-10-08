import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { SigninAlertComponent } from '../shared/components/signin-alert/signin-alert.component';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { environment } from '../../environments/environment.prod';
import { ISignin } from './sign-in/sign-in.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;

  alertResponse: string;

  private API_URL = environment.API_URL;

  constructor(private router: Router, private http: HttpClient, public dialog: MatDialog) {}

  /* signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      )
  } */

  /* signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getToken()
            .then(
              (token: string) => this.token = token
            )
        }
      )
      .catch(
        error => console.log(error)
      );
  }
 */

signinUser(email: string, password: string) {
  return this.http.post<ISignin>(this.API_URL + 'login.php',
    { emailid: email, password: password }).subscribe(
      res => {
        if (res['response'] === 'success') {
          this.router.navigate(['/dashboard']);
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

  logout() {
    /* firebase.auth().signOut();
    this.token = null; */
  }

  getToken() {
   /*  firebase.auth().currentUser.getToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token; */
  }

  isAuthenticated() {
    return true;
  }
}
