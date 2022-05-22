import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-create-post-page',
  templateUrl: './create-post-page.page.html',
  styleUrls: ['./create-post-page.page.scss'],
})
export class CreatePostPagePage implements OnInit {

  constructor(private navctr:NavController) { }

  ngOnInit() {
  }
  backbtn(){
    this.navctr.back();
  }


}
