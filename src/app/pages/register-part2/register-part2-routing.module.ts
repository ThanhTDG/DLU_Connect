import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterPart2Page } from './register-part2.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterPart2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterPart2PageRoutingModule {}
