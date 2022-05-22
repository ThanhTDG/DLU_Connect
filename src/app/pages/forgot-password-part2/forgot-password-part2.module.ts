import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPasswordPart2PageRoutingModule } from './forgot-password-part2-routing.module';

import { ForgotPasswordPart2Page } from './forgot-password-part2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPasswordPart2PageRoutingModule
  ],
  declarations: [ForgotPasswordPart2Page]
})
export class ForgotPasswordPart2PageModule {}
