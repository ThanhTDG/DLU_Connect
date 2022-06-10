import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalOtherDetailPageRoutingModule } from './personal-other-detail-routing.module';

import { PersonalOtherDetailPage } from './personal-other-detail.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalOtherDetailPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PersonalOtherDetailPage]
})
export class PersonalOtherDetailPageModule {}
