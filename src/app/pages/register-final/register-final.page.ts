import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-final',
  templateUrl: './register-final.page.html',
  styleUrls: ['./register-final.page.scss'],
})
export class RegisterFinalPage implements OnInit {

  constructor(private navctrl:NavController,private router:Router) { }

  ngOnInit() {
  }
  backbtn(){
    this.router.navigate(['register'])
  }
  backBtn(){
    
  }
}
