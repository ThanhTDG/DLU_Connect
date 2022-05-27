import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Validation from 'src/utils/Validation';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  credentials: FormGroup;
  success = true;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private loading: LoadingController,
    private nav: NavController,
    private router: Router
  ) {}

  get email() {
    return this.credentials.get('email');
  }

  get password() {
    return this.credentials.get('password');
  }

  get confirmPassword() {
    return this.credentials.get('confirmPassword');
  }

  ngOnInit() {
    this.credentials = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ],
        ],
        confirmPassword: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ],
        ],
      },
      { validators: [Validation.match('password', 'confirmPassword')] }
    );
  }

  onInput() {
    this.success = true;
  }

  async register() {
    const loading = await this.loading.create({
      message: 'Đang đăng ký, vui lòng chờ xíu...',
    });
    await loading.present();

    await this.auth
      .register(this.credentials.value)
      .then(async (res) => {
        if (res.user) {
          await this.auth.sendVerify();
          await this.auth.setDefault();
          this.router.navigate(['register-part2']);
        }
      })
      .catch((err) => {
        console.log(err);
        this.success = false;
      });
    await loading.dismiss();
  }

  back() {
    this.nav.back();
  }
}
