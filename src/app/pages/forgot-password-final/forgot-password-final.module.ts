import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPasswordFinalPageRoutingModule } from './forgot-password-final-routing.module';

import { ForgotPasswordFinalPage } from './forgot-password-final.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPasswordFinalPageRoutingModule
  ],
  declarations: [ForgotPasswordFinalPage]
})
export class ForgotPasswordFinalPageModule {}
