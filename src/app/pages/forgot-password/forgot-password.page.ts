import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  credentials: FormGroup;
  isSend= false;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private nav: NavController
  ) {}

  get email() {
    return this.credentials.get('email');
  }

  ngOnInit() {
    this.credentials = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  back() {
    this.nav.back();
  }

  async submit() {
    await this.auth
      .resetPassword(this.email.value)
      .then(() => {
        this.isSend = true;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
