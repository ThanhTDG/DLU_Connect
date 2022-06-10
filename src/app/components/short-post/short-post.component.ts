/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/quotes */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-short-post',
  templateUrl: './short-post.component.html',
  styleUrls: ['./short-post.component.scss'],
})
export class ShortPostComponent implements OnInit {
  @Input() ipTitle: string;
  @Input() ipContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel.Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel.Lorem ipsum dolor sit amet, consectetur";
  userAvatar: any;
  userName: any;
  time: any;
  textTitle: any;
  textContent: any;
  image: any;
  constructor() { }

  ngOnInit() {
    this.userAvatar = "../../../assets/icon/default/default-user-avatar.png";
    this.userName = "Người dùng";
    this.time = "1 giờ trước";
    this.textTitle = "Lorem ipsum dolor sit amet";
    this.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel.Lorem ipsum dolor sit amet, consectetur";
    this.image = "../../../assets/icon/default/default-post-bd-image.png";
    this.getData();
  }
  getData(){
    this.textTitle = this.ipTitle;
    this.textContent = this.ipContent.length>312? this.ipContent.slice(0, 312): this.ipContent;
  }
  toViewDetail(){
    //go to source post in source page
  }

}
