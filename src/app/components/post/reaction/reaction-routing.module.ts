import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactionPage } from './reaction.page';

const routes: Routes = [
  {
    path: '',
    component: ReactionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReactionPageRoutingModule {}
