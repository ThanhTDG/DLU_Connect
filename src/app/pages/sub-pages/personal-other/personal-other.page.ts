import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router} from '@angular/router';
import { NativeTransitionOptions } from '@awesome-cordova-plugins/native-page-transitions';
import { NativePageTransitions } from '@awesome-cordova-plugins/native-page-transitions/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-personal-other',
  templateUrl: './personal-other.page.html',
  styleUrls: ['./personal-other.page.scss'],
})
export class PersonalOtherPage implements OnInit {
  imgBtnNext: string;
  imgAvatar: string;
  imgBackground: string;
  title: string;
  content: string;
  accountName='Người dùng';

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
    private navCtrl: NavController,
    private nativePageTransitions: NativePageTransitions,
    private router: Router
  ) { }

  ngOnInit() {
    this.imgBtnNext = '../../../assets/icon/main/next.png';
    this.imgAvatar = '../../../assets/icon/default/default-avatar.png';
    this.imgBackground = '../../../assets/icon/personal/default-bg.png';
    this.title = 'Sinh Viên';
    this.content = 'Chi đoàn CTK43';
  }
  nFolloow($event){
    //console.log($event);
  }
  onViewUserPost(){
    const navigationExtras: NavigationExtras = {
      state: {
        imgAvatar: this.imgAvatar,
        title: this.title,
        content: this.content,
        imgBackground: this.imgBackground,
      },
    };
    this.nativePageTransitions.fade(this.options);
    this.navCtrl.navigateForward('personal-other-detail', navigationExtras);
  }

}
