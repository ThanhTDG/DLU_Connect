import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  LoadingController,
  NavController,
} from '@ionic/angular';
import { Router } from '@angular/router';
import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from '@capacitor/camera';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-final',
  templateUrl: './register-final.page.html',
  styleUrls: ['./register-final.page.scss'],
})
export class RegisterFinalPage implements OnInit {
  user: any;
  name: string;

  constructor(
    private auth: AuthService,
    private loading: LoadingController,
    private alert: AlertController,
    private nav: NavController,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = this.auth.currentUser;
  }

  async changeImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Photos,
    });

    if (image) {
      await this.loadImage(image);
    }
  }

  async loadImage(image: Photo) {
    const loading = await this.loading.create();
    await loading.present();

    await this.auth
      .uploadPhoto(image)
      // .then(() => console.log(this.user))
      .catch(async (err) => {
        console.log(err);
        const alert = await this.alert.create({
          header: 'Lỗi',
          message: 'Xảy ra vấn đề khi lấy hình ảnh của bạn',
          buttons: ['OK'],
        });
        await alert.present();
      });
    await loading.dismiss();
  }

  back() {
    // this.router.navigate(['register']);
    this.nav.back();
  }

  async complete() {
    await this.auth.modifyName(this.name);
    this.router.navigate(['login']);
  }
}
