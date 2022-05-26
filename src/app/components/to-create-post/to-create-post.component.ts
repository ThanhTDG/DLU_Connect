/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-to-create-post',
  templateUrl: './to-create-post.component.html',
  styleUrls: ['./to-create-post.component.scss'],
})
export class ToCreatePostComponent implements OnInit {
  question: any;
  userAvatar: any;
  btnAddImage: any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.question = "Bạn đang nghĩ gì?";
    this.userAvatar = "../../../assets/icon/default/default-avatar.png";
    this.btnAddImage = "../../../assets/icon/main/image.svg";
  }
  toCreatePostPage(){
    let curUrl ="";
    if(this.router.url.includes('?')){
      curUrl = this.router.url.slice(0, this.router.url.indexOf('?'));
    }else{
      curUrl = this.router.url;
    }
    const navigationExtras: NavigationExtras = { state: {prvUrl: curUrl}};
    this.router.navigateByUrl("create-post", navigationExtras);
  }

}
