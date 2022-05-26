import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationOptionsDialogPageRoutingModule } from './notification-options-dialog-routing.module';

import { NotificationOptionsDialogPage } from './notification-options-dialog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationOptionsDialogPageRoutingModule
  ],
  declarations: [NotificationOptionsDialogPage]
})
export class NotificationOptionsDialogPageModule {}
