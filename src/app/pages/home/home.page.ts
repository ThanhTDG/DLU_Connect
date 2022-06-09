/* eslint-disable @typescript-eslint/quotes */
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Group } from 'src/app/interfaces/group';
import { Profile } from 'src/app/interfaces/profile';
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

    this.user.getAll().then((res) => {
      res.forEach((value) => {
        console.log(value.data());
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
