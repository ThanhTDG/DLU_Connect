import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetFacesDataPagePage } from './get-faces-data-page.page';

const routes: Routes = [
  {
    path: '',
    component: GetFacesDataPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetFacesDataPagePageRoutingModule {}
