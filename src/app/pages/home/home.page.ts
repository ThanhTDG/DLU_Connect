/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  appName: any;
  homeContentHot: any;
  homeContentFollow: any;
  constructor() { }

  ngOnInit() {
    this.appName = "../../../assets/icon/app-name.png";
    this.homeContentHot = "Nổi bật";
    this.homeContentFollow = "Đang theo dõi";
  }

}
