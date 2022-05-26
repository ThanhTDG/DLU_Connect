import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password-part2',
  templateUrl: './forgot-password-part2.page.html',
  styleUrls: ['./forgot-password-part2.page.scss'],
})
export class ForgotPasswordPart2Page implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  next() {
    this.router.navigate(['forgot-password-final']);
  }
}
