import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AlertController,
  NavController,
  ToastController,
} from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register-part2',
  templateUrl: './register-part2.page.html',
  styleUrls: ['./register-part2.page.scss'],
})
export class RegisterPart2Page implements OnInit {
  constructor(
    private auth: AuthService,
    private alert: AlertController,
    private toast: ToastController,
    private nav: NavController,
    private router: Router
  ) {}

  async ngOnInit() {
    this.auth.isVerified((user) => {
      this.router.navigate(['register-final']);
    });
  }

  async resendVerify() {
    await this.auth
      .sendVerify()
      .then(async () => {
        const toast = await this.toast.create({
          message: 'Email xác nhận đã được gửi, vui lòng vào mail để kiểm tra.',
          duration: 2000,
        });
        await toast.present();
      })
      .catch((err) => console.log(err));
  }

  back() {
    this.nav.back();
  }

  async next() {
    await this.auth.reload();

    const user = this.auth.currentUser;
    if (user?.emailVerified) {
      this.router.navigate(['register-final']);
    } else {
      const alert = await this.alert.create({
        header: 'Thông báo',
        message:
          'Email chưa được xác thực, vui lòng vào mail để xác thực hoặc gửi lại email xác thực!',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}
