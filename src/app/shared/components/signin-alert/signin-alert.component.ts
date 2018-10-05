import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-signin-alert',
  templateUrl: './signin-alert.component.html',
  styleUrls: ['./signin-alert.component.scss']
})
export class SigninAlertComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {}

}
