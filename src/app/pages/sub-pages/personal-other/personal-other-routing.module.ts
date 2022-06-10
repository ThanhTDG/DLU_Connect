import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalOtherPage } from './personal-other.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalOtherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalOtherPageRoutingModule {}
