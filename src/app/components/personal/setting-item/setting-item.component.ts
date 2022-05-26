/* eslint-disable @typescript-eslint/quotes */
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-setting-item',
  templateUrl: './setting-item.component.html',
  styleUrls: ['./setting-item.component.scss'],
})
export class SettingItemComponent implements OnInit {
  @Input() imgDescription: string;
  @Input() content: string;
  @Input() title: string;
  @Input() option: string;
  imgOption: string;
  ngStyleContainer: any;
  ngStyleAvatar: any;
  ngStyleContent: any;
  ngStyleContentTitle: any;
  ngStyleOption: any;
  isSwitch: boolean;
  optionImages: string[] = ["../../../../assets/icon/personal/setting/post.png",
  "../../../../assets/icon/personal/setting/person.png",
  "../../../../assets/icon/personal/setting/protect.png",
  "../../../../assets/icon/personal/setting/notification.png",
  "../../../../assets/icon/personal/setting/light.png",
  "../../../../assets/icon/personal/setting/switch-on.png",
  "../../../../assets/icon/personal/setting/switch-off.png",];
  constructor() { }

  ngOnInit() {
    this.imgOption = "../../../../assets/icon/main/next.png";
    this.initOptions();
  }
  onOption(){
    if(this.option==="3"||this.option==="4"){
      if(this.isSwitch===true){
        this.imgOption=this.optionImages[5];
        this.isSwitch=false;
      }else if(this.isSwitch===false){
        this.imgOption = this.optionImages[6];
        this.isSwitch=true;
      }
    }
  }
  initOptions(){
    switch(this.option){
      case "0":
        this.ngStyleContainer={
          "background-color": "var(--ion-color-app-orange-light)"
        };
        this.ngStyleAvatar={
          "background-color": "var(--ion-color-app-orange-dark)"
        };
        this.ngStyleContent={
          "padding-top": "16px"
        };
        this.ngStyleContentTitle={
          "font-family": "Montserrat"
        };
        this.imgDescription=this.optionImages[0];
        break;
      case "1":
        this.imgDescription=this.optionImages[1];
        break;
      case "2":
        this.imgDescription=this.optionImages[2];
        break;
      case "3":
        this.imgDescription=this.optionImages[3];
        this.imgOption = this.optionImages[6];
        this.ngStyleOption={
          top: "6px"
        };
        this.isSwitch= false;
        break;
      case "4":
        this.imgDescription=this.optionImages[4];
        this.imgOption = this.optionImages[6];
        this.ngStyleOption={
          top: "6px"
        };
        this.isSwitch = false;
        break;
    }
  }

}
