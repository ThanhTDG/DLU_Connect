import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePostPagePage } from './create-post-page.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePostPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePostPagePageRoutingModule {}
