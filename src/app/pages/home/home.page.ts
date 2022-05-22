/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  appName: any;
  homeContentHot: any;
  homeContentFollow: any;

  constructor(private auth: AuthService, private user: UserService) {}

  ngOnInit() {
    this.appName = '../../../assets/icon/app-name.png';
    this.homeContentHot = 'Nổi bật';
    this.homeContentFollow = 'Đang theo dõi';
  }
}
