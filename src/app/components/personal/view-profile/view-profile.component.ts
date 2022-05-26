/* eslint-disable @typescript-eslint/quotes */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss'],
})
export class ViewProfileComponent implements OnInit {
  @Input() imgAvatar: any;
  @Input() title: any;
  @Input() content: any;
  @Input() imgBackground: any;
  imgOption: string;
  ngStyleCViewProfile: any;
  constructor() {
    this.imgAvatar = "../../../../assets/icon/personal/default-avatar.png";
    this.imgBackground = "../../../../assets/icon/personal/default-bg.png";
    this.imgOption = "../../../../assets/icon/personal/camera.png";
  }

  ngOnInit() {
    this.ngStyleCViewProfile={
      "background-image": "url("+this.imgBackground+")"
    };
  }

}
