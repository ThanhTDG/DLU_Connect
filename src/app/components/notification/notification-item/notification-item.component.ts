/* eslint-disable @typescript-eslint/quotes */
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NotificationOptionsDialogPage } from '../notification-options-dialog/notification-options-dialog.page';

@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.scss'],
})
export class NotificationItemComponent implements OnInit {
  @Input() ipTitle: string;
  @Input() ipContent: string;
  @Input() ipHours: string;
  title: string;
  ftitle: string;
  content: string;
  hours: string;
  imgOption: string;
  ngStyleContainer: any;
  ngStyleAvatar: any;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.title = this.ipTitle;
    this.ftitle = this.title ===""?"D":this.title.charAt(0);
    this.content = this.ipContent;
    this.hours = this.ipHours;
    this.imgOption = "../../../../assets/icon/notification/more.png";
  }
  onViewNotification(){
    this.ngStyleContainer={
      "background-color": "var(--ion-color-app-primary)"
    };
    this.ngStyleAvatar={
      "background-color": "var(--ion-color-app-green-dark)"
    };
  }
  async onViewOptions(){
    const modal = await this.modalCtrl.create({
      component: NotificationOptionsDialogPage,
      breakpoints: [0, 0.44],
      initialBreakpoint: 0.44,
      componentProps: {title: this.title, content: this.content},
      cssClass: 'custom-modal'
    });
    await modal.present();
  }
}
