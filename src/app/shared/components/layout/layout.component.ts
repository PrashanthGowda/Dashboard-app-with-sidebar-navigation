import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  username = localStorage.getItem('currentUser');
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  constructor(private breakpointObserver: BreakpointObserver, private router: Router) { }

  logout() {
    // localStorage.removeItem('currentUser');
    localStorage.clear();
    this.router.navigate(['']);
  }

  gotoImedrix() {
    window.open('http://www.imedrix.com', '_blank');
  }

}
