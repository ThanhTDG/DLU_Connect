import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalDetailPageRoutingModule } from './personal-detail-routing.module';

import { PersonalDetailPage } from './personal-detail.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalDetailPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PersonalDetailPage]
})
export class PersonalDetailPageModule {}
