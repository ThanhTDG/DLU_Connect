import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPart2PageRoutingModule } from './register-part2-routing.module';

import { RegisterPart2Page } from './register-part2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPart2PageRoutingModule
  ],
  declarations: [RegisterPart2Page]
})
export class RegisterPart2PageModule {}
