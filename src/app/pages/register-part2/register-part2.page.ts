import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-register-part2',
  templateUrl: './register-part2.page.html',
  styleUrls: ['./register-part2.page.scss'],
})
export class RegisterPart2Page implements OnInit {

  constructor(private router:Router,private navctr:NavController) { }

  ngOnInit() {
  }
  btn_Next(){
    this.router.navigate(['register-final']);
  }
  backbtn(){
    this.navctr.back();
  }
}
