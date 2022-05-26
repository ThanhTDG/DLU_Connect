import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationOptionsDialogPage } from './notification-options-dialog.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationOptionsDialogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationOptionsDialogPageRoutingModule {}
