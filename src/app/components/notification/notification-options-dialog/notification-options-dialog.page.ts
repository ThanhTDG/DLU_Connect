/* eslint-disable @typescript-eslint/quotes */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-options-dialog',
  templateUrl: './notification-options-dialog.page.html',
  styleUrls: ['./notification-options-dialog.page.scss'],
})
export class NotificationOptionsDialogPage implements OnInit {
  @Input() title: any;
  @Input() content: any;
  ftitle: any;
  imgOption1: string;
  imgOption2: string;
  constructor() { }

  ngOnInit() {
    this.ftitle = this.title.charAt(0);
    this.imgOption1 = "../../../../assets/icon/main/close.png";
    this.imgOption2 = "../../../../assets/icon/notification/block.png";
  }

}
