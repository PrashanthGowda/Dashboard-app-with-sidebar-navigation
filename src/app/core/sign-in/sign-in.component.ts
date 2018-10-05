import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SiginInService } from './sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  active: Boolean;
  model: any = {};
  alertResponse: string;

  constructor(private siginInService: SiginInService) { }

  ngOnInit() {}

  focusOutFunction(form: NgForm) {
    if (form.value.signinEmail === '' && form.value.password === '') {
      this.active = false;
    } else {
      this.active = true;
    }
  }

  onSignin(form: NgForm) {
    const email = form.value.signinEmail;
    const password = form.value.password;
    this.siginInService.signinUser(email, password);
  }

}
