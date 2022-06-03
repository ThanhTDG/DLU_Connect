/* eslint-disable @typescript-eslint/quotes */
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from 'src/app/models/group';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { GroupService } from 'src/app/services/group.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {
  appName: any;
  homeContentHot: any;
  homeContentFollow: any;

  postTitle = '';
  postContent = '';
  postImages = '';

  constructor(
    private auth: AuthService,
    private user: UserService,
    private group: GroupService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngAfterViewInit(): void {
    //this.getPostData();
  }

  ngOnInit() {
    this.appName = '../../../assets/icon/app-name.png';
    this.homeContentHot = 'Nổi bật';
    this.homeContentFollow = 'Đang theo dõi';
    //this.getPostData();

    // const user = new User('Hieu', 'Duong', new Date(2001, 0, 1), 'M');
    // console.log(user);

    // this.user.add(user);
    this.user.getAll().then((res) => {
      res.forEach((data) => {
        console.log(data.id, data.data());
      });
    });
  }

  randomNumber() {
    return Math.floor(Math.random() * (4 - 1 + 1) + 1);
  }

  getPostData() {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.postTitle =
          this.router.getCurrentNavigation().extras.state.postTitle;
        this.postContent =
          this.router.getCurrentNavigation().extras.state.postContent;
        this.postImages =
          this.router.getCurrentNavigation().extras.state.postImages;
      }
    });
    console.log(this.postTitle);
    console.log(this.postContent);
    console.log(this.postImages);
  }
}
