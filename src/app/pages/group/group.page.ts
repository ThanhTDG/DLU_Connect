/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.page.html',
  styleUrls: ['./group.page.scss'],
})
export class GroupPage implements OnInit {
  groupName: any;
  imgBackground: any;
  groupNumber: any;
  imgMore: any;
  groupContentHot="Đáng lưu ý";
  groupContent="Bài viết";
  constructor() { }

  ngOnInit() {
    this.groupName="CNTT";
    this.imgBackground="../../../../assets/icon/group/default-background.png";
    this.imgMore = "../../../../assets/icon/group/more.png";
    this.groupNumber=40;
  }

}
