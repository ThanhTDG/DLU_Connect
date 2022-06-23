import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetFacesDataPagePageRoutingModule } from './get-faces-data-page-routing.module';

import { GetFacesDataPagePage } from './get-faces-data-page.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetFacesDataPagePageRoutingModule,
    ComponentsModule
  ],
  declarations: [GetFacesDataPagePage]
})
export class GetFacesDataPagePageModule {}
