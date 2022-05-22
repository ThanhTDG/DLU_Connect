import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPasswordPart2Page } from './forgot-password-part2.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotPasswordPart2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotPasswordPart2PageRoutingModule {}
