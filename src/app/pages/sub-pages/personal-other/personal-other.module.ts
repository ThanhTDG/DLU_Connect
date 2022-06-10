import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalOtherPageRoutingModule } from './personal-other-routing.module';

import { PersonalOtherPage } from './personal-other.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalOtherPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PersonalOtherPage]
})
export class PersonalOtherPageModule {}
