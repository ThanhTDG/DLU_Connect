import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private navctr:NavController,private router:Router) { }

  ngOnInit() {
  }

  backbtn(){
    this.navctr.back();
  }
  btn_Next(){
    this.router.navigate(['register-part2']);
  }
}
