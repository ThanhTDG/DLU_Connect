import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
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

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private nav: NavController,
    private router: Router
  ) {}

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

  async register() {
    await this.auth
      .register(this.credentials.value)
      .then(async (res) => {
        await this.auth.verify();
        this.router.navigate(['register-part2']);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  back() {
    this.nav.back();
  }
}
