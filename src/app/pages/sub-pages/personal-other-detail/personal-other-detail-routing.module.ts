import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalOtherDetailPage } from './personal-other-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalOtherDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalOtherDetailPageRoutingModule {}
