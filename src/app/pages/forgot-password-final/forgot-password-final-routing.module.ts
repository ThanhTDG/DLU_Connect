import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPasswordFinalPage } from './forgot-password-final.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotPasswordFinalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotPasswordFinalPageRoutingModule {}
