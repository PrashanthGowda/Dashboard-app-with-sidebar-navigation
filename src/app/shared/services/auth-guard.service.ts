import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  token: string;

  constructor(private router: Router) {}

  canActivate() {
    return this.getToken();
  }

  canActivateChild() {
    return this.getToken();
  }

  getToken() {
    this.token = localStorage.getItem('currentUser');
    if (this.token !== null) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
