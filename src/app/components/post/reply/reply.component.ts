/* eslint-disable @typescript-eslint/quotes */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss'],
})
export class ReplyComponent implements OnInit {
  @Input() imgAvatar: any;
  @Input() title: any;
  @Input() time: any;
  @Input() content: any;
  @Input() imgContents: any;
  images: Array<string>=[];
  constructor() {
  }

  ngOnInit() {
    this.imgAvatar="../../../../assets/icon/default/default-user-avatar.png";
    this.title = "Người dùng";
    this.time ="1 giờ trước";
    try{
      this.imgContents = this.imgContents.split('!1409!');
      if(this.imgContents !==''){
        this.imgContents.forEach(element => {
          this.images.push(element);
        });
      }
    }catch(ex){}
  }

}
