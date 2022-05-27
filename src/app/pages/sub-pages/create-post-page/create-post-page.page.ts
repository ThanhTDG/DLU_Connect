import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-create-post-page',
  templateUrl: './create-post-page.page.html',
  styleUrls: ['./create-post-page.page.scss'],
})
export class CreatePostPagePage implements OnInit {
  constructor(
    private navctr: NavController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {}
  backbtn() {
    this.navctr.back();
  }
  async presentAlertRadio() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Chọn trạng thái',
      inputs: [
        {
          name: 'Công khai',
          type: 'radio',
          label: 'Công khai',
          value: 'value1',
          handler: () => {
            console.log('Radio 1 selected');
          },
          checked: true,
        },
        {
          name: 'Riêng tư',
          type: 'radio',
          label: 'Riêng tư',
          value: 'value2',
          handler: () => {
            console.log('Radio 2 selected');
          },
        },
      ],
      buttons: [
        {
          text: 'Huỷ',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          },
        },
        {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          },
        },
      ],
    });

    await alert.present();
  }
}
