import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReactionPageRoutingModule } from './reaction-routing.module';

import { ReactionPage } from './reaction.page';
import { ComponentsModule } from '../../components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ReactionPage]
})
export class ReactionPageModule {}
