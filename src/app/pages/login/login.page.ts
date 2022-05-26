import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials: FormGroup;

  ngStyleEmailInput: any;
  ngStylePasswordInput: any;
  ngStyleImageError: any;
  ngStyleTextError: any;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private loading: LoadingController,
    private router: Router
  ) {}

  ngOnInit() {
    this.credentials = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40),
        ],
      ],
    });
  }

  get email() {
    return this.credentials.get('email');
  }

  get password() {
    return this.credentials.get('password');
  }

  register() {
    this.router.navigate(['register']);
  }

  forgotPassword() {
    this.router.navigate(['forgot-password']);
  }

  async login() {
    const loading = await this.loading.create({
      message: 'Đang đăng nhập, vui lòng chờ xíu...',
    });
    await loading.present();

    await this.auth
      .login(this.credentials.value)
      .then((res) => {
        this.router.navigate(['home']);
      })
      .catch((err) => {
        console.log(err);

        this.ngStyleEmailInput = {
          'border-style': 'solid',
          'border-color': 'red',
        };
        this.ngStylePasswordInput = {
          'border-style': 'solid',
          'border-color': 'red',
        };
        this.ngStyleImageError = {
          display: 'inline',
        };
        this.ngStyleTextError = {
          display: 'inline',
        };
      });
    await loading.dismiss();
  }
}
