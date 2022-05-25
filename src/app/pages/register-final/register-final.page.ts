import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  LoadingController,
  NavController,
} from '@ionic/angular';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
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
  ) {
    this.user = auth.getUser();
  }

  ngOnInit() {}

  async changeImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Photos,
    });

    if (image) {
      const loading = await this.loading.create();
      await loading.present();

      await this.auth
        .uploadPhoto(image)
        .then(() => console.log(this.user))
        .catch(async (err) => {
          const alert = await this.alert.create({
            header: 'Lỗi',
            message: `Xảy ra vấn đề khi lấy hình ảnh của bạn: ${err}`,
            buttons: ['OK'],
          });
          await alert.present();
        });
      await loading.dismiss();
    }
  }

  async changeName() {
    await this.auth
      .modifyName(this.name)
      .then(() => console.log(this.user))
      .catch((err) => console.log(err));
  }

  back() {
    this.router.navigate(['register']);
  }

  complete() {
    this.router.navigate(['login']);
  }
}
