import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GroupService } from 'src/app/services/firestores/group.service';
import { PageService } from 'src/app/services/firestores/page.service';
import { PostService } from 'src/app/services/firestores/post.service';
import { ProfileService } from 'src/app/services/firestores/profile.service';
import { RoleService } from 'src/app/services/firestores/role.service';

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
    private http: HttpClient,
    private auth: AuthService,
    private profile: ProfileService,
    private post: PostService,
    private role: RoleService,
    private group: GroupService,
    private page: PageService,
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
    // this.getPostData();
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
