/* eslint-disable @typescript-eslint/quotes */
import {AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {
  appName: any;
  homeContentHot: any;
  homeContentFollow: any;

  postTitle ="";
  postContent = "";
  postImages= "";

  constructor(private router: Router, private route: ActivatedRoute) { }
  ngAfterViewInit(): void {
    //this.getPostData();
  }

  ngOnInit() {
    this.appName = "../../../assets/icon/app-name.png";
    this.homeContentHot = "Nổi bật";
    this.homeContentFollow = "Đang theo dõi";
    //this.getPostData();
  }
  randomNumber(){
    return Math.floor(Math.random() * (4 - 1 + 1) + 1);
  }
  getPostData(){
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.postTitle= this.router.getCurrentNavigation().extras.state.postTitle;
        this.postContent = this.router.getCurrentNavigation().extras.state.postContent;
        this.postImages = this.router.getCurrentNavigation().extras.state.postImages;
      }
    });
    console.log(this.postTitle);
    console.log(this.postContent);
    console.log(this.postImages);
  }
}
