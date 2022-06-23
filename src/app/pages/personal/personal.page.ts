import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NativeTransitionOptions } from '@awesome-cordova-plugins/native-page-transitions';
import { NativePageTransitions } from '@awesome-cordova-plugins/native-page-transitions/ngx';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.page.html',
  styleUrls: ['./personal.page.scss'],
})
export class PersonalPage implements OnInit {
  imgBtnNext: string;
  imgAvatar: string;
  imgBackground: string;
  title: string;
  content: string;
  options: NativeTransitionOptions = {
    direction: 'left',
    duration: 500,
    slowdownfactor: 3,
    slidePixels: 20,
    iosdelay: 100,
    androiddelay: 150,
    fixedPixelsTop: 0,
    fixedPixelsBottom: 60,
  };

  constructor(
    private auth: AuthService,
    private navCtrl: NavController,
    private nativePageTransitions: NativePageTransitions,
    private router: Router
  ) {}

  ngOnInit() {
    this.imgBtnNext = '../../../assets/icon/main/next.png';
    this.imgAvatar = this.auth.currentUser.photoURL;
    this.imgBackground = '../../../../assets/icon/personal/default-bg.png';
    this.title = this.auth.currentUser.displayName;
    this.content = 'Chi đoàn CTK43';
  }

  onViewYourPost() {
    const navigationExtras: NavigationExtras = {
      state: {
        imgAvatar: this.imgAvatar,
        title: this.title,
        content: this.content,
        imgBackground: this.imgBackground,
      },
    };
    this.nativePageTransitions.fade(this.options);
    this.navCtrl.navigateRoot('personal-detail', navigationExtras);
  }

  gotoFollowPage() {
    this.nativePageTransitions.slide(this.options);
    this.navCtrl.navigateRoot('follow');
  }

  async logout() {
    await this.auth
      .logout()
      .then(() => {
        this.router.navigate(['login']);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  faceRecognition() {
    this.nativePageTransitions.fade(this.options);
    this.navCtrl.navigateRoot('get-faces-data-page');
  }
}
