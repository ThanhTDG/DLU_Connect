import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePostPagePageRoutingModule } from './create-post-page-routing.module';

import { CreatePostPagePage } from './create-post-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePostPagePageRoutingModule
  ],
  declarations: [CreatePostPagePage]
})
export class CreatePostPagePageModule {}
