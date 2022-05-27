import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-to-create-post',
  templateUrl: './to-create-post.component.html',
  styleUrls: ['./to-create-post.component.scss'],
})
export class ToCreatePostComponent implements OnInit {
  question: string;
  userAvatar = '../../../assets/icon/default/default-avatar.png';
  btnAddImage: any;

  constructor(private auth: AuthService, private router: Router) {}

  async ngOnInit() {
    await this.auth.reload();
    console.log(this.auth.currentUser);
    this.question = 'Bạn đang nghĩ gì?';
    this.userAvatar = this.auth.currentUser?.photoURL ?? this.userAvatar;
    this.btnAddImage = '../../../assets/icon/main/image.svg';
  }

  toCreatePostPage() {
    let curUrl = '';
    if (this.router.url.includes('?')) {
      curUrl = this.router.url.slice(0, this.router.url.indexOf('?'));
    } else {
      curUrl = this.router.url;
    }
    const navigationExtras: NavigationExtras = { state: { prvUrl: curUrl } };
    this.router.navigateByUrl('create-post', navigationExtras);
  }
}
