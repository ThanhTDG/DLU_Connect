import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { NativeBiometric } from 'capacitor-native-biometric';
import { AuthService } from 'src/app/services/auth/auth.service';
import { loadFake } from 'src/utils/fakedata';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials: FormGroup;
  success = true;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private http: HttpClient,
    private loading: LoadingController,
    private router: Router
  ) {}

  get email() {
    return this.credentials.get('email');
  }

  get password() {
    return this.credentials.get('password');
  }

  ngOnInit() {
    this.credentials = this.formBuilder.group({
      email: ['1914745@dlu.edu.vn', [Validators.required, Validators.email]],
      password: [
        '123456',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40),
        ],
      ],
    });

    // TODO: Fake data
    // Mustn't uncomment
    // loadFake(this.auth, this.http);
  }

  onInput() {
    this.success = true;
  }

  register() {
    this.router.navigate(['register']);
  }

  forgotPassword() {
    this.router.navigate(['forgot-password']);
  }

  faceRecognition() {
    this.router.navigate(['face-recognition-page']);
    // this.loginByFaceRecognition();
  }

  async login(email?: string, password?: string) {
    const loading = await this.loading.create({
      message: 'Đang đăng nhập, vui lòng chờ xíu...',
    });
    await loading.present();

    let credentials = null;
    if (email && password) {
      credentials = { email, password };
    }

    await this.auth
      .login(credentials ?? this.credentials.value)
      .then((res) => {
        if (res.user) {
          this.router.navigate(['home']);
        }
      })
      .catch((err) => {
        console.log(err);
        this.success = false;
      });
    await loading.dismiss();
  }

  private async loginByFaceRecognition() {
    const available = await NativeBiometric.isAvailable();
    if (available.isAvailable) {
      const credentials = await NativeBiometric.getCredentials({
        server: 'dlu-connect.firebaseapp.com',
      });
      NativeBiometric.verifyIdentity({
        title: 'Đăng nhập',
        subtitle: 'Lựa chọn phương thức đăng nhập',
        negativeButtonText: 'Huỷ',
      }).then(async () => {
        await this.login(credentials.username, credentials.password);
      });
    }
  }
}
