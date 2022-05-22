import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  ngStyleEmailInput : any;
  ngStylePasswordInput : any;
  ngStyleImageError : any;
  ngStyleTextError : any;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  registerBtn(){
    this.router.navigate(['register'])
  }
  login(){
    this.ngStyleEmailInput = {
      "border-style": "solid",
      "border-color": "red"
    };
    this.ngStylePasswordInput ={
      "border-style": "solid",
      "border-color": "red"
    };
    this.ngStyleImageError ={
      display:"inline"
    };
    this.ngStyleTextError = {
      display:"inline"
    };
  }


}
