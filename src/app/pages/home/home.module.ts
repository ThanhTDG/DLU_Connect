import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

import {NavigationBarComponent} from '../../components/navigation-bar/navigation-bar.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  entryComponents:[NavigationBarComponent],
  declarations: [HomePage, NavigationBarComponent]
})
export class HomePageModule {}
