import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaceRecognitionPagePage } from './face-recognition-page.page';

const routes: Routes = [
  {
    path: '',
    component: FaceRecognitionPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaceRecognitionPagePageRoutingModule {}
