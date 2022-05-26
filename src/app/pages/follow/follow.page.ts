/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.page.html',
  styleUrls: ['./follow.page.scss'],
})
export class FollowPage implements OnInit {
  content: string;
  backgrounds: string[] = ["../../../../assets/icon/follow/default-bg/1.png",
  "../../../../assets/icon/follow/default-bg/2.png",
  "../../../../assets/icon/follow/default-bg/3.png",
  "../../../../assets/icon/follow/default-bg/4.png",
  "../../../../assets/icon/follow/default-bg/5.png",
  "../../../../assets/icon/follow/default-bg/6.png",];
  constructor() { }

  ngOnInit() {
    this.content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam aliquam. Lorem ipsum dolor sit amet, consi ...";
  }

}
