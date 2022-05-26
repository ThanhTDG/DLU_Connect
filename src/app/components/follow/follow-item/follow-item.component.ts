/* eslint-disable @typescript-eslint/quotes */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-follow-item',
  templateUrl: './follow-item.component.html',
  styleUrls: ['./follow-item.component.scss'],
})
export class FollowItemComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() imgBackground: string;
  ftitle: any;
  imgAvatar: any;
  imgOption: any;
  ngStyleFollowItem: any;
  constructor() { }

  ngOnInit() {
    this.ftitle = this.title.charAt(0);
    this.imgOption = "../../../../assets/icon/notification/more.png";
    this.ngStyleFollowItem = {
      "background-image": "url("+this.imgBackground+")"
    };
  }

}
