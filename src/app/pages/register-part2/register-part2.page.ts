import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-part2',
  templateUrl: './register-part2.page.html',
  styleUrls: ['./register-part2.page.scss'],
})
export class RegisterPart2Page implements OnInit {
  credentials: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private nav: NavController,
    private router: Router
  ) {}

  ngOnInit() {
    // TODO: auto verify
    // const user = this.auth.getUser();
    // user.reload().then(() =>
    //   this.auth.isVerified(() => {
    //     this.router.navigate(['register-final']);
    //   })
    // );
  }

  async resendCode() {
    // await this.user
    //   .verify()
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
    const user = this.auth.getUser();
    // user.reload();
    console.log(user);
  }

  btn_Next() {
    this.router.navigate(['register-final']);
  }

  backbtn() {
    this.nav.back();
  }
}
