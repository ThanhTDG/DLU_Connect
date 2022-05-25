import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-part2',
  templateUrl: './register-part2.page.html',
  styleUrls: ['./register-part2.page.scss'],
})
export class RegisterPart2Page implements OnInit {
  constructor(
    private auth: AuthService,
    private alert: AlertController,
    private nav: NavController,
    private router: Router
  ) {}

  async ngOnInit() {}

  async resendVerify() {
    this.auth.sendVerify().catch((err) => console.log(err));
  }

  back() {
    this.nav.back();
  }

  async next() {
    await this.auth.reload();

    const user = this.auth.getUser();
    if (user?.emailVerified) {
      this.router.navigate(['register-final']);
    } else {
      const alert = await this.alert.create({
        header: 'Thông báo',
        message:
          'Email chưa được xác thực, vui lòng xác thực email hoặc gửi lại email xác thực!',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}
